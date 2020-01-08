const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const User = require("../models/User");
const passport = require("../passport/index")

// API Routes
router.use("/api", apiRoutes);

router.get('/getuser', (req, res) => {
	console.log("getuser was hit");
	User.findOne({ _id: req.user._id })
	.then(dbModel => res.json(dbModel))
	.catch(err => res.json(err));
});

// Router to log out 
router.post('/logout', (req, res) => {
	if (req.user) {
		req.session.destroy()
		res.clearCookie('connect.sid') // clean up!
		return res.json({ msg: 'logging you out' })
	} else {
		return res.json({ msg: 'no user to log out!' })
	}
})



// Route to signup, this route save the username and password to the db
router.post('/signup', (req, res) => {
	console.log("req.body from signup route is:")
	console.log(req.body);
	const { username, password } = req.body
	// ADD VALIDATION
	User.findOne({ 'username': username }, (err, userMatch) => {
		if (userMatch) {
			console.log("Error: username already exists");
			return res.json({
				error: `Sorry, already a user with the username: ${username}`
			})
		}
		const newUser = new User({
			'username': username,
			'password': password
		})
		console.log("newUser is:");
		console.log(newUser);
		User.create({
			'username': username,
			'password': password
		})
		.then(function() {
			console.log("success");
			res.json(req.user);
		})
		.catch(function(err) {
			console.log(err);
			res.json(err);
		})
		// newUser.save((err, savedUser) => {
		// 	if (err) return res.json(err)
		// 	return res.json(savedUser)
		// })
	})
})
// Route to login
router.post(
	'/login',
	function(req, res, next) {
		console.log(req.body)
		console.log('================')
		next()
	},
	passport.authenticate('local'),
	(req, res) => {
		console.log('POST to /login')
    const user = JSON.parse(JSON.stringify(req.user)) // hack
   
		const cleanUser = Object.assign({}, user)
		if (cleanUser) {
			console.log(`Deleting ${cleanUser.password}`)
			delete cleanUser.password
		}
		res.json({ user: cleanUser })
	}
)

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;
