const propsValues = {
	itemsInBusket: 0,
	title: 'List of smartphones',
	items: [
		{
			name: 'Iphone 7',
			image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/jetblack/iphone7-jetblack-select-2016?wid=300&hei=300&fmt=png-alpha&qlt=95&.v=1472430076339',
			detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam officia, illo quo aspernatur quis provident.'
		},
		{
			name: 'Motorola Moto',
			image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/jetblack/iphone7-jetblack-select-2016?wid=300&hei=300&fmt=png-alpha&qlt=95&.v=1472430076339',
			detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, illum.'
		},
		{
			name: 'Lenovo P780',
			image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/jetblack/iphone7-jetblack-select-2016?wid=300&hei=300&fmt=png-alpha&qlt=95&.v=1472430076339',
			detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate veniam error saepe quas aperiam sequi magni mollitia officia obcaecati iusto, repudiandae quae aliquid.'
		},
		{
			name: 'Samsung Galaxy',
			image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/jetblack/iphone7-jetblack-select-2016?wid=300&hei=300&fmt=png-alpha&qlt=95&.v=1472430076339',
			detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate veniam error saepe quas aperiam sequi magni mollitia officia obcaecati iusto, repudiandae quae aliquid.'
		},
		{
			name: 'Iphone 6S',
			image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/jetblack/iphone7-jetblack-select-2016?wid=300&hei=300&fmt=png-alpha&qlt=95&.v=1472430076339',
			detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate veniam error saepe quas aperiam sequi magni mollitia officia obcaecati iusto, repudiandae quae aliquid.'
		},
		{
			name: 'Samsung Galaxy A5',
			image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/jetblack/iphone7-jetblack-select-2016?wid=300&hei=300&fmt=png-alpha&qlt=95&.v=1472430076339',
			detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate veniam error saepe quas aperiam sequi magni mollitia officia obcaecati iusto, repudiandae quae aliquid.'
		}
	]
}

// List's item
class Item extends React.Component{
	render(){
		return(
			<div className="col-xs-12 col-sm-6 col-md-4">
				<div className="card card-phone">
						<div className="card-header">
							<img className="card-img-top" src={this.props.image}/>
						</div>
					<div className="card-body">
						<h4 className="card-title">{this.props.name}</h4>
						<p className="card-text">{this.props.detail}</p>
						<Button />
					</div>
				</div>
			</div>
		);
	}
}

// List's button
class Button extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			class: "btn-success",
			text: 'Add to busket'
		}
		this.click = this.click.bind(this);
	}
	changeClass(){
		let className, text;

		if(this.state.class == "btn-success"){
			className = "btn-danger";
			text = 'Remove from busket'
			propsValues.itemsInBusket += 1;
		}else{
			className = "btn-success";
			text 			= 'Add to busket';
			propsValues.itemsInBusket -= 1;
		}

		this.setState({
			class: className,
			text: text
		});
	}
	click(){
		this.changeClass();
		printList();
	}
	render(){
		return <button onClick={this.click} className={'btn  ' + this.state.class}>{this.state.text}</button>
	}
}

class List extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			items: this.props.data.items
		}
		this.filterList = this.filterList.bind(this);
	}
	filterList(e){
		let filteredList = this.props.data.items.filter(function(item){
			return item.name.toLowerCase().search( e.target.value.toLowerCase() ) !== -1;
		});

		this.setState({
			items: filteredList
		});

	}
	renderElements(){
		
		if(this.state.items.length > 0){
			return (
				this.state.items.map(function(item){
					return <Item key={item.name} image={item.image} name={item.name} detail={item.detail} />
				})
			)
		}else{
			return (
				<div className="col-12">
					<img className="icon" src="img/icon-sad.svg" />
					<h2>Sorry, we haven't items with this name.</h2>
				</div>
			)
		}
	}
	render (){
		return(
			<div className="jumbotron jumbotron-fluid">
				<div className="container">
					<h1 className="title">{propsValues.title}</h1>
					<div className="lead">
						{checkItemsInBusket()}
					</div>
					<div className="row mb-5">
						<div className="col-12 col-lg-6">
							<div className="input-group">
								<input type="text" onChange={this.filterList} className="form-control" placeholder="Search for..." aria-label="Search for..."/>
							</div>
						</div>
					</div>
					<div className="row">
						{this.renderElements()}
					</div>
				</div>
			</div>
		)
	}
}
function checkItemsInBusket(){
	let item;
	if(propsValues.itemsInBusket > 0) {
		item = <p>Items in busket: <span className="font-weight-bold text-success">{propsValues.itemsInBusket}</span></p>;
	}else{
		item = <p>You don't have any items in the basket. Press the button to add item in the basket.</p>
	}
	return item;
}
function printList(){
	ReactDOM.render(<List data={propsValues} />, document.getElementById('list'));
}
printList();


// JOB
// https://codepen.io/chriscoyier/pen/jqyWXo
const jobValues = {
	title: 'They need you!'
};
class JobView extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="col-12 col-sm-6 col-md-4">
				<div className="card">
					<div className="card-header">{this.props.company}</div>
					<div className="card-body">
						<h4 className="card-title">{this.props.title}</h4>
					</div>
					<ul className="list-group list-group-flush">
						<li className="list-group-item"><i className="material-icons">settings_remote</i> Remote: <span className={(this.props.remote == "true") ? 'text-success font-weight-bold' : 'text-danger font-weight-bold'}>{this.props.remote}</span></li>
						<li className="list-group-item"><i className="material-icons">timeline</i> Term: <span className="font-weight-bold">{this.props.term}</span></li>
					</ul>
					<div className="card-body">
						<a href={this.props.link} className="card-link" target="_blank">More details</a>
					</div>
				</div>
			</div>
		)
	}
}
class Job extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			items: []
		};
	}
	componentDidMount(){
		let that = this;
		fetch(that.props.source)
			.then(function(response){
				return response.json();
			})
			.then(function(data){
				that.setState({
					items: data.jobs
				})
				console.log(that.state.items);
			})
			
			// .then(this.state => this.setState({
			// 	jobs: result
			// }))
	}
	componentWillUnmount(){
		console.log('unmount');
	}
	render(){
		return(
			<div className="jumbotron jumbotron-fluid">
				<div className="container">
					<div className="mb-5">
						<h1 className="mb-1">{jobValues.title}</h1>
						<p>We will take information from this JSON file: <span className="font-weight-bold">{this.props.source}</span></p>
					</div>
					<div className="row">
						{
							this.state.items.map(function(item, i){
								return <JobView
												key={item.hashid}
												title={item.title}
												company={item.company_name}
												link={item.url}
												remote={item.remote}
												term={item.term} />
							})
						}
					</div>
				</div>
			</div>
		)
	}
}
//this.state.jobs.length
// {this.state.items.map(item => <li key={item.company_name}>{item.company_name}</li>)}
/*

*/
ReactDOM.render(<Job source="https://codepen.io/jobs.json" />, document.getElementById('job'));