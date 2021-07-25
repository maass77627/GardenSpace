Brand.destroy_all
Bike.destroy_all

Brand.create!([{
    name: "Canyon"
},
{
    name: "YT"
},
{
    name: "Nukeproof"
},
{
    name: "Trek"
}])


Bike.create!([{
    model: "Mega 275 comp",
    wheel_size: "27.5",
    main_type: "Mountain bike",
    sub_type: "Enduro",
    is_ebike: false,
    brand_id: 3
},
{
    model: "Torque:on",
    wheel_size: "27.5",
    main_type: "Mountain bike",
    sub_type: "Enduro",
    is_ebike: true,
    brand_id: 1
},
{
    model: "Remedy 9.8",
    wheel_size: "27.5",
    main_type: "Mountain bike",
    sub_type: "Enduro",
    is_ebike: false,
    brand_id: 4
},
{
    model: "Izzo",
    wheel_size: "27.5",
    main_type: "Mountain bike",
    sub_type: "Trail",
    is_ebike: false,
    brand_id: 2
}])

p "Created #{Brand.count} brands and #{Bike.count} bikes"