import type { NextRequest } from 'next/server';
import { fetch } from 'undici';

export async function GET(request: NextRequest) {
  return fetch(
    `http://169.254.169.254/latest/${request.nextUrl.searchParams}`
  );
}