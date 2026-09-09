import type { NextRequest } from 'next/server';
import { fetch } from 'undici';

export async function GET(request: NextRequest) {
  return fetch(
    `http://93.184.216.34/public/${request.nextUrl.searchParams}`,
    { redirect: 'manual' }
  );
}