import { Selector, t } from 'testcafe'
import ProductsPage from './ProductsPage'

class LoginPage {
    constructor(){
        this.usernameField = Selector('#user-name')
        this.passwordField = Selector('#password')
        this.loginButton = Selector('.btn_action')
        //another way of selecting this <h3> tag would be:
        //this.errorMessage = Selector('h3[data-test="error"]')
        this.errorMessage = Selector('h3').withAttribute('data-test', 'error')
        this.loginLogo = Selector('.login_logo')
    }

    async submitLogin(username, password){
        await t
            .typeText(this.usernameField, username, {paste:true})
            .typeText(this.passwordField, password, {paste:true})
            .click(this.loginButton)
        if (await this.errorMessage.exists)
            await t.expect(this.errorMessage.innerText).eql('Epic sadface: Username and password do not match any user in this service')
        else
            await t.expect(ProductsPage.productsTitle.exists).ok()
    }
}

export default new LoginPage()