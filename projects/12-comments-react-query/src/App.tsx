import "./App.css"

import { FormInput, FormTextArea } from "./components/Form"

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">React query</h1>
      <main>
        <div className="col-span-1 bg-white p-8">{/* aqui se van a mostrar los comentarios */}</div>
        <div className="col-span-1 bg-black p-8">
          <form className="max-w-xl m-auto block px-4">
            <FormInput />
            <FormTextArea />
            <button
              type="submit"
              className="mt-4 px-12 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm py-2.5 text-center mr-2 mb-2"
            >
              Enviar comentario
            </button>
          </form>
        </div>
      </main>
    </>
  )
}

export default App
