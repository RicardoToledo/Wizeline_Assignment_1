import { Selector, t } from 'testcafe'

class FinishPage {
    constructor(){
        this.orderFinishedMessage = Selector('.complete-text').withExactText('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
        this.orderFinishedImage = Selector('.pony_express')
    }
}

export default new FinishPage()