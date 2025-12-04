import Header from '@/app/ui/header';
import BarNav from '@/app/ui/bar-nav';
import SideNav from '@/app/ui/side-nav';
import Footer from '@/app/ui/footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
  <>
  <div>
    <Header />
    <BarNav />
    <div>
      <div>
        <SideNav />
      </div>
      <div>
        {children}
      </div>
    </div>
    <Footer />
  </div>

  </>
  );
}
