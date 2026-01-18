import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContatoPage() {
    return (
        <div className="bg-white">
            <PageHeader
                title="Fale Conosco"
                subtitle="Estamos à disposição para tirar suas dúvidas e recebê-lo em nosso campus."
            />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 font-serif mb-8">
                            Entre em Contato
                        </h2>
                        <dl className="space-y-8 text-base leading-7 text-gray-600">
                            <div className="flex gap-x-4">
                                <div className="flex-none">
                                    <span className="sr-only">Endereço</span>
                                    <MapPin className="h-7 w-6 text-secondary" aria-hidden="true" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Visite-nos</h3>
                                    <p className="mt-2 text-gray-600">
                                        Rua Theocidade, 123<br />
                                        Bairro Esperança, Manaus - AM<br />
                                        CEP 69000-000
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-x-4">
                                <div className="flex-none">
                                    <span className="sr-only">Telefone</span>
                                    <Phone className="h-7 w-6 text-secondary" aria-hidden="true" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Ligue ou mande WhatsApp</h3>
                                    <p className="mt-2 text-gray-600">
                                        <a href="tel:+5592999999999" className="hover:text-primary">(92) 99999-9999</a>
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-x-4">
                                <div className="flex-none">
                                    <span className="sr-only">Email</span>
                                    <Mail className="h-7 w-6 text-secondary" aria-hidden="true" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Envie um email</h3>
                                    <p className="mt-2 text-gray-600">
                                        <a href="mailto:contato@theocidade.com.br" className="hover:text-primary">contato@theocidade.com.br</a>
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-x-4">
                                <div className="flex-none">
                                    <span className="sr-only">Horário</span>
                                    <Clock className="h-7 w-6 text-secondary" aria-hidden="true" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Horário de Atendimento</h3>
                                    <p className="mt-2 text-gray-600">
                                        Segunda a Sexta: 08h às 17h<br />
                                        Sábado: 08h às 12h
                                    </p>
                                </div>
                            </div>
                        </dl>
                    </div>

                    {/* Contact Form Placeholder */}
                    <div className="bg-gray-50 rounded-2xl p-8 ring-1 ring-gray-900/10">
                        <h3 className="text-xl font-bold font-serif mb-6">Envie uma mensagem</h3>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">Nome</label>
                                <input type="text" id="name" className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                                <input type="email" id="email" className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Mensagem</label>
                                <textarea id="message" rows={4} className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                            </div>
                            <Button type="button" className="w-full">Enviar Mensagem</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
