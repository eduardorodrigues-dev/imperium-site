import Reveal from '../../components/Reveal'
import MetodoContent from '../../content/metodo.mdx'

export const metadata = {
  title: 'Método',
  description: 'Método da Imperium',
}

export default function Page() {
  return (
    <Reveal as="section">
      <MetodoContent />
    </Reveal>
  )
}
