import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="font-mono ">
        <p style={{ fontSize: 40 }} className="fixed left-0 top-0 flex w-full justify-center pb-2 pt-2 dark:border-neutral-800 dark:bg-zinc-500/30">
          Collatz Canvas
        </p>
      </div>

      <div className="">
        <input type="text" />
      </div> 
    </main>
  )
}
