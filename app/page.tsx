import { Hero } from "@/components/sections/Hero";
import { FeaturedCourses } from "@/components/sections/FeaturedCourses";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      <FeaturedCourses />

      {/* Value Proposition / About Preview */}
      <section className="py-24 bg-primary text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-serif mb-6">
                Por que estudar no Theocidade?
              </h2>
              <div className="space-y-4 text-lg text-gray-300">
                <p>
                  O Seminário Theocidade é comprometido com a inerrância bíblica e a teologia reformada.
                </p>
                <p>
                  Oferecemos um ambiente que une piedade e erudição, preparando você não apenas intelectualmente, mas espiritualmente para os desafios do ministério contemporâneo.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild variant="secondary" size="lg">
                  <Link href="/sobre">Conheça nossa História</Link>
                </Button>
              </div>
            </div>
            {/* Placeholder for an image - using a colored box for now or I can use a generic unsplash url if I want */}
            <div className="rounded-2xl bg-white/10 p-2 ring-1 ring-white/20">
              <div className="aspect-[16/9] rounded-xl bg-gray-800/50 flex items-center justify-center text-gray-500">
                <span className="text-sm">Imagem do Campus / Alunos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif">
            Pronto para dar o próximo passo?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Entre em contato conosco para tirar suas dúvidas ou agendar uma visita ao nosso campus.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              <Link href="/contato">Fale Conosco</Link>
            </Button>
            <Button asChild variant="link" size="lg">
              <Link href="/admissao" className="flex items-center gap-2">
                Ver Processo Seletivo <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
