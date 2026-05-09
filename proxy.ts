import { NextRequest, NextResponse } from "next/server";

const rateLimitMap = new Map<string, { count: number; reset: number }>();

const WINDOW_MS = 60_000;
const MAX_FREE = 5;
const MAX_PAID = 30;

export function proxy(req: NextRequest) {
  if (!req.nextUrl.pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  const isPaid = req.headers.get("x-license-key") ? true : false;
  const limit = isPaid ? MAX_PAID : MAX_FREE;

  if (!entry || now > entry.reset) {
    rateLimitMap.set(ip, { count: 1, reset: now + WINDOW_MS });
    return NextResponse.next();
  }

  if (entry.count >= limit) {
    return new NextResponse(
      JSON.stringify({ error: "Too many requests. Please slow down." }),
      {
        status: 429,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  entry.count++;
  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};