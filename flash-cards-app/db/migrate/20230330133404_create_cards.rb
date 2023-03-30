class CreateCards < ActiveRecord::Migration[7.0]
  def change
    create_table :cards do |t|
      t.string :front
      t.string :back
      t.string :note
      t.belongs_to :list, null: false, foreign_key: true

      t.timestamps
    end
  end
end
