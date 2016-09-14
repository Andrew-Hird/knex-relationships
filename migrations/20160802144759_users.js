exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function (table) {
      table.increments('id').primary()
      table.string('name')
      table.string('email')
    }),
    knex.schema.createTable('profiles', function (table) {
      table.increments('id').primary()
      table.integer('user_id').references('users.id')
      table.string('URL')
      table.string('profilePic')
    })
  ])
}

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users'),
    knex.schema.dropTable('profiles')
  ])
}
