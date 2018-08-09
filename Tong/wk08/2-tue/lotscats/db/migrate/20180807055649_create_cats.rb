class CreateCats < ActiveRecord::Migration[5.2]
  def change
    create_table :cats do |t|
      t.text :url
      t.text :name
      t.text :info

      t.timestamps
    end
  end
end
