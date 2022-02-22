import React from 'react'
import { useParams } from "react-router-dom";

const ProductPage = () => {
	let params = useParams();
	console.log(params)
	return (
		<div>Strona produktu: {params.name}</div>
	)
}

export default ProductPage
