/**
 * Displays details of selected equipment w/ button linked to edit form
 */
import React from 'react';
import { useNavigate } from "react-router-dom";

const OneEquipment = (props) => {
  const navigate = useNavigate();

  // Navigates to edit page for equipment
  const handleEditClick = () => {
    navigate(`/edit/${props.equipment.equipmentId}`);
  };

  const { name, category, price, weight, isAvailable } = props.equipment;

  return (
    <div>
       <h2 className="text-center mb-4">Equipment Details</h2> 
        <div className="d-flex justify-content-center">
          <div className="card shadow-sm p-4" style={{ maxWidth: "500px", width: "100%" }}>
            <div className='card-body text-center'>
              <h4 className='card-title mb-3'>{name}</h4>
              <p className='card-text'><strong>Category:</strong> {category}</p>
              <p className='card-text'><strong>Price:</strong> ${price}</p>
              <p className='card-text'><strong>Weight:</strong> {weight} lbs</p>
              <p className='card-text'>
                <strong>Available:</strong> {isAvailable ? 'Yes' : 'No'}
              </p>
              <button onClick={handleEditClick} className="btn btn-primary mt-3">
                Edit Equipment
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default OneEquipment;
