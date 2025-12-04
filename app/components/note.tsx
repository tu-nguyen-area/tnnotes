import Link from 'next/link';
import styles from '@/app/modules/note.module.css';

export function Note({
  noteLink,
  noteTitle,
  noteContent,
}: {
  noteLink?: string;
  noteTitle?: string;
  noteContent?: string;
}) {
  return (
  <>

  <section className={`${styles.noteSection} bg-purple-100 dark:bg-neutral-900
    ring-2 ring-purple-500 rounded-lg hover:bg-gradient-to-r hover:ring-0
    hover:from-blue-500 hover:via-purple-500 hover:to-rose-500
    hover:text-white`}
  >
    <Link href={`/home/${noteLink}`}>
      <div className={`${styles.noteLayout} truncate`}>
        <h2 className="text-xl text-left md:text-center font-bold">{noteTitle}</h2>
        <p>{noteContent}</p>
      </div>
    </Link>
  </section>

  </>
  );
}
