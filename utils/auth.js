const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.logged_in) {
    res.redirect('/user/login');
  } else {
    // If the user is logged in, proceed with the next callback function
    next();
  }
};

module.exports = withAuth;
