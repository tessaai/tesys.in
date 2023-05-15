import React from 'react';
import './App.css'; 
import styled from "styled-components"
import Navbar from './Components/Navbar/'; 
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import About from './Components/About/about';
import Blogs from "./Components/Blogs/blogs";
import Work from './Components/Work/work';
import Services from './Components/Services/services';
import Method from './Components/Method/method';
function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/About'  element={ <About />} />
		<Route path='/about' element={<About/>} />
		<Route path='/Method' element={<Method/>} />
		<Route path='/Blogs' element={<Blogs/>} />
		<Route path='/Services' element={<Services/>} />
    <Route path='/Work' element={<Work/>} />
	</Routes>
	</Router>
);
}
export default App;
