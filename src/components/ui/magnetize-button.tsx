import * as React from "react"

import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { Magnet, PhoneCall } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";

interface MagnetizeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    particleCount?: number;
    attractRadius?: number;
}

interface Particle {
    id: number;
    x: number;
    y: number;
}

function MagnetizeButton({
    className,
    particleCount = 50,
    attractRadius = 30,
    ...props
}: MagnetizeButtonProps) {
    const [isAttracting, setIsAttracting] = useState(false);
    const [particles, setParticles] = useState<Particle[]>([]);
    const particlesControl = useAnimation();

    useEffect(() => {
        const newParticles = Array.from({ length: particleCount }, (_, i) => ({
            id: i,
            x: Math.random() * 360 - 180,
            y: Math.random() * 360 - 180,
        }));
        setParticles(newParticles);
    }, [particleCount]);

    const handleInteractionStart = useCallback(async () => {
        setIsAttracting(true);
        await particlesControl.start({
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 10,
            },
        });
    }, [particlesControl]);

    const handleInteractionEnd = useCallback(async () => {
        setIsAttracting(false);
        await particlesControl.start((i) => ({
            x: particles[i].x,
            y: particles[i].y,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        }));
    }, [particlesControl, particles]);

    return (
        <Button
            className={cn(
                "min-w-40 relative touch-none",
                "bg-blue-400 dark:bg-blue-900",
                "hover:bg-blue-400 dark:hover:bg-blue-800",
                "text-white dark:text-white-300",
                "border border-cyan-300 dark:border-cyan-700",
                "transition-all duration-300",
                className
            )}
            onMouseEnter={handleInteractionStart}
            onMouseLeave={handleInteractionEnd}
            onTouchStart={handleInteractionStart}
            onTouchEnd={handleInteractionEnd}
            {...props}
        >
            {particles.map((_, index) => (
                <motion.div
                    key={index}
                    custom={index}
                    initial={{ x: particles[index].x, y: particles[index].y }}
                    animate={particlesControl}
                    className={cn(
                        "absolute w-1.5 h-1.5 rounded-full",
                        "bg-blue-400 dark:bg-blue-300",
                        "transition-opacity duration-300",
                        isAttracting ? "opacity-100" : "opacity-40"
                    )}
                />
            ))}
            <a target="_blank" href="https://forms.gle/oz2YAkuCQFwRGEjaA" className="relative w-full flex items-center justify-center gap-2">
                {/* <Magnet
                    className={cn(
                        "w-4 h-4 transition-transform duration-300",
                        isAttracting && "scale-110"
                    )}
                /> */}
                <PhoneCall className="w-4 h-4" />
                {isAttracting ? "Temukan Solusi" : "Hubungi Sekarang" }
            </a>
        </Button>
    );
}

export { MagnetizeButton }