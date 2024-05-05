import Header from '@/components/Header';
import './globals.css';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className=" min-h-full flex flex-col">
        <header>
        <Header />
        </header>
        <main className="flex flex-1">
        {children}
        </main>
        <footer className='flex flex-col w-full absolute bottom-0'>
        <Footer />
        </footer>
        <Toaster richColors />
        </body>
    </html>
  )
}