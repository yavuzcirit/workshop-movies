import React, { useState, useEffect } from 'react';
import Spinner from './Spinner'
import VideoDetail from './VideoDetail'


const Videos = ({ items, isLoading }) => {

	const [selectedCount, setselectedCount] = useState('');
	const [selected, setSelected] = useState([])

	const onToggle = (event, item) => {
		if (event.target.checked) {
			setSelected([item, ...selected]);
		} else {
			setSelected((prev) =>
				prev.filter((currItem) => currItem.imdbID !== item.imdbID)
			);
		}
	}
	useEffect(() => {
		console.log(selected);
		setselectedCount(String(selected.length))
	}, [selected])

	return isLoading ? (<Spinner />) : <div>
		<p>{selectedCount ? `${selectedCount} movies selected` : ''}</p>
		<h1 className="ui blue header">IMDB Movies</h1>
		<table className="ui celled table">
			<thead>
				<tr>
					<th><i className="images icon"></i></th>
					<th>Title</th>
					<th>Type</th>
					<th>ID</th>
					<th>Year</th>
				</tr>
			</thead>
			<tbody>
				{
					items && items.map(item =>
						<VideoDetail
							selected={selected}
							setSelected={setSelected}
							item={item}
							key={item.imdbID}
							onToggle={onToggle}
						/>
					)
				}
			</tbody>
		</table>

	</div>

}


export default Videos