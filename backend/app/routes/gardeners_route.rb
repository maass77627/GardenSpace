def gardeners_route
    return [200, { 'Content-Type' => 'application/json' }, [ Gardener.all.to_json ]]
end