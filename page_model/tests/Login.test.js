import LoginPage from '../pages/LoginPage'
import { CREDENTIALS } from '../data/Constants'

fixture('"Login" page scenarios:')
    .page `https://www.saucedemo.com/`

test('1. Login with a valid user', async t => {
    await LoginPage.submitLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
})

test('2. Login with an invalid user', async t => {
    await LoginPage.submitLogin(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
})