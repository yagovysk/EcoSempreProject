export function BoxResume({ title, number }) {
  return (
    <div className="rounded-lg border grid gap-2 py-10 px-6 text-center max-w-[14rem] w-full h-48 shadow-md bg-white">
      <div className="font-bold text-green-300 text-[2.5rem]">{number}</div>
      <div className="text-sm text-gray-700 font-medium">{title}</div>
    </div>
  )
}
