import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import dbConnect from '@/lib/mongodb';
import { Settings } from '@/lib/models';

// GET - Get settings
export async function GET(request: NextRequest) {
    try {
        await dbConnect();

        const { searchParams } = new URL(request.url);
        const key = searchParams.get('key');

        if (key) {
            const setting = await Settings.findOne({ key });
            if (!setting) {
                return NextResponse.json({ error: 'Setting not found' }, { status: 404 });
            }
            return NextResponse.json(setting);
        }

        const settings = await Settings.find();
        return NextResponse.json(settings);
    } catch (error) {
        console.error('Error fetching settings:', error);
        return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 });
    }
}

// PUT - Update settings (Admin only)
export async function PUT(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions);

        if (!session || session.user.role !== 'admin') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        await dbConnect();

        const body = await request.json();
        const { key, value } = body;

        if (!key) {
            return NextResponse.json({ error: 'Key is required' }, { status: 400 });
        }

        const setting = await Settings.findOneAndUpdate(
            { key },
            { value, updatedAt: new Date() },
            { new: true, upsert: true }
        );

        return NextResponse.json(setting);
    } catch (error) {
        console.error('Error updating settings:', error);
        return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 });
    }
}
