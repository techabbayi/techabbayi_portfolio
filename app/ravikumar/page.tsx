import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth/next'

export default async function RavikumarPage() {
    const session = await getServerSession()

    if (!session) {
        redirect('/ravikumar/login')
    }

    // If user is authenticated, redirect to dashboard
    redirect('/ravikumar/dashboard')
}