import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { TextReveal } from "@/components/motion/text-reveal";
import { FadeIn, ScaleIn } from "@/components/motion/fade-in";

export function Hero() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 h-[90vh] flex items-center justify-center">
            {/* Background Image / Pattern */}
            <div
                className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30 bg-[url('https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center animate-ken-burns"
                style={{ animation: 'ken-burns 20s infinite alternate ease-in-out' }} // Custom mild zoom effect
                aria-hidden="true"
            />

            {/* Gradient Overlay */}
            <div
                className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/60 to-gray-900/30"
                aria-hidden="true"
            />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="overflow-hidden">
                        <TextReveal
                            text="Instituto de Teologia, Cultura e Vida Cristã"
                            className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-serif block mb-6"
                        />
                    </div>

                    <FadeIn delay={0.8} direction="up">
                        <p className="mt-4 text-lg leading-8 text-gray-200 shadow-black drop-shadow-md">
                            Fortalecendo o testemunho cristão na cidade e no mundo através de uma formação teológica sólida e acessível.
                        </p>
                    </FadeIn>

                    <FadeIn delay={1.2} direction="up">
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Button asChild size="lg" className="bg-accent text-white hover:bg-accent/90 shadow-lg hover:glimmer transition-all duration-300 transform hover:-translate-y-1">
                                <Link href="/cursos">
                                    Conheça nossos Cursos
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="text-white border-white/40 bg-white/5 hover:bg-white/20 hover:text-white backdrop-blur transition-all duration-300">
                                <Link href="/contato" className="gap-2 flex items-center">
                                    Agendar Visita <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </div>

            <FadeIn delay={2} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
                <ChevronDown className="h-8 w-8" />
            </FadeIn>
        </div>
    );
}
