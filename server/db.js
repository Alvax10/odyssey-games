"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firestore = void 0;
const admin = require("firebase-admin");
const serviceAccount = require("./key.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});
const firestore = admin.firestore();
exports.firestore = firestore;
