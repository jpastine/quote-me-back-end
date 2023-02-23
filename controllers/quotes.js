const { Quote, Vote } = require('../models')

async function createQuote(req, res) {
  try {
    req.body.profileId = req.user.profile.id
    const quote = await Quote.create(req.body)
    res.status(200).json(quote)
  } catch (error) {
    res.status(500).json({err: error})
  }
}

async function index(req, res) {
  try {
    const quotes = await Quote.findAll({
      include: [{ model: Vote, as: 'votesReceived'}]
    })
    res.status(200).json(quotes)
  } catch (error) {
    console.log(error)
    res.status(500).json({err: error})
  }
}

async function editQuote(req, res) {
  try {
    const quote = await Quote.update(
      req.body,
      { where: {id: req.params.id}, returning:true })
    res.status(200).json(quote)
  } catch (error) {
    console.log(error)
    res.status(500).json({err: error})
  }
}

async function deleteQuote(req, res) {
  try {
    const quote = await Quote.findByPk(req.params.id)
    console.log(quote);
    await quote.destroy()
    res.status(200).json(quote)
  } catch (error) {
    res.status(500).json({err: error})
  }
}




module.exports = {
  createQuote,
  index, 
  editQuote,
  deleteQuote
}