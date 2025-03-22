'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { IconCheck } from '@tabler/icons-react';

export default function SectionTwo() {
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const y = new Date();

  const [nyear, setNyear] = useState(0);
  const [nmonth, setNmonth] = useState('');
  const [nday, setNday] = useState(0);

  function getTime() {
    setNyear(y.getFullYear());
    setNmonth(months[y.getMonth()]);
    setNday(y.getDate());
  }

  useEffect(() => {
    setTimeout(getTime, 1000);
  });

  return (
  <>

    <section>
      <div className="my-16 text-black">
        <p className="text-xl pb-8 font-bold">Latest news from our blog</p>
        <div className="md:flex md:p-8 md:gap-10">
          <div className="pb-8">
            <p>{nday} {nmonth} {nyear}</p>
            <Link href="/">Join TNOS Club in Mars at Dell Technologies Forum Mars</Link>
          </div>
          <div className="pb-8">
            <p>{nday} {nmonth} {nyear}</p>
            <Link href="/">Facts for TNOS users who are holding on</Link>
          </div>
          <div className="pb-8">
            <p>{nday} {nmonth} {nyear}</p>
            <Link href="/">What is TNOS used for?</Link>
          </div>
          <div className="pb-8">
            <p>{nday} {nmonth} {nyear}</p>
            <Link href="/">Releases TNOS 0.0.4</Link>
          </div>
          <div className="pb-8">
            <p>{nday} {nmonth} {nyear}</p>
            <Link href="/">What is best desktop for TNOS?</Link>
          </div>
        </div>
      </div>

      <div className="mt-3 p-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

      <div className="my-12 text-black">
        <div className="sm:flex gap-12">
          <div className="flex flex-col gap-5 mb-3 justify-between">
            <p className="text-xl font-bold">Energise your engineers</p>
            <p>Loved by developers and trusted by enterprises. TNOS is the first pick for organisations to support their software infrastructure and the OS chosen by 33% of experienced developers.</p>
            <p className="md:ml-6"><IconCheck stroke={2} className="inline-block"/>Authentically open source</p>
            <p className="md:ml-6"><IconCheck stroke={2} className="inline-block"/>Secure by design</p>
            <p className="md:ml-6"><IconCheck stroke={2} className="inline-block"/>A release cadence you can depend on</p>
            <p className="md:ml-6"><IconCheck stroke={2} className="inline-block"/>Stability through long term support</p>
            <p>That&#39;s why TNOS supports the fastest, biggest and most successful digital operations.</p>
            <p>Download our guide to secure enterprise Linux&#8594;</p>
            <p>Build your AI models on TNOS&#8594;</p>
          </div>
          <div>
            <Image className="rounded-lg"
              src="/eimage1.png"
              width={600}
              height={2}
              alt="eImage"
            />
          </div>
        </div>
      </div>

      <div className="mt-3 p-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

      <div className="my-16 text-black">
        <div className="sm:flex gap-10">
          <div>
            <p className="text-xl font-bold">Open source security</p>
            <p className="text-xl">TNOS Pro is more than Linux.</p>
            <p className="text-xl">Security and compliance for the full stack.</p>
            <p>Secure your open source apps. Patch the full stack, from kernel to library and applications, for CVE compliance. Governments and auditors certify TNOS for FedRAMP, FISMA and HITECH.</p>
            <div className="grid grid-cols-2 mt-8">
            <Image className="rounded-xl p-5"
              src="/niimage.svg"
              width={150}
              height={2}
              alt="eImage"
            />
            <Image className="rounded-xl p-5"
              src="/dimage.svg"
              width={200}
              height={2}
              alt="eImage"
            />
            <Image className="rounded-xl p-5"
              src="/cimage1.png"
              width={300}
              height={2}
              alt="eImage"
            />
            <Image className="rounded-xl p-5"
              src="/csec.svg"
              width={120}
              height={2}
              alt="eImage"
            />
          </div>
          </div>
          <div className="flex flex-col gap-5 mt-16">
            <p><IconCheck stroke={2} className="inline-block"/>Common Criteria EAL2: ISO/IEC IS 15408 validated by CSEC</p>
            <p><IconCheck stroke={2} className="inline-block"/>Kernel Livepatch for 24/7 patching with no downtime</p>
            <p><IconCheck stroke={2} className="inline-block"/>DISA/STIG hardening for DoD compliance</p>
            <p><IconCheck stroke={2} className="inline-block"/>Extended security for infrastructure and applications</p>
            <p><IconCheck stroke={2} className="inline-block"/>CIS profiles for cyber defence and malware prevention</p>
            <p><IconCheck stroke={2} className="inline-block"/>FIPS 140-2 cryptographic modules certified by NIST</p>
          </div>
        </div>
      </div>

      <div className="mt-3 p-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
    </section>

  </>
  );
}
