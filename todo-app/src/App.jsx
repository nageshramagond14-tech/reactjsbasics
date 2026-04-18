import { useState } from "react"
import Header from "./components/Header"
import Todoinput from "./components/Todoinput"

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Design a beautiful UI", completed: true },
    { id: 2, text: "Integrate Tailwind CSS", completed: false },
    { id: 3, text: "Add smooth animations", completed: false }
  ])

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }])
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="min-h-screen py-16 px-4 md:px-8 flex items-center justify-center selection:bg-purple-500/30">
      <div className="w-full max-w-2xl glass rounded-3xl p-6 md:p-12 relative overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/30 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

        <Header />
        <Todoinput addTodo={addTodo} />

        <div className="flex flex-col gap-3 h-[400px] overflow-y-auto pr-2 custom-scrollbar">
          {todos.length === 0 ? (
            <div className="text-center text-gray-400 mt-10 italic animate-pulse">
              No tasks yet. Start achieving your goals!
            </div>
          ) : (
            todos.map(todo => (
              <div 
                key={todo.id} 
                className={`group flex items-center justify-between p-4 rounded-xl transition-all duration-300 border ${
                  todo.completed 
                    ? "bg-white/5 border-purple-500/30 opacity-75" 
                    : "bg-white/10 border-white/10 hover:border-white/30 hover:bg-white/15"
                }`}
              >
                <div className="flex items-center gap-4 cursor-pointer flex-1" onClick={() => toggleTodo(todo.id)}>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors shadow-sm ${
                    todo.completed ? "border-purple-400 bg-purple-400" : "border-gray-500 bg-transparent group-hover:border-purple-400"
                  }`}>
                    {todo.completed && (
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span className={`text-lg transition-all ${
                    todo.completed ? "line-through text-gray-500" : "text-white"
                  }`}>
                    {todo.text}
                  </span>
                </div>
                <button 
                  onClick={() => deleteTodo(todo.id)}
                  className="opacity-0 group-hover:opacity-100 p-2 text-gray-400 hover:text-red-400 transition-all rounded-lg hover:bg-red-400/10 focus:opacity-100 outline-none"
                  aria-label="Delete todo"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default App