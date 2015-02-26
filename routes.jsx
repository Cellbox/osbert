/* ERROR PAGES */
var notfound = require('routes/notfound.jsx');

/* APP PAGES */
var index = require('routes/index.jsx');

/* ROUTES */
module.exports = (
  <Route handler={ReactRouter.RouteHandler}>
    <DefaultRoute handler={index} />
    <Route path='/' handler={index} />
    <NotFoundRoute handler={notfound} />
  </Route>
);
