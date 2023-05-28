import info from './sample-data/bio-data.json';


class UserDataService{
  // Try to get rid off contrusctor
  constructor(info){
    this.data = info
  }
  getData(){
    // Read data in here.
    return this.data // passing the data
  }
  
  
} 