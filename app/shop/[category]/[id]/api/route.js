import client from "@/app/(models)/connect";
import { NextRequest, NextResponse } from "next/server";

export async function GET(NextRequest, { params }) {
  try {
    await client.connect();
    const db = await client.db();
    const product = await db
      .collection("products")
      .find({ _id: params.id }).toArray();
    return NextResponse.json({ product: product[0] }, { status: 200 });
  } catch (err) {
    console.log("ERROR", err);
    return NextResponse.json({ message: "ERROR", error }, { status: 500 });
  } finally {
    await client.close();
  }
}
