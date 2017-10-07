class Person extends React.Component{
	render(){
		return	<div>
							<p>Name: {this.props.name}</p>
							<p>Old: {this.props.lastName}</p>
						</div>
	}
}
Person.defaultProps = {
	name: 'Vsevolod',
	lastName: 'Kurochka'
}
ReactDOM.render(<Person />, document.getElementById('container'));
//getElementById('container')