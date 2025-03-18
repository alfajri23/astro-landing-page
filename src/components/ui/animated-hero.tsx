import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Coffee, MoveRight, PhoneCall, Telescope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagnetizeButton } from "./magnetize-button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Digitalisasi", "Buat Website", "Aplikasi", "Pembuatan Game"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-10 lg:py-15 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-2 border border-blue-200 text-stone-700 font-normal">
              <Coffee className="w-4 h-4" />ngeteh dulu yuk
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-6xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50">Solusi Anda untuk</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-blue-400"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-md md:text-md tracking-tight text-muted-foreground max-w-2xl text-center">
            Dengan Pendekatan yang Terintegrasi, 
            Kami Menyediakan Solusi Digital yang Mampu Meningkatkan Produktivitas dan Mempermudah Operasional Anda di Era Digital
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <MagnetizeButton />
            <Button className="gap-4" variant="outline" asChild>
              <a href="#layanan" className="">
              <Telescope className="w-4 h-4" />
              Jelajahi 
              </a>
            </Button>
            {/* <Button size="lg" className="gap-4">
              Sign up here <MoveRight className="w-4 h-4" />
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
