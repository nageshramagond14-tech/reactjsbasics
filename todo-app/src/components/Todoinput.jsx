import { useState } from "react"

function Todoinput({ addTodo }) {
  const [todo, setTodo] = useState("")

    const handleChange = () => {
        if (todo.trim() !== "") {
            addTodo(todo)
            setTodo("")
        }
    }
  }

  return (
    <form onSubmit={handleChange} className="flex gap-3 mb-8 w-full max-w-lg mx-auto">
      <input 
        type="text" 
        placeholder="What's on your mind?" 
        value={todo} 
        onChange={e => setTodo(e.target.value)}
        className="flex-1 bg-white/10 text-white placeholder-gray-400 px-5 py-3 rounded-xl border border-white/20 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all shadow-inner"
      />
      <button 
        type="submit" 
        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-bold px-6 py-3 rounded-xl shadow-lg transform transition-all active:scale-95 flex items-center justify-center group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 group-hover:scale-110 transition-transform">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
    </form>
  )   
}

export default Todoinput