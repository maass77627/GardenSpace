class Application
  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)
    if req.path.match(/brands/) 
      return brands_route
    elsif req.path.match(/bikes/)
       return bikes_route
    else
      resp.write "Path Not Found"
    end
    resp.finish
  end
end
