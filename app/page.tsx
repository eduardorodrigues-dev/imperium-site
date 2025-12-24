import Reveal from '../components/Reveal'
import HomeContent from '../content/home.mdx'

export const metadata = {
  title: 'Início',
  description: 'Página inicial da Imperium',
}

export default function Page() {
  return (
    <Reveal as="section">
      <HomeContent />
    </Reveal>
  )
}
