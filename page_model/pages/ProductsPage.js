import { Selector, t } from 'testcafe'
import CartPage from './CartPage'
import LoginPage from './LoginPage'

class ProductsPage {
    constructor(){
        this.productsTitle = Selector('.product_label')
        this.menuButton = Selector('#react-burger-menu-btn')
        this.logoutSidebarLink = Selector('#logout_sidebar_link')
        this.shoppingCartLink = Selector('.shopping_cart_link')
        this.addToCartButtonList = Selector('div.pricebar button')
        this.itemNameList = Selector('.inventory_item_name')
        this.cartCounter = Selector('.fa-layers-counter.shopping_cart_badge')
    }

    async logout(){
        await t
            .click(this.menuButton)
            .click(this.logoutSidebarLink)
            .expect(LoginPage.loginLogo.exists).ok()
    }

    async navigateToShoppingCart(){
        await t
            .click(this.shoppingCartLink)
            .expect(CartPage.yourCartTitle.exists).ok()
    }

}

export default new ProductsPage()