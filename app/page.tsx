"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { CheckSquare } from "lucide-react";
import openai from "@/lib/OpenAiCompletaions";
import LoadingDots from "@/components/LoadingDots";
import { Textarea } from "@/components/ui/textarea";

export type VibeType = "حرفه‌ای" | "معمولی" | "طنز";
let vibes: VibeType[] = ["حرفه‌ای", "معمولی", "طنز"];

const BioGenerator = () => {
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
    <>
      <div className="flex flex-1 w-full flex-col items-center justify-center text-center px-4">
        <h2 className="text-xl sm:text-2xl !leading-[4rem] font-bold text-slate-900">
          با
          <span className="px-2 text-[#0BA37F]">EinGPT</span>
          برای خودت بایو حـرفه‌ای بساز 😎
        </h2>
        <div className="w-full sm:max-w-2xl mt-6 sm:mt-1 p-4 border">
          <div className="grid w-full gap-2">
            <div className="flex items-center gap-2">
              <CheckSquare size={14} />
              <p className="text-left col-span-2">
                <span className="text-slate-700 text-sm sm:text-base">
                  یکم در مورد خودت بنویس
                </span>
                <span className="px-1 text-slate-400 text-xs">
                  (مثل نمونه‌ای که گذاشتم)
                </span>
              </p>
            </div>
            <Textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={4}
              className="w-full rounded-md border-gray-600 shadow-sm focus:border-black focus:ring-black"
              placeholder={"طراح گرافیک، ۴ سال سابقه کار"}
            />
          </div>
          <div className="grid w-full gap-2 mt-6">
            <div className="flex items-center gap-2">
              <CheckSquare size={14} className="sm:w-5 sm:h-5" />
              <p className="text-left text-slate-700 text-sm sm:text-base">
                نوعش رو انتخاب کن
                <span className="text-slate-400 text-xs">
                  {" "}
                  (حرفه‌ای 😎، معمولی🙂 یا طنز🤪)
                </span>
              </p>
            </div>
            <div className="">
              <Select 
                dir="rtl" 
                value={vibe}
                // @ts-ignore
                onValueChange={setVibe}>
                <SelectTrigger className="">
                  <SelectValue placeholder="انتخاب کن" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>وایب</SelectLabel>
                    {vibes.map((vibeItem, index) => (
                      <SelectItem key={index} value={vibeItem}>{vibeItem}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          {!loading && (
            <button
              className="bg-black rounded-lg text-white font-semibold px-4 py-3 sm:mt-10 mt-8 hover:bg-black/70 w-2/4"
              onClick={(e) => generateBio(e)}
            >
              بزن اینجا تا بسازم
            </button>
          )}
          {loading && (
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
      </div>
    </>
  );
};

export default BioGenerator;
