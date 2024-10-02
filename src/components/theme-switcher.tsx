"use client";

import useSystemTheme from "@/hooks/use-system-theme";
import { Switch } from "@nextui-org/react";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export function ThemeSwitcher({ showLabel }: { showLabel?: Boolean }) {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useSystemTheme();

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <Switch
            isSelected={theme === 'light'}
            onValueChange={() => theme === 'dark' ? setTheme('light') : setTheme('dark')}
            size="lg"
            color="success"
            startContent={<IconSun />}
            endContent={<IconMoon />}
        >
            {showLabel && theme.toUpperCase()}
        </Switch>
    )
};