import LoginPage from '../pages/LoginPage'
import CartPage from '../pages/CartPage'
import CheckoutYourInfoPage from '../pages/CheckoutYourInfoPage'
import { CREDENTIALS } from '../data/Constants'

fixture('"Checkout: Your Information" page scenarios:')
    .page `https://www.saucedemo.com/`
    .beforeEach(async t => {
        await LoginPage.submitLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
        await CartPage.addAllItems()
    })

test('7. Continue with missing information/field', async t => {
    await CheckoutYourInfoPage.fillUserNameOnly()
    await t
        .click(CheckoutYourInfoPage.submitButton)
        .expect(CheckoutYourInfoPage.missingPostalCodeErrorMessage.exists).ok()
})

test('8. Fill user\'s information', async t => {
    await CheckoutYourInfoPage.fillUserAll()
})