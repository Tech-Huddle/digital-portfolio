const db = require('../../index');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const saltRounds = 10;
const EV = require('../../../enviroment');
let secret_jwt = EV.JWT_SECRET;

exports.login = async (data) => {
  let username = data.username;
  let password = data.password;
  let userData = await db.User.findOne({ where: {email:username } });
  userData = JSON.parse(JSON.stringify(userData));
  if (!userData) {
    return { success: false, message: "incurrect login credentials!" };
  } else {
    let secret = await db.UserSecretInfo.findOne({ where: { user_id: userData.id } });
    secret = JSON.parse(JSON.stringify(secret));
    let flag = await bcrypt.compare(password, secret.password);
    //console.log("flag",flag);
    if (flag) {
      let token = jwt.sign(userData, secret_jwt);
      return { id_token: token, message: "login successfully", success: true }
    } else {
      return { success: false, message: "incurrect login credentials!" };
    }

  }

}