import Home from 'views/home'
import NotFound from 'views/not-found'

export default{
  '/': { component: Home },
  '/not-found': { component: NotFound },
  '/*': {component: NotFound}
}
