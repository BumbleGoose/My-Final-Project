const mongoose = require('mongoose');
const Events = require('./schemas/event-schema');
const Users = require('./schemas/user-schema');
const Groups = require('./schemas/group-schema');
const EventsMessages = require('./schemas/event-message-schema');
const dotenv = require('dotenv');

dotenv.config({
  path: `${__dirname}/.env.test`
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected, seeding.');
  })
  .catch((err) => {
    console.log(err);
  });

const seedUsers = [
  {
    firstName: 'Jane',
    lastName: 'Harrison',
    username: 'janester',
    password: 'jane1234',
    email: 'jane@gmail.com',
    phoneNumber: '07791210455',
    dateOfBirth: '2001-09-18'
  },
  {
    firstName: 'John',
    lastName: 'Smith',
    username: 'JonnyBoy',
    password: 'john1234',
    email: 'john@gmail.com',
    phoneNumber: '07891233455',
    dateOfBirth: '1999-02-30'
  },
  {
    firstName: 'Max',
    lastName: 'Payne',
    username: 'Payney',
    password: 'payne1234',
    email: 'max@gmail.com',
    phoneNumber: '07891233781',
    dateOfBirth: '1989-03-19'
  },
  {
    firstName: 'Susan',
    lastName: 'Thatcher',
    username: 'susu',
    password: 'susan1234',
    email: 'susan@gmail.com',
    phoneNumber: '07811209856',
    dateOfBirth: '2000-10-10'
  },
  {
    firstName: 'Greg',
    lastName: 'Stevens',
    username: 'BigGreg',
    password: 'GregIsGreat123',
    email: 'BigGreg@gmail.com',
    phoneNumber: '07802347146',
    dateOfBirth: '1983-12-01'
  }
];

const seedEvents = [
  {
    title: 'Off Road Biking',
    category: 'outdoors',
    description: 'Riding mountain bikes',
    location: 'Lake District',
    coords: { lat: 53.47223, long: -2.23817 },
    startTime: '2022-09-03T17:07:43.438+00:00',
    endTime: '2022-09-03T18:07:43.438+00:00',
    host: 'janester',
    guests: [],
    active: true,
    group: ''
  },
  {
    title: 'Egg and Spoon race',
    category: 'sport',
    description: 'Hard boiled eggs. No glue.',
    location: 'Canada',
    coords: { Lat: 49.22671, Long: -92.07467 },
    startTime: '2022-09-03T17:07:43.438+00:00',
    endTime: '2022-09-03T18:07:43.438+00:00',
    host: 'janester',
    guests: [],
    active: true,
    group: ''
  },
  {
    title: 'Stamp collecting',
    category: 'hobbies',
    description: 'No casuals, professional hobbyists only',
    location: 'The Bahamas',
    coords: { Lat: 24.41562, Long: -77.64479 },
    startTime: '2022-09-03T17:07:43.438+00:00',
    endTime: '2022-09-03T18:07:43.438+00:00',
    host: 'janester',
    guests: [],
    active: true,
    group: ''
  },
  {
    title: 'rave @ Bowlers',
    category: 'Nightlife',
    description: 'HTID gig in Manchester',
    location: 'Manchester',
    coords: { lat: 53.47245, long: 21.23817 },
    startTime: '2022-09-03T17:07:43.438+00:00',
    endTime: '2022-09-03T18:07:43.438+00:00',
    host: 'susu',
    guests: [],
    active: true,
    group: ''
  },
  {
    title: 'cow tipping',
    category: 'Hobby',
    description: 'Abusing cattle for fun',
    location: 'A field',
    coords: { lat: 58.47345, long: 4.29617 },
    startTime: '2022-09-03T17:07:43.438+00:00',
    endTime: '2022-09-03T18:07:43.438+00:00',
    host: 'susu',
    guests: [],
    active: true,
    group: ''
  },
  {
    title: 'Bowling',
    category: 'casual fun',
    description: 'Hey cousin, wanna go bowling?',
    location: 'Bowling Alley, Leeds',
    coords: { lat: 53.80409, long: -1.58193 },
    startTime: '2022-09-03T17:07:43.438+00:00',
    endTime: '2022-09-03T18:07:43.438+00:00',
    host: 'BigGreg',
    guests: [],
    active: true,
    group: ''
  },
  {
    title: 'Unicycling crash course',
    category: 'sport',
    description: 'Arrive on two wheels, leave on one!',
    location: 'Angola',
    coords: {
      Lat: -16.11928,
      Long: 12.57687
    },
    startTime: '2022-09-03T17:07:43.438+00:00',
    endTime: '2022-09-03T18:07:43.438+00:00',
    host: 'BigGreg',
    guests: [],
    active: true,
    group: ''
  }
];

const seedGroups = [
  {
    title: 'BigGregs Big Fun',
    category: 'hobbies',
    description: 'this is a description',
    members: [ 'susu', 'Payney', 'janester' ],
    admins: []
  },
  {
    title: 'The outdoor people',
    category: 'outdoors',
    description: 'this is a description',
    members: [ 'susu', 'Payney', 'janester' ],
    admins: []
  },
  {
    title: 'We like movies',
    category: 'daytrips',
    description: 'this is a description',
    members: [ 'susu', 'Payney', 'janester' ],
    admins: []
  },
  {
    title: 'BigGregs Big Fun',
    category: 'hobbies',
    description: 'this is a description',
    members: [],
    admins: [ 'BigGreg' ]
  },
  {
    title: 'Film lovers unite',
    category: 'film',
    description: 'Friday film trips!',
    members: [],
    admins: [ susu ]
  },
  {
    title: 'Walking all over',
    category: 'sport',
    description: 'Walking club, we go on weekend trips to the Peak District',
    members: [ 'JonnyBoy', 'Payney' ],
    admins: [ 'JonnyBoy' ]
  }
];

const seedEventMessages = [
  {
    username: 'JonnyBoy',
    message: 'this is a event comment to discuss things about the event',
    eventTag: 'Walking all over'
  },
  {
    username: 'susu',
    message: 'this is a event comment to discuss things about the event',
    eventTag: 'Walking all over'
  },
  {
    username: 'janester',
    message: 'this is a event comment to discuss things about the event',
    eventTag: 'Unicycling crash course'
  }
];

seedDB = async () => {
  await Users.deleteMany({});
  await Events.deleteMany({});
  await Groups.deleteMany({});
  await EventsMessages.deleteMany({});
  await Users.insertMany(seedUsers);
  await Events.insertMany(seedEvents);
  await Groups.insertMany(seedGroups);
  await EventsMessages.insertMany(seedEventMessages);
};

seedDB().then(() => {
  mongoose.connection.close();
});