import { PageHeader } from "@/components/ui/page-header";
import { Mail } from "lucide-react";

// Mock Data
const team = [
    {
        name: "Prof. Rômulo Monteiro",
        role: "Teologia Bíblica (AT/NT), Sistemas Teológicos",
        imageUrl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "@pr_romulo_monteiro",
    },
    {
        name: "Prof. Aldair Queiroz",
        role: "Prolegômenos, Sistemática e Hermenêutica",
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "@praldairmpc",
    },
    {
        name: "Prof. Belmiro Junior",
        role: "Antigo Testamento e Línguas Originais",
        imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "@belmiro.junior1",
    },
    {
        name: "Prof. Paulo Won",
        role: "Introdução à Bíblia e Apòcrifos",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "@won_paulo",
    },
    {
        name: "Prof. Gustavo Arnoni",
        role: "Introdução à Filosofia / Cristianismo e Cultura",
        imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio: "@arnonigustavo",
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
