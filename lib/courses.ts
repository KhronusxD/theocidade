export type CourseCategory = "Bacharelado" | "Pós-Graduação" | "Curso Livre" | "Extensão" | "EAD";

export interface Course {
    id: string;
    slug: string;
    title: string;
    category: CourseCategory;
    description: string;
    duration: string;
    modality: "Presencial" | "Online" | "Híbrido";
    price: string;
    startDate: string;
    image: string;
    overview: string;
    curriculum: {
        semester: string;
        subjects: string[];
    }[];
}

export const courses: Course[] = [
    {
        id: "1",
        slug: "bacharelado-em-teologia",
        title: "Bacharelado em Teologia",
        category: "Bacharelado",
        description: "Formação completa para o ministério pastoral e liderança cristã, com grade ampla e profunda.",
        duration: "4 anos e meio",
        modality: "Híbrido",
        price: "R$ 350,00/mês",
        startDate: "Fevereiro 2026",
        image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2670&auto=format&fit=crop",
        overview: "O curso de Bacharelado em Teologia do Theocidade opta pelo modelo semipresencial para permitir que você estude sem perder a qualidade. Nossa grade é ampla e diferenciada, focada em fidelidade às Escrituras e sem deixar pontas soltas.",
        curriculum: [
            {
                semester: "1º Semestre",
                subjects: ["Introdução Bíblica", "Hermenêutica", "História da Igreja I", "Grego Instrumental I", "Teologia Sistemática: Introdução"],
            },
            {
                semester: "2º Semestre",
                subjects: ["Pentateuco", "Os Evangelhos", "História da Igreja II", "Grego Instrumental II", "Teologia Sistemática: Deus e Homem"],
            },
            {
                semester: "3º Semestre",
                subjects: ["Livros Históricos", "Atos dos Apóstolos", "Homilética I", "Hebraico I", "Teologia Sistemática: Cristo e Salvação"],
            },
        ],
    },
    {
        id: "2",
        slug: "curso-ead-2026",
        title: "Curso EAD (Lançamento 2026)",
        category: "EAD",
        description: "Modalidade EAD com cursos de apoximadamente 1 ano de duração.",
        duration: "1 ano",
        modality: "Online",
        price: "Em Breve",
        startDate: "2026",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop",
        overview: "Estamos nos preparando para lançar a modalidade de curso EAD em 2026. Serão cursos prontos, focados na capacitação de irmãos da comunidade.",
        curriculum: [],
    },
    {
        id: "3",
        slug: "pos-graduacao-exposicao-biblica",
        title: "Pós-Graduação em Exposição Bíblica",
        category: "Pós-Graduação",
        description: "Especialização focada na pregação expositiva das Escrituras.",
        duration: "18 meses",
        modality: "Híbrido",
        price: "R$ 450,00/mês",
        startDate: "Março 2026",
        image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2670&auto=format&fit=crop",
        overview: "Este curso é destinado a pastores e pregadores que desejam aprimorar sua habilidade de expor o texto sagrado com fidelidade e clareza. O curso aborda gêneros literários, cristocentrismo na pregação e oratória.",
        curriculum: [
            {
                semester: "Módulo I",
                subjects: ["Fundamentos da Pregação Expositiva", "Exegese Avançada do NT"],
            },
            {
                semester: "Módulo II",
                subjects: ["Pregação no Antigo Testamento", "Cristo em toda a Escritura"],
            },
        ],
    },
];

export function getCourseBySlug(slug: string) {
    return courses.find((course) => course.slug === slug);
}
