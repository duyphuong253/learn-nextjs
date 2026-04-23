import Navbar from '@/components/layouts/Navbar';
import Footer from "@/components/layouts/Footer";
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body suppressHydrationWarning className="antialiased">
        

      <main className="max-w-[1200px] mx-auto px-2">
        <Navbar />
        {children}
        <Footer />
      </main>


    </body>
    </html>
  );
}