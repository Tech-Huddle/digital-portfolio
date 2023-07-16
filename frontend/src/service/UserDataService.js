import info from "../sample-data/bio-data.json"



class UserDataService{
  // Try to get rid off contrusctor
  constructor(){
    this.data = info
  }
  getData(){
    // Read data in here.
    return this.data // passing the data
  }
  
  getDataAPI(){
    // http request use kore data 
  }
  
} 

export default UserDataService;