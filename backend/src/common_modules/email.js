const nodemailer = require('nodemailer');
const EV = require('../enviroment');
// const aws = require('@aws-sdk/client-ses')
// let { defaultProvider } = require("@aws-sdk/credential-provider-node");
let AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const Handlebars = require('hbs');
/**
 * 
 * @param {*} from string email@example.com
 * @param {*} to string/ string,string email@example.com / User Name <email@example.com>
 * @param {*} subject string "Mail Subject" 
 * @param {*} text string "Mail Body"
 * @param {*} cc array [email@example.com / User Name <email@example.com>]
 * @param {*} bcc array [email@example.com / User Name <email@example.com>]
 * @param {*} attachments array [{   // filename and content type is derived from path 
            path: '/path/to/file.txt'
        }] https://nodemailer.com/message/attachments/
 * https://nodemailer.com/
 * @returns 
 */

sendEmail = (from, to, subject, body, text, cc, bcc, attachments) => {
    //console.log(from, to, subject, text)
    from = from || EV.DEFAULT_MAIL_FROM;
    text = text || "";
    cc = cc || [];
    bcc = bcc || [];
    attachments = attachments || [];
    var transporter;
    if (EV.MAIL_SERVICE == "SMTP") {
        const mailConfig = {
            host: EV.SMTP_ENDPOINT,
            port: EV.SMTP_PORT, //HTTP: 25, 587 or 2587 HTTPS: 465 or 2465
            secure: (EV.SMTP_PORT == 465 || EV.SMTP_PORT == 2465) ? true : false, // true for 465, false for other ports
            authMethod: "login",
            auth: {
                user: EV.SMTP_AUTH_USERNAME,
                pass: EV.SMTP_AUTH_PASS
            },
            tls: {
                // do not fail on invalid certs
                rejectUnauthorized: false,
            }
        };
        transporter = nodemailer.createTransport(mailConfig)
    }
    else if (EV.MAIL_SERVICE == "SES") {
        /*process.env.AWS_ACCESS_KEY_ID = EV.ACCESS_KEY_ID;
        process.env.AWS_SECRET_ACCESS_KEY = EV.SECRECT_ACCESS_KEY;
        const ses = new aws.SES({
            apiVersion: "2010-12-01",
            region: EV.REGION,
            defaultProvider
        });
        transporter = nodemailer.createTransport({
            SES: { ses, aws },
        });*/
        // configure AWS SDK
        AWS.config.update({
            accessKeyId: EV.ACCESS_KEY_ID,
            secretAccessKey: EV.SECRECT_ACCESS_KEY,
            region: EV.REGION,
        });

        // create Nodemailer SES transporter
        transporter = nodemailer.createTransport({
            SES: new AWS.SES({
                apiVersion: '2010-12-01'
            })
        });
    }
    var mailOptions = {
        from: from,
        to: to,
        subject: subject,
        html: body
    }
    if (text) {
        mailOptions['text'] = text;
    }
    if (cc.length > 0) {
        mailOptions['cc'] = cc;
    }
    if (bcc.length > 0) {
        mailOptions['bcc'] = bcc;
    }
    if (attachments.length > 0) {
        mailOptions['attachments'] = attachments;
    }
    if (EV.MAIL_SERVICE == "SES") {
        mailOptions['ses'] = {
            // optional extra arguments for SendRawEmail
            Tags: [
            ],
        }
    }
    return transporter.sendMail(mailOptions);
}
/**
 * @param template html file name
 * @param data object {"name":"some name"} 
 */
prepareTemplate = async (template, data) => {
    data = data || {};
    let templatePath = path.join(__dirname, "../", "email_templates/" + template);
    //console.log(templatePath)
    let source = fs.readFileSync(templatePath, { encoding: 'utf-8' });
    let templateHbs = Handlebars.compile(source);
    return templateHbs(data);
}
module.exports = { sendEmail, prepareTemplate }
