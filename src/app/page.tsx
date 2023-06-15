import { InputText , InputPassword } from '../components/template/input'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center h-full justify-between content-center flex-wrap p-24">
        <div className='flex flex-col p-8 gap-4 columns-sm rounded w-full max-w-sm shadow-black-500/50 bg-white'>
          <InputText label="Usuário"/>
          <span style={{height: '5px', width: '100%'}} />
          <InputPassword label="Senha"/>
          <span style={{height: '5px', width: '100%'}} />
          <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Submeter</button>
        </div>
    </main>
  )
}