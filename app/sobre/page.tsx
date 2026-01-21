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
                                Sejam bem-vindos ao THEOCIDADE – Instituto de Teologia, Cultura e Vida Cristã.
                            </p>
                            <p>
                                O nosso objetivo é através de uma sólida base bíblica, capacitar os cristãos e fortalecer o seu testemunho na cidade e no mundo, oferecendo através do nosso programa de formação Teológica acessível, o que consideramos essencial para a jornada ministerial, pastoral e vida cristã.
                            </p>
                            <p>
                                Temos a convicção da importância do estudo da Teologia fundamentada na revelação de Deus no texto sagrado, na tradição e na história de Deus com o seu povo. Cremos que esse estudo precisa estar conectado com a espiritualidade cristã – Uma vida de experiência com a Trindade e com a Igreja Local, desafiando cada aluno a ser um sinal do reino de Deus em sua localidade.
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
                            Hoje o Instituto Theocidade celebra o aniversário do nosso diretor Pr. Aldair Queiroz! Somos gratos por toda a sua doação ao seminário e por toda a inspiração e cuidado com o coração dos seminaristas durante suas jornadas teológicas.
                            <br /><br />
                            Pastor, que o Senhor possa florescer ainda mais as sementes do Reino de Deus que você tem plantado e que possamos ouvi-lo ensinar a Palavra de Deus por muitos anos.
                        </blockquote>
                        <div className="mt-8 flex items-center justify-center gap-4">
                            <div className="h-16 w-16 rounded-full bg-gray-200" />
                            <div className="text-left">
                                <div className="font-semibold text-gray-900">Pr. Aldair Queiroz</div>
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
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                        <div className="flex flex-col">
                            <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white font-bold text-sm">1</span>
                                A Necessidade da Teologia
                            </dt>
                            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                <p className="flex-auto">A busca por conhecer mais a Deus é o esforço mais básico da Teologia. Através dela conhecemos e compreendemos com mais clareza a Deus e sua Palavra. Nesse sentido todos são convocados a se dedicarem a conhecer a Deus porque a Teologia é, em essência, conhecimento de Deus.</p>
                            </dd>
                        </div>
                        <div className="flex flex-col">
                            <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white font-bold text-sm">2</span>
                                O Coração do Teólogo
                            </dt>
                            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                <p className="flex-auto">A teologia não é uma disciplina apenas racional, mas, ela também afeta as nossas afeições ao sermos confrontados quando conhecemos a Deus e quando somos conduzidos a Ele. Nas palavras de Agostinho de Hipona, a exclamação do teólogo é: &quot;Feriste o meu coração com a Tua Palavra e desde então eu te amei&quot;.</p>
                            </dd>
                        </div>
                        <div className="flex flex-col">
                            <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white font-bold text-sm">3</span>
                                O bom e o mal teólogo
                            </dt>
                            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                <p className="flex-auto">Nesse sentido, a boa teologia é aquela que nos afeta por completo e nos conduz, em humildade e dependência, a Deus. A má teologia é aquela que, não apenas é fruto de uma vida sem dedicação ao estudo, mas também que não conduz ao caminho da transformação pelo poder do Espírito Santo.</p>
                            </dd>
                        </div>
                        <div className="flex flex-col">
                            <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white font-bold text-sm">4</span>
                                Teologia e Espiritualidade
                            </dt>
                            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                <p className="flex-auto">A Teologia não está separada de uma vida espiritual, mas está imergida nela. Não podemos fazer uma boa teologia sem oração, estudo e submissão à Palavra de Deus. Teologia é feita com conhecimento e com oração, sem esses dois pilares a Teologia se torna morta.</p>
                            </dd>
                        </div>
                        <div className="flex flex-col lg:col-span-2">
                            <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white font-bold text-sm">5</span>
                                Como fazer Teologia?
                            </dt>
                            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                <p className="flex-auto">A Teologia é feita de um coração que ama a Deus e que deseja conhecê-Lo. Através do estudo e da oração é possível aprender sobre Deus. Este conhecimento será trabalhado e moldado no meio da comunidade dos santos no serviço aos irmãos, porque a Teologia é serva da igreja.</p>
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
