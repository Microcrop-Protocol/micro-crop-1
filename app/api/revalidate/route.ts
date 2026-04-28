import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

type Body = {
  slug?: string;
  event?: "publish" | "update" | "unpublish";
};

export async function POST(req: Request) {
  const expected = process.env.BLOG_REVALIDATE_SECRET;
  if (!expected) {
    return NextResponse.json(
      { ok: false, error: "Server missing BLOG_REVALIDATE_SECRET" },
      { status: 500 }
    );
  }

  const provided = req.headers.get("x-revalidate-secret");
  if (!provided || provided !== expected) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  let body: Body = {};
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const { slug, event } = body;

  revalidatePath("/blog");
  revalidateTag("posts", "default");
  revalidateTag("categories", "default");

  if (slug) {
    revalidatePath(`/blog/${slug}`);
    revalidateTag(`post:${slug}`, "default");
  }

  return NextResponse.json({ ok: true, slug, event });
}
