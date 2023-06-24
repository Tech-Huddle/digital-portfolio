var base64Img = require('base64-img');
const AWS = require('aws-sdk')
const EV = require('../enviroment');
const sharp = require('sharp');

const s3bucket = new AWS.S3({
    accessKeyId: EV.ACCESS_KEY_ID,
    secretAccessKey: EV.SECRECT_ACCESS_KEY,
    Bucket: EV.BUCKET
  });

function stringToBase64(url) {
    return new Promise((resolve,reject) => {
        base64Img.requestBase64(url,(err, res, body) => {
            if (err) console.log(err)
            else { 
                resolve(body);
            }
        });
    })
}

getS3Object=async (url,sizeWidth,sizeHeight)=>{
    let urlSplitObj = url.split('/');
    let urlSplitObjLen = urlSplitObj.length;
    let imageName = decodeURI(urlSplitObj[urlSplitObjLen-1]);
    let folderName = decodeURI(urlSplitObj[urlSplitObjLen-2]);
    return new Promise((resolve,reject) => {
            const params = {
            Bucket: EV.BUCKET,
            Key: '' + folderName + '/' + imageName + ''
            }
            s3bucket.getObject(params,async (err, data)=> {
            if (err) {
                console.log("Error", err);
                //resolve({"success": false, "message": err.message || JSON.stringify(err)})
            } else {
                console.log("Success", data);
                if(sizeWidth>0 && sizeHeight>0){
                    const compressedImageBuffer = await sharp(data.Body)
                    .resize({ 
                        width: sizeWidth, 
                        height: sizeHeight, 
                        fit: 'cover'
                    })
                    .toBuffer();
                    resolve('data:application/octet-stream;base64,'+compressedImageBuffer.toString('base64'));
                }else{
                    resolve('data:application/octet-stream;base64,'+data.Body.toString('base64'));
                }
            }
        })
    });
}


familyImages =  (familyDetailsFile) => {
    return new Promise((resolve,reject) => {
        var familyArray = [];
        var motherFileName = [];
        var motherFileData = [];
        var motherIdArr = [];
        var fatherIdArr = [];
        var wifeIdArr = [];
        var childIdArr = [];
        var motherHash = {};
        var fatherHash = {};
        var fatherFileName = [];
        var fatherFileData = [];
        var wifeHash = {};
        var wifeFileName = [];
        var wifeFileData = [];
        var childHash = {};
        var childFileName = [];
        var childFileData = [];
        if(familyDetailsFile.length > 0){
            familyDetailsFile.forEach( async element => {
                var dataHash = {};
                var arr = [];
                var familyImghash = {}
                //dataHash["id"] = element.id || "";
                dataHash["family_details_id"] = element.family_details_id || "";
                dataHash["file_for"] = element.file_for || "";
                // for mother
                if(element.file_for == 'mother'){                   
                    if(element.img_url){
                        var motherId = element.id;
                        motherIdArr.push(motherId);
                        var familt_img_string = JSON.parse(element.img_url)
                        var file_name = familt_img_string.file_name;
                        motherFileName.push(file_name);
                        var url = familt_img_string.img_url;
                        let familyBase64 = await stringToBase64(url)
                        motherFileData.push(familyBase64);
                        dataHash["file_name"] = motherFileName;
                        dataHash["file_obj"] = motherFileData;
                        dataHash["id"] = motherIdArr;
                    }
                }
               
                // for father
                if(element.file_for == 'father'){                   
                    if(element.img_url){
                        var fatherId = element.id;
                        fatherIdArr.push(fatherId);
                        var familt_img_string = JSON.parse(element.img_url)
                        var file_name = familt_img_string.file_name;
                        fatherFileName.push(file_name);
                        var url = familt_img_string.img_url;
                        let familyBase64 = await stringToBase64(url)
                        fatherFileData.push(familyBase64);
                        dataHash["file_name"] = fatherFileName;
                        dataHash["file_obj"] = fatherFileData;
                        dataHash["id"] = fatherIdArr;
                    }
                   
                }

                //for wife
                if(element.file_for == 'wife'){                   
                    if(element.img_url){
                        var wifeId = element.id;
                        wifeIdArr.push(wifeId);
                        var familt_img_string = JSON.parse(element.img_url)
                        var file_name = familt_img_string.file_name;
                        wifeFileName.push(file_name);
                        var url = familt_img_string.img_url;
                        let familyBase64 = await stringToBase64(url)
                        wifeFileData.push(familyBase64);
                        dataHash["file_name"] = wifeFileName;
                        dataHash["file_obj"] = wifeFileData;
                        dataHash["id"] = wifeIdArr;
                    } 
                } 

                //for child
                if(element.file_for == 'child'){                   
                    if(element.img_url){
                        var childId = element.id;
                        childIdArr.push(childId);
                        var familt_img_string = JSON.parse(element.img_url)
                        var file_name = familt_img_string.file_name;
                        childFileName.push(file_name);
                        var url = familt_img_string.img_url;
                        let familyBase64 = await stringToBase64(url)
                        childFileData.push(familyBase64);
                        dataHash["file_name"] = childFileName;
                        dataHash["file_obj"] = childFileData;
                        dataHash["id"] = childIdArr;
                    } 
                }

                familyArray.push(dataHash);
                if(familyDetailsFile.length == familyArray.length){
                    const key = 'file_for';
                    const arrayUniqueByKey = [...new Map(familyArray.map(item =>
                    [item[key], item])).values()];
                    arrayUniqueByKey.forEach((e,index) =>{
                        var array = [];
                        if(e.file_name){
                            if(e.file_name.length > 0){
                                for(var i = 0; i< e.file_name.length; i++){
                                    inner_hash = {};
                                    inner_hash["id"] = e.id[i];
                                    inner_hash["file_name"] = e.file_name[i];
                                    inner_hash["file_obj"] = e.file_obj[i];
                                    array.push(inner_hash);
                                    if(array.length == i+1){
                                        e["image"] = array;
                                    }
                                }
                                delete e['file_name'];
                                delete e['file_obj'];
                                delete e["id"]
                                if(arrayUniqueByKey.length == index+1){
                                    resolve(arrayUniqueByKey);
                                }
                            }
                            
                        }else{
                            if(arrayUniqueByKey.length == index+1){
                                resolve(arrayUniqueByKey);
                            }
                        }
                       
                    })
                }
            })
        }
    })
}

educationImages =  (educationDetails) => {
    return new Promise(async (resolve,reject) => {
            for(var j = 0;j<educationDetails.length;j++){
                var educationArray = []
                if(educationDetails[j].EducationDetailsFiles.length > 0){
                    for(var i = 0;i<educationDetails[j].EducationDetailsFiles.length; i++){
                        var educationdataHash = {};
                        var arr = [];
                        var educationImghash = {}
                       //educationdataHash["id"] = educationDetails[j].EducationDetailsFiles[i].id || "";
                        educationdataHash["education_details_id"] = educationDetails[j].EducationDetailsFiles[i].education_details_id || "";
                        if(educationDetails[j].EducationDetailsFiles[i].img_url){
                            educationImghash["id"] = educationDetails[j].EducationDetailsFiles[i].id || "";
                            var education_img_string = JSON.parse(educationDetails[j].EducationDetailsFiles[i].img_url)
                            var file_name = education_img_string.file_name;
                            educationImghash["file_name"] = file_name;
                            var url = education_img_string.img_url;
                            let educationBase64 = await stringToBase64(url);
                            educationImghash["file_obj"] = educationBase64;
                           arr.push(educationImghash);
                       }
                        educationdataHash["image"] = arr;
                        educationArray.push(educationdataHash);
                        if(educationArray.length == educationDetails[j].EducationDetailsFiles.length){
                            educationDetails[j].EducationDetailsFiles = educationArray;
                            if(educationDetails.length == j+1){
                                resolve(educationDetails);
                            }
                       }
                   }
                }else{
                   if(educationDetails.length == j+1){
                       resolve(educationDetails);
                   }
                }
            }
    })
}

 module.exports = {stringToBase64,familyImages,educationImages, getS3Object}
