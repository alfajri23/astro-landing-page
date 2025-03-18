"use client"

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { GripVertical, Laugh, Meh, TrendingUp } from "lucide-react";
import { Button } from "./button";

function ImageComparison() {
  const [inset, setInset] = useState<number>(30);
  const [onMouseDown, setOnMouseDown] = useState<boolean>(false);

  const onMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!onMouseDown) return;

    const rect = e.currentTarget.getBoundingClientRect();
    let x = 0;

    if ("touches" in e && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if ("clientX" in e) {
      x = e.clientX - rect.left;
    }
    
    const percentage = (x / rect.width) * 100;
    setInset(percentage);
  };

  return (
    <div className="w-full py-10 lg:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 items-center text-center">
          <div>
            <Badge variant="secondary" className="px-3 py-1 text-xs sm:text-sm text-stone-600 gap-2 border border-sky-200">
              <TrendingUp/>
              Upgrade Websitemu</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-medium">
              Website Premium
            </h2>
            <p className="text-md md:text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-stone-500 leading-4">
              Udah tahun <a className="underline decoration-2 decoration-sky-300 text-sky-400 font-medium">2025</a> tapi websitenya masih seperti website <a className="underline decoration-2 decoration-pink-300 text-pink-400 font-medium">2012-an</a> ? Buat premium websitemu sekarang disini
            </p>
          </div>

          <div className="flex gap-2">
            <Button className="bg-blue-600 text-white">
              <a href="https://forms.gle/oz2YAkuCQFwRGEjaA">Hubungi Kami</a>
            </Button>
            <Button variant="secondary">
              <a href="#feature">Pelajari</a>
            </Button>
          </div>

          <div className="pt-12 w-full">
            <div
              className="relative aspect-video w-full h-full overflow-hidden rounded-2xl select-none border border-sky-200"
              onMouseMove={onMouseMove}
              onMouseUp={() => setOnMouseDown(false)}
              onTouchMove={onMouseMove}
              onTouchEnd={() => setOnMouseDown(false)}
            >
              <div
                className="bg-muted h-full w-1 absolute z-20 top-0 -ml-1 select-none"
                style={{
                  left: inset + "%",
                }}
              >
                <button
                  className="bg-muted rounded hover:scale-110 transition-all w-5 h-10 select-none -translate-y-1/2 absolute top-1/2 -ml-2 z-30 cursor-ew-resize flex justify-center items-center"
                  onTouchStart={(e) => {
                    setOnMouseDown(true);
                    onMouseMove(e);
                  }}
                  onMouseDown={(e) => {
                    setOnMouseDown(true);
                    onMouseMove(e);
                  }}
                  onTouchEnd={() => setOnMouseDown(false)}
                  onMouseUp={() => setOnMouseDown(false)}
                >
                  <GripVertical className="h-4 w-4 select-none" />
                </button>
              </div>
              <img
                src="https://cdn.psdrepo.com/images/2x/free-flat-website-design-template-psd-z2.jpg"
                //src="https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcatalyst-header.5da8820a.jpg&w=3840&q=75"
                alt="feature8"
                width={1920}
                height={1080}
                className="absolute left-0 top-0 z-10 w-full h-full aspect-video rounded-2xl select-none border"
                style={{
                  clipPath: "inset(0 0 0 " + inset + "%)",
                }}
              />
              <img
                //src="https://www.twblocks.com/_next/image?url=%2Fdarkmode-feature8.png&w=3840&q=75"
                src="modern2.png"
                alt="darkmode-feature8.png"
                width={1920}
                height={1080}
                className="absolute left-0 top-0 w-full h-full aspect-video rounded-2xl select-none border"
              />
            </div>
            <p className="text-md text-muted-foreground mt-5 flex justify-center">
              Ubah website yang membosankan <Meh className="text-red-500 mx-2"/>
              <span className="font-medium">jadi menarik dimata audients</span> <Laugh  className="text-amber-500 mx-2"/>
            </p>
          </div>

          


        </div>
      </div>
    </div>
  );
}

export { ImageComparison };
