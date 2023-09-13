import { useAdmin } from '../../../contexts/AdminContext'

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
      <Box
        title="Emails cadastrados na Newsletter"
        number={newsletter ? newsletter.length : 0}
      />
      <Box
        title="Pontos de coleta cadastrados"
        number={collectionPoints ? collectionPoints.length : 0}
      />
      <Box
        title="Quantidade de contatos"
        number={contacts ? contacts.length : 0}
      />
      <Box
        title="Quantidade de postagens no Blog"
        number={posts ? posts.length : 0}
      />
    </div>
  )
}

function Box({ title, number }) {
  return (
    <div className="rounded-lg border grid gap-2 py-10 px-6 text-center max-w-[14rem] w-full h-48 shadow-md bg-white">
      <div className="font-bold text-green-300 text-[2.5rem]">{number}</div>
      <div className="text-sm text-gray-700 font-medium">{title}</div>
    </div>
  )
}
