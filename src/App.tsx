import { useState } from "react"
import SideBar from "./components/SideBar"
import Buttons from "./pages/Buttons"
import Inputs from "./pages/Inputs"


function App() {

  const [activeTab, setActiveTab] = useState<'buttons' | 'inputs'>('buttons')

  return (
    <main className="grid grid-cols-[1fr_6fr]">
      <SideBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="p-10">
        {activeTab === 'buttons' ?
          <Buttons />
          :
          <Inputs />
        }
      </div>
    </main>
  )
}

export default App
