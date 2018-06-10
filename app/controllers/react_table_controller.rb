#module API
	class ReactTableController < ApplicationController
	  
	  def index
	    @products = Product.all

	  end
	  
	  def initial_data
	    #single_record 
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
	    monster = Product.where(id: 4).first
	  end
	end

#end

    
    