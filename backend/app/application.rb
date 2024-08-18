class Application
  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)
    stripped_path = req.path.split("/")[1]

    if req.path.match(/gardeners/) 
      return gardeners_route
    elsif req.path.match(/plants/)
       return plants_route
    else
      resp.write "Path Not Found"
    end
    resp.finish
  end
end
