import type { NextRequest } from 'next/server';
import { fetch } from 'undici';

export async function GET(request: NextRequest) {
  return fetch(
    `http://10.20.30.40/internal/${request.nextUrl.searchParams}`
  );
}