class ProductsTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    if (this.props.data){
    	let rows = [];
      //debugger
      for ( var i =0; i < this.props.data.length; i++){
         let rowID = `row${i}`
         let cell = []
         //debugger
         for (var ci = 0; ci < Object.keys(this.props.data[i]).length; ci++){
            let cellID = `cell${i}-${ci}`
            //debugger
            cell.push(<td key={cellID} id={cellID}>{Object.values(this.props.data[i])[ci]}</td>)
         }
        rows.push(<tr key={i} id={rowID}>{cell}</tr>)
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
