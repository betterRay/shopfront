import { v4 as uuidv4 } from 'uuid';
export function getUserTempId() {
    if (!sessionStorage.getItem('userTempId')) {
        let userTempId = uuidv4();
        sessionStorage.setItem('userTempId', userTempId)
    }
    return sessionStorage.getItem('userTempId')
}

export function justifyToken() {
    if (localStorage.getItem('token')) {
        return localStorage.getItem('token')
    }else{
        return ''
    }   
}