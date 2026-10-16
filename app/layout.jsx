import '../public/css/google-fonts.css';
import '../public/css/bootstrap.min.css';
import '../public/css/slicknav.min.css';
import '../public/css/all.min.css';
import '../public/css/animate.css';
import '../public/css/magnific-popup.css';
import '../public/css/mousecursor.css';
import 'swiper/css';
import './globals.css';
import './next.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageEffects from '@/components/PageEffects';

export const metadata = {
  title: 'Lifeon — Life and Business Coaching',
  description: 'Build clarity, confidence, and a focused strategy for your personal and professional goals with Lifeon coaching.',
  icons: { icon: '/images/favicon.png' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <PageEffects><main id="main-content">{children}</main></PageEffects>
        <SiteFooter />
      </body>
    </html>
  );
}
