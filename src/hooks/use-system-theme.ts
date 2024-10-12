import { useTheme } from "next-themes";
import { Dispatch, SetStateAction, useMemo } from "react";

type Theme = 'dark' | 'light';
type SetTheme = Dispatch<SetStateAction<Theme>>;

export default function useSystemTheme() {
    const { theme, setTheme, systemTheme } = useTheme();
    return useMemo(() => {
        return {
            theme: theme === 'system' ? systemTheme : theme,
            setTheme,
        } as { theme: Theme, setTheme: SetTheme }
    }, [theme, setTheme, systemTheme])
}