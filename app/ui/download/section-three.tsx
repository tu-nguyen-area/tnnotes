import Link from 'next/link';
import Image from 'next/image';

const lLinks = [
  {
    name: "TNOS 0.0.5 - GCC 15.0.0 | Glibc 2.41 | Linux 6.14.1",
    url: "#",
    version: "Coming soon...",
  },
  {
    name: "TNOS 0.0.4 - GCC 14.2.0 | Glibc 2.40 | Linux 6.10.6",
    url: "https://drive.google.com/file/d/1UhISg507ELN7vKS-RuMM-jb-UlBbBiyC/view",
    version: "TNOS Core 0.0.4",
  },
  {
    name: "TNOS 0.0.3 - GCC 13.2.0 | Glibc 2.39 | Linux 6.7.4",
    url: "https://drive.google.com/file/d/1mX8X54PTBnt7Yy2HLBeJVAgAfJXKtgZJ/view",
    version: "TNOS Core 0.0.3",
  },
  {
    name: "TNOS 0.0.2 - GCC 13.2.0 | Glibc 2.38 | Linux 6.4.12",
    url: "https://drive.google.com/file/d/1_b3YebNa8ANPAdySGXD4Bh32n1wzu1th/view",
    version: "TNOS Core 0.0.2",
  },
  {
    name: "TNOS 0.0.1 - GCC 12.2.0 | Glibc 2.37 | Linux 6.1.11",
    url: "https://drive.google.com/file/d/1QB4gwNbPBs1h8MbiKkHwuiOdv6xf8A1s/view",
    version: "TNOS Core 0.0.1",
  },
  {
    name: "TNOS 0.0.0 - GCC 12.2.0 | Glibc 2.36 | Linux 5.19.2",
    url: "https://drive.google.com/file/d/1xTDtXPD5D_ejMQuvbWGGq4rldm6yUZGi/view",
    version: "TNOS Core 0.0.0",
  },
];

export default function SectionThree() {
  return (
  <>
  <section className="my-12 text-black">
  <div>
    <p className="text-3xl bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text font-extrabold text-transparent text-center w-fit">TNOS Core</p>
    <p>The pure open source TNOS operating system.</p>
    <p>Ship with pure systems, ready to install any software, anytime, anywhere.</p>
    <div className="mt-6 flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-12 w-full md:w-fit justify-center items-center">
      {lLinks.map((link) => {
        return (
          <div key={link.version}>
            <p className="py-6">{link.name}</p>
            <div className="md:flex justify-center">
              <Link className="md:w-fit" target="_blank" href={link.url}>
                <button className="bg-black rounded-lg text-white p-2 w-full md:w-36 h-10 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">{link.version}</button>
              </Link>
            </div>
          </div>
        );
      })}
      </div>
      </div>
      <div className="md:flex md:gap-32 py-6">
        <div className="py-8">
          <Image className="rounded-lg"
            src="/core1.png"
            width={400}
            height={2}
            alt="Image1"
          />
        </div>
        <div className="py-8 w-full md:w-auto">
          <Image className="rounded-lg"
            src="/core2.png"
            width={390}
            height={2}
            alt="Image1"
          />
        </div>
      </div>
      <div className="">
        <p className="text-xl pb-10">Ready for IOT, Artificial Intelligence, Supercomputer, Cloud Computing, Distributed Computing, Computer Vision, Quantum Computing and more...</p>
        <div className="flex flex-col md:grid md:grid-cols-2 items-center gap-10">
          <div>
            <Image className="rounded-lg"
              src="/core3.png"
              width={500}
              height={2}
              alt="image"
            />
          </div>
          <div>
            <Image className="rounded-lg"
              src="/core4.jpg"
              width={500}
              height={2}
              alt="image"
            />
          </div>
          <div>
            <Image className="rounded-lg"
              src="/core5.png"
              width={500}
              height={2}
              alt="image"
            />
          </div>
          <div>
            <Image className="rounded-lg"
              src="/core6.jpg"
              width={1000}
              height={2}
              alt="image"
            />
          </div>
        </div>
      </div>
    <div className="text-center my-8">
      <p className="text-2xl">Everything you think, everything you can imagine...</p><div><Link href="/" className="text-3xl bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text font-extrabold text-transparent">Start here</Link></div>
    </div>
  </section>
  </>
  );
}
