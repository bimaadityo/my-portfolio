import Link from 'next/link';
export default function NotFound() { return <main className="page-width py-20"><p className="font-mono text-sm text-primary">404</p><h1 className="section-title mt-4">Page not found</h1><p className="mt-4 text-muted-foreground">The page you’re looking for isn’t here.</p><Link href="/" className="text-link mt-6">Return to Bima’s portfolio</Link></main>; }
