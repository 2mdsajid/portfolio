"use client";
import { ThemeProvider, useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    
    useEffect(() => {
        setMounted(true);
        setTheme('dark')
    }, []);

    if (!mounted) {
        return <>{children}</>;
    }

    return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
