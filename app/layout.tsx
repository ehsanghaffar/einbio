import Header from '@/components/Header';
import '@/styles/globals.css';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';
import { Metadata } from 'next';

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}


export const metadata: Metadata = {
  title: 'بایو جی پی تی',
  description: 'ساخت بایو حرفه ای با یک کلیک',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'بایو جی پی تی',
    description: 'ساختن بایو با یک کلیک همراه چت جی پی تی',
    images: [{
      url: 'https://biogpt-chi.vercel.app/screenshot.png',
      width: '300',
      height: '300',
      alt: "ساختن بایو با یک کلیک همراه چت جی پی تی"
    }]
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="min-h-screen flex flex-col">
        <header>
        <Header />
        </header>
        <main className="flex flex-1">
        {children}
        </main>
        <footer className='flex flex-col w-full bottom-0'>
        <Footer />
        </footer>
        <Toaster richColors />
        </body>
    </html>
  )
}