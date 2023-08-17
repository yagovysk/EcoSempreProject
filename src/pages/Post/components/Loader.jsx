import styles from '../styles.module.css'

export function Loader() {
  return (
    <div className={`container `}>
      <div className={`${styles.post_container} bg-white rounded-lg`}>
        <div className={`${styles.wrapper_img_post} img_loading w-full`} />

        <div
          className={`w-full bg-white max-w-2xl py-6 px-6 sm:px-10 rounded -mt-10 mb-6`}
        >
          <div className="flex gap-6 items-center">
            <span className={`bg-zinc-200 rounded h-4 max-w-[7rem] w-full`} />
            <span className={`bg-zinc-200 rounded h-8 max-w-[11rem] w-full`} />
            <span className={`bg-zinc-200 rounded h-4 max-w-[6rem] w-full`} />
          </div>

          <div className={`bg-zinc-100 h-10 rounded mt-10 mb-1 w-full`} />
          <div className={`bg-zinc-100 h-10 rounded mb-1 w-full`} />
        </div>

        <div className="bg-white flex flex-col gap-8 w-full px-6 sm:px-10 pb-12">
          <div className="flex flex-wrap gap-0.5">
            <div className="bg-zinc-100 flex-1 h-4 basis-40" />
            <div className="bg-zinc-100 h-4 basis-40" />
            <div className="bg-zinc-100 h-4 w-full" />
            <div className="bg-zinc-100 h-4 w-full" />
            <div className="bg-zinc-100 flex-1 h-4 w-full" />
            <div className="bg-zinc-100 flex-1 h-4 basis-40" />
            <div className="bg-zinc-100 flex-1 h-4 basis-40" />
          </div>
          <div className="flex flex-wrap gap-0.5">
            <div className="bg-zinc-100 h-4 w-full" />
            <div className="bg-zinc-100 h-4 basis-40" />
            <div className="bg-zinc-100 h-4 basis-40" />
            <div className="bg-zinc-100 h-4 w-full" />
            <div className="bg-zinc-100 h-4 basis-56" />
            <div className="bg-zinc-100 h-4 basis-56" />
            <div className="bg-zinc-100 h-4 w-full" />
            <div className="bg-zinc-100 flex-1 h-4 w-full" />
            <div className="bg-zinc-100 flex-1 h-4 basis-40" />
            <div className="bg-zinc-100 flex-1 h-4 basis-40" />
          </div>
          <div className="flex flex-wrap gap-0.5">
            <div className="bg-zinc-100 flex-1 h-4 basis-40" />
            <div className="bg-zinc-100 h-4 basis-40" />
            <div className="bg-zinc-100 h-4 w-full" />
            <div className="bg-zinc-100 h-4 w-full" />
            <div className="bg-zinc-100 flex-1 h-4 w-full" />
            <div className="bg-zinc-100 flex-1 h-4 basis-40" />
            <div className="bg-zinc-100 flex-1 h-4 basis-40" />
          </div>
        </div>

        <div className="flex flex-wrap gap-5 justify-between mx-6 sm:mx-10 border-t-2 py-8 border-zinc-200">
          <div className="flex flex-wrap gap-3 sm:gap-6 items-center">
            <span className={`bg-zinc-200 rounded h-4 w-[3.5rem] flex-grow`} />
            <span className={`bg-zinc-200 rounded h-4 w-[6rem]  flex-grow`} />
            <span className={`bg-zinc-200 rounded h-4 w-[6rem]  flex-grow`} />
          </div>

          <div className="flex gap-6 flex-wrap items-center">
            <span className={`bg-zinc-100 h-8 w-8 rounded-full`} />
            <span className={`bg-zinc-100 h-8 w-8 rounded-full`} />
            <span className={`bg-zinc-100 h-8 w-8 rounded-full`} />
          </div>
        </div>
      </div>
    </div>
  )
}
