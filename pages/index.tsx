import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import DropDown, { VibeType } from "../components/DropDown";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoadingDots from "../components/LoadingDots";
import openai from "../lib/OpenAiCompletaions";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [bio, setBio] = useState("");
  const [vibe, setVibe] = useState<VibeType>("حرفه‌ای");
  const [generatedBios, setGeneratedBios] = useState<String | undefined>("");

  const bioRef = useRef<null | HTMLDivElement>(null);

  const scrollToBios = () => {
    if (bioRef.current !== null) {
      bioRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const generateBio = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setGeneratedBios("");
    setLoading(true);

    try {
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `Generate a compelling social media bio for user centered around context which them provide you. 
            The bio should be concise (150-200 characters) and capture the essence of user in a way that resonates with context. 
            Include elements that showcase personality, passion, and any relevant hashtags or keywords. 
            Feel free to add a touch of creativity to make it engaging.`,
          },
          {
            role: "user",
            content: `Generate 2 ${vibe} biographies with no hashtags, in Persian language, and clearly labeled "1." and "2.". ${
              vibe === "طنز"
                ? "Make sure there is a joke in there and it's a little ridiculous."
                : ""
            } base them on this context: ${bio}${
              bio.slice(-1) === "." ? "" : " "
            }`,
          },
        ],
      });
      if (response.data) {
        const generatedb = response.data.choices[0].message;
        setGeneratedBios(generatedb?.content);
        setLoading(false);
      }
      scrollToBios();
    } catch (error) {
      console.log("e", error);
      setLoading(false);
    }
  };

  return (
    <div className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title> بایو جی‌پی‌تی‌</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-5 sm:mt-5">
        <h1 className="sm:text-3xl text-4xl max-w-[708px] !leading-[6rem] font-bold text-slate-900">
          با
          <span className="px-2 text-[#0BA37F]">ChatGPT</span> برای خودت بایو
          حـرفه‌ای بساز 😎
        </h1>
        <div className="max-w-xl w-full">
          <div className="flex mt-5 items-center space-x-3">
            <Image
              src="/1-black.png"
              width={30}
              height={30}
              alt="1 icon"
              className="mb-5 sm:mb-0 mx-1 rounded-full"
            />
            <p className="text-left font-medium text-slate-500">
              <span className="text-slate-500">
                یکم در مورد خودت اینجا 👇🏻 بنویس
              </span>
              <span className="px-1 text-slate-400">
                (مثل نمونه‌ای که گذاشتم)
              </span>
            </p>
          </div>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows={4}
            className="w-full rounded-md border-gray-600 shadow-sm focus:border-black focus:ring-black my-5"
            placeholder={
              "طراح گرافیک، ۴ سال سابقه کار"
            }
          />
          <div className="flex mb-5 items-center space-x-3">
            <Image
              className="mx-1 rounded-full"
              src="/2-black.png"
              width={30}
              height={30}
              alt="1 icon"
            />
            <p className="text-left font-medium">
              چه جوری باشه؟
              <span className="text-slate-400">
                {" "}
                (حرفه‌ای 😎، معمولی🙂 یا طنز🤪)
              </span>
            </p>
          </div>
          <div className="block">
            <DropDown vibe={vibe} setVibe={(newVibe) => setVibe(newVibe)} />
          </div>

          {!loading && (
            <button
              className="bg-black rounded-lg text-white font-semibold px-4 py-3 sm:mt-10 mt-8 hover:bg-black/70 w-2/4"
              onClick={(e) => generateBio(e)}
            >
              بزن اینجا تا بسازم 👋🏻
            </button>
          )}
          {!loading && (
            <button
              className="bg-black rounded-lg text-white font-medium gap-2 px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-2/4"
              disabled
            >
              <LoadingDots color="white" style="large" /> صبر کن
            </button>
          )}
        </div>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{ duration: 2000 }}
        />
        <hr className="h-px bg-gray-700 border-1 dark:bg-gray-700" />
        <div className="space-y-10 my-10">
          {generatedBios && (
            <>
              <div>
                <h2
                  className="sm:text-4xl text-3xl font-bold text-slate-900 mx-auto"
                  ref={bioRef}
                >
                  این هم دو تا بایو 😌
                </h2>
              </div>
              <div className="space-y-8 flex flex-col items-center justify-center max-w-xl mx-auto">
                {generatedBios
                  .substring(generatedBios.indexOf("1") + 3)
                  .split("2.")
                  .map((generatedBio) => {
                    return (
                      <div
                        className="bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition cursor-copy border"
                        onClick={() => {
                          navigator.clipboard.writeText(generatedBio);
                          toast("بایو کپی شد", {
                            icon: "✂️",
                          });
                        }}
                        key={generatedBio}
                      >
                        <p>{generatedBio}</p>
                      </div>
                    );
                  })}
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
