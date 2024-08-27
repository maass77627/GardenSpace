require 'pry'

class Application
  
  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)
    # stripped_path = req.path.split("/")[1]

    if req.path.match(/gardeners/) && req.get?

      resp.write Gardener.all.to_json
      
      elsif req.path.match(/gardenerplants/) && req.get?
        name = req.path.split("/gardenerplants/").last
        gardener = Gardener.find_by(name: name)
       resp.write gardener.plants.to_json

    elsif req.path.match(/plants/) && req.get?
       return plants_route

      elsif req.path.match(/plants/) && req.post?
        data = JSON.parse req.body.read
        plant = Plant.create(name: data["name"], description: data["description"], instructions: data["instructions"], image: data["image"], gardener_id: data["gardener_id"])
        resp.write plant.to_json

        # data = JSON.parse req.body.read
        # category = Category.find_by(name: data["category"])
        # item = Item.create(name:data["name"], image_url: data["image"], seller_id: data["seller"]["id"], category_id: category.id, description: data["description"], price: data["price"], condition: data["condition"])
        # return [200, { 'Content-Type' => 'application/json' }, [item.format_item.to_json ]]
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