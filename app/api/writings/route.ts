import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import dbConnect from '@/lib/mongodb';
import { Writing } from '@/lib/models';

// GET - Get all writings
export async function GET() {
    try {
        await dbConnect();
        const writings = await Writing.find().sort({ writingId: 1 });
        return NextResponse.json(writings);
    } catch (error) {
        console.error('Error fetching writings:', error);
        return NextResponse.json({ error: 'Failed to fetch writings' }, { status: 500 });
    }
}

// POST - Create new writing (Admin only)
export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions);

        if (!session || session.user.role !== 'admin') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        await dbConnect();

        const body = await request.json();

        // Get the highest writingId and increment
        const lastWriting = await Writing.findOne().sort({ writingId: -1 });
        const newWritingId = lastWriting ? lastWriting.writingId + 1 : 1;

        const writing = await Writing.create({
            ...body,
            writingId: newWritingId,
        });

        return NextResponse.json(writing, { status: 201 });
    } catch (error) {
        console.error('Error creating writing:', error);
        return NextResponse.json({ error: 'Failed to create writing' }, { status: 500 });
    }
}

// PUT - Update writing (Admin only)
export async function PUT(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions);

        if (!session || session.user.role !== 'admin') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        await dbConnect();

        const body = await request.json();
        const { writingId, ...updateData } = body;

        if (!writingId) {
            return NextResponse.json({ error: 'Writing ID is required' }, { status: 400 });
        }

        const writing = await Writing.findOneAndUpdate(
            { writingId },
            updateData,
            { new: true }
        );

        if (!writing) {
            return NextResponse.json({ error: 'Writing not found' }, { status: 404 });
        }

        return NextResponse.json(writing);
    } catch (error) {
        console.error('Error updating writing:', error);
        return NextResponse.json({ error: 'Failed to update writing' }, { status: 500 });
    }
}

// DELETE - Delete writing (Admin only)
export async function DELETE(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions);

        if (!session || session.user.role !== 'admin') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        await dbConnect();

        const { searchParams } = new URL(request.url);
        const writingId = searchParams.get('writingId');

        if (!writingId) {
            return NextResponse.json({ error: 'Writing ID is required' }, { status: 400 });
        }

        const writing = await Writing.findOneAndDelete({
            writingId: parseInt(writingId),
        });

        if (!writing) {
            return NextResponse.json({ error: 'Writing not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Writing deleted successfully' });
    } catch (error) {
        console.error('Error deleting writing:', error);
        return NextResponse.json({ error: 'Failed to delete writing' }, { status: 500 });
    }
}
