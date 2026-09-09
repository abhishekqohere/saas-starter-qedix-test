import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET ?? 'qedix-benchmark-secret'
);

export async function GET(request: NextRequest) {
  const token =
    request.nextUrl.searchParams.get('token') ?? '';

  await jwtVerify(token, secret, {
    algorithms: ['HS256']
  });

  return Response.json({ ok: true });
}