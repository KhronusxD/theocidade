import { PageHeader } from "@/components/ui/page-header";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="bg-white">
            <PageHeader
                title="Quem Somos"
                subtitle="Uma instituição comprometida com a glória de Deus e a edificação da Igreja através do ensino teológico de excelência."
                backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop"
            />

            {/* History Section */}
            <section className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-serif mb-6">
                            Nossa História
                        </h2>
                        <div className="space-y-4 text-lg text-gray-600">
                            <p>
                                O Theocidade nasceu da visão de pastores locais em Manaus que sentiram a necessidade de um centro de formação que aliasse rigor acadêmico com fervor espiritual.
                            </p>
                            <p>
                                Desde a nossa fundação, temos servido a igreja brasileira preparando homens e mulheres para o ministério pastoral, missionário e de liderança cristã, sempre pautados nas Escrituras Sagradas como nossa única regra de fé e prática.
                            </p>
                            <p>
                                Situado no coração da Amazônia, entendemos os desafios e oportunidades únicos de nossa região, e formamos líderes contextualizados, prontos para servir em qualquer lugar do Brasil e do mundo.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-xl ring-1 ring-gray-900/10">
                            {/* Placeholder for real campus image */}
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                                <span className="text-lg font-semibold">Foto Histórica / Fundação</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Director's Word */}
            <section className="bg-gray-50 py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-serif">
                            Palavra do Diretor
                        </h2>
                    </div>
                    <div className="relative bg-white shadow-xl rounded-2xl p-10 lg:p-14">
                        <blockquote className="text-xl font-medium leading-9 text-gray-900 font-serif text-center sm:text-2xl sm:leading-10">
                            &quot;No Theocidade, não buscamos apenas encher mentes com informação, mas transformar corações com a verdade do Evangelho. Nossa missão é formar teólogos que amem a Deus sobre todas as coisas e sirvam ao próximo com humildade e sabedoria.&quot;
                        </blockquote>
                        <div className="mt-8 flex items-center justify-center gap-4">
                            <div className="h-16 w-16 rounded-full bg-gray-200" />
                            <div className="text-left">
                                <div className="font-semibold text-gray-900">Rev. João da Silva</div>
                                <div className="text-gray-600">Diretor Geral</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pillars/Values */}
            <section className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
                <div className="mx-auto max-w-2xl lg:text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-accent">Nossos Valores</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl font-serif">
                        Compromisso com a Verdade
                    </p>
                </div>
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        <div className="flex flex-col">
                            <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                                <CheckCircle2 className="h-5 w-5 flex-none text-secondary" aria-hidden="true" />
                                Fidelidade Bíblica
                            </dt>
                            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                <p className="flex-auto">Cremos na inerrância e suficiência das Escrituras para toda a vida e doutrina.</p>
                            </dd>
                        </div>
                        <div className="flex flex-col">
                            <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                                <CheckCircle2 className="h-5 w-5 flex-none text-secondary" aria-hidden="true" />
                                Excelência Acadêmica
                            </dt>
                            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                <p className="flex-auto">Buscamos o mais alto rigor intelectual, dialogando com a tradição e o contemporâneo.</p>
                            </dd>
                        </div>
                        <div className="flex flex-col">
                            <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                                <CheckCircle2 className="h-5 w-5 flex-none text-secondary" aria-hidden="true" />
                                Piedade Experiencial
                            </dt>
                            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                <p className="flex-auto">Teologia que não conduz à doxologia e ao amor é estéril. Unimos mente e coração.</p>
                            </dd>
                        </div>
                    </dl>
                    <div className="mt-16 flex justify-center">
                        <Button asChild variant="outline">
                            <Link href="/sobre/confissao">Ver Confissão de Fé Completa</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
