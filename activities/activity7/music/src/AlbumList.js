import React from 'react';
import Card from './Card';
import { useNavigate } from 'react-router-dom';
import dataSource from './dataSource';

const AlbumList = (props) => {

	const handleSelectionOne = (albumId, uri) => {
		console.log('Seleted ID is ' + albumId);
		props.onClick(albumId, navigator, uri);
	};

  const handleDeleteAlbum = async (albumId) => {
        try {
            await dataSource.delete(`/albums/${albumId}`);
            props.onDelete();
        } catch (error) {
            console.error("Failed to delete album:", error);
        }
    };

	console.log('props albumList', props);
	const navigator = useNavigate();
	const albums = props.albumList.map((album) => {
		return (
			<Card
				key={album.albumId}
				albumId={album.albumId}
				albumTitle={album.title}
				albumDescription={album.description}
				buttonText='OK'
				imgURL={album.image}
				onClick={handleSelectionOne}
        		onDelete={handleDeleteAlbum}
			/>
		);
	});
	return <div className='container'>{albums}</div>
};

export default AlbumList;