import Reveal from '../../components/Reveal'
import ArquivoContent from '../../content/arquivo.mdx'

export const metadata = {
  title: 'Arquivo',
  description: 'Arquivo da Imperium',
}

export default function Page() {
  return (
    <Reveal as="section">
      <ArquivoContent />
    </Reveal>
  )
}
