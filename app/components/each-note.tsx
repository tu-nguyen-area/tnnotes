import styles from '@/app/modules/note.module.css';

export function EachNote({
  noteTitle,
  noteContent,
}: {
  noteTitle: string;
  noteContent: string;
}) {
  return (
  <>

  <section className={`${styles.noteSection} bg-purple-100 dark:bg-neutral-900
    rounded-lg break-words`}
  >
    <div className={`${styles.noteLayout}`}>
      <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r w-fit
        from-blue-500 via-purple-500 to-rose-500 bg-clip-text text-transparent"
      >
        {noteTitle}
      </h1>
      <p className="whitespace-pre-line md:whitespace-pre-wrap overflow-y-auto
        max-h-128"
      >
        {noteContent}
      </p>
    </div>
  </section>

  </>
  );
}
