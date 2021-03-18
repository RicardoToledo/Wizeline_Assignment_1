import { Selector, t } from 'testcafe'
import CartPage from './CartPage'

class CheckoutOverviewPage {
    constructor(){
        this.checkoutOverviewTitle = Selector('.subheader').withExactText('Checkout: Overview')
        this.finishButton = Selector('.btn_action.cart_button').withExactText('FINISH')
    }

    async verifyItems(){
        await t.expect(CartPage.itemNameList.exists).ok()
    }

}

export default new CheckoutOverviewPage()