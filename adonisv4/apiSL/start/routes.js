'use strict'



/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
    return {greeting: 'Hello world in JSON'}
  });
  
  Route.get('curso', () => {
    return 'Isso vai ser um retorno do estilo texto'
  });
  
  Route.get('video/:id', async ({params}) => {
    return 'Essa é o video da aula: #' + params.id;
  });
  
  Route.get('faz/:bebida?', async ({params}) => {
    // use Café como fallback se bebida nao for definida
    const drink = params.bebida || 'Café'
  
    return `Voce faz ${drink} para beber!`
  })
  
  
  Route.resource('usuarios', 'UserController')
    .apiOnly()
   // .middleware(['auth']); 
  //so permite acessar a rota se tiver logado 
  
  Route.post('login', 'AuthController.login');
  