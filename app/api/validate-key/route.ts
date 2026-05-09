import { NextRequest } from "next/server";
import { createHmac } from "crypto";

export async function POST(req: NextRequest) {
  try {
    const { key, sessionId } = await req.json() as {
      key: string;
      sessionId: string;
    };

    if (!key || !sessionId) {
      return Response.json({ valid: false });
    }

    const secret = process.env.LICENSE_HMAC_SECRET ?? "";
    const expected = createHmac("sha256", secret)
      .update(sessionId)
      .digest("hex")
      .slice(0, 32)
      .toUpperCase()
      .replace(/(.{8})/g, "$1-")
      .slice(0, -1);

    const valid = key === expected;

    return Response.json({ valid });
  } catch {
    return Response.json({ valid: false });
  }
}