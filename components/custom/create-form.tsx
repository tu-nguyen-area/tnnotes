'use client';

import { createNote, State } from '@/app/lib/actions';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import Link from 'next/link';

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button className="bg-black dark:bg-white rounded-lg text-white dark:text-black p-2 w-full md:w-36 h-10
      hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:text-white" type="submit" disabled={pending}
    >
      {pending ? "Confirming..." : "Confirm"}
    </button>
  );
}

export default function CreateForm({ author_id }: { author_id: string | undefined }) {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(createNote, initialState);

  return (
  <>

  <section className="m-8">
    <form action={formAction}>
      <div className="my-6">
        <label className="text-xl bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text font-bold text-transparent">Title</label>
        <input name="title" placeholder="Title..." className="rounded-lg w-full border-2 p-2" required></input>
      </div>
      <div>
        <input name="author_id" type="hidden" defaultValue={author_id} className=""></input>
      </div>
      <div className="my-6">
        <label className="text-xl bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text font-bold text-transparent">Content</label>
        <textarea name="content" placeholder="Content..." className="rounded-lg w-full h-64 md:h-96 border-2 p-2" required></textarea>
      </div>
      <div className="grid gap-6 md:flex md:justify-between my-6 md:my-12">
        <Link href="/home">
          <button className="bg-black dark:bg-white rounded-lg text-white dark:text-black p-2 w-full md:w-36 h-10
            hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:text-white"
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
