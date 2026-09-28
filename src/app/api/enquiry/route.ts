export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
    try {
        const RESEND_API_KEY = (process.env as any).RESEND_API_KEY;
        const EMAIL_TO = (process.env as any).EMAIL_TO || 'owuochecjaay@gmail.com';

        if (!RESEND_API_KEY) {
            return Response.json({ error: 'RESEND_API_KEY not set' }, { status: 500 });
        }

        const { name, email, phone, topic, message } = await req.json();

        if (!name || !email || !message) {
            return Response.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${RESEND_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                from: "PATAMA Enquiry <onboarding@resend.dev>",
                to: [EMAIL_TO],
                subject: `New PATAMA Enquiry: ${topic} - ${name}`,
                html: `<h3>New Enquiry</h3><p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Phone:</b> ${phone || 'N/A'}</p><p><b>Topic:</b> ${topic}</p><p><b>Message:</b> ${message}</p>`,
                reply_to: email,
            })
        });

        const result = await res.json();
        if (!res.ok) {
            return Response.json({ error: result }, { status: 500 });
        }

        return Response.json({ success: true, id: result.id });
    } catch (err: any) {
        return Response.json({ error: err.message }, { status: 500 });
    }
}

export async function GET() {
    return Response.json({ status: 'API alive - ready for POST' });
}