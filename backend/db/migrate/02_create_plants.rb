class CreatePlants < ActiveRecord::Migration[5.1]
    def change
        create_table :plants do |t|
            t.string :name
            t.string :type
            t.string :description
            t.string :instructions
            t.integer :gardener_id
        end
    end
end