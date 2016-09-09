import Home from 'views/home'
import NotFound from 'views/not-found'

export default{
  '/': { component: Home },
  '/notfound': { component: NotFound },
  '*': {component: NotFound}
}
