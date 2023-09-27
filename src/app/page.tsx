import TodoList from "./components/todolist";

export default function Page() {
  return (
    <section className="h-screen bg-black flex justify-center items-center">
      <div className="bg-white text-gray-700 p-5 rounded-lg">
        <TodoList/>
      </div>
    </section>
  )
}
