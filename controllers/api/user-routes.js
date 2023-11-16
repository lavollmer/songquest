const router = require('express').Router();

//models goes into index that has the relationships with the User model itself
const { User } = require('../../models');

//logging in based on api/user/login
router.post('/login', async (req, res) => {
  try {
    console.log(req.body)
    const userData = await User.findOne({ where: { username: req.body.username } });
    console.log(userData)
    const user = userData.get({ plain: true })
    const validPassword = await userData.checkPassword(req.body.password);
    console.log(validPassword)
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // session storage
    req.session.save(() => {
      req.session.username = user.username;
      req.session.user_id = user.id;
      req.session.logged_in = true;

      res.json({ user, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

//logging out on api route /api/user/logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// route to create/add a user using async/await
//send the route to api/users/signup
router.post('/signup', async (req, res) => {
  try {
    //creating a new variable with the create method on the User Model for username, email and password
    const userSignupData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    console.log(userSignupData);
    const userSignup = userSignupData.get({ plain: true })
    req.session.save(() => {
      req.session.user_id = userSignupData.id;
      req.session.logged_in = true;
      res.status(200).json({ userSignupData, message: 'You are now logged in!' });
    });
    // if the user is successfully created, the new response will be returned as json
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;


