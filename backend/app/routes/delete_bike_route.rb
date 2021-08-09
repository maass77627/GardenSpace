def delete_bike_route(req)
    bike_id = req.path.split('/').last.to_i()
    Bike.find(bike_id).destroy

end