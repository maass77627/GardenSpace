def brands_route
    return [200, { 'Content-Type' => 'application/json' }, [ Brand.all.to_json ]]
end