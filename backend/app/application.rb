require 'pry'

class Application
  
  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)
   

    if req.path.match(/gardeners/) && req.get?
     return gardeners_route
     

    elsif req.path.match(/gardeners/) && req.post?
      data = JSON.parse req.body.read
        gardener = Gardener.create(name: data["name"])
        resp.write gardener.to_json
      
    elsif req.path.match(/gardenerplants/) && req.get?
        name = req.path.split("/gardenerplants/").last
        gardener = Gardener.find_by(name: name)
       resp.write gardener.plants.to_json

      elsif req.path.match(/gardenerplants/) && req.delete?
        array = req.path.split("/")
        name = array[2]
        id = array[3]
          # name = req.path.split("/gardenerplants/").last.slice(0,5)
          # id = req.path.split("/gardenerplants/").last
         # binding.pry
         gardener = Gardener.find_by(name: name)
         gardener.plants.delete_if {|p| p.id == id}
      #  binding.pry
       resp.write gardener.plants.to_json

    elsif req.path.match(/plants/) && req.patch?
      data = JSON.parse req.body.read
      plant_id = req.path.split("/plants/").last
      Plant.update(plant_id, gardener_id: data["gardener_id"])
      plant = Plant.find(plant_id)
       resp.write plant.to_json


    elsif req.path.match(/plants/) && req.get?
       return plants_route

      elsif req.path.match(/plants/) && req.post?
        data = JSON.parse req.body.read
        plant = Plant.create(name: data["name"], description: data["description"], instructions: data["instructions"], image: data["image"], gardener_id: data["gardener_id"])
        resp.write plant.to_json

      elsif req.path.match(/plants/) && req.delete?
        id = req.path.split("/plants/").last
        plant = Plant.find(id)
        plant.delete

       
    else
      resp.write "Path Not Found"
    end
    resp.finish
  end
end

