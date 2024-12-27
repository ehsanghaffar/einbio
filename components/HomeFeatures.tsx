import { UserCircle, MessageCircle, Sparkles } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

const features = [
  {
    title: "تولیدکننده بیوگرافی هوشمند",
    description: "بیوگرافی‌های جذاب شبکه‌های اجتماعی متناسب با شخصیت و اهداف شما ایجاد کنید.",
    icon: UserCircle
  },
  {
    title: "سازنده پیام خوشامدگویی هوشمند",
    description: "پیام‌های خوشامدگویی شخصی‌سازی شده برای هر مناسبت یا پلتفرم ایجاد کنید.",
    icon: MessageCircle
  },
  {
    title: "بهبود‌دهنده محتوا",
    description: "محتوای موجود خود را با پیشنهادات و ویرایش‌های مبتنی بر هوش مصنوعی بهبود بخشید.",
    icon: Sparkles
  }
]

export default function HomeFeatures() {
  return (
    <section id="features" className="py-14">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">خدمات مبتنی بر هوش مصنوعی ما</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="w-10 h-10 mb-4 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

