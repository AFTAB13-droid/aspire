import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Query from '@/models/Query';

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    
    const { name, email, brand, message } = body;
    
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 });
    }

    const newQuery = await Query.create({
      name,
      email,
      brand,
      message
    });

    return NextResponse.json({ success: true, data: newQuery }, { status: 201 });
  } catch (error) {
    console.error('Error creating query:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function GET(req: Request) {
  // Simple check for admin cookie
  const cookieStr = req.headers.get('cookie') || '';
  if (!cookieStr.includes('admin_session=true')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    await connectDB();
    const queries = await Query.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: queries }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
