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
import { useCallback, useEffect, useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { CheckSquare, Loader2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { toast as sonnar } from "sonner";
import { Button } from "@/components/ui/button";
import { GeneratedBio, UserInputPayload, VibeType } from "@/types/types";


let vibes: VibeType[] = ["حرفه‌ای", "معمولی", "طنز"];

const NEXT_PUBLIC_COOLDOWN_TIME = process.env.NEXT_PUBLIC_COOLDOWN_TIME || 10

const BioPage = () => {
  const [loading, setLoading] = useState(false);
  const [bio, setBio] = useState("");
  const [vibe, setVibe] = useState<VibeType>("حرفه‌ای");
  const [generatedBios, setGeneratedBios] = useState<GeneratedBio[]>([]);
  const [isCooldown, setIsCooldown] = useState(false);

  const [cooldownTimer, setCooldownTimer] = useState(0);

  const bioRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isCooldown && cooldownTimer > 0) {
      interval = setInterval(() => {
        setCooldownTimer((timer) => timer - 1);
      }, 1000);
    } else if (cooldownTimer === 0) {
      setIsCooldown(false);
    }
    return () => clearInterval(interval);
  }, [isCooldown, cooldownTimer]);

  const scrollToBios = () => {
    if (bioRef.current !== null) {
      bioRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBioChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setBio(event.target.value);
    },
    []
  );

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

    setGeneratedBios([]);
    setLoading(true);
    setIsCooldown(true);

    setCooldownTimer(NEXT_PUBLIC_COOLDOWN_TIME);

    try {
      const userInput: UserInputPayload = {
        vibe,
        bio,
      };

      const response = await fetch("/api/langchain", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInput),
      });

      if (!response.ok) {
        const errormessage = await response.json();
        sonnar.error("به نظر میاد مشکلی هست:", {
          description: errormessage.error,
          duration: 15000,
          className: "text-base",
        });
        return;
      }

      const data = await response.json();
      const allBios: GeneratedBio[] = data.output;
      setGeneratedBios(allBios);
      scrollToBios();
    } catch (error) {
      const err = error as Error;
      console.log(err);
      sonnar.error("به نظر میاد مشکلی هست", {
        description: err.message,
      });
    } finally {
      setLoading(false);
      setCooldownTimer(NEXT_PUBLIC_COOLDOWN_TIME);
    }
  };

  return (
    <>
      <div className="flex flex-1 w-full flex-col items-center justify-center text-center px-4">
        <div className="flex items-center">
          <h2 className="text-xl sm:text-2xl !leading-[4rem] font-bold text-slate-700">
            با
          </h2>
          <img
            alt="ClubGPT icon"
            src="/screenshot.png"
            className="sm:w-36"
            width={100}
            height={50}
          />
          <h2>برای خودت بایو حـرفه‌ای بساز 😎</h2>
        </div>
        <div className="w-full sm:max-w-2xl mt-6 sm:mt-1 p-4 border rounded">
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
              onChange={handleBioChange}
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
            <Button
              className={`w-full rounded-md text-white font-semibold px-4 py-3 sm:mt-10 mt-8 ${
                bio.length === 0 || isCooldown ? "bg-orange-600" : "bg-black"
              } ${isCooldown ? "hover:bg-orange-600" : "hover:bg-black/70"}`}
              onClick={generateBio}
              disabled={bio.length === 0}
            >
              {isCooldown
                ? `برای ساخت دوباره ${cooldownTimer} ثانیه صبر کن`
                : "بزن اینجا تا بسازم"}
            </Button>
          )}
          {loading && (
            <Button
              className="w-full bg-black rounded-lg text-white font-medium gap-2 px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80"
              disabled
            >
              در حال فکر کردن <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            </Button>
          )}
        </div>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{ duration: 2000 }}
        />
        <hr className="h-px bg-gray-700 border-1 dark:bg-gray-700" />
        <div className="my-4">
          <div className="space-y-8 flex flex-col items-center justify-center max-w-xl mx-auto">
            {generatedBios &&
              generatedBios.map((bio) => (
                <div
                  ref={bioRef}
                  className="bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition cursor-copy border"
                  onClick={() => {
                    navigator.clipboard.writeText(bio.content);
                    toast("بایو کپی شد", {
                      icon: "✂️",
                    });
                  }}
                  key={bio.id}
                >
                  <p>{bio.content}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BioPage;
