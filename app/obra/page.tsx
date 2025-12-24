import Reveal from '../../components/Reveal'
import ObraContent from '../../content/obra.mdx'

export const metadata = {
  title: 'Obra',
  description: 'Descrição da obra da Imperium',
}

export default function Page() {
  return (
    <Reveal as="section">
      <ObraContent />
    </Reveal>
  )
}
