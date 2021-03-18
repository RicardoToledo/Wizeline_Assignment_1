import ProductsPage from '../pages/ProductsPage'
import LoginPage from '../pages/LoginPage'
import { CREDENTIALS } from '../data/Constants'

fixture('"Products" page scenarios:')
    .page `https://www.saucedemo.com/`
    .beforeEach(async t => {
        await LoginPage.submitLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    })

test('3. Logout from product\'s page', async t => {
    //I created a function as Logout is a common task for future scenarios
    await ProductsPage.logout()
})

test('4. Navigate to the shopping cart', async t => {
    await ProductsPage.navigateToShoppingCart()
})