// import { faker } from "@faker-js/faker";
import { faker } from "@faker-js/faker";

const Data =  [
    {
        author: faker.internet.userName(),
        timeAgo :"Today at 4:45 PM",
        comment : "Nice Blog Post!",
        src : faker.image.animals()
    },
    {
        author: faker.internet.userName(),
        timeAgo:"Today at 6:00 AM",
        comment:"It's awsome... ",
        src : faker.image.animals()
    },
    {
        author: faker.internet.userName(),
        timeAgo:"Yesterday 8:30 PM",
        comment:"I like the subject.",
        src : faker.image.animals()
    }
]

export default Data; 