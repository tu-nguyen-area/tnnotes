import postgres from 'postgres';
import { Note } from '@/app/lib/definitions';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function fetchNote(id: string) {
  try {
    const data = await sql<Note[]>`
      SELECT * FROM "Note"
      WHERE "author_id" = ${`${id}`}
      ORDER BY "date" DESC;
    `;

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch note data.');
  }
}

export async function fetchEachNote(note_id: string) {
  try {
    const data = await sql<Note[]>`
      SELECT * FROM "Note"
      WHERE "note_id" = ${`${note_id}`};
    `;

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch each note data.');
  }
}
