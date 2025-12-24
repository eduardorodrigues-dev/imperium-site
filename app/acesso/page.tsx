import Reveal from '../../components/Reveal'
import AcessoContent from '../../content/acesso.mdx'

export const metadata = {
  title: 'Acesso',
  description: 'Acesso à comunidade Imperium',
}

export default function Page() {
  return (
    <Reveal as="section">
      <AcessoContent />
      {/* Formulário de acesso. Submissão não é tratada neste protótipo. */}
      <form className="access-form" method="post" action="#">
        <input type="email" name="email" placeholder="Seu e‑mail" required />
        <button type="submit">Enviar</button>
      </form>
    </Reveal>
  )
}
