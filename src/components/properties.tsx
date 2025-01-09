import { faker } from "@faker-js/faker";

function formatUSD(number: number): string {
  return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}


function createImage(picW: number = 600, picH: number = 600) {
  return faker.image.urlPicsumPhotos({width: picW, height: picH})
}

const createProperty = () => {
  return {
    id: faker.string.uuid(),
    image: createImage(300, 300),
    price: formatUSD(Number(faker.commerce.price({ min: 0, max: 1900000 }))),
    title: faker.lorem.words({ min: 2, max: 4 }),
    location: faker.location.streetAddress(false) + ", " + faker.location.city(),
    description: faker.lorem.sentences({ min: 1, max: 2 }),
    beds: faker.number.int({ min: 2, max: 5 }),
    baths: faker.number.int({ min: 2, max: 5 }),
    sqft: faker.number.int({ min: 1500, max: 5500 }),
    images: Array.from({ length: 4}, createImage)
  }
}

const properties = Array.from({ length: 12 }, createProperty);

  export default properties;