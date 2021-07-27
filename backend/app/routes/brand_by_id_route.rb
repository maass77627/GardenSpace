def brand_by_id_route(brand_id)
    return [200, { 'Content-Type' => 'application/json' }, [ Brand.find(brand_id).to_json ]]
end