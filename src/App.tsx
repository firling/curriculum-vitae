import { AuroraHero } from './components/AuroraHero'
import { Sidebar } from './components/Sidebar'

function App() {
  return (
    <AuroraHero>
      <div className='flex gap-4 w-full'>
        <Sidebar className="w-1/6" />

        <div className="w-5/6 p-4 border border-solid rounded-md">

        </div>
      </div>
    </AuroraHero>
  )
}

export default App
