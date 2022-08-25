"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Fake users data
const users = [{ id: 1 }, { id: 2 }, { id: 3 }];
function handler(_req, res) {
    // Get data from your database
    res.status(200).json(users);
}
exports.default = handler;
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
//# sourceMappingURL=users.js.map