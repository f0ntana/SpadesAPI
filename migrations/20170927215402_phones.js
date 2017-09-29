
exports.up = (knex) => knex.schema.createTable('phones', (table)=>{
  table.increments('id').primary().serial()
  table.string('country_code')
  table.string('regional_code')
  table.string('number')
  table.integer('id_user').references('users')
  table.timestamps()
})
  

exports.down = (knex) => knex.dropTable('phones')