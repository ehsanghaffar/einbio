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
import LoadingDots from "@/components/LoadingDots";
import { Textarea } from "@/components/ui/textarea";
import { toast as sonnar } from "sonner";

export type VibeType = "حرفه‌ای" | "معمولی" | "طنز";
let vibes: VibeType[] = ["حرفه‌ای", "معمولی", "طنز"];

const BioGenerator = () => {
  const [loading, setLoading] = useState(false);
  const [bio, setBio] = useState("");
  const [vibe, setVibe] = useState<VibeType>("حرفه‌ای");
  const [generatedBios, setGeneratedBios] = useState<String | undefined>("");
  const [isCooldown, setIsCooldown] = useState(false);

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


    if (isCooldown) {
      toast("لطفا چند لحظه صبر کنید دوباره بزنید", {
        icon: "⏳",
      });
      return;
    }

    setGeneratedBios("");
    setLoading(true);
    setIsCooldown(true);

    try {
      const messages = `Generate 2 ${vibe} biographies with no hashtags, in Persian language, and clearly labeled "1." and "2.". ${
        vibe === "طنز"
          ? "Make sure there is a joke in there and it's a little ridiculous."
          : ""
      } base them on this context: ${bio}${bio.slice(-1) === "." ? "" : " "}`;
      console.log(messages);

      const response = await fetch("/api/chat", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messages),
      });
      const data = await response.json();

      setGeneratedBios(data);
    } catch (error) {
      if (error instanceof SyntaxError && error.message.includes("JSON")) {
        console.error("Invalid JSON input:", error);
      } else {
        console.error("Unexpected error occurred:", error);
      }
      const err = error as Error;
      console.log(err);
      sonnar.error("به نظر میاد مشکلی هست", {
        description: err.message,
      });
    } finally {
      setLoading(false);
      setTimeout(() => setIsCooldown(false), 10000)
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
                onValueChange={setVibe}
              >
                <SelectTrigger className="">
                  <SelectValue placeholder="انتخاب کن" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>وایب</SelectLabel>
                    {vibes.map((vibeItem, index) => (
                      <SelectItem key={index} value={vibeItem}>
                        {vibeItem}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          {!loading && (
            <button
              className="bg-black rounded-lg text-white font-semibold px-4 py-3 sm:mt-10 mt-8 hover:bg-black/70 w-2/4 disabled:bg-black/50"
              onClick={(e) => generateBio(e)}
              disabled={bio.length === 0 || isCooldown}
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
