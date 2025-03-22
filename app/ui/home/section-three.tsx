import EditForm from '@/components/custom/edit-form';
import { fetchEachNote } from '@/app/lib/data';

export default async function SectionThree({ id }: { id: string }) {
  const [ note ] = await fetchEachNote(id);

  return (
  <>

  <section>
    <EditForm note={note} />
  </section>

  </>
  );
}
