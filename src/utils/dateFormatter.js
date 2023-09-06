import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

export function dateFormatter(date) {
  const createdAt = new Date(date)
  const timestamp = format(createdAt, "d 'de' MMMM, yyyy", {
    locale: ptBR,
  })

  return timestamp
}
