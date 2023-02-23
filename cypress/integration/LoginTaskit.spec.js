  
import LoginPage from '../support/pageObjects/LoginPage'
import HomePage from '../support/pageObjects/HomePage'


const loginPage = new LoginPage
const homePage = new HomePage

describe('Login Page - Como usuario do perfil Operador, desejo logar no sistema Taskit para acessar a Pagina Home', () => {

    beforeEach(() => {
        //acessar tela de login
        loginPage.acessarSite();
	    loginPage.validarPaginaLogin();
    
    });
    
    it('Deve Logar no sistema Taskit', () => {
        const usuario = 'julio0001';
        const senha = '123456';
        //Fazer Login
        loginPage.clicarSignTaskit();
	    loginPage.digitarUsuario(usuario);
	    loginPage.digitarPassword(senha);
	    loginPage.clicarSignLogin(); 
        //Validar acesso
        homePage.validarAcessoAPaginaTaskit();
  
    });

    it('Não deve Logar no sistema Taskit', () => {
        const usuario = 'julio0001';
        const senha = '4321';
        const mensagem = 'Maybe you brain dropped the password or login in some place!'
        //Fazer Login
        loginPage.clicarSignTaskit();
	    loginPage.digitarUsuario(usuario);
	    loginPage.digitarPassword(senha);
	    loginPage.clicarSignLogin(); 
        //Validar mensagem 
        loginPage.validarExibicaoDoToast(mensagem);
  
    });
  

});

















