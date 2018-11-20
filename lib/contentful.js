import { createClient } from 'contentful';

//TODO move to env file
const SPACE_ID = 'b7cn8l5xxoot'
const ACCESS_TOKEN = 'd80747d61faf0fb6ec5c02ead969e63b727631a6c2c1ec53d22d2ab202c1c99f'

const client = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});

export default client;