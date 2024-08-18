class CreateGardeners < ActiveRecord::Migration[5.1]
    def change 
        create_table :gardeners do |t|
            t.string :name
        end
    end
end