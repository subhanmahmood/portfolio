var admin = require("firebase-admin");

var serviceAccount = require("/subhanio-firebase-admin.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://subhanio-default-rtdb.europe-west1.firebasedatabase.app"
});

const auth = admin.auth()
module.exports = { admin, auth }