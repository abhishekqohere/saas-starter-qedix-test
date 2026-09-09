import { jwtVerify } from 'jose';

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET ?? 'qedix-benchmark-secret'
);

export async function verifyQedixBenchmarkToken(token: string) {
  return jwtVerify(token, secret, {
    algorithms: ['HS256']
  });
}
