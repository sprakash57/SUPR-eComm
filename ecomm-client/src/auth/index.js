import { API } from '../config';

export const register = (user) => {
    console.log('user', user)
    return fetch(`${API}/register`, {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .catch(err => console.log(err));
}