class AddBrandIdToBikes < ActiveRecord::Migration[5.1]
    def change 
        add_column :bikes, :brand_id, :integer
    end
end