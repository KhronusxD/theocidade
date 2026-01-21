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
        slug: "semipresencial",
        title: "Semipresencial",
        category: "Bacharelado",
        description: "Formação completa para o ministério pastoral e liderança cristã. Modalidade Semipresencial.",
        duration: "4 anos e meio",
        modality: "Híbrido",
        price: "R$ 350,00/mês",
        startDate: "Fevereiro 2026",
        image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2670&auto=format&fit=crop",
        overview: "O curso Semipresencial do Theocidade opta pelo modelo híbrido para permitir que você estude sem perder a qualidade. Nossa grade é ampla e diferenciada, focada em fidelidade às Escrituras e sem deixar pontas soltas.",
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
        description: "Modalidade EAD com cursos de aproximadamente 1 ano de duração.",
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
        slug: "teologia-para-leigos",
        title: "Cursos Livres (Em Construção)",
        category: "Curso Livre",
        description: "Cursos de curta duração para edificação da igreja.",
        duration: "Em Breve",
        modality: "Presencial",
        price: "Em Breve",
        startDate: "Em Breve",
        image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2670&auto=format&fit=crop",
        overview: "Em breve lançaremos nossa grade de cursos livres.",
        curriculum: [],
    },
];

export function getCourseBySlug(slug: string) {
    return courses.find((course) => course.slug === slug);
}
