import React from 'react'
import Welcome from './components/Welcome'
import Counter from './components/Counter'
import Greet from './components/Greet'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import LoginGreet from './components/LoginGreet'
import NameList from './components/NameList'
import Index from './components/Index'
import SideBar from './components/SideBar'

function App() {
	return (
		<div className="App">
			{/* <Greet name = "Coco" heroName = "Superman"/> */}
			{/* <Welcome name = "Coco"/> */}
			{/* <Counter/> */}
			{/* <FunctionClick/> */}
			{/* <ClassClick/> */}
			{/* <EventBind/> */}
			{/* <ParentComponent/> */}
			{/* <LoginGreet/> */}
			{/* <NameList/> */}
			<Index />
			<SideBar color="blue" name="Menu" />
		</div>
	)
}

export default App
