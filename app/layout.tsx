import '../styles/global.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: {
    default: 'IMPERIUM',
    template: '%s | IMPERIUM',
  },
  description: 'Um espaço editorial silencioso para manifesto, obra e método.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const year = new Date().getFullYear()
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/manifesto">Manifesto</Link>
            <Link href="/obra">Obra</Link>
            <Link href="/metodo">Método</Link>
            <Link href="/arquivo">Arquivo</Link>
            <Link href="/acesso">Acesso</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>© {year} Imperium</footer>
      </body>
    </html>
  )
}
