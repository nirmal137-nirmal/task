import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

function generateSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export async function POST(request) {
  try {
    const { title, image, description } = await request.json();

    if (!title || !image || !description) {
      return NextResponse.json(
        { error: "Missing required fields: title, image, description" },
        { status: 400 },
      );
    }

    const baseSlug = generateSlug(title);

    let uniqueSlug = baseSlug;

    const existingPost = await prisma.post.findUnique({
      where: { slug: uniqueSlug },
    });

    if (existingPost) {
      uniqueSlug = `${baseSlug}-${Math.floor(Math.random() * 10000)}`;
    }

    const newPost = await prisma.post.create({
      data: {
        title,
        slug: uniqueSlug,
        image,
        description,
      },
    });

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
