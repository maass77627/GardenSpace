class Application
  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)
    if req.path.match(/brands/) 
      return brands_route
    elsif req.path.match(/bikes/)
       return bikes_route
    elsif req.path.match(/brand/)
      id = req.path.split("/").last
      return brand_by_id_route(id)
    elsif req.path.match(/new_bike/)
      new_bike_route(req)
    else
      resp.write "Path Not Found"
    end
    resp.finish
  end
end
