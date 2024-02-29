import Right from "./sections/right"
import Left from "./sections/left"

export default function Home() {
  return <main className="h-screen bg-background flex flex-col lg:grid lg:grid-cols-5">
    <div className="h-fit lg:col-span-2">
      <Left />
    </div>
    <div className="flex-grow lg:col-span-3">
      <Right />
    </div>
  </main>
}
