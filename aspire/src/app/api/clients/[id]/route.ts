import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Client from '@/models/Client';

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const cookieStr = req.headers.get('cookie') || '';
  if (!cookieStr.includes('admin_session=true')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    await connectDB();
    const body = await req.json();
    const updatedClient = await Client.findByIdAndUpdate(params.id, body, { new: true });
    if (!updatedClient) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json({ success: true, data: updatedClient }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const cookieStr = req.headers.get('cookie') || '';
  if (!cookieStr.includes('admin_session=true')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    await connectDB();
    const deletedClient = await Client.findByIdAndDelete(params.id);
    if (!deletedClient) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
