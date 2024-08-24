require "active_record"
require 'pry'
class Gardener < ActiveRecord::Base
    has_many :plants
    
    


end