def new_bike_route(bike) 
    bike_brand = Brand.find_or_create_by(name: bike["brand"])
    new_bike = Bike.create(
        model: bike["model"], 
        wheel_size: bike["wheel size"], 
        main_type: bike["type"], 
        sub_type: bike["sub type"], 
        is_ebike: bike["is ebike"], 
        img_url: bike["image url"]
    )
    new_bike.brand = bike_brand
    new_bike.save
end