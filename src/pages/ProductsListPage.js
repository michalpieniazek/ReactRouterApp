import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../styles/ProductListPage.css'

const products = ['car', 'bike', 'motorcycle']

const ProductsListPage = () => {

	const list = products.map(product => (
		<li key={product}><NavLink to={`/products/${product}`} >{product}</NavLink></li>
	))

	return (
		<>
			<div className='products'>
				<h2>Lista produktów</h2>
				<ul>
					{list}
				</ul>
			</div>
			<Outlet />
		</>
	)
}

export default ProductsListPage
