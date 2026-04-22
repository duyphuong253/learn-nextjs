import Navbar from '@/components/layouts/Navbar';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body suppressHydrationWarning className="antialiased">
        <Navbar />
        {children}
        {/* <FeaturedClinics/> */}
      </body>
    </html>
  );
}