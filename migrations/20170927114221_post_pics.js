'use strict'

exports.up = knex => {
  table.createTable('post_pics', (table)=>{
    table.increments('id').primary().serial()
    table.string('pic').notNullable()
    table.integer('post_id').references('post.id')
    table.timestamps()
  })
}

exports.down = knex => knex.dropTable('post_pics')