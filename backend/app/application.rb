require 'pry'

class Application
  
  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)
    # stripped_path = req.path.split("/")[1]

    if req.path.match(/gardeners/) && req.get?

      resp.write Gardener.all.to_json
      
      elsif req.path.match(/gardenerplants/) && req.get?
        id = req.path.split("/gardenerplants/").last
        gardener = Gardener.find(id)
       resp.write gardener.plants.to_json

    elsif req.path.match(/plants/)
       return plants_route
     
    else
      resp.write "Path Not Found"
    end
    resp.finish
  end
end

# item_name = req.path.split("/items/").last
#    if item = @@items.find{|item| item.name == item_name}
#      resp.write item.price

#