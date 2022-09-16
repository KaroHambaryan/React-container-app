function Book({id, title,author, pic}) {
	return (
		<div>
			<img src={pic} alt="altPhoto" />
			<h5>{title}</h5>
			<p>{author}</p>
		</div>
	);
}

export default Book;