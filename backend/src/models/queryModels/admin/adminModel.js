const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;



exports.login=(data)=>{
    let username=data.username;
    let password=data.password;
    console.log("========>>",username,password);
    passport.use(new LocalStrategy((username, password, done) => {
        User.findOne({ where: { username } })
          .then((user) => {
            if (!user) {
              return done(null, false, { message: 'Incorrect username.' });
            }
      
            if (user.password !== password) {
              return done(null, false, { message: 'Incorrect password.' });
            }
      
            return done(null, user);
          })
          .catch((err) => done(err));
      }));

      passport.serializeUser((user, done) => {
        done(null, user.id);
      });
      
      passport.deserializeUser((id, done) => {
        User.findByPk(id)
          .then((user) => done(null, user))
          .catch((err) => done(err));
      });
      
      passport.authenticate('local'), (req, res) => {
        return({ message: 'Login successful!', user: req.user });
      }
}