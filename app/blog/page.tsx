import { PageHeader } from "@/components/ui/page-header";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const posts = [
    {
        id: 1,
        title: "5 coisas que aprendemos em Introdução à Bíblia",
        excerpt: "A Bíblia é a história da relação entre Deus e a humanidade, escrita em 3 idiomas, inspirada por Deus e fonte de toda a salvação.",
        date: "21 de Janeiro, 2026",
        author: "Theocidade",
        slug: "5-coisas-introducao-biblia",
        imageUrl: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=2574&auto=format&fit=crop",
    }
];

export default function BlogPage() {
    return (
        <div className="bg-white">
            <PageHeader
                title="Blog & Recursos"
                subtitle="Artigos, reflexões e materiais para seu crescimento espiritual e teológico."
                backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop"
            />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <article key={post.id} className="flex flex-col items-start justify-between border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="relative w-full aspect-video">
                                <img src={post.imageUrl} alt={post.title} className="object-cover w-full h-full" />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-x-4 text-xs text-gray-500 mb-4">
                                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                                </div>
                                <h3 className="text-lg font-bold leading-6 text-gray-900 font-serif mb-4 group-hover:text-primary">
                                    <Link href={`/blog/${post.slug}`}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className="text-sm leading-6 text-gray-600 line-clamp-3 mb-6">
                                    {post.excerpt}
                                </p>
                                <Button asChild variant="link" className="p-0 h-auto font-semibold text-secondary">
                                    <Link href={`/blog/${post.slug}`}>Ler Artigo Completo &rarr;</Link>
                                </Button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
