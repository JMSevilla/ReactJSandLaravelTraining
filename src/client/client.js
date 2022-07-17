import axios from 'axios'

class Client {
    connect() {
        const instance = axios.create({
            baseURL : '',
            headers : {
                "Content-Type" : "application/json"
            }
        })
        return instance
    }
}
export default new Client()