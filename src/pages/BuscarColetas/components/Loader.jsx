import * as DescriptionPage from '../../../components/DescriptionPage'
export function Loader() {
  return (
    <DescriptionPage.Root className="container gap-y-10 lg:gap-y-16 !px-0">
      <DescriptionPage.Content className="px-6 xl:px-0 text-center lg:text-left">
        <div className="w-full h-48 max-w-sm mx-auto lg:max-w-none animate-pulse rounded">
          <div className="bg-zinc-200 h-5 mb-2 w-32 mx-auto lg:mx-0" />
          <div className="bg-zinc-200 w-full h-28 mb-6 max-w-md" />
          <div className="bg-zinc-200 w-full h-5" />
          <div className="bg-zinc-200 w-full max-w-md h-5 mt-1" />
        </div>
      </DescriptionPage.Content>

      <div className="grid gap-6 mt-6 mx-6 lg:mx-0 p-10 bg-zinc-50 shadow-[0px_12px_56px_0px_#10295421] animate-pulse rounded">
        <div className="w-full h-14 lg:h-16 bg-zinc-200 rounded"></div>
        <div className="w-full h-14 lg:h-16 bg-zinc-200 rounded"></div>
        <div className="w-full h-14 lg:h-16 bg-zinc-200 rounded mt-5"></div>
      </div>

      <div className="col-span-full mt-10 h-80 md:h-[31rem] animate-pulse bg-zinc-200"></div>
    </DescriptionPage.Root>
  )
}
