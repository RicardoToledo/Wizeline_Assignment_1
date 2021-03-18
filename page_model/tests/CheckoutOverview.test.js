import CheckoutYourInfoPage from '../pages/CheckoutYourInfoPage'
import CheckoutOverviewPage from '../pages/CheckoutOverviewPage'
import LoginPage from '../pages/LoginPage'
import CartPage from '../pages/CartPage'
import { CREDENTIALS } from '../data/Constants'

fixture('"Checkout: Overview" page scenarios:')
    .page `https://www.saucedemo.com/`
    .beforeEach(async t => {
        await LoginPage.submitLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
        await CartPage.addAllItems()
    })

test('9. Final order items', async t => {
    await CheckoutYourInfoPage.fillUserAll()
    await CheckoutOverviewPage.verifyItems()
})