import { NextResponse } from 'next/server';
import { createCanvas } from 'canvas';

export async function POST(request: Request) {
  try {
    const { color, width, height, format } = await request.json();

    // Validate input
    if (!color || !width || !height || !format) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }

    // Create canvas
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // Fill with color
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, width, height);

    // Convert to buffer
    const buffer = canvas.toBuffer('image/png');

    // Return the image as base64
    const base64Image = `data:image/${format};base64,${buffer.toString('base64')}`;

    return NextResponse.json({ imageUrl: base64Image });
  } catch (error) {
    console.error('Error generating image:', error);
    return NextResponse.json(
      { error: 'Failed to generate image' },
      { status: 500 }
    );
  }
} 