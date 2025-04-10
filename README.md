# BioGPT - AI-Powered Social Media Bio Generator

BioGPT is an intelligent web application built with Next.js, Tailwind CSS, and OpenAI's GPT models. It helps users effortlessly generate engaging and personalized bios, welcome messages, and improved content for social media platforms.

## 🚀 Features

- **Intelligent Bio Generator**: Create captivating social media bios tailored to your personality and goals.
- **Smart Welcome Message Creator**: Generate personalized welcome messages suitable for various occasions and platforms.
- **Content Enhancer**: Improve your existing content with AI-driven suggestions and edits.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **AI Integration**: [OpenAI API](https://openai.com/)
- **UI Components**: [Headless UI](https://headlessui.com/), [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod](https://github.com/colinhacks/zod)
- **Notifications**: [Sonner](https://github.com/emilkowalski/sonner), [React Hot Toast](https://react-hot-toast.com/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics), [Vercel Speed Insights](https://vercel.com/speed-insights)

## 🐳 Docker Setup

### Development

Build and run the development environment using Docker Compose:

```bash
make build
make start
```

### Production

Build the production Docker image:

```bash
docker build -f prod.Dockerfile -t biogpt-prod .
docker run -p 3000:3000 biogpt-prod
```

## 🚧 Development Commands

- **Run Development Server**:

```bash
yarn dev
```

- **Build for Production**:

```bash
yarn build
```

- **Start Production Server**:

```bash
yarn start
```

- **Clean and Reinstall Dependencies**:

```bash
yarn run clean
```

## 🌐 Deployment

The project includes a GitHub Actions workflow (`.github/workflows/nextjs.yml`) configured for automated deployment. Adjust and uncomment the deployment steps to deploy to GitHub Pages or other hosting providers.

## 📄 License

This project is licensed under the MIT License - see the [LICENCE](LICENCE) file for details.

## 📌 Author

- **Ehsan Ghaffar** - [GitHub](https://github.com/ehsaghaffar)

## 🔗 Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [OpenAI API Documentation](https://platform.openai.com/docs/api-reference)
