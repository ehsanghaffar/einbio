import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function BaseHeader() {
  return (
    <header className="py-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          نویسنده هوش مصنوعی
        </Link>
        <nav className="flex gap-4">
          <Link href="#features" className="text-gray-600 hover:text-gray-800">ویژگی‌ها</Link>
          <Link href="#pricing" className="text-gray-600 hover:text-gray-800">قیمت‌گذاری</Link>
          <Link href="#about" className="text-gray-600 hover:text-gray-800">درباره ما</Link>
        </nav>
        <Button>شروع کنید</Button>
      </div>
    </header>
  )
}

