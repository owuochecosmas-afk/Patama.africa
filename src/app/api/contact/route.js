import { Resend } from 'resend';

export async function POST(req) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return Response.json({ error: 'Missing RESEND_API_KEY' }, { status: 500 });
    }
    const resend = new Resend(apiKey);

    const { name, email, church, phone, type, msg } = await req.json();

    const { data, error } = await resend.emails.send({
      from: 'Patama Africa <onboarding@resend.dev>',
      to: 'owuochecjaay@gmail.com',
      subject: `New ${type} enquiry from ${name}`,
      replyTo: email,
      html: `
        <h2>New Enquiry - ${type}</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Church/Org:</b> ${church || '-'}</p>
        <p><b>Phone:</b> ${phone || '-'}</p>
        <p><b>Type:</b> ${type}</p>
        <hr/>
        <p>${msg}</p>
      `,
    });

    if (error) return Response.json({ error: error.message }, { status: 400 });
    return Response.json({ success: true, id: data?.id });
  } catch (e) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}