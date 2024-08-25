require "active_record"
require 'pry'
class Gardener < ActiveRecord::Base
    has_many :plants

    @@all = []

    def initialize(name)
        @name = name
        @@all << self
    end
    
    


end