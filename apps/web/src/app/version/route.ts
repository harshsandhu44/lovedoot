import { APP_COMMIT, APP_VERSION } from '@/lib/version';

export function GET() {
  return Response.json({ version: APP_VERSION, commit: APP_COMMIT });
}
