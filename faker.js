let faker = require('faker')

let db = {
  users: []
}
for (let i = 0; i < 10; ++i) {
  db.users.push({
    id: i + 1,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    company_name: faker.company.companyName(),
    comment: faker.lorem.sentences(),
    country: faker.address.country(),
    image: faker.image.imageUrl(),
    create_at: faker.date.past()
  })
}

console.log(JSON.stringify(db))
