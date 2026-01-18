"use client";

import { motion, useInView, type UseInViewOptions } from "framer-motion";
import { useRef } from "react";

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    className?: string;
    viewport?: UseInViewOptions;
}

export function FadeIn({
    children,
    delay = 0,
    duration = 0.5,
    direction = "up",
    className,
    viewport = { once: true, margin: "-100px" }
}: FadeInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, viewport);

    const directionOffset = {
        up: { y: 20, x: 0 },
        down: { y: -20, x: 0 },
        left: { x: 20, y: 0 },
        right: { x: -20, y: 0 },
        none: { x: 0, y: 0 },
    };

    const initial = {
        opacity: 0,
        ...directionOffset[direction]
    };

    return (
        <motion.div
            ref={ref}
            initial={initial}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : initial}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function StaggerContainer({
    children,
    className,
    viewport = { once: true, margin: "-100px" },
    delayChildren = 0,
    staggerChildren = 0.1
}: {
    children: React.ReactNode;
    className?: string;
    viewport?: UseInViewOptions;
    delayChildren?: number;
    staggerChildren?: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, viewport);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        delayChildren,
                        staggerChildren,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function ScaleIn({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
    return (
        <FadeIn delay={delay} duration={0.4} className={className} direction="none">
            <motion.div
                initial={{ scale: 0.95 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay }}
            >
                {children}
            </motion.div>
        </FadeIn>
    )
}
