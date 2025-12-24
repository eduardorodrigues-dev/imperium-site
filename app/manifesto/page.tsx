import Reveal from '../../components/Reveal'
import ManifestoContent from '../../content/manifesto.mdx'

export const metadata = {
  title: 'Manifesto',
  description: 'Manifesto da Imperium',
}

export default function Page() {
  return (
    <Reveal as="section">
      <ManifestoContent />
    </Reveal>
  )
}
