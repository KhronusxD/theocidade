import { getCourseBySlug } from "@/lib/courses";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar, Clock, MapPin, CheckCircle2 } from "lucide-react";
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function CourseDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const course = getCourseBySlug(slug);

    if (!course) {
        notFound();
    }

    return (
        <div className="bg-white">
            {/* Course Hero */}
            <div className="bg-primary py-16 sm:py-24 relative overflow-hidden">
                <div
                    className="absolute inset-0 -z-10 h-full w-full object-cover opacity-10 bg-center bg-cover animate-pulse"
                    style={{ backgroundImage: `url(${course.image})` }}
                />
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <FadeIn className="max-w-3xl">
                        <span className="inline-flex items-center rounded-md bg-secondary/10 px-2 py-1 text-sm font-medium text-amber-400 ring-1 ring-inset ring-amber-400/20 mb-6">
                            {course.category}
                        </span>
                        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl font-serif mb-6">
                            {course.title}
                        </h1>
                        <p className="text-lg leading-8 text-gray-300">
                            {course.description}
                        </p>
                    </FadeIn>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">

                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        <FadeIn delay={0.2} className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 font-serif mb-4">Sobre o Curso</h2>
                            <div className="prose prose-lg text-gray-600">
                                <p>{course.overview}</p>
                            </div>
                        </FadeIn>

                        <section className="mb-12">
                            <FadeIn delay={0.3}>
                                <h2 className="text-2xl font-bold text-gray-900 font-serif mb-6">Grade Curricular</h2>
                            </FadeIn>
                            <StaggerContainer className="space-y-4" delayChildren={0.4}>
                                {course.curriculum.map((sem, index) => (
                                    <StaggerItem key={index} className="border rounded-lg p-6 bg-gray-50 hover:bg-gray-100 transition-colors">
                                        <h3 className="font-bold text-lg text-primary mb-4">{sem.semester}</h3>
                                        <ul className="grid sm:grid-cols-2 gap-2">
                                            {sem.subjects.map((subject, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                                    <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
                                                    {subject}
                                                </li>
                                            ))}
                                        </ul>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4">
                        <ScaleIn delay={0.5} className="sticky top-24 rounded-2xl border bg-white p-8 shadow-lg ring-1 ring-gray-900/5">
                            <h3 className="text-lg font-bold text-gray-900 mb-6">Informações do Curso</h3>

                            <dl className="space-y-4 mb-8">
                                <div className="flex items-start gap-4">
                                    <Clock className="h-6 w-6 text-gray-400 shrink-0" />
                                    <div>
                                        <dt className="text-sm font-medium text-gray-500">Duração</dt>
                                        <dd className="text-base font-semibold text-gray-900">{course.duration}</dd>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Calendar className="h-6 w-6 text-gray-400 shrink-0" />
                                    <div>
                                        <dt className="text-sm font-medium text-gray-500">Início das Aulas</dt>
                                        <dd className="text-base font-semibold text-gray-900">{course.startDate}</dd>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <MapPin className="h-6 w-6 text-gray-400 shrink-0" />
                                    <div>
                                        <dt className="text-sm font-medium text-gray-500">Modalidade</dt>
                                        <dd className="text-base font-semibold text-gray-900">{course.modality}</dd>
                                    </div>
                                </div>
                            </dl>

                            <div className="border-t pt-6 mb-8">
                                <p className="text-sm text-gray-500 mb-1">Investimento</p>
                                <p className="text-3xl font-bold text-primary">{course.price}</p>
                            </div>

                            <Button asChild size="lg" className="w-full bg-secondary hover:bg-secondary/90 transition-all hover:scale-105 active:scale-95">
                                <Link href="/admissao">
                                    Inscreva-se Agora
                                </Link>
                            </Button>
                            <p className="mt-4 text-xs text-center text-gray-500">
                                Fale com a secretaria para consultar bolsas disponíveis.
                            </p>
                        </ScaleIn>
                    </div>

                </div>
            </div>
        </div>
    );
}

// Generate static params for all courses to optimize build
export async function generateStaticParams() {
    const { courses } = await import("@/lib/courses"); // Dynamic import to avoid build issues if mixed
    return courses.map((course) => ({
        slug: course.slug,
    }));
}
