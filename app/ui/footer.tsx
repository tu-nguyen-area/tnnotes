import Link from 'next/link';

export default function Footer() {
  const year = new Date();

  return (
  <>

  <footer className="flex justify-center bg-gradient-to-r from-blue-500 p-3
    via-purple-500 to-rose-500 text-white md:p-6 text-sm md:text-base"
  >
    <section>
      <p>Privacy Policy | Terms of Use</p>
      <p>Powered by <Link
        href="https://tnadvancement.tn-technology.com/"
        target="_blank"
      >
        TN ADVANCEMENT</Link>
      </p>
      <p>&#169; {year.getFullYear()} TN Notes Project. All rights reserved</p>
    </section>
  </footer>

  </>
  );
}
