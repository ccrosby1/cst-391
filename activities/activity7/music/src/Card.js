import React from "react";

const Card = (props) => {
	const handleButtonClick = (event, uri) => {
		console.log('ID clicked is ' + props.albumId, 'uri:', uri);
		props.onClick(props.albumId, uri);
	}

    const handleDelete = () => {
		console.log('deleting id: ' + props.albumId)
        if (window.confirm('Delete album: ' + props.albumTitle + '?')) {
            props.onDelete(props.albumId);
        }
    };
    
	return (

		<div className="card" style={{ width: '18rem' }}>
			<img src={props.imgURL} alt={`${props.albumTitle} album cover`} />
			<div className="card-body">
				<h5 className="card-title">{props.albumTitle}</h5>
				<p className="card-text">
					{props.albumDescription}
				</p>

				<button style={{ margin: 5 }} onClick={() => handleButtonClick(props.albumId, '/show/')}
					className="btn btn-primary">{props.buttonText}</button>
				<button onClick={() => handleButtonClick(props.albumId, '/edit/')} className="btn btn-secondary">
					Edit</button>
                <button onClick={handleDelete} className="btn btn-danger" style={{ marginLeft: 5 }}>
                    Delete</button>
			</div>
		</div>
	)
}

export default Card;