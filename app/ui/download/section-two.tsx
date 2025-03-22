import Link from 'next/link';
import Image from 'next/image';
import { IconCheck } from '@tabler/icons-react';

export default function SectionTwo() {
  return (
  <>

    <section className="my-12 text-black">
    <div>
      <p className="text-3xl bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text font-extrabold text-transparent text-center w-fit">TNOS for Servers</p>
      <p>The open source operating system powers billions of servers and workstations around the world.</p>
      <p>Ship with Nginx web server, PostgreSQL database management system, Nodejs JavaScript runtime environment</p>
      <div className="mt-6">
        <Link target="_blank" href="https://drive.google.com/file/d/1x0-GSJcWdhjn2ZlTAA8PgqZQ5zd23snw/view">
          <button className="bg-black rounded-lg text-white p-2 w-full md:w-36 h-10 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">TNOS Server</button>
        </Link>
      </div>
    </div>
    <div className="pt-6 md:w-[50%]">
      <Image className="rounded-lg w-full"
        src="/server1.svg"
        width={500}
        height={2}
        alt="eImage"
      />
    </div>
      <div className="py-6">
        <p className="text-xl">The secure, modern and stable operating system used by billions</p>
        <div className="md:pl-6">
          <p><IconCheck stroke={2} className="inline-block"/>The preferred choice for professional server engineers.</p>
          <p><IconCheck stroke={2} className="inline-block"/>Everything you need to config and run.</p>
          <p><IconCheck stroke={2} className="inline-block"/>Private, secure and stable by design.</p>
          <p><IconCheck stroke={2} className="inline-block"/>Thousands of applications for server.</p>
          <p><IconCheck stroke={2} className="inline-block"/>Kernel Livepatch for 24/7 patching with no downtime.</p>
          <p><IconCheck stroke={2} className="inline-block"/>Professional technical support team 24/365.</p>
        </div>
      </div>

      <div className="mt-3 p-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
  </section>

  </>
  );
  }