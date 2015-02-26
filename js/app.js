var Router = ReactRouter;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var routes = require('../routes.jsx');

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});