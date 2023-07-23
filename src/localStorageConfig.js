export const EMAIL_KEY ='useremail';


export function getItem(key){
    return localStorage.getItem(key);
}
export function setItem(key,value){
    return localStorage.setItem(key,value);
}

export function removeItem(key){
    localStorage.removeItem(key);
}