import React from 'react'
import { Navigate } from 'react-router-dom'

const permission = true

const AdminPage = () => {
	return (
		<>
			{permission ? (<h3>Witaj w panelu</h3>) : (<Navigate to='/login' />)}
		</>
	)
}

export default AdminPage
