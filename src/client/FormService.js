import React from 'react'
import client from './client'

class FormService {
    service_getdata() {
        const request = client.connect().post('')
        return request
    }
}


export default new FormService()