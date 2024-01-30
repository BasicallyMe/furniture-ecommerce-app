import client from "@/app/(models)/connect";
import { NextRequest, NextResponse } from "next/server";

export async function GET(NextRequest, { params }) {
    
    try {
        await client.connect();
        const db = await client.db();
        const products = await db.collection('products').find({ category_slug: params.category }).toArray();
        return NextResponse.json({ products }, { status: 200 });
    } catch(err) {
        console.log("ERROR", err);
        return NextResponse.json({ message: "ERROR", error }, { status: 500 });
    } finally {
        await client.close();
    }

}