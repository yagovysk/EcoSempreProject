import { useAdmin } from '../../../../contexts/AdminContext'
import { BoxResume } from '../../../components/BoxResume'

export function DataResume() {
  const {
    newsletter: { data: newsletter, isLoading: isLoadingNewsletter },
    collectionPoints: {
      data: collectionPoints,
      isLoading: isLoadingCollectionPoints,
    },
    posts: { data: posts, isLoading: isLoadingPosts },
    contacts: { data: contacts, isLoading: isLoadingContacts },
  } = useAdmin()

  if (
    isLoadingNewsletter ||
    isLoadingCollectionPoints ||
    isLoadingPosts ||
    isLoadingContacts
  ) {
    return (
      <div className="font-roboto text-zinc-900 animate-pulse">
        Carregando...
      </div>
    )
  }

  return (
    <div className="flex items-center flex-wrap gap-5 font-inter text-zinc-900 mb-4">
      <BoxResume
        title="Emails cadastrados na Newsletter"
        number={newsletter ? newsletter.length : 0}
      />
      <BoxResume
        title="Pontos de coleta cadastrados"
        number={collectionPoints ? collectionPoints.length : 0}
      />
      <BoxResume
        title="Pessoas que entraram em contato"
        number={contacts ? contacts.length : 0}
      />
      <BoxResume
        title="Quantidade de postagens no Blog"
        number={posts ? posts.length : 0}
      />
    </div>
  )
}
