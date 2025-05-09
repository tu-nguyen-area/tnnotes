import Link from 'next/link';

export default function Footer() {
  return (
  <>

  <footer className="flex justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-3 md:p-6">
    <section>
      <p>Privacy Policy | Terms of Use</p>
      <p>A product from <Link href="https://tu-nguyen.org/" target="_blank">TN ADVANCEMENT</Link></p>
      <p>&#169; 2025 TN Notes Project. All rights reserved</p>
    </section>
  </footer>

  </>
  );
}
