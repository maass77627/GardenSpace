def plants_route
    return [200, { 'Content-Type' => 'application/json' }, [ Plant.all.to_json ]]
end