import Search from '@/app/components/search';
import { auth } from '@/app/(auth)/auth';

export default async function Page() {
  const session = await auth();
  const user_id = session?.user?.id

  return (
  <>

  <main>
    <Search user_id={`${user_id}`} />
  </main>

  </>
  );
}
