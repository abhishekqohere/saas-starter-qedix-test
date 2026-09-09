import type { NextRequest } from 'next/server';
import { fetch } from 'undici';

export async function GET(request: NextRequest) {
  return fetch(
    request.nextUrl.searchParams as unknown as string,
    { redirect: 'manual' }
  );
}