import { Resend } from 'resend';

export async function POST(req) {
  try {
    const body = await req.json();
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY missing");
      return Response.json({ error: 'RESEND_API_KEY missing in Cloudflare env' }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'owuochecjaay@gmail.com',
      subject: `New ${body.type} enquiry from ${body.name}`,
      replyTo: body.email,
      html: `<p><b>Name:</b> ${body.name}</p><p><b>Email:</b> ${body.email}</p><p>${body.msg}</p>`,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: error.message || JSON.stringify(error) }, { status: 400 });
    }

    return Response.json({ success: true });
  } catch (e) {
    console.error("Catch error:", e);
    return Response.json({ error: e.message }, { status: 500 });
  }
}