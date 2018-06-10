module API
	class ReactTableController < ApplicationController
	  
	  def index
	    #@products = Product.all
	  end
	  
	  def initial_data
	    render json: test_string, root: false, status: 200   
	  end  

	  def main_table
	    render json: test_string, root: false, status: 200 
	  end
	  
	  private
	  
	  def test_string
	    "witness my stringyness"
	  end

	  def your_method_here
	    "do things"
	  end
	end

end

    
    