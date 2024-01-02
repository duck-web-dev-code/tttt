import Logo from './assets/image/aea_logo.jpg'
import Jurema from './components/plantas/jurema'
export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <img src={Logo.src} className='w-[150px] h-[150px] rounded-full mb-[50px]'/>
      <h1>Input Senha</h1>
      <h1>Input Button</h1>
      <Jurema className="ml-[900px]" height={1900} width={1900}/>

      {/* <button onClick={()=>alert("Voce me aperou")}>
        <h1>fdfd</h1>
      </button> */}
    </main>
  )
}
