import Tasklist from "./components/tasklist";

export default function Page() {
  return (
    <section className="min-h-screen bg-black flex justify-center items-center p-5">
      <div className="bg-white text-gray-700 p-5 rounded-lg min-h-[30vw] min-w-[30vw]">
        <Tasklist/>
      </div>
    </section>
  )
}
