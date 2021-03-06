import { Router } from 'express'
import * as RestaurantsCtrl from '../controllers/restaurants.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', RestaurantsCtrl.index)
router.get('/your', RestaurantsCtrl.your)

router.get('/new', RestaurantsCtrl.new)

router.get('/:id', RestaurantsCtrl.show)

router.post('/',isLoggedIn , RestaurantsCtrl.create)
router.post('/:id/prevVisits',isLoggedIn, RestaurantsCtrl.createPrevVisits)

router.get('/:id/edit', RestaurantsCtrl.edit)

router.delete('/:id', RestaurantsCtrl.delete)

router.put('/:id', RestaurantsCtrl.update)

export {
  router
}