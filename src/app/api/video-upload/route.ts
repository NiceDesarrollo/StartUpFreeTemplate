import { NextResponse } from "next/server";

export async function POST(request: Request) {
  

  const data = await request.formData();

  const videoFile = data.get('video'); // The video file object

  console.log(videoFile)

  return NextResponse.json({ message: videoFile }, { status: 200 });
}
