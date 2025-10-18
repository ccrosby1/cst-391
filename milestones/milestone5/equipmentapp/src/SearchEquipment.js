/**
 * Combines search input and equipment list
 */
import React from "react";
import SearchForm from "./SearchForm";
import EquipmentList from "./EquipmentList";

const SearchEquipment = (props) => {
    // Logs props for debugging and passes event handlers to children
    console.log('props with update single equipment ', props);
    return (
        <div>
            <SearchForm onSubmit={props.updateSearchResults} />
            <EquipmentList 
                equipmentList={props.equipmentList} 
                onClick={props.updateSingleEquipment} 
                onDelete={props.onDelete} 
            />
        </div>
    );
};

export default SearchEquipment;