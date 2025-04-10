# BioGPT - تولیدکننده هوشمند بیوگرافی برای شبکه‌های اجتماعی

BioGPT یک اپلیکیشن وب هوشمند است که با استفاده از Next.js، Tailwind CSS و مدل‌های GPT از OpenAI ساخته شده است. این ابزار به شما کمک می‌کند تا به راحتی بیوگرافی‌های جذاب، پیام‌های خوشامدگویی شخصی‌سازی شده و محتوای بهبودیافته برای شبکه‌های اجتماعی ایجاد کنید.

## 🚀 ویژگی‌ها

- **تولیدکننده بیوگرافی هوشمند**: بیوگرافی‌های جذاب و متناسب با شخصیت و اهداف شما ایجاد می‌کند.
- **سازنده پیام خوشامدگویی هوشمند**: پیام‌های خوشامدگویی شخصی‌سازی شده برای مناسبت‌ها و پلتفرم‌های مختلف تولید می‌کند.
- **بهبود‌دهنده محتوا**: محتوای موجود شما را با پیشنهادات و ویرایش‌های مبتنی بر هوش مصنوعی بهبود می‌بخشد.

## 🛠️ تکنولوژی‌های استفاده شده

- **فریمورک**: [Next.js](https://nextjs.org/)
- **استایل‌دهی**: [Tailwind CSS](https://tailwindcss.com/)
- **هوش مصنوعی**: [OpenAI API](https://openai.com/)
- **کامپوننت‌های رابط کاربری**: [Headless UI](https://headlessui.com/)، [Radix UI](https://www.radix-ui.com/)
- **آیکون‌ها**: [Lucide Icons](https://lucide.dev/)
- **مدیریت فرم‌ها**: [React Hook Form](https://react-hook-form.com/)
- **اعتبارسنجی**: [Zod](https://github.com/colinhacks/zod)
- **اعلان‌ها**: [Sonner](https://github.com/emilkowalski/sonner)، [React Hot Toast](https://react-hot-toast.com/)
- **آنالیتیکس**: [Vercel Analytics](https://vercel.com/analytics)، [Vercel Speed Insights](https://vercel.com/speed-insights)

## 🐳 راه‌اندازی با Docker

### محیط توسعه (Development)

برای ساخت و اجرای محیط توسعه از دستورات زیر استفاده کنید:

```bash
make build
make start
```

### محیط پروداکشن (Production)

برای ساخت و اجرای نسخه پروداکشن از دستورات زیر استفاده کنید:

```bash
docker build -f prod.Dockerfile -t biogpt-prod .
docker run -p 3000:3000 biogpt-prod
```

## 🚧 دستورات توسعه

- **اجرای سرور توسعه**:

```bash
yarn dev
```

- **ساخت نسخه پروداکشن**:

```bash
yarn build
```

- **اجرای سرور پروداکشن**:

```bash
yarn start
```

- **پاکسازی و نصب مجدد وابستگی‌ها**:

```bash
yarn run clean
```

## 🌐 استقرار (Deployment)

پروژه شامل یک فایل GitHub Actions (`.github/workflows/nextjs.yml`) برای استقرار خودکار است. برای استقرار در GitHub Pages یا سایر ارائه‌دهندگان هاستینگ، مراحل مربوطه را در این فایل تنظیم و فعال کنید.

## 📄 لایسنس

این پروژه تحت لایسنس MIT منتشر شده است. برای اطلاعات بیشتر به فایل [LICENCE](LICENCE) مراجعه کنید.

## 📌 نویسنده

- **احسان غفار** - [GitHub](https://github.com/ehsanghaffar)

## 🔗 لینک‌های مفید

- [مستندات Next.js](https://nextjs.org/docs)
- [مستندات Tailwind CSS](https://tailwindcss.com/docs)
- [مستندات OpenAI API](https://platform.openai.com/docs/api-reference)
