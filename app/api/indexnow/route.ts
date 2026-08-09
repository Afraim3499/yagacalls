import { NextResponse } from "next/server";
import { blogPostsMetadata } from "@/content/blog/posts";

const HOST = "www.yagacalls.com";
const KEY = "yagacalls8c3f2d1e0a4b";
const KEY_LOCATION = "https://www.yagacalls.com/yagacalls8c3f2d1e0a4b.txt";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const customUrls: string[] = body.urlList || [];

    const defaultUrls = blogPostsMetadata.map(
      (post) => `https://${HOST}/blog/${post.slug}`
    );

    const urlList = Array.from(new Set([...customUrls, ...defaultUrls]));

    const payload = {
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList,
    };

    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({
      success: res.ok,
      status: res.status,
      submittedUrlsCount: urlList.length,
      urlList,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "IndexNow ping failed" },
      { status: 500 }
    );
  }
}

export async function GET() {
  const urlList = blogPostsMetadata.map(
    (post) => `https://${HOST}/blog/${post.slug}`
  );

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({
      success: res.ok,
      status: res.status,
      submittedUrlsCount: urlList.length,
      urlList,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "IndexNow ping failed" },
      { status: 500 }
    );
  }
}
