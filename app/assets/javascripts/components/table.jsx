class Table extends React.Component {
  constructor(props) {
  	super(props);
    this.getInitialData = this.getInitialData.bind(this)
    this.state = this.getInitialData
  }

  componentDidMount() {
  	this.getInitialData()
  }

  getInitialData(){
    jQuery.ajax({
      type: "GET",
      url: "api/react_table/initial_data",
      dataType: 'json',
      success: (data) => {
      	this.setState({data: data})
      },
      error: (error) => {
      	this.handleError(error.responseJSON.errors)
      }
    });

  }

  render(){
    debugger
    if (this.state){
      let rows = [];
      //debugger
      for ( var i =0; i < this.state.data.length; i++){
         let rowID = `row${i}`
         let cell = []
         for (var ci = 0; ci < Object.keys(this.state.data[i]).length; ci++){
            let cellID = `cell${i}-${ci}`
            //debugger
            cell.push(<td key={cellID} id={cellID}>{Object.values(this.state.data[i])[ci]}</td>)
         }
        rows.push(<tr key={i} id={rowID}>{cell}</tr>)
      }
      return (
        <div>
          <table id="product-table">
            <tbody>
              <tr><th>Product ID</th><th>Name</th><th>Description</th><th>Price</th></tr>
              { rows }
            </tbody>
          </table>          
        </div>
    )} else {return(null)};
  }


  // render(){
  //   const message = 'There is no data to display';
  //   return(
  //     <div>
  //     {this.state && this.state.data ? <ProductsTable data={this.state.data} /> : message}
  //     </div>
  //   )
  // }


}
  






















 



