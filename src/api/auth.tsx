import axios from 'axios';
import Toast from "react-native-root-toast";
import { generateAPIUrl } from "./apiManager";

export var auth_token = '';

export function authenticate(client_id: string, client_secret: string, user_phone: string) {
    // console.log("Authentication Data", client_id, client_secret, user_phone);

    const url = generateAPIUrl('client-user-login')

    

    if (!auth_token.length) {
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
            auth_token = response.data.data.access_token;
            console.log("Authentication successful")
            Toast.show("Authentication successful")
        }).catch((error) => {
            console.log("auth error", error)
        })
    } else {
        Toast.show("Already authenticated")
        return Promise.resolve(console.log("Already Logged in"))
    }
}