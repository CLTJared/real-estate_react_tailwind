import { faker } from "@faker-js/faker";

function formatUSD(number: number) {
  return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}


function createImage() {
  return faker.image.urlPicsumPhotos({width: 300, height:300})
}

const createProperty = () => {
  return {
    id: faker.string.uuid(),
    image: createImage(),
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

// const image = Array.from({length: 12 }, createImage);

// const properties = [
//     {
//       id: 1,
//       image: image[0],
//       price: "$950,000",
//       title: "Elegant Coastal Villa",
//       location: "123 Luxury Lane, Beverly Hills",
//       description:
//         "An elegant coastal villa with panoramic ocean views, featuring a spacious terrace and luxurious interiors.",
//       beds: 4,
//       baths: 3,
//       sqft: 2800,
//       images: [image[2], image[3], image[4], image[5]],
//     },
//     {
//       id: 2,
//       image: image[1],
//       price: "$1,450,000",
//       title: "Beachfront Paradise",
//       location: "456 Beach Drive, Malibu",
//       description:
//         "A stunning beachfront property with direct access to the sand, perfect for sunbathing and water sports.",
//       beds: 5,
//       baths: 4,
//       sqft: 3500,
//       images: [image[4], image[0], image[8], image[6]],
//     },
//     {
//       id: 3,
//       image: image[2],
//       price: "$850,000",
//       title: "Modern Urban Loft",
//       location: "789 City Center, Downtown",
//       description:
//         "A modern loft in the heart of the city, featuring high ceilings and an open floor plan with stylish finishes.",
//       beds: 3,
//       baths: 2,
//       sqft: 2000,
//       images: [image[2], image[5], image[4], image[0]],
//     },
//     {
//       id: 4,
//       image: image[3],
//       price: "$1,100,000",
//       title: "Charming Mountain Retreat",
//       location: "321 Highland Road, Hollywood Hills",
//       description:
//         "A charming retreat nestled in the mountains, offering breathtaking views and a cozy fireplace for winter nights.",
//       beds: 4,
//       baths: 3.5,
//       sqft: 3200,
//       images: [image[1], image[3], image[4], image[11]],
//     },
//     {
//       id: 5,
//       image: image[4],
//       price: "$1,800,000",
//       title: "Smart Luxury Home",
//       location: "567 Tech Avenue, Silicon Valley",
//       description:
//         "A state-of-the-art smart home with cutting-edge technology and eco-friendly features, designed for modern living.",
//       beds: 6,
//       baths: 5,
//       sqft: 4500,
//       images: [image[7], image[3], image[4], image[9]],
//     },
//     {
//       id: 6,
//       image: image[5],
//       price: "$700,000",
//       title: "Family-Friendly Haven",
//       location: "890 Suburban Lane, Santa Monica",
//       description:
//         "A family-friendly haven with a large backyard, perfect for kids and pets, located in a quiet neighborhood.",
//       beds: 3,
//       baths: 2,
//       sqft: 2550,
//       images: [image[10], image[3], image[4], image[7]],
//     },
//     {
//       id: 7,
//       image: image[6],
//       price: "$720,000",
//       title: "Cozy Cottage Retreat",
//       location: "890 Suburban Lane, Santa Monica",
//       description:
//         "A cozy cottage retreat with a charming garden, ideal for relaxing weekends and family gatherings.",
//       beds: 3,
//       baths: 2,
//       sqft: 2500,
//       images: [image[4], image[6], image[11], image[0]],
//     },
//     {
//       id: 8,
//       image: image[7],
//       price: "$740,000",
//       title: "Stylish Family Home",
//       location: "890 Suburban Lane, Santa Monica",
//       description:
//         "A stylish family home with modern amenities and a spacious layout, perfect for entertaining guests.",
//       beds: 3,
//       baths: 2,
//       sqft: 2400,
//       images: [image[2], image[3], image[4], image[8]],
//     },
//     {
//       id: 9,
//       image: image[8],
//       price: "$760,000",
//       title: "Chic Suburban Retreat",
//       location: "890 Suburban Lane, Santa Monica",
//       description:
//         "A chic suburban retreat with a contemporary design, featuring a large deck for outdoor entertaining.",
//       beds: 3,
//       baths: 2,
//       sqft: 2150,
//       images: [image[3], image[6], image[4], image[10]],
//     },
//     {
//       id: 10,
//       image: image[9],
//       price: "$780,000",
//       title: "Elegant Family Residence",
//       location: "890 Suburban Lane, Santa Monica",
//       description:
//         "An elegant family residence with spacious living areas and a beautifully landscaped yard, perfect for family life.",
//       beds: 3,
//       baths: 2,
//       sqft: 2850,
//       images: [image[1], image[3], image[4], image[11]],
//     },
//     {
//       id: 11,
//       image: image[10],
//       price: "$800,000",
//       title: "Charming Craftsman Home",
//       location: "890 Suburban Lane, Santa Monica",
//       description:
//         "A charming craftsman home with original woodwork and a welcoming front porch, ideal for family gatherings.",
//       beds: 3,
//       baths: 2,
//       sqft: 2200,
//       images: [image[0], image[3], image[4], image[6]],
//     },
//     {
//       id: 12,
//       image: image[11],
//       price: "$820,000",
//       title: "Spacious Family Retreat",
//       location: "890 Suburban Lane, Santa Monica",
//       description:
//         "A spacious family retreat with ample room for everyone, featuring a large backyard and a cozy atmosphere.",
//       beds: 3,
//       baths: 2,
//       sqft: 2600,
//       images: [image[4], image[3], image[4], image[7]],
//     },
//   ];

  export default properties;