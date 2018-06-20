class ProductsTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    if (this.props.data){
    	let rows = [];
      //debugger
      for ( var i =0; i < this.props.data.length; i++){
        //debugger
        //this.props.data[i] = {id: 5, name: "Enfield", description: "Bullet 500", price: "$5000005"}
        rows.push(<tr>{this.makeRow(this.props.data[i])}</tr>)
        //                           ^ SyntaxError: unknown: Unexpected token
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
    return (<td> {row.name}  {row.description} </td>);
  }

}

//{id: 5, name: "Enfield", description: "Bullet 500", price: "$5000005"}

// id: 4,
// name: "Ducati Monster",
// description: "900cc Monster",
// price: "$4000",
// created_at: Fri, 28 Aug 2015 03:34:07 UTC +00:00,
// updated_at: Fri, 28 Aug 2015 03:41:15 UTC +00:00>
//Product: { this.props.data[0].name}