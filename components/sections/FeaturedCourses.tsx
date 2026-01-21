import Link from "next/link";
import { Book, GraduationCap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";

const courses = [
    {
        title: "Semipresencial",
        description: "Formação completa para pastores e líderes. Modalidade Semipresencial (4 anos e meio).",
        icon: GraduationCap,
        href: "/cursos/semipresencial",
    },
    {
        title: "Curso EAD (Em Breve)",
        description: "Cursos de teologia à distância, com lançamento previsto para 2026.",
        icon: Book,
        href: "/cursos",
    },
    {
        title: "Cursos Livres (Em Construção)",
        description: "Capacitação rápida e focada para obreiros e membros de igreja. Aguarde novidades.",
        icon: Users,
        href: "/cursos",
    },
];

export function FeaturedCourses() {
    return (
        <section className="py-24 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <FadeIn>
                        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-serif">
                            Nossos Cursos
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Opções de formação para cada etapa do seu chamado.
                        </p>
                    </FadeIn>
                </div>

                <StaggerContainer className="mx-auto grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
                    {courses.map((course) => (
                        <StaggerItem key={course.title} className="flex flex-col justify-between rounded-3xl bg-gray-50 p-8 ring-1 ring-gray-200 xl:p-10 hover:shadow-xl hover:ring-secondary/20 transition-all duration-300 hover:-translate-y-2 group">
                            <div>
                                <div className="flex items-center gap-x-4">
                                    <div className="bg-white p-3 rounded-xl shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                                        <course.icon className="h-6 w-6 text-secondary group-hover:text-white transition-colors" />
                                    </div>
                                </div>
                                <h3 className="mt-6 text-xl font-bold leading-8 text-gray-900 font-serif group-hover:text-secondary transition-colors">
                                    {course.title}
                                </h3>
                                <p className="mt-4 text-sm leading-6 text-gray-600">
                                    {course.description}
                                </p>
                            </div>
                            <div className="mt-8">
                                <Button asChild variant="outline" className="w-full border-primary text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <Link href={course.href}>Saiba mais</Link>
                                </Button>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
