import React from 'react'
import { Routes, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage.js'
import ProductPage from '../pages/ProductPage.js'
import ProductsListPage from '../pages/ProductsListPage.js'
import ContactPage from '../pages/ContactPage.js'
import AdminPage from '../pages/AdminPage.js'
import ErrorPage from '../pages/ErrorPage.js'

const Page = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/products" element={<ProductsListPage />}>
					<Route path="/products/:name" element={<ProductPage />} />
				</Route>

				<Route path="/contact" element={<ContactPage />} />
				<Route path="/admin" element={<AdminPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>

		</>
	)
}

export default Page