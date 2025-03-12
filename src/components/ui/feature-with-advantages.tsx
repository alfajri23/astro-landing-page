import { Banknote, BookUser, Check, Phone, Star, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function Feature() {
  return (
    <div className="w-full py-10 lg:py-20">
      <div className="container mx-auto">
        <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
          <div>
            <Badge>Platform</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Kenapa memilih kami
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Kami Mendengarkan, Kami Mengerti, Kami Mewujudkan
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10 text-md">
              <div className="flex flex-row gap-6 w-full items-start">
                <Users className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Pengalaman Tim Profesional</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Star className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Hasil Memuaskan</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Phone className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Full Support</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Banknote className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Harga Terjangkau</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <BookUser className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Pendekatan yang Personal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
