import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function InteractiveGrid() {
    const [columns, setColumns] = useState(0);
    const [rows, setRows] = useState(0);
    const [activeCells, setActiveCells] = useState<Set<string>>(new Set());
    const [, setFadingCells] = useState<Set<string>>(new Set());
    const fadeTimers = useRef<Record<string, ReturnType<typeof setTimeout>>>({});

    useEffect(() => {
        const calculateGrid = () => {
            const width = window.innerWidth * 1.2;
            const height = window.innerHeight * 1.5;
            const cellSize = 100;

            const cols = Math.ceil(width / cellSize);
            const rows = Math.ceil(height / cellSize);

            setColumns(cols);
            setRows(rows);
        };

        calculateGrid();
        window.addEventListener("resize", calculateGrid);

        return () => {
            window.removeEventListener("resize", calculateGrid);
            Object.values(fadeTimers.current).forEach(clearTimeout);
        };
    }, []);

    const handleHoverStart = (id: string) => {
        // Clear any existing fade timer
        if (fadeTimers.current[id]) {
            clearTimeout(fadeTimers.current[id]);
            delete fadeTimers.current[id];
        }

        // Add to active, remove from fading
        setActiveCells((prev) => new Set(prev).add(id));
        setFadingCells((prev) => {
            const next = new Set(prev);
            next.delete(id);
            return next;
        });
    };

    const handleHoverEnd = (id: string) => {
        // Remove from active, add to fading (triggers fade animation)
        setActiveCells((prev) => {
            const next = new Set(prev);
            next.delete(id);
            return next;
        });
        setFadingCells((prev) => new Set(prev).add(id));

        // Clean up after fade completes (1s + small buffer)
        fadeTimers.current[id] = setTimeout(() => {
            setFadingCells((prev) => {
                const next = new Set(prev);
                next.delete(id);
                return next;
            });
            delete fadeTimers.current[id];
        }, 1100);
    };

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none perspective-[1000px]">
            <div
                className="absolute inset-[-25%] flex flex-col justify-center content-center"
                style={{
                    transform: "rotateX(25deg)",
                    transformStyle: "preserve-3d",
                }}
            >
                {Array.from({ length: rows }).map((_, rowIndex) => (
                    <div
                        key={rowIndex}
                        className="flex justify-center"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        {Array.from({ length: columns }).map((_, colIndex) => {
                            const cellId = `${rowIndex}-${colIndex}`;
                            const isActive = activeCells.has(cellId);
                            // const isFading = fadingCells.has(cellId);
                            // const isHovered = isActive || isFading;

                            return (
                                <div
                                    key={cellId}
                                    className="w-[100px] h-[100px] pointer-events-auto relative flex-shrink-0"
                                    style={{ transformStyle: "preserve-3d" }}
                                    onMouseEnter={() => handleHoverStart(cellId)}
                                    onMouseLeave={() => handleHoverEnd(cellId)}
                                >
                                    <motion.div
                                        className="absolute inset-0 border-[0.5px] border-white/5 bg-black/20"
                                        animate={
                                            isActive
                                                ? {
                                                    z: 30,
                                                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                                                    boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
                                                }
                                                : {
                                                    z: 0,
                                                    backgroundColor: "transparent",
                                                    boxShadow: "0 0 0 rgba(0,0,0,0)",
                                                }
                                        }
                                        transition={{
                                            duration: isActive ? 0.2 : 1.0,
                                            ease: "easeOut",
                                        }}
                                        style={{
                                            transformStyle: "preserve-3d",
                                        }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
}
