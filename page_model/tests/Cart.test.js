import ProductsPage from '../pages/ProductsPage'
import LoginPage from '../pages/LoginPage'
import CartPage from '../pages/CartPage'
import { CREDENTIALS } from '../data/Constants'

fixture('"Cart" page scenarios:')
    .page `https://www.saucedemo.com/`
    .beforeEach(async t => {
        await LoginPage.submitLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    })

test('5. Add a single item to the shopping cart', async t => {
    var numberOfItems = await ProductsPage.addToCartButtonList.count
    var randomNumber = Math.floor(Math.random() * numberOfItems)
    var itemName = await ProductsPage.itemNameList.nth(randomNumber).innerText
    await t
        .click(ProductsPage.addToCartButtonList.nth(randomNumber))
        .expect(ProductsPage.cartCounter.withExactText('1').exists).ok()
        .click(ProductsPage.shoppingCartLink)
        //No need to use itemNameList.nth() as the cart will always have 1 item in this TC
        .expect(CartPage.itemNameList.innerText).eql(itemName)
})

test('6. Add multiple items to the shopping cart', async t => {
    await CartPage.addAllItems()
})