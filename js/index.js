class Person extends React.Component{
	render(){
		return	<div>
							<h1>Name: {this.props.name}</h1>
							<h2>Old: {this.props.lastName}</h2>
						</div>
	}
}
Person.defaultProps = {
	name: 'Vsevolod',
	lastName: 'Kurochka'
}
ReactDOM.render(<Person />, document.getElementById('person'));
//getElementById('container')

// Button

class Button extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			class: "btn-danger",
			text: 'Кнопка OFF'
		}

		this.click = this.click.bind(this);
	}
	click(e){
		console.log(e);
		var className = (this.state.class == "btn-danger") ? "btn-success" : "btn-danger";
		var text = (this.state.class == "btn-danger") ? "Кнопка ON" : "Кнопка OFF";
		this.setState({
			class: className,
			text: text
		});
	}
	render(){
		return <button onClick={this.click} className={'btn  ' + this.state.class}>{this.state.text}</button>
	}
}

ReactDOM.render(<Button />, document.getElementById('button'));