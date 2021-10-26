import React from 'react'
import './Label.css'

const Label=({year,query,eraserQ,eraserY})=>{


	return (<>
			{year&&<p>{year}  <span onClick={eraserY}>x</span></p>}
			{query&&<p>{query}  <span onClick={eraserQ}>x</span></p>}

			</>
		)
}

export default Label;