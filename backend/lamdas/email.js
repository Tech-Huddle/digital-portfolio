'use strict';
/**
 *  CustomMessage_SignUp : Custom message — To send the confirmation code post-sign-up.
    CustomMessage_AdminCreateUser : Custom message — To send the temporary password to a new user.
    CustomMessage_ResendCode : Custom message — To resend the confirmation code to an existing user.
    CustomMessage_ForgotPassword : Custom message — To send the confirmation code for Forgot Password request.
    CustomMessage_UpdateUserAttribute : Custom message — When a user’s email or phone number is changed, this trigger sends a verification code automatically to the user. Cannot be used for other attributes.
    CustomMessage_VerifyUserAttribute : Custom message — This trigger sends a verification code to the user when they manually request it for a new email or phone number.
    CustomMessage_Authentication : Custom message — To send MFA code during authentication.
 * @param {*} event 
 * @param {*} context 
 * @param {*} callback 
 */
exports.handler = async (event, context, callback) => {
    const email = event.request.userAttributes.email;
    const link = `https://example.com?userName=${email}&confirmation_code=${event.request.codeParameter}`;
    const name = event.request.userAttributes.name;
    const user_details = JSON.parse(event.request.userAttributes['custom:user_details']) || {};
    let customer_name;
    if(user_details.customer_name)
        customer_name = user_details.customer_name.join(",");
    const template = (name, link) => `<html>
    <body style="background-color:#333; font-family: PT Sans,Trebuchet MS,sans-serif; ">
      <div style="margin: 0 auto; width: 600px; background-color: #fff; font-size: 1.2rem; font-style: normal;font-weight: normal;line-height: 19px;" align="center">
        <div style="padding: 20;">
            <p style="Margin-top: 20px;Margin-bottom: 0;">&nbsp;</p>
            <p style="Margin-top: 20px;Margin-bottom: 0;">&nbsp;</p>
            <img style="border: 0;display: block;height: auto; width: 100%;max-width: 373px;" alt="Animage" height="200" width="300"  src="https://cal-hr-mail-images.s3.eu-west-1.amazonaws.com/logo.png" />
            <p style="Margin-top: 20px;Margin-bottom: 0;">&nbsp;</p>
            <h2
                style="font-size: 28px; margin-top: 20px; margin-bottom: 0;font-style: normal; font-weight: bold; color: #000;font-size: 24px;line-height: 32px;text-align: center;">Hi ${name}</h2>
            <p style="Margin-top: 20px;Margin-bottom: 0;">&nbsp;</p>
            <p style="Margin-top: 20px;Margin-bottom: 0;font-size: 16px;line-height: 24px; color: #000">Your registration request was successfully approved. Click below to complete the registration</p>
            <p style="Margin-top: 20px;Margin-bottom: 0;">&nbsp;</p>
                <div style="Margin-left: 20px;Margin-right: 20px;Margin-top: 24px;">
                    <div style="Margin-bottom: 20px;text-align: center;">
                        <a
                            style="border-radius: 4px;display: block;font-size: 14px;font-weight: bold;line-height: 24px;padding: 12px 24px 13px 24px;text-align: center;text-decoration: none !important;transition: opacity 0.1s ease-in;color: #ffffff !important;box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.2);background-color: #3b5998;font-family: PT Sans, Trebuchet MS, sans-serif; letter-spacing: 0.05rem;"
                            href="${link}">CLICK HERE TO VERIFY YOUR EMAIL</a>
                        </div>
                </div>
        </div>
      </div>
    </body>
  </html>`;
    const templateResendCode = (name, code) => `<!DOCTYPE html>
  <html>
  <head>
      <meta charset='utf-8' />
      <title>Challenge People</title>
      <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900' />
  </head>
  
  <body style='margin:0px'>
      <div style='background: #fff;width: 100%;height: 100%;'>
          <div
              style='width:800px;height:100%;margin:0px auto;border:1px solid #ECECEC;background:#ECECEC;padding-bottom: 20px;'>
              <div
                  style='width:100%;margin:0px;padding: 25px 0px 6px 0px;border:0px;display: inline-block;text-align: center;'>
                  <img src='https://cal-hr-mail-images.s3.eu-west-1.amazonaws.com/logo.png' style='height: 60px;'>
              </div>
              <div style='clear:both'></div>
              <div
                  style='width:74%;margin:0px auto;padding: 0px 0px 20px 0px;border:0px;display: table;background-color: #ffffff;'>
                  <div style='width: 100%;background: #cee8f8;padding: 20px 0;text-align: center;'>
                      <img src='https://cal-hr-mail-images.s3.eu-west-1.amazonaws.com/iconuser.png'
                          style='height: 100px;' />
                  </div>
                  <div style='float: left;width: 100%;margin-bottom: 60px;text-align: center;'>
                      <h1
                          style='color: #bfc4c9;font-family: Roboto;font-style: normal;font-weight: 400;font-size: 2.5rem;margin: 0 0 20px 0;text-align: center;padding: 0 10px;'>
                          ${name}</h1>
                      <p
                          style='color: #363636;font-family: Roboto;font-style: normal;font-weight: 300;font-size: 1.1rem;margin-bottom: 45px;text-align: center;padding-left: 15px;padding-right: 15px;'>
                          Your verification code is ${code}.</p>
                      <div style='clear:both'></div>
                  </div>
              </div>
              <div style='clear:both'></div>
              <div style='width:100%;height:auto;display:inline-block;padding-top:20px;'>
                  <div style='width: 100%;height: auto;margin: 0px 0px 10px 0px;display: inline-block;'>
                      <div style='width: 100%;height: auto;float: left;text-align: center;'>
                          <p
                              style='color: #363636;font-size: 16px;font-family: Roboto;font-style: normal;font-weight: 500;'>
                              Follow us on</p>
                          <div style='width: 100%;text-align: center;margin: 0 0 30px 0;'>
                              <a href='#' style='margin-right: 20px;'><img
                                      src="https://cal-hr-mail-images.s3.eu-west-1.amazonaws.com/facebookIcon.png"
                                      style='height: 24px;' /></a>
                              <a href='#' style='margin-right: 20px;'><img
                                      src="https://cal-hr-mail-images.s3.eu-west-1.amazonaws.com/instagramIcon.png"
                                      style='height: 24px;' /></a>
                              <a href='#' style='margin-right: 20px;'><img
                                      src="https://cal-hr-mail-images.s3.eu-west-1.amazonaws.com/twitterIcon.png"
                                      style='height: 21px;' /></a>
                              <a href='#' style='margin-right: 20px;'><img
                                      src="https://cal-hr-mail-images.s3.eu-west-1.amazonaws.com/inIcon.png"
                                      style='height: 21px;' /></a>
                          </div>
                          <h3
                              style='color: #363636;font-size: 18px;font-family: Roboto;font-style: normal;font-weight: 500;margin: 0 0 30px 0;'>
                              www.challenge-group.com</h3>
                          <p
                              style='color: #A7A7A7;font-size: 18px;font-family: Roboto;font-style: normal;font-weight: 400;margin: 0 0 0px 0;'>
                              Copyright © 2022 Challenge Group SA</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </body>
  
  </html>`;

    const templateInvite = (name, customer_name, user_name, temp_pass) => `<!DOCTYPE html>
  <html>

<head>
	<meta charset='utf-8' />
	<title>Invite email</title>
	<link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900'/> 
</head>

<body style='margin:0px;direction: ltr;'>
    <div style='background: #fff;width: 100%;height: 100%;'>
        <div style='width:700px;height:100%;margin:0px auto;border:1px solid #ddd;background:#ffffff; '>
            <div style='width:640px;display: table-cell;background-color: #ffffff;border-style: solid;
            border-width: 0px 30px 20px 30px;border-color: #fff;'>
                <div style='float: left;width: 100%; margin-bottom: 60px;text-align: left; '>
                    <p style='color: #000;font-family: Roboto;font-weight: 600;font-size: 1.125rem;text-align: left; line-height: 28px;border-style: solid;border-width: 20px 0px 20px 0px;border-color: #fff;margin: 0px;'>Hi ${name},<br/>
                        As part of your recruitment process you were invited by ${customer_name} to a short evaluation, performed online by Valid.it<br/>
                        Valid.it is a system designed to evaluate and match candidates for the role and the organization they are applying to.</p>
                    <div style='clear:both'></div>
                    <h1 style='color: #2374AB;font-family: Roboto;font-style: normal;font-weight: 400;font-size: 1.25rem;margin: 25px 0px 0px 0px;text-align: left;'>What do you need to do?</h1>
                    <p style='color: #010101;font-family: Roboto;font-style: regular;font-weight: 400;font-size: 0.875rem;margin-bottom: 15px;text-align: left; line-height: 24px;'>Download the app from your app store and login using the credentials below.<br/>
                        After loging into the app just follow the instructions. <br/>
                        The evaluation takes 15-20 min to complete and you don’t need to prepare for it.<br/>
                        We do recommend to do the evaluation in a quiet room when you are focused, relaxed and distructions-free.</p>
                    <div style='clear:both'></div>
                    <h2 style='color: #2374AB;font-family: Roboto;font-style: normal;font-weight: 400;font-size: 1.25rem;margin: 15px 0px 0px 0px;text-align: left;'>Download the app here</h2>
                    <div style='width: 100%;text-align: left;margin: 15px 0 20px 0;'>
                        <a href='#' style='color: #fff;'>
                            <img src="https://validit-public-img.s3.eu-west-1.amazonaws.com/googleplaystore.png" alt="googleplaystore" />
                        </a>
                        <a style='color: #fff;'>&nbsp;&nbsp;&nbsp;</a>
                        <a href='#' style='color: #fff;'>
                            <img src="https://validit-public-img.s3.eu-west-1.amazonaws.com/appstore.png" alt="appstore" />
                        </a>
                    </div>
                    <div style='width: 65%;height: auto;text-align: left; background-color: #EDF9F9; padding: 0px; border-radius: 5px;display: inline-table;border-style: solid; border-width: 0px 20px 20px;border-color: #EDF9F9;'>
                        <h2 style='color: #363636;font-size: 20px;font-family: Roboto;font-style: normal;font-weight: 500;'>Use these credentials to login:</h2>
                        <h3 style='color: #363636;font-size: 18px;font-family: Roboto;font-style: normal;font-weight: 500;margin: 0 0 15px 0;'>User name: <span style='background: #cee8f8;padding: 3px; font-weight: 400;'>${user_name}</span></h3>
                        <h3 style='color: #363636;font-size: 18px;font-family: Roboto;font-style: normal;font-weight: 500;margin: 0 0 20px 0;'>Temporary password: <span style='background: #cee8f8;padding: 3px; font-weight: 400;'>${temp_pass}</span></h3>
                        <p style='color: #363636;font-size: 16px;font-family: Roboto;font-style: normal;font-weight: 400;margin: 0 0 0px 0;'>After login for the first you will be asked to change your password.</p>
                    </div>
                    <div style='clear:both'></div>
                    <p style='color: #010101;font-family: Roboto;font-style: regular;font-weight: 400;font-size: 0.875rem;margin-top: 25px;text-align: left; line-height: 24px;'>Once the evaluation is completed the results will be sent to the team at ${customer_name}.</p>
                    <div style='clear:both'></div>
                    <h3 style='color: #010101;font-family: Roboto;font-style: normal;font-weight: 500;font-size: 18px;margin: 25px 0px 0px 0px;text-align: left;'>Good luck from all of us at Valid.it!</h3>
                </div>
            </div>
            <div style='clear:both'></div>
        </div>
    </div>
</body>

</html>`;
    const templateForgotPassword = (temp_pass) => `<!DOCTYPE html>
    <html>  
    <head>
        <meta charset='utf-8' />
        <title>valit.it</title>
        <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900' />
    </head>
    
    <body style='margin:0px'>
        <div style='background: #fff;width: 100%;height: 100%;'>
            <div
                style='width:800px;height:100%;margin:0px auto;border:1px solid #ECECEC;background:#ECECEC;padding-bottom: 20px;'>
                <div
                    style='width:100%;margin:0px;padding: 25px 0px 6px 0px;border:0px;display: inline-block;text-align: center;'>
                    <img src='https://validit-public-img.s3.eu-west-1.amazonaws.com/name.png' style='height: 60px;'>
                </div>
                <div style='clear:both'></div>
                <div
                    style='width:74%;margin:0px auto;padding: 0px 0px 20px 0px;border:0px;display: table;background-color: #ffffff;'>
                    <div style='width: 100%;background: #cee8f8;padding: 20px 0;text-align: center;'>
                        <img src='https://validit-public-img.s3.eu-west-1.amazonaws.com/logo.png'
                            style='height: 100px;' />
                    </div>
                    <div style='float: left;width: 100%;margin-bottom: 60px;text-align: center;'>
                      <h1
                            style='color: #bfc4c9;font-family: Roboto;font-style: normal;font-weight: 400;font-size: 2.5rem;margin: 0 0 20px 0;text-align: center;padding: 0 10px;'>
                            ${name}</h1>
                        <p
                            style='color: #363636;font-family: Roboto;font-style: normal;font-weight: 300;font-size: 1.1rem;margin-bottom: 45px;text-align: center;padding-left: 15px;padding-right: 15px;'>
                            Your confirmation code is ${temp_pass}.</p>
                        <div style='clear:both'></div>
                    </div>
                </div>
            </div>
        </div>
    </body>  
  </html>`;
    if (event.triggerSource === "CustomMessage_SignUp") {

        event.response = {
            emailSubject: "Publish | Confirm your email",
            emailMessage: template(name, link)
        };
    }
    else if (event.triggerSource === "CustomMessage_ResendCode") {

        event.response = {
            emailSubject: "Verification Code Resend For Valid.it",
            emailMessage: templateResendCode(name, event.request.codeParameter)
        };
    }
    else if (event.triggerSource === 'CustomMessage_AdminCreateUser') {
        event.response = {
            emailSubject: "Welcome to Valid.it",
            emailMessage: templateInvite(name, customer_name, event.request.usernameParameter, event.request.codeParameter)
        };
    }
    else if (event.triggerSource === 'CustomMessage_ForgotPassword') {
        event.response = {
            emailSubject: "Forgot Password For Valid.it",
            emailMessage: templateForgotPassword(event.request.codeParameter)
        };
    }
    else {
        event.response = {
            emailSubject: "Publish | Test event",
            emailMessage: `This is a test event as ${JSON.stringify(event)}`
        };
    }
    console.log(event.response);
    console.log("=======================event=======================>", event);
    callback(null, event);
};