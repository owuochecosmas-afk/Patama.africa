import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
        const data = await req.json();

        const { error } = await resend.emails.send({
            from: 'PATAMA Website <onboarding@resend.dev>',
            to: 'owuochecjaay@gmail.com',
            subject: `PATAMA Enquiry: ${data.type} - ${data.name}`,
            text: `New Enquiry from PATAMA Website

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Church/Org: ${data.church}
Topic: ${data.type}

Message:
${data.msg}
`,
        });

        if (error) {
            console.error(error);
            return new Response(JSON.stringify({ error: error.message }), { status: 500 });
        }

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), { status: 500 });
    }
}