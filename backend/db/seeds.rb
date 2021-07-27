Brand.destroy_all
Bike.destroy_all

Brand.create!([{
    name: "Canyon",
    img_url: "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Library-Sites-canyon-shared/default/dw01de79f0/images/placeholder/video_placeholder_02.png?sw=1920"
},
{
    name: "YT",
    img_url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEX///8AAAD5+flSUlL8/Pz19fXR0dFfX19oaGhiYmLs7Ozo6OhsbGzv7+++vr74+PilpaVAQEBaWlri4uJ2dna4uLhJSUkYGBgiIiLY2Ng5OTkzMzMqKip/f3+IiIjW1tbExMSZmZmvr695eXkODg6RkZGOjo5FRUUnJyenp6fKyspNTU0bGxu/1pMvAAAJGklEQVR4nO2diXqiMBCAua0gWkWtt2Ld7bb2/Z9vzYEiR2a4BP3m32+tVkkZkkzmCmoaQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEUYmRZRmaEXswjLtfjCx8W0ayrawGa33LgM9u9tXrmW8mf+hP+MOkf/nBH8RbB6yAs3PsKEWDNb5lBvBpzXWIDx8n4A/YUv1sEefl/wObGaME9DcPkCjBBHVmDtzQH0w7ZvMCpXBREmoh3NIBbuWzaWkymOEE1LQ+2NQJnIpdnYQCewE2tgKaCB4gUBKzwDqGmIoDZQMjWCPXzgI5CQVHuMGj6vhd8wKlGBYREDMV9WX+0bPm5Unxt5iAmrECm1wZeQcvHyBQkl5BAVGqIm8qWvDVqZ1fr7CEmJH2nn3ktnmBUuyLC6hpU7jdzKn43rw8KVBGVgrEYPvIOKyNlbD4JBR4cNNm6iD7o3mBkmRdaBxlpuK5eYFSOKUl1P7CrSemeBuTMEfhoUCsivdqGmHu1Y7afoRw4T8Qn+X+b/MCJfk3qiQhZirGzKVe8wKlUBiPOBA29NXk/dO8PCm+qwqI8YM+pNtyeIBASfqVBUSt4ML1tJuXJ8W64iQUIOIRLHxgrZsXKEUpczQNIqY0Q9nbO1vFElbEY83zfW8UXP6JJ/UIiAkS6y4iKjDPdSg5b2ADH7VJlCSAY7vjE+IqKP8I4hKhg4XFGcJ/ver5IayhXXMCooLEEOpgpjUGG8BF7MtifVUV0FRPwgHcQqFgYXGqLnYntZJATIMGJ6EAoQjKn58PN4CP2JcmrCKgWknY8BwoErEvTQXHYW4rW4at+2IR+7J4pSMwC/UkRHhoBSP2ZdmXlVB9fh6c6SoasS9NyVAvsFLDK2HZYGEJEPmaNMBKDU/CjXoW10pQJg6jVhKIlbAmFwlHidy1eiV0YfVVJVhYgsKpT2Clhsd9tWBhCWC9cAewUodgA+Uj9mWx4YKi+PmpJyHCZaocLCxOIV8RWKlht/nBk1AQ4gUEVkI4bvHwSSiYYAWcq9uB3ZWN2qlsDA9ZkrdQ59YRk/Ah9nbJc2OoJ6EN57Uad3rzCTECApMQLhN4gNObD2IqAkoCVskrZKFuMyCqY9VqBs6GAE5l4yCmosqps+B0/+FBkuQSwiIqFAVs3rY6CTkGHLbJXy3gSYgrJW8WG5MqygYOHmK3AzQLIuWbs2DA/smDIk8QISxi5pnCx4WPFiUHxFTM8p7gvueRHcuvUOpUFz4cgkh7wHDNzcqw99+f600XhiqiiiGp9REr4ZmbE41mC/GEsIiJVRFRKsf5aUegNLATe+8CIYN1ZgvBixwQBmo8IuzjSsDDR2SasBTLv3Of5ATs+frtgBKNg0idXpViqOu9P3sgpW3WUudUJ3BQN3KEvO3Qt6Aq2/cujVCBAWfH7nxF5X6TdXdUTAyEfoxNRWVdifnANFMRvmERD9cPqyZh9WLRpoCrYa5bMhWKafzQNFoxfLDysi9juwo7b9DRESoAd6tFXZhrlZ5aDI6iCNUCRtsxc+Mz45YjawiUBmoUO811DcvtzHosrsLi3EjjO8jJPa4OrZ46FkW1zUF+JCcmYJbYHdkKucbYp/xAznaMrgRlEOSsimv5drYXsu7wIpjCzl4VpS/kZpqv204vgikyDVQZqLEye7i7ZloOYf4YzbLW2k4vlSGd9pRjNMta23XO1UWQco2kMZOxZeikvO1Ed0lsyYwCwumNRedOuroY7ldFacyks2m759Khd8S7S1Y0pbcydCFgX5pYFYms7TWSk7PfiexgebyoWm0jzZWktfawqu3GiJY+qSwTLtOqMxmJCoipKJ3C0X0BYrdjFWjYxDvJ5/eu8RM5EkqYBSPXuzAu3xPEKrDMohjwncv0ZI6EmlAI48attSc109TEsjab1xmhMWImXEfS8jVzM8MXw+7lzGrAvuZ6Jy85QmNlF88Q7y1DtHHy1LG0fG1EN/3qv9IieMf4tcy0NCIvPH7VERplMaZP7uoqEHdD6XrSswrMZXqalFIZmMv0zNE0kOVlEXzqaBqEvdDPrzxCWfLidRdBzqxr1ZN1s5y87iIoeGkVQzwj/ItrxH9LuwUqks8sK/5SvBj5WnScFf9M9EK8NNyWwx8hWxf6S+046b/1rlsI3plB+vM50jSHZWG87WQS8tpEv3cxdJw39nT5pW9HWtDrvfUnu4sk4WTCzdgDCwj4016PfyeOP9EnLe1YlwxXthbovjbszfXBNRozZXnDGUvhD1mCzdG3W3EfTpelTB1evHCafk8uFvpgoJv9kN1o6G3Hs4rvTH7393LB2PUye7Nzu9afcQq0kKdg9rHv9OASDvXLuQ7ZHVSdMduXwfrG1dkbv+x3evTh84E9emNP+2Z3B39nrflfInkcrNq3jd5CTaTLnNj9D0Qfji8nfZVQc9hNSngf/rBnw3P04TlfXrxxoDlftpTQWwvJ+G9a5uesid5w1kkJt4PvmITuOpB9yCVc6pEGiUk4HyX7cNF+PYNr/hVFT05ylB4/j6uYhPb8IPtwyG85c4pubxVJ6Gl/mHCiDzdH58Augblq7cYRVwbyNk7O+qbWRR9ODT04XCW0zCGT0JIvL/rpJPpHSrge9DZMGYk+ZLUATG8tf6vcUr4ehlJlOLE7ckkJtUF4k3DENIrL6r2HYgN0YIpelxJu+mu+inAJ3dVyJJqze/AXLzXMMpIwOUovEv7ow6l2nYdLKeHPQnwq+ODdIyVceRbfcyglvOnQ1qM9y4346fxL96Gmb9n5cgn5lfDZLvSj/MoIPm7jmmbH8lNilMaSxZ9tO5v7vD48Tlm85tqHPaaQDDZUt9EpTw7s8SbhNxvSd6sFb6xtCZ1f+TNjlF5GJauAdtaeM+WKQ9uZo+WJDUZnaBxOXE9GozTQfsa31eKwdy7vBgfb1dvOW0XGifN7q6UcsMt+ZIpjzkfprYrG1he8W7WjvpEpKVGoz5bLgPXcO+tIXnQUsiMX1yrx1jCkNrdja3PAxpjLrr3HHmzH2UeT1AuPfFUxhqGsHNqLK7McaRZ76rF2rKXjOEyHOu/HZyxCJQiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAjiZfkPXKx/ZqkQp5gAAAAASUVORK5CYII="
},
{
    name: "Nukeproof",
    img_url: "https://cdn.shopify.com/s/files/1/0438/3296/7322/files/nukeproof-logo-1200x628_801c26a8-269b-4cfa-90a5-230aa6891efd.png?v=1602664161"

},
{
    name: "Trek",
    img_url: "https://i.pinimg.com/736x/50/09/df/5009df810c829ad42308645bba4d0dbb.jpg"
}])


Bike.create!([{
    model: "Mega 275 comp",
    wheel_size: "27.5",
    main_type: "Mountain bike",
    sub_type: "Enduro",
    is_ebike: false,
    brand_id: 3,
    img_url: "https://p.vitalmtb.com/photos/products/19177/photos/24726/s1600_2017_Nukeproof_Mega_275_Comp.jpg?1499930986"
},
{
    model: "Torque:ON 8",
    wheel_size: "27.5",
    main_type: "Mountain bike",
    sub_type: "Enduro",
    is_ebike: true,
    brand_id: 1,
    img_url: "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dwbb26dfeb/images/full/full_2021_/2021/full_2021_torque-on-8_2700_gn_P5.png?sw=661&sh=661&sm=fit&sfrm=png"
},
{
    model: "Remedy 9.8",
    wheel_size: "27.5",
    main_type: "Mountain bike",
    sub_type: "Enduro",
    is_ebike: false,
    brand_id: 4,
    img_url: "https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/11/2018/01/trek-remedy-98-2018-mountain-bike-black-EV311972-8500-1-601x400.jpg"
},
{
    model: "Izzo",
    wheel_size: "29er",
    main_type: "Mountain bike",
    sub_type: "Trail",
    is_ebike: false,
    brand_id: 2,
    img_url: "https://p.vitalmtb.com/photos/products/29910/photos/59788/s1600_photo_977934.jpg?1587150716"
}])

p "Created #{Brand.count} brands and #{Bike.count} bikes"