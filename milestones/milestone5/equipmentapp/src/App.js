/**
 * App.js
 * Main application component to control routing
 */
import React, { useState, useEffect } from 'react';
import './App.css';
import dataSource from "./dataSource";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SearchEquipment from "./SearchEquipment";
import NavBar from "./NavBar";
import EditEquipment from "./EditEquipment";
import OneEquipment from "./OneEquipment";

const App = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [equipmentList, setEquipmentList] = useState([]);
  const [currentlySelectedIndex, setCurrentlySelectedIndex] = useState(0);

  // Updates current search phrase for filtering the list
  const updateSearchResults = (phrase) => {
    console.log('Search phrase:', phrase);
    setSearchPhrase(phrase);
  };

  // Loads all equipment data from the DB
  const loadEquipment = async () => {
    try {
      const response = await dataSource.get('/equipment');
      setEquipmentList(response.data);
    } catch (error) {
      console.error('Error loading equipment:', error);
    }
  };

  // Runs on mount to load equipment
  useEffect(() => {
    loadEquipment();
  }, []);

  // Finds selected equipment by ID and updates index
  const updateSingleEquipment = (id, navigate) => {
    const index = equipmentList.findIndex(e => e.equipmentId === id);
    if (index !== -1) setCurrentlySelectedIndex(index);
    navigate('/show/' + index);
  };

  // Filters equipment list based on the search phrase
  const renderedList = equipmentList.filter((equipment) => {
  const phrase = searchPhrase.toLowerCase();
  return (
    searchPhrase === '' ||
    equipment.name.toLowerCase().includes(phrase) ||
    equipment.category.toLowerCase().includes(phrase)
  );
});

  // Reloads equipment list and returns to the main page after editing/creating
  const onEditEquipment = (navigate) => {
    loadEquipment();
    navigate('/');
  };

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          exact
          path='/'
          element={
            <SearchEquipment
              updateSearchResults={updateSearchResults}
              equipmentList={renderedList}
              updateSingleEquipment={updateSingleEquipment}
              onDelete={loadEquipment}
            />

          }
        />
        <Route
          exact
          path='/new'
          element={<EditEquipment onEditEquipment={onEditEquipment} />}
        />
        <Route
          exact
          path='/edit/:equipmentId'
          element={
            equipmentList[currentlySelectedIndex] ? (
              <EditEquipment
                onEditEquipment={onEditEquipment}
                equipment={equipmentList[currentlySelectedIndex]}
              />
            ) : null
          }
        />
        <Route
          exact
          path='/show/:equipmentId'
          element={
            equipmentList[currentlySelectedIndex] ? (
              <OneEquipment
                equipment={equipmentList[currentlySelectedIndex]}
              />
            ) : null
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
