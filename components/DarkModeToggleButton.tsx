"use client"

import { ActionIcon, useMantineColorScheme } from "@mantine/core"
import { Moon, Sun } from "lucide-react";

export default function DarkModeToggleButton() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const toggleColorScheme = () => setColorScheme(colorScheme === "dark" ? "light" : "dark");

  return (
    <ActionIcon
      size="xl"
      variant="default"
      onClick={toggleColorScheme}
      aria-label="Toggle Color Scheme"
      radius="md"
    >
      {colorScheme === "light" ? <Sun size={20} /> : <Moon size={20} />}
    </ActionIcon>
  )
}