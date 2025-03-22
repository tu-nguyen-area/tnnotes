import Footer from '@/app/ui/footer';
import Header from '@/app/ui/header';
import styles from '@/app/modules/bg.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
  <>

  <div className={`${styles.bg} overflow-x-hidden`}>
    <Header />
    {children}
    <Footer />
  </div>

  </>
  );
}
