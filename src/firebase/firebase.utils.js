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
        const userData = await auth.signInWithPopup(googleProvider)
        return userData.user
    }
    catch(e) {
        
    }
}

export const signInWithEmail = async (email, password) => {
    try {
        const userData = await auth.signInWithEmailAndPassword(email, password)
        return userData.user
    }
    catch(e) {
        
    }
}

export const createUserDocument = async (user) => {
    let userRef = firestore.doc(`users/${user.uid}`)
    let userSnapshot = await userRef.get();

    if (!userSnapshot.exists) {
        await createUser(userRef, user)
    }

    return userRef;
}

const createUser = async (userRef, user) => {
    try {
        await userRef.set({
            createdAt: new Date(),
            name: user.displayName,
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

export const getProducts = async () => {
    
    const products = await firestore.collection("pokemon").get();

    return products.docs.map(p => {
        let data = p.data();
        return {
            id: p.id,
            ...data
        }
    })
}

export const convertProductsArrayToMap = (productsList) => {

    let productMap = {}

    productsList.forEach(product => {
        if (product.type in productMap)
            productMap[product.type].push(product)
        else
            productMap[product.type] = [product]
    });
    
    return productMap;
}

