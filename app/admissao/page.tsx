"use client";

import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function AdmissaoPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // In a real app, send data to API/Email
    };

    return (
        <div className="bg-white">
            <PageHeader
                title="Processo Seletivo"
                subtitle="Dê o primeiro passo para sua formação teológica. Preencha o formulário abaixo."
            />

            <div className="mx-auto max-w-3xl px-6 lg:px-8 py-24">
                {submitted ? (
                    <div className="rounded-2xl bg-green-50 p-8 text-center ring-1 ring-green-900/10">
                        <CheckCircle2 className="mx-auto h-12 w-12 text-green-600 mb-4" />
                        <h3 className="text-xl font-bold font-serif text-green-900">Pré-matrícula Recebida!</h3>
                        <p className="mt-2 text-green-800">
                            Nossa secretaria entrará em contato pelo WhatsApp em breve para orientar sobre os próximos passos e documentos necessários.
                        </p>
                        <Button className="mt-8" onClick={() => setSubmitted(false)}>Voltar</Button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-8 bg-white shadow-xl rounded-2xl p-8 lg:p-12 ring-1 ring-gray-900/5">
                        <div>
                            <h3 className="text-lg font-semibold leading-7 text-gray-900 border-b pb-2 mb-6">Dados Pessoais</h3>
                            <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                                <div className="sm:col-span-2">
                                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Nome Completo</label>
                                    <input required type="text" id="name" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 pl-3" />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">WhatsApp</label>
                                    <input required type="tel" id="phone" placeholder="(92) 99999-9999" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 pl-3" />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                                    <input required type="email" id="email" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 pl-3" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold leading-7 text-gray-900 border-b pb-2 mb-6">Interesse Acadêmico</h3>
                            <div className="space-y-4">
                                <label htmlFor="course" className="block text-sm font-medium leading-6 text-gray-900">Curso Desejado</label>
                                <select id="course" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 pl-3">
                                    <option>Bacharelado em Teologia</option>
                                    <option>Pós-Graduação em Exposição Bíblica</option>
                                    <option>Teologia para Leigos</option>
                                </select>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">Observações / Dúvidas</label>
                                    <textarea id="message" rows={3} className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 pl-3" />
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <Button type="submit" size="lg" className="w-full">Enviar Pré-Matrícula</Button>
                            <p className="mt-4 text-xs text-center text-gray-500">
                                Ao enviar, você concorda com nossa política de privacidade e em ser contatado pela equipe do Theocidade.
                            </p>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
