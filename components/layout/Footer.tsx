import Link from "next/link";
import { BookOpen, MapPin, Mail, Phone, Facebook, Instagram, Youtube } from "lucide-react";

const footerNavigation = {
    solutions: [
        { name: "Bacharelado em Teologia", href: "/cursos/bacharelado" },
        { name: "Pós-Graduação", href: "/cursos/pos-graduacao" },
        { name: "Cursos Livres", href: "/cursos/livres" },
        { name: "EAD", href: "/ead" },
    ],
    support: [
        { name: "Portal do Aluno", href: "https://portal.theocidade.com" },
        { name: "Calendário Acadêmico", href: "/calendario" },
        { name: "Biblioteca", href: "/biblioteca" },
        { name: "Fale Conosco", href: "/contato" },
    ],
    company: [
        { name: "Quem Somos", href: "/sobre" },
        { name: "História", href: "/sobre/historia" },
        { name: "Corpo Docente", href: "/sobre/docentes" },
        { name: "Confissão de Fé", href: "/sobre/confissao" },
    ],
    legal: [
        { name: "Privacidade", href: "/privacidade" },
        { name: "Termos", href: "/termos" },
    ],
    social: [
        {
            name: "Facebook",
            href: "#",
            icon: Facebook,
        },
        {
            name: "Instagram",
            href: "#",
            icon: Instagram,
        },
        {
            name: "YouTube",
            href: "#",
            icon: Youtube,
        },
    ],
};

export function Footer() {
    return (
        <footer className="bg-primary text-white" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Rodapé
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-2">
                            <BookOpen className="h-8 w-8 text-accent" />
                            <span className="font-serif text-2xl font-bold tracking-tight">
                                Theocidade
                            </span>
                        </Link>
                        <p className="text-sm leading-6 text-gray-300">
                            Formando líderes para a igreja com excelência acadêmica e fidelidade bíblica no coração da Amazônia.
                        </p>
                        <div className="flex space-x-6">
                            {footerNavigation.social.map((item) => (
                                <Link key={item.name} href={item.href} className="text-gray-400 hover:text-white">
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </Link>
                            ))}
                        </div>
                        <div className="space-y-2 text-sm text-gray-300">
                            <div className="flex items-start gap-2">
                                <MapPin className="h-5 w-5 text-accent shrink-0" />
                                <span>Rua Theocidade, 123 - Manaus, AM</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="h-5 w-5 text-accent shrink-0" />
                                <span>(92) 99999-9999</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="h-5 w-5 text-accent shrink-0" />
                                <span>contato@theocidade.com.br</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Cursos</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {footerNavigation.solutions.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white">Aluno</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {footerNavigation.support.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Institucional</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {footerNavigation.company.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-gray-400">
                        &copy; {new Date().getFullYear()} Seminário Theocidade. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
