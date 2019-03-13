// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()


const players = [
	{firstName:"eli", lastName:"manning", position:"qb", age:37, team:"nyg"},
	{firstName:"tom", lastName:"brady", position:"qb", age:41, team:"nep"},
	{firstName:"jj", lastName:"watt", position:"de", age:28, team:"hou"}
]

const teams = [
	{name:"giants", city:"new york", conference:"nfc"},
	{name:"patriots", city:"new england", conference:"afc"},
	{name:"texans", city:"houston", conference:"afc"}
]

const db = {
	team: teams,
	player: players
}

router.get('/:resource', (req, res) => {
	const resource = req.params.resource

	const data = db[resource]
	if (data == null){
		res.json({
			confirmation: 'fail',
			message: 'Invalid request. Resource undefined.'
		})

		return
	}

	res.json({
		confirmation: 'success',
		data: data
	})
})

module.exports = router
