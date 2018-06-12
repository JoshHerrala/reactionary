module Api
	class ReactTableController < ApplicationController
	  def index
	    @products = Product.all
	  end
	  
	  def initial_data
	    #binding.pry
	    render json: single_record, root: false, status: 200   
	  end  

	  def main_table
	    render json: test_string, root: false, status: 200 
	  end
	  
	  private
	  
	  def test_hash
	    {:id => 12345, :name => "bassomatic"}
	  end

	  def single_record
	    monster = Product.all.first(2)
	  end

	end

end

    
    