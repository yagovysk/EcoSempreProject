import styles from '../styles.module.css'

export function Loader() {
  return (
    <div className={`container ${styles.posts_container}`}>
      <CardBlogLoader />
      <CardBlogLoader />
      <CardBlogLoader />
      <CardBlogLoader />
      <CardBlogLoader />
      <CardBlogLoader />
    </div>
  )
}

function CardBlogLoader() {
  return (
    <div className="rounded-lg bg-white shadow-[0px_0.25rem_3.3125rem_0px_#2d2b2b21] w-full h-[40rem]">
      <div className="img_loading mr-8 h-60 rounded-br-md" />

      <div className="pl-10 flex flex-col">
        <div className="w-56 -mt-3 mb-4 bg-zinc-200 h-8 rounded-md" />
        <div className="flex mr-5 gap-0.5 flex-wrap">
          <div className="bg-zinc-200 flex-1 h-4 basis-40" />
          <div className="bg-zinc-200 flex-1 h-4 w-full" />
          <div className="bg-zinc-200 flex-1 h-4 basis-40" />
        </div>

        <div className="flex items-center gap-10 pt-8 pb-10">
          <div className="bg-zinc-100 h-4 w-24" />
          <div className="bg-zinc-100 h-4 w-20" />
        </div>

        <div className="flex mr-5 gap-1 flex-wrap mb-8">
          <div className="bg-zinc-200 flex-1 h-4 basis-40" />
          <div className="bg-zinc-200 flex-1 h-4 w-full" />
          <div className="bg-zinc-200 flex-1 h-4 w-full" />
          <div className="bg-zinc-200 flex-1 h-4 basis-40" />
          <div className="bg-zinc-200 flex-1 h-4 w-full" />
          <div className="bg-zinc-200 flex-1 h-4 basis-40" />
          <div className="bg-zinc-200 flex-1 h-4 basis-40" />
          <div className="bg-zinc-200 flex-1 h-4 w-full" />
        </div>

        <div className="rounded h-10 w-28 img_loading mt-5" />
      </div>
    </div>
  )
}
