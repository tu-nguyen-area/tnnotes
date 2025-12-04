import Link from 'next/link';
import Image from 'next/image';

export default function SectionZero() {
  return (
  <>

  <section className="p-3 md:p-8">
    <div className="px-8 md:px-16">
      <h1 className="text-2xl py-3 md:text-5xl bg-gradient-to-r from-blue-500
        via-purple-500 to-rose-500 bg-clip-text font-bold text-transparent
        w-fit"
      >
        A place for meaningful notes
      </h1>
      <p className="md:text-xl">
        TN Notes helps you note with your notes, build your notes and deepen your interests.
      </p>
    </div>
    <div className="md:flex grid gap-6 md:gap-8 py-6 px-8 md:px-16">
      <Link href="/signin">
        <button className="bg-black dark:bg-white rounded-lg text-white
          dark:text-black dark:hover:text-white p-2 w-full md:w-36 h-10
          hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500
          hover:to-rose-500"
        >
          Sign In
        </button>
      </Link>
      <Link href="/signup">
        <button className="bg-black dark:bg-white rounded-lg text-white
          dark:text-black dark:hover:text-white p-2 w-full md:w-36 h-10
          hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500
          hover:to-rose-500"
        >
          Sign Up
        </button>
      </Link>
    </div>
    <div className="p-8 md:p-16 block dark:hidden">
      <Image className="rounded-lg w-full"
        src="/desktop-light.png"
        width={4000}
        height={2}
        alt="Image1"
      />
    </div>
    <div className="p-8 md:p-16 hidden dark:block">
      <Image className="rounded-lg w-full"
        src="/desktop-dark.png"
        width={4000}
        height={2}
        alt="Image1"
      />
    </div>
    <div className="p-8 md:p-16 block dark:hidden">
      <Image className="rounded-lg w-full"
        src="/mobile-light.png"
        width={4000}
        height={2}
        alt="Image1"
      />
    </div>
    <div className="p-8 md:p-16 hidden dark:block">
      <Image className="rounded-lg w-full"
        src="/mobile-dark.png"
        width={4000}
        height={2}
        alt="Image1"
      />
    </div>

  </section>

  </>
  );
}
