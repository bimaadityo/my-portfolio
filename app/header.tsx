"use client";

import { useState, useEffect } from "react";
import {
  Container,
  Group,
  Text,
  Anchor,
  Paper,
  Burger,
  Drawer,
  Stack,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import DarkModeToggleButton from "@/components/DarkModeToggleButton";

const NAV_LINKS = [
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [opened, { toggle, close }] = useDisclosure(false);

  useEffect(() => {
    const handleScroll = () => {
      const activationLine =
        window.scrollY + window.innerHeight * 0.5; // 0 - 1 to adjust if it misses

      for (const link of NAV_LINKS) {
        const section = document.getElementById(link.href.substring(1));
        if (!section) continue;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (activationLine >= top && activationLine < bottom) {
          setActiveSection(section.id);
          return;
        }
      }

      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 5
      ) {
        setActiveSection(
          NAV_LINKS[NAV_LINKS.length - 1].href.substring(1)
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView();
      close(); // close mobile drawer after click
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full">
        <Paper>
          <Container size="xl" px="md">
            <Group h={70} justify="space-between" wrap="nowrap">
              <Anchor
                href="#"
                underline="never"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="hover:opacity-80 transition-opacity"
              >
                <Text size="lg" fw={700}>
                  Bima Adityo Kurniawan
                </Text>
              </Anchor>

              {/* Desktop Navigation */}
              <Group gap="xl" visibleFrom="md">
                {NAV_LINKS.map((link) => (
                  <Anchor
                    key={link.href}
                    href={link.href}
                    underline="never"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    c={
                      activeSection === link.href.substring(1)
                        ? "blue.6"
                        : "gray.7"
                    }
                    fw={500}
                    style={{ transition: "color 150ms ease" }}
                  >
                    {link.label}
                  </Anchor>
                ))}
                <DarkModeToggleButton />
              </Group>

              {/* Mobile Burger */}
              <Group hiddenFrom="md">
                <DarkModeToggleButton />
                <Burger
                  opened={opened}
                  onClick={toggle}
                  size="sm"
                />
              </Group>
            </Group>
          </Container>
        </Paper>
      </header>

      {/* Mobile Drawer */}
      <Drawer
        opened={opened}
        onClose={close}
        padding="md"
        size="50%"
        hiddenFrom="md"
      >
        <Stack gap="lg">
          {NAV_LINKS.map((link) => (
            <Anchor
              key={link.href}
              href={link.href}
              underline="never"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              c={
                activeSection === link.href.substring(1)
                  ? "blue.6"
                  : "gray.7"
              }
              fw={500}
              size="lg"
            >
              {link.label}
            </Anchor>
          ))}
        </Stack>
      </Drawer>
    </>
  );
}