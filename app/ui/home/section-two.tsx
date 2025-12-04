import { EachNote } from '@/app/components/each-note';
import { fetchEachNote } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { auth } from '@/app/(auth)/auth';

export default async function SectionTwo({ id }: { id: string }) {
  const each_note = await fetchEachNote(id);
  const session = await auth();

  return (
  <>

  <section>
    {each_note.map((note) => {
      if(session?.user?.id !== note.author_id) {
        notFound();
      }

      return (
        <EachNote
          key={note.note_id}
          noteTitle={note.title}
          noteContent={note.content}
        />
      );
    })}
  </section>

  </>
  );
}
