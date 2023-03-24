import logo from './logo.svg';
import './App.css';
import React from 'react'; 
import {useState} from 'react'; 
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//Each time a new page is done, import it into this file
import Nav from './components/Nav';
import HomePage from './pages/HomePage.js'; 

import LogPage from './pages/LogPage.js'; 
import CreatePage from './pages/CreatePage.js'; 
import EditPage from './pages/EditPage.js'; 
import TopicsPage from './pages/TopicsPage.js'; //Will be the new 'HomePage' 

import GalleryPage from './pages/GalleryPage.js'; 
import StaffPage from './pages/StaffPage';
import OrderPage from './pages/OrderPage.js'; 
import products from './data/products';

import restaurant from './pages/EditPage.js'; 
import setRestaurant from './pages/LogPage.js'

function App() {
  const [restaurant, setRestaurant] = useState([])

  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <h1 id='landingPage'>Brian Hsiang's page 
            <img id='landingPageIMG' src="images/logos/HingSing-LogoOnly-Black-cropped.png"
            alt='My logo' title='My logo'/>
          </h1>
          
        </header>
        <Nav></Nav>
        <main>
          <section>
            {/* For below Route paths, make sure to add to Nav.js or they will not be visible */}
            <Routes> 
              <Route path="/" exact element={<HomePage />}> </Route>

              <Route path="/log" element={<LogPage setRestaurant={setRestaurant} />} />
              <Route path="/add-restaurant" element={<CreatePage />} />
              <Route path="/edit-restaurant" element={<EditPage restaurant={restaurant} />} />
              <Route path="/topics" element={<TopicsPage/>} />
              
              <Route path="/gallery" element={<GalleryPage />}> </Route>
              <Route path="/staff" element={<StaffPage />} > </Route>
              <Route path="/order" element={<OrderPage products = {products}/>} > </Route>
            </Routes>
          </section>
        </main>
        <footer><p><cite>&copy;2022 Brian Hsiang </cite></p></footer>
        {/* <footer><p>©2022 Brian Hsiang</p></footer> replaced w ASCII entity for the copyright symbol*/}
      </BrowserRouter>
    </div>
  );
}

export default App;
