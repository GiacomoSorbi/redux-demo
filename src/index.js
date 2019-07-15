import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './reducers'

const Home = React.lazy(() =>
  import(/* webpackChunkName: "Home", webpackPrefetch: true */ './routes/Home'),
)
const Info = React.lazy(() =>
  import(/* webpackChunkName: "Info", webpackPrefetch: true */ './routes/Info'),
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/info' component={Info} />
          </Switch>
        </React.Suspense>
      </App>
    </Router>
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
