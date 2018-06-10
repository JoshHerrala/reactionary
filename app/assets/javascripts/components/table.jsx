class Table extends React.Component {
  constructor(props) {
  	super(props);
  	this.getInitialData = this.getInitialData.bind(this)
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
    return(
      <div>
      {this.state && this.state.data ? <ProductsTable data={this.state.data} /> : null}
      </div>
    )
  }
}
  






















 



