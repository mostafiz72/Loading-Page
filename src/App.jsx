import { useState } from 'react'
import Layout from './Layout';
import './App.css'

function App() {

  const [Post, setPost] = useState(false);

  return (
    <>
     <header className=' bg-blue-800 py-6 mb-4'>
      <h2 className=' text-white text-3xl font-bold text-center'>This is heading</h2>
      <div className=' text-right pr-80'>
        <button onClick={()=>setPost(!Post)} className=' bg-red-600 text-white py-2 px-4 rounded-md'>Change Page</button>
      </div>
     </header>

     {Post === false ? <Layout /> : <h2 className=' text-red-700 text-3xl text-center'>This is App Page here now!</h2>}
     <footer className=' bg-slate-800 py-6 mt-4 text-white text-3xl text-center'>
      <h2>This is footer.</h2>
      <p className=' text-sm py-3'>Copyright © 2021-24 | All Rights Reserved By Mostafiz</p>
     </footer>
    </>
  )
}

export default App
