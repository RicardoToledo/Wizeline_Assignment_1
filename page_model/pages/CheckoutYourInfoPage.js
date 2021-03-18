import { Selector, t } from 'testcafe'
import { USER_DATA } from '../data/Constants'
import CartPage from './CartPage'
import CheckoutOverviewPage from './CheckoutOverviewPage'

class CheckoutYourInfoPage {
    constructor(){
        this.firstNameField = Selector('#first-name')
        this.lasttNameField = Selector('#last-name')
        this.postalCodeField = Selector('#postal-code')
        this.submitButton = Selector('.btn_primary.cart_button')
        this.missingPostalCodeErrorMessage = Selector('h3').withExactText('Error: Postal Code is required')
    }

    async fillUserNameOnly(){
        await t
            .click(CartPage.checkoutButton)
            .typeText(this.firstNameField, USER_DATA.NAME.FIRST_NAME, {paste:true})
            .typeText(this.lasttNameField, USER_DATA.NAME.LAST_NAME, {paste:true})
    }

    async fillUserAll(){
        await this.fillUserNameOnly()
        await t
            .typeText(this.postalCodeField, USER_DATA.ADDRESS.POSTAL_CODE, {paste:true})
            .click(this.submitButton)
            .expect(CheckoutOverviewPage.checkoutOverviewTitle.exists).ok()
    }

}

export default new CheckoutYourInfoPage()