import React, { useState } from 'react'
import './App.css'

function App() {
	// let a = 1
	let [a, setA] = useState(0)

	const onClickHandler = () => {
		setA(++a)
		console.log(a)
	}

	const onClickReset = () => {
		setA(0)
		console.log(a)
	}

	return (
		<div className='App'>
			<h1>{a}</h1>
			<button onClick={onClickHandler}>number</button>
			<button onClick={onClickReset}>reset</button>
		</div>
	)
}

export default App
