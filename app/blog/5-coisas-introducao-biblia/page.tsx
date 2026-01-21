import { PageHeader } from "@/components/ui/page-header";

export default function BlogPost() {
    return (
        <div className="bg-white">
            <PageHeader
                title="5 coisas que aprendemos em Introdução à Bíblia"
                subtitle="Uma breve jornada pela natureza e propósito das Escrituras."
                backgroundImage="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=2574&auto=format&fit=crop"
            />

            <article className="mx-auto max-w-3xl px-6 lg:px-8 py-24">
                <div className="prose prose-lg prose-indigo mx-auto text-gray-700">
                    <p className="lead text-xl text-gray-500 font-serif mb-10">
                        A disciplina de Introdução à Bíblia nos convida a mergulhar nas origens, na estrutura e no propósito do Livro dos Livros. Aqui estão 5 lições fundamentais que aprendemos:
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">1. A Bíblia é a história da relação entre Deus e a humanidade</h3>
                    <p>
                        A Bíblia é um livro formado por livros, compostos em um intervalo de quase 2000 anos e apresenta uma história: a história de Deus e seu relacionamento redentivo com a humanidade. Não é apenas um livro de regras, mas uma narrativa de amor e resgate.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">2. A Bíblia foi escrita em 3 idiomas nos seus documentos originais</h3>
                    <p>
                        Por ter sido composta em um intervalo de 2000 anos, a Bíblia foi escrita em idiomas diferentes em seus conjuntos.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li><strong>Antigo Testamento:</strong> Escrito em sua maior parte em <strong>Hebraico</strong>, com suas evoluções e transformações, e pequenos trechos em <strong>Aramaico</strong> (Ed. 4.8-6.18; Ed. 7.12-26; Dn. 2.4-7.28).</li>
                        <li><strong>Novo Testamento:</strong> Escrito em <strong>Grego Koinē</strong>, o idioma comum da época. Não somente os ensinos apostólicos, mas a primeira tradução da Bíblia Hebraica (a Septuaginta) foram escritos neste idioma.</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">3. A Bíblia é a Palavra de Deus</h3>
                    <p>
                        Deus comunicou seus preceitos, narrou sua história e registrou de forma escrita através de mais de 40 autores. A Bíblia é a Palavra de Deus de forma acessível para que todo o povo de Deus possa obedecer fielmente à sua vontade. Ela é inspirada, inerrante e suficiente.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">4. A Bíblia é a revelação de Deus</h3>
                    <p>
                        Como revelação especial, é através da Bíblia que podemos conhecer profundamente sobre a pessoa de Deus, seus atributos e seu caráter, além de seus feitos, suas ordenanças e suas promessas. Fora das Escrituras, nosso conhecimento de Deus é limitado e sujeito a erros; nela, temos a auto-revelação segura do Criador.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">5. A Bíblia é a história da salvação</h3>
                    <p>
                        É através da Bíblia que conhecemos o plano de Deus para redimir e resgatar pecadores perdidos e também conhecemos o amor de Deus. Todo o conhecimento necessário para a salvação está contido em suas letras. De Gênesis a Apocalipse, o tema central é Cristo e sua obra redentora.
                    </p>
                </div>
            </article>
        </div>
    );
}
