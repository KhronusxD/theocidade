import { PageHeader } from "@/components/ui/page-header";
import { courses } from "@/lib/courses";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Clock, Calendar, MapPin } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/motion/fade-in";

export default function CursosPage() {
    return (
        <div className="bg-white">
            <PageHeader
                title="Nossos Cursos"
                subtitle="Formação teológica sólida para todas as vocações."
                backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop"
            />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <p className="text-lg leading-8 text-gray-600">
                        No Theocidade, nossa grade é bem ampla e diferente de seminários e faculdades tradicionais. Somos mais profundos e fiéis às escrituras, não deixando pontas soltas quanto ao que acreditamos.
                    </p>
                </div>
                <StaggerContainer className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
                    {courses.map((course) => (
                        <StaggerItem key={course.id} className="flex flex-col items-start justify-between border rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group bg-white">
                            <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 bg-gray-100">
                                <img src={course.image} alt={course.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-primary shadow-sm">
                                    {course.category}
                                </div>
                            </div>

                            <div className="w-full">
                                <div className="flex items-center gap-x-4 text-xs text-gray-500 mb-4">
                                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {course.duration}</span>
                                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {course.modality}</span>
                                </div>
                                <h3 className="text-xl font-bold leading-6 text-gray-900 font-serif group-hover:text-primary transition-colors">
                                    <Link href={`/cursos/${course.slug}`}>
                                        <span className="absolute inset-0" />
                                        {course.title}
                                    </Link>
                                </h3>
                                <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-600">
                                    {course.description}
                                </p>

                                <div className="mt-8 flex items-center justify-between border-t pt-4 w-full">
                                    <span className="text-lg font-bold text-primary">{course.price}</span>
                                    <Button size="sm" variant="secondary" className="group-hover:bg-secondary group-hover:text-white transition-colors">Ver Detalhes</Button>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </div>
    );
}
