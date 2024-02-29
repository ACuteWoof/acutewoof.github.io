import Right from "./sections/right"
import Left from "./sections/left"

export default function Home() {
  return <main className="h-screen bg-background grid lg:grid-cols-3">
    <div className="lg:col-span-1">
      <Left />
    </div>
    <div className="lg:col-span-2">
      <Right />
    </div>
  </main>
}
