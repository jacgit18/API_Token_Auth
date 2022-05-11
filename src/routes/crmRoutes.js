import { 
    addNewContact, 
    getContacts, 
    getContactWithID, 
    updateContact,
    deleteContact 
} from '../controllers/crmController';
import { login, register, loginRequired } from '../controllers/userControllers'


const routes = (app) => {
    app.route('/contacts')
    .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, loginRequired, getContacts)
    
   // POST endpoint
   .post(loginRequired, addNewContact);

   app.route('/contact/:contactId')
   // get specific contact
   .get(loginRequired, getContactWithID)
   
   // put request
   .put(loginRequired, updateContact)

   // delete request
   .delete(loginRequired, deleteContact);

   // registration route
   app.route('/auth/register')
       .post(register);

   // login route
   app.route('/login')
       .post(login);
}


// const jwt = require('jsonwebtoken');



// app.post('/messages', (req, res) => {
//     const token = req.header('Authorization');
//     const userId = jwt.decode(token, '123');
//     const user = users[userId];
//     let msg = {user: user.userName, text: req.body.message};
//     messages.push(msg);
//     res.json(msg);
// });

export default routes;