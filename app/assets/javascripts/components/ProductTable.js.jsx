class ProductsTable extends React.Component {
  constructor(props) {
  	debugger
  	super(props);
  }

  render(){
    if (this.props.data){
    	return (
    	  <div>
    	  Product: { this.props.data.name}
    	  </div>
    )} else {return(nul)}
  }

}