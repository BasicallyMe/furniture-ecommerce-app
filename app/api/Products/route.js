import { NextRequest, NextResponse } from 'next/server';
import client from '@/app/(models)/connect';

export async function GET() {
    try {
        await client.connect();
        const db = await client.db();
        const products = await db.collection('products').find({}).toArray();
        return NextResponse.json({ products }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'ERROR', error }, { status: 500 });
    } finally {
        await client.close();
    }
}