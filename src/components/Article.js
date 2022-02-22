import React from 'react'

const Article = ({ title, author, text }) => {

	const styles = {
		marginBottom: 30
	}

	return (
		<article style={styles}>
			<h3 style={{
				marginBottom: 3,
				textTransform: "uppercase"
			}}>{title}</h3>
			<span>{author}</span>
			<p style={{ fontSize: 15 }}>{text}</p>
		</article>
	)
}

export default Article
