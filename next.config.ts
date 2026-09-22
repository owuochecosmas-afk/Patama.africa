import { Resend } from 'resend';
export async function POST(req) {
    const resend = new Resend(process.env.RESEND_API_KEY);