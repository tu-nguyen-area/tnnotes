import Link from 'next/link';
import { deleteNote } from '@/app/lib/actions';

export function EditNote({ id }: { id: string }) {
  return (
  <>

  <Link href={`/home/${id}/edit`}>
    <button className="bg-black dark:bg-white rounded-lg text-white
      dark:text-black p-2 w-full md:w-36 h-10 hover:bg-gradient-to-r
      hover:from-blue-500 hover:via-purple-500 hover:to-rose-500
      hover:text-white"
    >
      Edit
    </button>
  </Link>

  </>
  );
}

export function DeleteNote({ id }: { id: string }) {
  const deleteNoteId = deleteNote.bind(null, id);

  return (
  <>

  <form action={deleteNoteId}>
    <button type="submit" className="bg-black dark:bg-white rounded-lg
      text-white dark:text-black p-2 w-full md:w-36 h-10 hover:text-white
      hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500
      hover:to-rose-500"
    >
      Delete
    </button>
  </form>

  </>
  );
}
