import Home from 'views/home'
import Login from 'layout/login'
import App from 'layout/content'
import NotFound from 'views/not-found'
import Img from 'views/img'

export default{
  '/login': { component: Login },
  '/': {
    component: App,
    subRoutes: {
      '/home': { component: Home },
      '/not-found': { component: NotFound },
      '/img': { component: Img },
      '/*': { component: NotFound }
    }
  }
}
