import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { password } = body;

  const adminPassword = process.env.ADMIN_PASSWORD || 'admin';

  if (password === adminPassword) {
    const response = NextResponse.json({ success: true });
    // Set a simple http-only cookie for the admin session
    response.cookies.set('admin_session', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7 // 1 week
    });
    return response;
  }

  return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
}
