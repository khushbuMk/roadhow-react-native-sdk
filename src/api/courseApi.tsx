import axios from 'axios';
import { generateAPIUrl } from './apiManager';



export function authenticate(client_id: string, client_secret: string, user_phone: string) {
    // console.log("Authentication Data", client_id, client_secret, user_phone);

    const url = generateAPIUrl('client-user-login')

    // if (!auth_token.length) {
        return axios.post(
            `${url}`,
            {
                'client_id': client_id,
                'client_secret': client_secret,
                'user_phone': user_phone
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then((res) => {
            const response = res;
            console.log("Authentication successful")
        }).catch((error) => {
            console.log("auth error", error)
        })
    // } else {
    //     return Promise.resolve(console.log("Already Logged in"))
    // }
}