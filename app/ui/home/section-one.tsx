import Image from 'next/image';
import Link from 'next/link';

export default function SectionOne() {
  return (
  <>

  <section>
    <div className="md:flex justify-between md:py-8">
      <div className="text-black md:pb-12">
        <p className="text-2xl md:text-3xl"><span className="text-2xl md:text-3xl bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text font-extrabold text-transparent text-center">TNOS 0.0.4</span> is now available for download</p>
        <p className="">Discover the latest and greatest features in our most recent interim release.</p>
        <p>Delivering the latest Linux 6.10 kernel, extended support for the most recent toolchains, and new experimental security features.</p>
        <div className="my-8">
          <Link href="/download">
            <button className="bg-black rounded-lg text-white p-2 w-full md:w-36 h-10 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">Get TNOS</button>
          </Link>
        </div>
      </div>
      <div>
        <Image className="rounded-lg"
          src="/image1.png"
          width={500}
          height={2}
          alt="Image1"
        />
      </div>
    </div>

    <div className="my-8 p-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

    <div className="md:flex justify-between my-16">
      <div className="text-black">
        <p className="text-xl font-bold">Modern enterprise open source</p>
        <p>Security, support, and managed services from the publisher of TNOS. </p>
        <div className="mt-6">
          <Link href="/download">
            <button className="bg-black rounded-lg text-white p-2 w-full md:w-36 h-10 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">Get TNOS Pro</button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10 mt-3">
        <Image className="mt-6"
          src="/aimage1.svg"
          width={120}
          height={2}
          alt="Image1"
        />
        <Image className="mt-6"
          src="/gimage1.svg"
          width={120}
          height={2}
          alt="Image1"
        />
        <Image className="mt-6"
          src="/mimage1.svg"
          width={120}
          height={2}
          alt="Image1"
        />
        <Image className="mt-6"
          src="/nimage1.svg"
          width={120}
          height={2}
          alt="Image1"
        />
        <Image className="mt-6"
          src="/vimage1.svg"
          width={120}
          height={2}
          alt="Image1"
        />
        <Image className="mt-6"
          src="/wimage1.svg"
          width={120}
          height={2}
          alt="Image1"
        />
      </div>
      <div>
      </div>
    </div>

    <div className="mt-3 p-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
  </section>

  </>
  );
}
