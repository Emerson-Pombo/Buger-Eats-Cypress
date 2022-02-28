import signupPage from '../pages/SignupPage'
import SignupFactory from '../factories/SignupFactory'


describe('Signup', () => {
    // beforeEach(function () {
    //     cy.fixture('deliver.json').then((d) => {
    //         this.deliver = d
    //     })
    // })
    it('Register to deliver', function () {

        var deliver = SignupFactory.deliver()

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()

        //BOTÃO DE CONFIRMAÇÃO
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signupPage.modalContentShouldBe(expectedMessage)
    })
    it('Incorrect document', function () {

        var deliver = SignupFactory.deliver()
        deliver.cpf = '000000141AA'

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.alertMessageShouldBe('Oops! CPF inválido')

    })
    it('Incorrect email', function () {

        var deliver = SignupFactory.deliver()
        deliver.email = 'gabriel.com.br'

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.alertMessageShouldBe('Oops! Email com formato inválido.')

    })
    context('Required fields', function () {
        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalCode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'delivery-method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
        ]
        before(function(){
            signupPage.go()
            signupPage.submit()
        })
        messages.forEach(function(msg){
            it(`${msg.field} is required`, function(){
                signupPage.alertMessageShouldBe(msg.output)
            })
        })
    })
    
})