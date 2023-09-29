import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from './Context';
import Home from './Pages/Home/Home';
import About from './Pages/About/About'
import BookDetails from "./Component/BookDetails/Bookdetails";
import BookList from "./Component/BookList/BookList";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='book' element={<BookList />} />
        <Route path='book/:id' element={<BookDetails />} />


      </Routes>
    </BrowserRouter>
  </AppProvider>
);

