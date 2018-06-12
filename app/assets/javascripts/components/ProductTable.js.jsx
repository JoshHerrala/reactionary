class ProductsTable extends React.Component {
  constructor(props) {
    super(props);
    //debugger
  }

  render(){
    if (this.props.data){
    	let rows = [];
      for ( var i =0; i < this.props.data.length; i++){
        rows.push(<tr><td key={i} id={i}>{this.props.data[i].name}</td></tr>)
        //tr elements need keys
      }
      //debugger
      return (
    	  <div>
          <table id="product-table">
    	      <tbody>
              { rows }
            </tbody>
          </table>          
    	  </div>
    )} else {return(null)}
  }

}

// id: 4,
// name: "Ducati Monster",
// description: "900cc Monster",
// price: "$4000",
// created_at: Fri, 28 Aug 2015 03:34:07 UTC +00:00,
// updated_at: Fri, 28 Aug 2015 03:41:15 UTC +00:00>
//Product: { this.props.data[0].name}