class CreateCars < ActiveRecord::Migration
  def change
    create_table :cars do |t|
      t.string :name
      t.float :distance
      t.string :estimate
      t.integer :high_estimate
      t.integer :low_estimate
      t.integer :duration
      t.float :surge_multiplier
      t.string :currency_code
    
      t.timestamps null: false
    end
  end
end
