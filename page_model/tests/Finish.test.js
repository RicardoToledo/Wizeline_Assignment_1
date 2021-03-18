import LoginPage from '../pages/LoginPage'
import CartPage from '../pages/CartPage'
import CheckoutYourInfoPage from '../pages/CheckoutYourInfoPage'
import CheckoutOverviewPage from '../pages/CheckoutOverviewPage'
import FinishPage from '../pages/FinishPage'
import { CREDENTIALS } from '../data/Constants'

fixture('"Finish" page scenarios:')
    .page `https://www.saucedemo.com/`
    .beforeEach(async t => {
        await LoginPage.submitLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
        await CartPage.addAllItems()
    })

test('10. Complete a purchase', async t => {
    await CheckoutYourInfoPage.fillUserAll()
    await CheckoutOverviewPage.verifyItems()
    await t
        .click(CheckoutOverviewPage.finishButton)
        .expect(FinishPage.orderFinishedMessage.exists).ok()
        .expect(FinishPage.orderFinishedImage.exists).ok()
})