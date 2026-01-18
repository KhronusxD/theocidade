"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function TextReveal({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const chars = text.split(" ");

    return (
        <motion.span
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ staggerChildren: 0.05, delayChildren: delay }}
            className={className}
            aria-label={text}
        >
            {chars.map((word, i) => (
                <motion.span
                    key={i}
                    className="inline-block mr-[0.25em] whitespace-nowrap"
                    variants={{
                        hidden: { y: "100%", opacity: 0 },
                        visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
                    }}
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
}
