require "active_record"
class Bike < ActiveRecord::Base
    belongs_to :brand
    
    def self.all_brands
        Brand.all
    end

    def self.with_all_brands
        bikes_with_brands = Bike.joins(:brand)
        bikes_with_brands
    end
end