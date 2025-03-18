import { Banknote, BookUser, Check, Phone, Star, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function Feature() {
  return (
    <div className="w-full py-10 lg:py-20">
      <div className="container mx-auto">
        <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
          <div>
            <Badge variant="secondary">Why Us</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-stone-800">
              Kenapa memilih kami
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Kami Mendengarkan, Kami Mengerti, Kami Mewujudkan
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-1 items-start lg:grid-cols-3 gap-10 text-md">
              <div className="flex flex-row gap-3 w-full items-start">
                <div className="p-3 bg-stone-100 rounded-full border border-blue-300">
                  <Users className="w-4 h-4 text-blue-700" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-medium text-stone-700">Pengalaman Tim Profesional</p>
                  <p className="text-sm text-muted-foreground">Tim kami terdiri dari para ahli berpengalaman yang telah sukses menangani berbagai proyek</p>
                </div>
              </div>
              <div className="flex flex-row gap-3 w-full items-start">
                <div className="p-3 bg-stone-100 rounded-full border border-blue-300">
                  <Star className="w-4 h-4 text-blue-700" />
                </div>
                <div className="flex flex-col gap-1">
                <p className="font-medium text-stone-700">Hasil Memuaskan</p>
                <p className="text-sm text-muted-foreground">Dengan pendekatan yang terfokus dan perhatian terhadap detail, setiap proyek yang kami tangani dirancang untuk mencapai kepuasan maksimal</p>
                </div>
              </div>
              <div className="flex flex-row gap-3 w-full items-start">
                <div className="p-3 bg-stone-100 rounded-full border border-blue-300">
                  <Phone className="w-4 h-4 text-blue-700" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-medium text-stone-700">Full Support</p>
                  <p className="text-sm text-muted-foreground">Kami menyediakan dukungan penuh di setiap langkah perjalanan Anda. Tim kami siap membantu Anda dengan cepat dan responsif, memastikan bahwa semua pertanyaan dan kebutuhan Anda terpenuhi.</p>
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
