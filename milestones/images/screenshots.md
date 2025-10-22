# Project Visuals & UML Diagrams

This page contains all visual documentation and diagrams related to the milestone project.
  
---

## Sitemap
![Sitemap Diagram](sitemap.png)
    - Diagram braking down the general structure of the front end application(s)

---

## Wireframes

### Home Page
![Home Wireframe](home.png)
    - Home page of the site to welcome users

### Search Page
![Search Wireframes](search.png)
    - Displays list of all inventory items with search functionality to enable dynamic filtering

### Add/Edit Page
![Add/Edit Wireframes](add.png)
    - Reusable page to allow for editing existing items or creating new items

### Details Page
![Details Wireframes](details.png)
    - View to present all relevant data on a selected item

---

## Database Design
![ER Diagram](er.png)
  - The Equipment table in the database, used to represent individual equipment itmes

---

## Class Diagrams

### Express APIs
 - Equipment Class  
  ![Equipment UML](equipment.png)
    - The object model created from the database response and returned through the API calls
  
 - EquipmentController  
  ![EquipmentController UML](controller.png)
    - The main API controller used to expose CRUD operations externally
  
 - EquipmentDAO  
  ![EquipmentDAO UML](dao.png)
    - Data Access Object used to handle the actual database interactions

---

### Angular Front-End
 - API Service  
  ![equipment-service UML](equipment-service.png)
    - This class is used to handle API calls to the backend and return formatted objects
  
 - ListEquipment  
  ![list-equipment UML](list-equipment.png)
    - This component displays a list of equipment items to the main view
  
 - EditEquipment  
  ![edit-equipment UML](edit-equipment.png)
    - Form component for updating existing equipment items
  
 - DeleteEquipment  
  ![delete-equipment UML](delete-equipment.png)
    - Component to handle deletion of a component, includes confirmation prompt and cancel button
  
 - CreateEquipment  
  ![create-equipment UML](create-equipment.png)
    - Form component for creating new equipment items

---

### React Front-End
 - App.js  
  ![Main component UML](App-js.png)
    - The main view of the application and establishes routing
  
 - EquipmentList.js  
  ![Equipment List UML](equipment-list-js.png)
    - This component handles the creation of equipment cards to populate the main view of the inventory
  
 - EditEquipment.js  
  ![Edit/Create form UML](edit-equipment-js.png)
    - A reusable component used to both edit existing equipment and create new equipment
  
 - SearchForm.js  
  ![Search Form UML](search-form-js.png)
    - This form provides dynamic search functionality to the React front-end
  
