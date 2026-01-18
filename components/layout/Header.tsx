"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, BookOpen, GraduationCap, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Quem Somos", href: "/sobre" },
    { name: "Cursos", href: "/cursos" },
    { name: "Admissão", href: "/admissao" },
    { name: "Blog", href: "/blog" },
    { name: "Contato", href: "/contato" },
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                        <BookOpen className="h-8 w-8 text-secondary" />
                        <span className="font-serif text-2xl font-bold text-primary tracking-tight">
                            Theocidade
                        </span>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Abrir menu</span>
                        <Menu className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
                    <Link
                        href="https://portal.theocidade.com"
                        className="text-sm font-semibold leading-6 text-primary flex items-center gap-1 border border-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white transition-all"
                    >
                        <GraduationCap className="h-4 w-4" />
                        Portal do Aluno
                    </Link>
                </div>
            </nav>
            {/* Mobile Menu */}
            <div
                className={cn(
                    "lg:hidden absolute inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out h-screen",
                    mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="fixed inset-0 z-50" />
                <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                            <BookOpen className="h-8 w-8 text-secondary" />
                            <span className="font-serif text-xl font-bold text-primary">Theocidade</span>
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Fechar menu</span>
                            <X className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="py-6">
                                <Link
                                    href="https://portal.theocidade.com"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 bg-gray-50"
                                >
                                    Portal do Aluno
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
