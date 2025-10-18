import React from "react";

const Card = (props) => {
    const handleEditClick = () => {
        props.onClick(props.equipment.equipmentId, '/edit/');
    };

    const handleDeleteClick = () => {
        if (window.confirm(`Delete equipment: ${props.equipment.name}?`)) {
            props.onDelete(props.equipment.equipmentId);
        }
    };

    return (
        <div className="card" style={{ width: '18rem', margin: '10px' }}>
            <div className="card-body">
                <h5 className="card-title">{props.equipment.name}</h5>
                <p className="card-text">
                    <strong>Category:</strong> {props.equipment.category} <br />
                    <strong>Price:</strong> ${props.equipment.price}
                </p>
                <button onClick={handleEditClick} className="btn btn-secondary" style={{ marginRight: '5px' }}>
                    Edit
                </button>
                <button onClick={handleDeleteClick} className="btn btn-danger">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Card;
