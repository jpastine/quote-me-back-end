const { Vote } = require('../models')

async function castVote(req, res) {
  try {
		req.body.voterId = req.user.profile.id
    const vote = await Vote.create(req.body)
    res.status(200).json(vote)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

module.exports = {
  castVote,
}

