import React,{useState} from 'react'

const SearchBar=({onSubmit})=> {


	const [term,setTerm]=useState('')

	

	const onFormSubmit=(e)=>{
		e.preventDefault();

		onSubmit(term)

	}

	
	return(
			<div style={{backgroundColor:'black'}} className='search-bar ui segment'>
				<form onSubmit={onFormSubmit} className='ui form'>
				
					<div className='field'>
						<label style={{color:'white'}}>Search For Films</label>
						<input 
						onChange={(e)=>setTerm(e.target.value)} 
						value={term} 
						className='search' 
						type='text'/>
						
					</div>
					


				</form>


			</div>
	)
	
}

export default SearchBar