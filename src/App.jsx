
import { PopUser } from './components/PopUser'
import { PopNewCard } from './components/PopNewCard'
import { PopBrowse } from './components/PopBrowse'
import { Header } from './components/Header'
import { Main } from './components/Main'
import './App.css'


function App() {

  return (
    <div className="wrapper">
	< PopUser />
	< PopNewCard />
	< PopBrowse />
	< Header /> 	
	< Main />
    </div>
  )
}

export default App
