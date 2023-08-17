import styles from '../styles.module.css'

export function BreadcrumbLoader() {
  return (
    <div className={`${styles.breadcrumb} hidden min-[980px]:flex gap-2`}>
      <div className="w-11 h-4 bg-zinc-100 rounded" />
      <div className="w-12 h-4 bg-zinc-100 rounded" />
      <div className="w-44 h-4 bg-zinc-100 rounded" />
      <div className="h-4 bg-zinc-100 rounded w-2/5" />
    </div>
  )
}
