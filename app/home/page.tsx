import SectionOne from '@/app/ui/home/section-one';
import SectionTwo from '@/app/ui/home/section-two';
import SectionThree from '@/app/ui/home/section-three';

export default function Page() {
  return (
  <>

  <main className="m-10 md:m-18">
    <SectionOne />
    <SectionTwo />
    <SectionThree />
  </main>

  </>
  );
}
