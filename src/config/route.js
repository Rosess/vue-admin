import Home from 'views/home'
import NotFound from 'views/not-found'
import Img from 'views/img'

export default{
  '/': { component: Home },
  '/not-found': { component: NotFound },
  '/img': { component: Img },
  '/*': {component: NotFound}
}
