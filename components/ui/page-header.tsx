import { cn } from "@/lib/utils";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
    backgroundImage?: string;
}

export function PageHeader({ title, subtitle, className, backgroundImage }: PageHeaderProps) {
    return (
        <div className={cn("relative bg-primary py-24 sm:py-32", className)}>
            {backgroundImage && (
                <>
                    <div
                        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20 bg-cover bg-center"
                        style={{ backgroundImage: `url(${backgroundImage})` }}
                        aria-hidden="true"
                    />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary via-primary/60" aria-hidden="true" />
                </>
            )}

            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-serif">
                    {title}
                </h1>
                {subtitle && (
                    <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
}
