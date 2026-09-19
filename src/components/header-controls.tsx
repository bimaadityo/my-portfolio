'use client';
import { Menu, Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useSyncExternalStore } from 'react';
import { Button } from '@/components/ui/button';
import { navigation } from '@/content/navigation';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuItem } from '@/components/ui/dropdown-menu';
const subscribe = () => () => {};

export function HeaderControls() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  return <div className="flex items-center gap-1">
    <DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" size="icon" aria-label="Choose color theme"><Sun className="dark:hidden" /><Moon className="hidden dark:block" /></Button></DropdownMenuTrigger>
      <DropdownMenuContent align="end" aria-label="Color theme"><DropdownMenuRadioGroup value={mounted ? theme : 'system'} onValueChange={setTheme}><DropdownMenuRadioItem value="light"><Sun className="size-4" />Light</DropdownMenuRadioItem><DropdownMenuRadioItem value="dark"><Moon className="size-4" />Dark</DropdownMenuRadioItem><DropdownMenuRadioItem value="system"><Monitor className="size-4" />System</DropdownMenuRadioItem></DropdownMenuRadioGroup></DropdownMenuContent>
    </DropdownMenu>
    <div className="lg:hidden"><DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" size="icon" aria-label="Open navigation"><Menu /></Button></DropdownMenuTrigger><DropdownMenuContent align="end" aria-label="Mobile navigation" onCloseAutoFocus={event => event.preventDefault()}>{navigation.map(link => <DropdownMenuItem key={link.href} asChild><a href={link.href}>{link.label}</a></DropdownMenuItem>)}</DropdownMenuContent></DropdownMenu></div>
  </div>;
}
