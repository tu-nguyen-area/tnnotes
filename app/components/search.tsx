'use client';

import { useState, useEffect } from 'react';
import { Note } from '@/app/components/note';
import { searchNote } from '@/app/lib/actions';

export default function Search({ user_id }: { user_id: string }) {
  const [listNotes, setListNotes] = useState<Record<string, string>[]>([]);
  const [listSearch, setListSearch] = useState('');

  async function FetchData() {
    const list_notes = await searchNote(user_id, listSearch);
    setListNotes([
      ...list_notes,
    ]);
  }

  return (
  <>

  <section className="my-6">
    <div className="grid md:flex justify-center gap-3 mx-8">
      <input
        className="border-1 rounded-lg p-2 focus:border-purple-500 w-full
        focus:outline focus:outline-purple-500 hover:shadow-xl text-purple-500
        hover:shadow-purple-500 transition-all border-purple-500
        bg-neutral-100 dark:bg-neutral-900 dark:text-purple-100"
        onChange={(e) => setListSearch(e.target.value)} placeholder="Search..."
      >
      </input>
      <button onClick={FetchData}
        className="border-1 rounded-lg p-2 border-purple-500 text-purple-500
        hover:shadow-xl hover:shadow-purple-500 transition-all"
      >
        Search
      </button>
    </div>

    {listNotes.map((note) => {
      return (
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
