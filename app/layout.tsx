import Header from '@/components/Header';
import './globals.css';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="flex mx-auto flex-col py-2 min-h-screen">
        <Header />
        <main className="flex flex-1 w-full flex-col items-center justify-center">
        {children}
        </main>
        <Footer />
        </body>
    </html>
  )
}