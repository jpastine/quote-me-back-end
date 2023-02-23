const router = require('express').Router()
const quotesCtrl = require('../controllers/quotes.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*------------Public Routes--------------*/



/*------------Protected Routes------------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, quotesCtrl.index)
router.post('/', checkAuth, quotesCtrl.createQuote)
router.put('/:id', checkAuth, quotesCtrl.editQuote)
router.delete('/:id', checkAuth, quotesCtrl.deleteQuote)



module.exports = router 