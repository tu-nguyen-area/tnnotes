import { Note } from '@/app/components/note';
import { fetchNote } from '@/app/lib/data';
import { auth } from '@/app/(auth)/auth';
import Search from '@/app/components/search';

export default async function SectionOne() {
  const session = await auth();
  const user_id = session?.user?.id
  const list_notes = await fetchNote(`${user_id}`);

  return (
  <>

  <section>
    <Search user_id={`${user_id}`} />
    {list_notes.map((note) => {
      return(
        <Note key={note.note_id}
          noteLink={note.note_id}
          noteTitle={note.title}
          noteContent={note.content}
        />
      );
    })}
  </section>

  </>
  );
}
