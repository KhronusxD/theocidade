import { PageHeader } from "@/components/ui/page-header";
import { Mail } from "lucide-react";

// Mock Data
const team = [
    {
        name: "Rev. João da Silva",
        role: "Diretor Geral / Teologia Sistemática",
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "Doutor em Teologia (PhD) pelo Seminário X. Pastor há 20 anos, autor de diversos livros sobre eclesiologia.",
    },
    {
        name: "Prof. Maria Oliveira",
        role: "Coordenadora Acadêmica / Novo Testamento",
        imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "Mestre em Exegese Bíblica. Especialista em Grego Koinê e papirologia.",
    },
    {
        name: "Rev. Pedro Santos",
        role: "Teologia Histórica",
        imageUrl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "Especialista em Reforma Protestante e História da Igreja no Brasil.",
    },
    {
        name: "Prof. Ana Costa",
        role: "Aconselhamento Bíblico",
        imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "Psicóloga e Teóloga, com foco em aconselhamento noutético e capelania.",
    },
]

export default function DocentesPage() {
    return (
        <div className="bg-white">
            <PageHeader
                title="Corpo Docente"
                subtitle="Conheça nossos professores, homens e mulheres comprometidos com a excelência acadêmica e a piedade cristã."
            />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {team.map((person) => (
                        <li key={person.name}>
                            <div className="flex items-start gap-x-6">
                                <img className="h-24 w-24 rounded-full bg-gray-50 object-cover ring-2 ring-primary/10" src={person.imageUrl} alt="" />
                                <div>
                                    <h3 className="text-base font-bold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                    <p className="text-sm font-semibold leading-6 text-secondary">{person.role}</p>
                                    <p className="mt-2 text-sm leading-6 text-gray-600">{person.bio}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
