class ProductsTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    if (this.props.data){
    	let rows = [];
      //debugger
      for ( var i =0; i < this.props.data.length; i++){
        rows.push(<div>{this.makeRow(this.props.data[i])}</div>)
      }
      return (
    	  <div>
          <table id="product-table">
    	      <tbody>
              { rows }
            </tbody>
          </table>          
    	  </div>
    )} else {return(null)};
  }
  
  makeRow(row){
    //debugger
    Object.keys(row).length
    return (<tr><td>{row.name}</td><td>{row.description}</td><td>{row.price}</td></tr>);
  }

}

//Object.keys(hashname)[0] and Object.values(row)[i] accessing has values
