import Link from 'next/link';

export default function Header() {
  return (
  <>

  <header>
    <section className="w-full z-10 flex justify-between p-1 bg-gradient-to-r
      from-blue-500 via-purple-500 to-rose-500 text-white text-sm md:text-base"
    >
      <Link href="/">
        TN NOTES
      </Link>
      <Link href="/home" className="hidden md:inline">
        Home
      </Link>
      <Link href="/home/create" className="hidden md:inline">
        New Note
      </Link>
      <Link href="/home/search" className="hidden md:inline">
        Search
      </Link>
      <Link href="/about" className="hidden md:inline">
        About
      </Link>
      <p>tu-nguyen@tn-technology.com</p>
    </section>
  </header>

  </>
  );
}
