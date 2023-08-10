import * as DescriptionPage from '../../../components/DescriptionPage'
import { ScrollReveal } from '../../../components/ScrollReveal'

export function HowItWorks({ ...props }) {
  return (
    <div
      {...props}
      className={`px-10 md:px-14 py-10 lg:px-28 lg:py-16 bg-gray-100 ${props.className}`}
    >
      <ScrollReveal origin="top" className="flex flex-col gap-8 lg:gap-16">
        <section className="text-center space-y-4">
          <DescriptionPage.Subtitle subtitle="Cuidando do Meio Ambiente" />
          <DescriptionPage.Title title="Nosso Compromisso Sustentável" />
        </section>

        <div className="flex max-lg:flex-col items-baseline gap-8 mb-8">
          <Step title="Reflorestamento Ambiental" number={1}>
            A necessidade da conservação ambiental leva à uma ação fundamental
            na EcoSempre. Nossa missão é colaborar com escolas, empresas e
            comunidades no reflorestamento. Conectando e expandindo projetos
            como o Pede Planta.
          </Step>
          <Step title="Plano de Reflorestamento" number={2}>
            A definição de plano para o reflorestamento virou uma das metas do
            projeto EcoSempre. Estamos empenhados em fazer do reflorestamento
            uma realidade tangível, demonstrando nosso compromisso com a
            sustentabilidade e a preservação ambiental.
          </Step>
          <Step title="Resultados" number={3}>
            O reflorestamento realizado pela EcoSempre na região teve um impacto
            significativo tanto do ponto de vista ecológico quanto econômico.
            Servindo como um exemplo inspirador para outras escolas, empresas e
            comunidades.
          </Step>
        </div>
      </ScrollReveal>
    </div>
  )
}

function Step({ title, children, number }) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 text-center">
      <div className="rounded-lg px-6 py-3 bg-[#E3F2EB] text-[#32C36C]">
        <span className="font-bold font-inter text-2xl">{number}</span>
      </div>

      <div className="space-y-2">
        <span className="text-blue font-IBM-plex-sans font-semibold text-2xl/7 tracking-tighter">
          {title}
        </span>

        <p className="text-gray-600 font-roboto text-lg">{children}</p>
      </div>
    </div>
  )
}
