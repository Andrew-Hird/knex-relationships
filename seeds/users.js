exports.seed = function (knex, Promise) {
  return Promise.all([
    knex('users').del(),
    knex('profiles').del()
  ]).then(function () {
    return Promise.all([
      knex('users').insert({name: 'Ambitious Aardvark', email: 'aardvark@example.org'})
        .then(function (ids) {
          return knex('profiles').insert({user_id: ids[0], URL: 'URL', profilePic: 'profilePic'})
          .then(function (ids) {
            return knex('blogs').insert({user_id: ids[0], title: 'title', content: 'blog content'})
          })
        }),
      knex('users').insert({name: 'Bamboozled Baboon', email: 'baboon@example.org'})
        .then(function (ids) {
          return knex('profiles').insert({user_id: ids[0], URL: 'URL', profilePic: 'profilePic'})
          .then(function (ids) {
            return knex('blogs').insert({user_id: ids[0], title: 'title', content: 'blog content'})
          })
        }),
      knex('users').insert({name: 'Curious Capybara', email: 'capybara@example.org'})
        .then(function (ids) {
          return knex('profiles').insert({user_id: ids[0], URL: 'URL', profilePic: 'profilePic'})
          .then(function (ids) {
            return knex('blogs').insert({user_id: ids[0], title: 'title', content: 'blog content'})
          })
        }),
      knex('users').insert({name: 'Dilapidated Duck', email: 'duck@example.org'})
      .then(function (ids) {
        return knex('profiles').insert({user_id: ids[0], URL: 'URL', profilePic: 'profilePic'})
        .then(function (ids) {
          return knex('blogs').insert({user_id: ids[0], title: 'title', content: 'blog content'})
        })
      }),
      // knex('users').insert({id: 99905, name: 'Exuberant Elephant', email: 'elephant@example.org'}),
      // knex('users').insert({id: 99906, name: 'Fascinated Flying Fox', email: 'flying.fox@example.org'}),
      // knex('users').insert({id: 99907, name: 'Generous Gila Monster', email: 'gila.monster@example.org'}),
      // knex('users').insert({id: 99908, name: 'Hilarious Heron', email: 'heron@example.org'}),
      // knex('users').insert({id: 99909, name: 'Intransigent Impala', email: 'impala@example.org'}),
      // knex('users').insert({id: 99910, name: 'Jocular Jerboa', email: 'jerboa@example.org'}),
      // knex('users').insert({id: 99911, name: 'Kafkaesque Kinkajou', email: 'kinkajou@example.org'}),
      // knex('users').insert({id: 99912, name: 'Loquacious Lemur', email: 'lemur@example.org'}),
      // knex('users').insert({id: 99913, name: 'Misanthropic Mongoose', email: 'mongoose@example.org'}),
      // knex('users').insert({id: 99914, name: 'Nonchalant Nyala', email: 'nyala@example.org'}),
      // knex('users').insert({id: 99915, name: 'Ornery Ocelot', email: 'ocelot@example.org'}),
      // knex('users').insert({id: 99916, name: 'Peaceful Pangolin', email: 'panda@example.org'}),
      // knex('users').insert({id: 99917, name: 'Querulous Quokka', email: 'quokka@example.org'}),
      // knex('users').insert({id: 99918, name: 'Resolute Rail', email: 'rail@example.org'}),
      // knex('users').insert({id: 99919, name: 'Senescent Sloth', email: 'sloth@example.org'}),
      // knex('users').insert({id: 99920, name: 'Tumultuous Terrapin', email: 'terrapin@example.org'}),
      // knex('users').insert({id: 99921, name: 'Unassailable Urial', email: 'urial@example.org'}),
      // knex('users').insert({id: 99922, name: 'Voracious Viscacha', email: 'viscacha@example.org'}),
      // knex('users').insert({id: 99923, name: 'Wondering Wombat', email: 'wombat@example.org'}),
      // knex('users').insert({id: 99924, name: 'Xenial Xerus', email: 'xerus@example.org'}),
      // knex('users').insert({id: 99925, name: 'Yielding Yak', email: 'yak@example.org'}),
      // knex('users').insert({id: 99926, name: 'Zaftig Zebu', email: 'zebu@example.org'})
    ]);
  });
};
