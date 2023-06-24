const axios = require('axios')
const EV = require('../enviroment');

notification_type = {
    "types": ["email", "sms", "notification", "push"]
}

email_structure = {
    "to": "",
    "cc_to": [],
    "from": "",
    "subject": "",
    "body": "",
    "attachements": []
}

sms_structure = {
    "mobile_to": [],
    "subject": "",
    "body": ""
}

notification_structure = {
    "subject": "",
    "body": ""
}

push_structure = {
    "target_device_tokens": [],
    "body": "",
    "attachment": "",
    "title": "",
    "additional_info": {}
}
/**
 * @param msgParam
 * {"register_ids":["c2bLoayzMuV6Iiv-sTpewR:APA91bHZLc78KuQAn4zK2BrC_3MLmO276XkGxPsR9wJLQ2LwUIwS3SDYVZu3yoYRw7kR-lViZn9K65bZBHohMfZLz3p9Rv_8i4pxYdUD0iOrtJxBSGQrXt0Gxbm27UGQ6lFp_yhAYLXb"],"title":"plca your title here","message":"notification body content here"}
 */
sendPushMessage = (msgParam)=>{
    let pushParam = {};
    pushParam['register_ids'] = msgParam.target_device_tokens
    pushParam['title'] = msgParam.title
    pushParam['message'] = msgParam.body
    pushParam['imgUrl'] = msgParam.attachment
    pushParam['additional_info'] = msgParam.additional_info
    axios.post(EV.PUSH_MSG_ENDPOINT, pushParam)
    // Show response data
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
}
module.exports = { notification_type, email_structure, sms_structure, notification_structure, push_structure, sendPushMessage}