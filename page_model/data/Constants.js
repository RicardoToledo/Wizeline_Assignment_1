import dotenv from 'dotenv'
dotenv.config()

export const CREDENTIALS = {
    VALID_USER:{
        USERNAME: process.env.USERNAME,
        PASSWORD: process.env.PASSWORD
    },
    INVALID_USER:{
        USERNAME: process.env.INVALID_USERNAME,
        PASSWORD: process.env.INVALID_PASSWORD
    }
}

export const USER_DATA = {
    NAME:{
        FIRST_NAME: process.env.FIRST_NAME,
        LAST_NAME: process.env.LAST_NAME
    },
    ADDRESS:{
        POSTAL_CODE: process.env.POSTAL_CODE
    }
}