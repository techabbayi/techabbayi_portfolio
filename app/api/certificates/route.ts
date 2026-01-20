import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import dbConnect from '@/lib/mongodb';
import { Certificate } from '@/lib/models';

// GET - Get all certificates
export async function GET() {
    try {
        await dbConnect();
        const certificates = await Certificate.find().sort({ certificateId: 1 });
        return NextResponse.json(certificates);
    } catch (error) {
        console.error('Error fetching certificates:', error);
        return NextResponse.json({ error: 'Failed to fetch certificates' }, { status: 500 });
    }
}

// POST - Create new certificate (Admin only)
export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions);

        if (!session || session.user.role !== 'admin') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        await dbConnect();

        const body = await request.json();

        // Get the highest certificateId and increment
        const lastCertificate = await Certificate.findOne().sort({ certificateId: -1 });
        const newCertificateId = lastCertificate ? lastCertificate.certificateId + 1 : 1;

        const certificate = await Certificate.create({
            ...body,
            certificateId: newCertificateId,
        });

        return NextResponse.json(certificate, { status: 201 });
    } catch (error) {
        console.error('Error creating certificate:', error);
        return NextResponse.json({ error: 'Failed to create certificate' }, { status: 500 });
    }
}

// PUT - Update certificate (Admin only)
export async function PUT(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions);

        if (!session || session.user.role !== 'admin') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        await dbConnect();

        const body = await request.json();
        const { certificateId, ...updateData } = body;

        if (!certificateId) {
            return NextResponse.json({ error: 'Certificate ID is required' }, { status: 400 });
        }

        const certificate = await Certificate.findOneAndUpdate(
            { certificateId },
            updateData,
            { new: true }
        );

        if (!certificate) {
            return NextResponse.json({ error: 'Certificate not found' }, { status: 404 });
        }

        return NextResponse.json(certificate);
    } catch (error) {
        console.error('Error updating certificate:', error);
        return NextResponse.json({ error: 'Failed to update certificate' }, { status: 500 });
    }
}

// DELETE - Delete certificate (Admin only)
export async function DELETE(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions);

        if (!session || session.user.role !== 'admin') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        await dbConnect();

        const { searchParams } = new URL(request.url);
        const certificateId = searchParams.get('certificateId');

        if (!certificateId) {
            return NextResponse.json({ error: 'Certificate ID is required' }, { status: 400 });
        }

        const certificate = await Certificate.findOneAndDelete({
            certificateId: parseInt(certificateId),
        });

        if (!certificate) {
            return NextResponse.json({ error: 'Certificate not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Certificate deleted successfully' });
    } catch (error) {
        console.error('Error deleting certificate:', error);
        return NextResponse.json({ error: 'Failed to delete certificate' }, { status: 500 });
    }
}
