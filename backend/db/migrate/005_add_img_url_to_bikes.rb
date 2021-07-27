class AddImgUrlToBikes < ActiveRecord::Migration[5.1]
    def change
        add_column :bikes, :img_url, :string
    end
end