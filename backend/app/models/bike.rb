require "active_record"
require 'pry'
class Bike < ActiveRecord::Base
    belongs_to :brand
    
    def self.all_brands
        # brand_names = Brand.all.map do |brand|
        #     brand.name
        # end
        # brand_names = Brand.all.pluck(:name)
        Brand.all

    end


    # def self.with_all_brands
    #     bikes_with_brands = Bike.all.map do |bike|
    #         [bike.brand: bike]
    #     end 
    #     binding.pry
    # end
end