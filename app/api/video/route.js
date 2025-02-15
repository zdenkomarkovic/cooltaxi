import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req) {
  const filePath = path.join(process.cwd(), "public", "South6015_V1-0081.mp4");

  if (!fs.existsSync(filePath)) {
    return new NextResponse("File not found", { status: 404 });
  }

  const fileStream = fs.createReadStream(filePath);
  return new NextResponse(fileStream, {
    headers: {
      "Content-Type": "video/mp4",
      "Content-Length": fs.statSync(filePath).size.toString(),
    },
    status: 200,
  });
}
