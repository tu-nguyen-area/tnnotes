'use client';

import { editNote, State } from '@/app/lib/actions';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import Link from 'next/link';

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button className="bg-black dark:bg-white rounded-lg text-white
      dark:text-black p-2 w-full md:w-36 h-10 hover:bg-gradient-to-r
      hover:from-blue-500 hover:via-purple-500 hover:to-rose-500
      hover:text-white" type="submit" disabled={pending}
    >
      {pending ? "Confirming..." : "Confirm"}
    </button>
  );
}

export default function EditForm({
  note_id,
  title,
  author_id,
  content,
}: {
  note_id: string,
  title: string,
  author_id: string,
  content: string
}) {
  const initialState: State = { message: null, errors: {} };
  const editNoteId = editNote.bind(null, note_id );
  const [state, formAction] = useActionState(editNoteId, initialState);

  return (
  <>

  <section className="m-8">
    <form action={formAction}>
      <div className="my-6">
        <label className="text-xl bg-gradient-to-r from-blue-500 via-purple-500
          to-pink-500 bg-clip-text font-bold text-transparent"
        >
          Title
        </label>
          <input name="title" defaultValue={title} placeholder="Title..."
            className="rounded-lg w-full border-1 p-2 focus:border-purple-500
            focus:outline-purple-500 focus:outline hover:shadow-xl
            text-purple-500 hover:shadow-purple-500 transition-all
            border-purple-500 bg-neutral-100 dark:bg-neutral-900
            dark:text-purple-100" required
          ></input>
      </div>
      <div>
        <input name="author_id" defaultValue={author_id} type="hidden"
          className=""
        ></input>
      </div>
      <div className="my-6">
        <label className="text-xl bg-gradient-to-r from-blue-500 font-bold
          via-purple-500 to-rose-500 bg-clip-text text-transparent"
        >
          Content
        </label>
        <textarea name="content" defaultValue={content}
          placeholder="Content..." className="rounded-lg w-full h-64 md:h-96
          border-1 p-2 focus:outline focus:border-purple-500 text-purple-500
          border-purple-500 focus:outline-purple-500 hover:shadow-purple-500
          transition-all hover:shadow-xl bg-neutral-100 dark:bg-neutral-900
          dark:text-purple-100" required
        ></textarea>
      </div>
      <div className="grid gap-6 md:flex md:justify-between my-6 md:my-12">
        <Link href={`/home/${note_id}`}>
          <button className="bg-black dark:bg-white rounded-lg text-white
            dark:text-black p-2 w-full md:w-36 h-10 hover:bg-gradient-to-r
            hover:from-blue-500 hover:via-purple-500 hover:to-rose-500
            hover:text-white"
          >
            Cancel
          </button>
        </Link>
        <Submit />
      </div>
    </form>
  </section>

  </>
  );
}
