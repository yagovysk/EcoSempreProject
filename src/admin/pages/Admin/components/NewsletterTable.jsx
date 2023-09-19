import { useAdmin } from '../../../../contexts/AdminContext'
import { dateFormatter } from '../../../../utils/dateFormatter'

export function NewsletterTable() {
  const {
    newsletter: { data },
  } = useAdmin()

  return (
    <div className="overflow-auto max-h-[750px] w-full">
      <table className="min-w-[600px] w-full font-roboto">
        <thead>
          <tr className="bg-zinc-200 text-zinc-900 overflow-hidden">
            <th className="p-4 rounded-tl text-left text-sm">Email</th>
            <th className="p-4 rounded-tr text-left text-sm">Data</th>
          </tr>
        </thead>
        <tbody>
          {data ? (
            data.map((newsletter) => {
              return (
                <tr key={newsletter.id} className="text-zinc-900">
                  <td className="p-4 bg-zinc-50 w-2/3">{newsletter.email}</td>
                  <td className="p-4 bg-zinc-50">
                    {dateFormatter(newsletter.createdAt)}
                  </td>
                </tr>
              )
            })
          ) : (
            <tr className="text-zinc-900">
              <td className="p-4">Nenhum email cadastrado</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
