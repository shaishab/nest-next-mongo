import type { NextApiRequest, NextApiResponse } from 'next';
import type { User } from '../user/interfaces';

// Fake users data
const users: User[] = [{ id: 1 }, { id: 2 }, { id: 3 }]

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  // Get data from your database
  res.status(200).json(users)
}

// export default function handler(_req: NextApiRequest, res: NextApiResponse) {
//   // Get data from your database
//   console.log('Called UI api========');

//   const parseJSON = (response) => (response.json ? response.json() : response);
//   return fetch('http://localhost:3000/user/users', {
//     method: 'GET'
//   })
//     .then((response) => {
//       console.log('After fetch=======', response);
//       if (response.status == 200) {
//         // console.log('response body========', response.body);
//         return res.send(parseJSON);
//       } else {
//       }
//     })
//     .catch((err) => {
//       console.log('After fetch error========', err);
//       return res.status(500).json(err);
//     });
// }
