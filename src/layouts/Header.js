import React from 'react'
import { Routes, Route } from 'react-router-dom'
import '../styles/Header.css'

import img1 from '../images/header1.jpg'
import img2 from '../images/header2.jpg'
import img3 from '../images/header3.jpg'

const Img1 = () => <img src={img1} alt="" />
const Img2 = () => <img src={img2} alt="" />
const Img3 = () => <img src={img3} alt="" />

const Outlet = () => {
	return (<h3>Admin</h3>)
}

const Header = () => {
	return (
		<Routes>
			<Route path="/" element={<Img1 />} />
			<Route path="/products" element={<Img2 />} />
			<Route path="/contact" element={<Img3 />} />
			<Route path="*" element={<Outlet />} />
		</Routes>
	)
}

export default Header