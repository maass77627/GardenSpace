class CreateBike < ActiveRecord::Migration[5.1]
    def change
        create_table :bikes do |t|
            t.string :model
            t.string :wheel_size
            t.string :main_type
            t.string :sub_type
            t.boolean :is_ebike
        end
    end
end