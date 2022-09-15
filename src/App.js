import React from 'react';
import './App.css';

class App extends React.Component {

	state = {
		books: []
	}

	componentDidMount() {
		fetch("data/books.json")
			.then(response => response.json())
			.then(data => {
				this.setState({ books: data.items })
			})
	}

	render() {
		const { books } = this.state
		console.log(books);
		return (
			<div id='main'>
				<h1> Welcome to Book Store </h1>
				<div id='books'>
					{
						books.map((elm, index) => {
							return (
								<div key={elm.id}>
									<img src={elm.pic} alt="altfoto" />
									<h5>{elm.title}</h5>
									<p>By { elm.author }</p>
								</div>
							);
						})
					}
				</div>
			</div>
		);
	}
}

export default App;
