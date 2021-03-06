///// ===== Namespace =====
///////
App = require ('todos');

//////////////////////////////////
// Templates
//////////////////////////////////
require ('templates/application');
require('templates/todos');
require('templates/todos/index');

//////////////////////////////////
// Models
//////////////////////////////////

require('models/todo');

/////////////////////////////////
// Controllers
/////////////////////////////////

require('controllers/todo_controller');
require('controllers/todos_controller');

/////////////////////////////////
// Views
/////////////////////////////////

require('views/edit_todo_view');

/////////////////////////////////
// Routes
/////////////////////////////////

require('routes/ActiveRoute');
require('routes/CompletedRoute');
require('routes/IndexRoute');
require('routes/TodosRoute');

/////////////////////////////////
// Store
/////////////////////////////////

require('store');

/////////////////////////////////
// Router
/////////////////////////////////

require ('router');

