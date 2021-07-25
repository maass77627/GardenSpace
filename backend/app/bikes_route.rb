def bikes_route
    return [200, { 'Content-Type' => 'application/json' }, [ Bike.all.to_json ]]
end