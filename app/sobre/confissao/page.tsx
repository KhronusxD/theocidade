import { PageHeader } from "@/components/ui/page-header";

export default function ConfissaoPage() {
    return (
        <div className="bg-white">
            <PageHeader
                title="Confissão de Fé"
                subtitle="O que cremos e ensinamos no Theocidade, fundamentado nas Escrituras Sagradas."
                backgroundImage="https://images.unsplash.com/photo-1507434965515-61970f2bd7c6?q=80&w=2574&auto=format&fit=crop"
            />

            <div className="mx-auto max-w-3xl px-6 lg:px-8 py-16 sm:py-24">
                <div className="prose prose-lg prose-blue mx-auto text-gray-600">
                    <p className="lead">
                        Subscrevemos integralmente os Credos Ecumênicos (Apostólico, Niceno, Atanasiano) e temos como referência os Símbolos de Westminster.
                    </p>

                    <h3>1. As Escrituras</h3>
                    <p>
                        Cremos que a Bíblia é a Palavra de Deus inspirada, inerrante e infalível, a única regra de fé e prática para o cristão.
                    </p>

                    <h3>2. Deus</h3>
                    <p>
                        Cremos em um único Deus vivo e verdadeiro, eternamente existente em três pessoas: Pai, Filho e Espírito Santo, iguais em poder e glória.
                    </p>

                    <h3>3. O Homem e o Pecado</h3>
                    <p>
                        Cremos que o homem foi criado à imagem de Deus, mas caiu em pecado, tornando-se totalmente depravado e incapaz de salvar-se a si mesmo.
                    </p>

                    <h3>4. Salvação</h3>
                    <p>
                        Cremos que a salvação é unicamente pela graça de Deus, mediante a fé em Jesus Cristo, sem méritos humanos.
                    </p>

                    <h3>5. A Igreja</h3>
                    <p>
                        Cremos na Igreja como o corpo de Cristo, composta por todos os eleitos de Deus, chamados para adorá-Lo e servir no mundo.
                    </p>
                </div>
            </div>
        </div>
    );
}
