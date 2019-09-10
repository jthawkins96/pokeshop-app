import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDsvJ7FIJ1z_foSn2LN95wQ6RClCQA021E",
    authDomain: "poke-shop-8110a.firebaseapp.com",
    databaseURL: "https://poke-shop-8110a.firebaseio.com",
    projectId: "poke-shop-8110a",
    storageBucket: "",
    messagingSenderId: "214416907085",
    appId: "1:214416907085:web:ac3f5a9b4a0ab929"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = async () => {
    try {   
        await auth.signInWithPopup(googleProvider)
        return true;
    }
    catch(e) {
        console.log(e)
        return false;
    }
}

export const signInWithEmail = async (email, password) => {
    try {
        await auth.signInWithEmailAndPassword(email, password)
        return true;
    }
    catch(e) {
        return false;
    }
}

export const createUserDocument = async (user, displayName = null) => {
    let userRef = firestore.doc(`users/${user.uid}`)
    let userSnapshot = await userRef.get();

    if (!userSnapshot.exists) {
        await createUser(userRef, user, displayName)
    }

    return userRef;
}

const createUser = async (userRef, user, displayName) => {
    try {
        await userRef.set({
            createdAt: new Date(),
            name: displayName === null ? user.displayName : displayName,
            email: user.email
        })
    }
    catch (e) {
        console.log(e.message)
    }
}

export const registerNewUser = async (name, email, password, confirmPassword) => {
    const initialValidationObject = {
        passwordsDoNotMatch:false,
        passwordErrorMessage: "",
        emailInvalid:false,
        emailErrorMessage:"",
        generalError:false,
        isValid:false
    }

    if(password !== confirmPassword) {
        return { 
            ...initialValidationObject,
            passwordsDoNotMatch: true 
        };
    }

    try {
        let response = await auth.createUserWithEmailAndPassword(email, password)
        await createUserDocument(response.user, name)
        return { 
            ...initialValidationObject,
            isValid: true 
        }
    }
    catch(e) {
        console.log(e)
        if(e.code.includes("email-already-in-use"))
            return { 
                ...initialValidationObject,
                emailInvalid: true,
                emailErrorMessage: e.message 
            }
        else if(e.code.includes("weak-password"))
            return {
                ...initialValidationObject,
                passwordErrorMessage: e.message
            }
        else
            return {
                ...initialValidationObject,
                generalError: true
            }
    }
}

export const getProducts = async (filter = null) => {
    let products;
    if(filter)
        products = await firestore.collection("pokemon").where("type", "==", filter).get()
    else
        products = await firestore.collection("pokemon").get();

    return products.docs.map(p => {
        let data = p.data();
        return {
            id: p.id,
            ...data
        }
    })
}

