import { Button } from "@/components/ui/button"

export default function HomeHero() {
  return (
    <section className="py-20">
      <div className="flex flex-col gap-4 mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-l from-purple-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text">
          حضور آنلاین خود را با هوش مصنوعی تقویت کنید
        </h1>
        <p className="text-xl text-gray-600">
          با فناوری پیشرفته هوش مصنوعی ما، در چند ثانیه بیوگرافی‌های جذاب و پیام‌های خوشامدگویی تأثیرگذار ایجاد کنید.
        </p>
        <Button className="mx-auto" size="lg">رایگان امتحان کنید</Button>
      </div>
    </section>
  )
}

