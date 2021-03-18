import { Selector, t } from 'testcafe'
import ProductsPage from './ProductsPage'

class CartPage {
    constructor(){
        this.yourCartTitle = Selector('.subheader').withExactText('Your Cart')
        this.itemNameList = Selector('.inventory_item_name')
        this.checkoutButton = Selector('.btn_action.checkout_button')
    }
    
    async addAllItems(){
        var numberOfItems = await ProductsPage.addToCartButtonList.count
        for (var i = 0; i < numberOfItems; i++)
            await t.click(ProductsPage.addToCartButtonList.nth(i))
        await t.expect(ProductsPage.cartCounter.withExactText(numberOfItems.toString()).exists).ok()
        await ProductsPage.navigateToShoppingCart()
        await t.expect(ProductsPage.itemNameList.exists).ok()
    }

}

export default new CartPage()