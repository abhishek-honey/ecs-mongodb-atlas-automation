exports = async function(){
const projectID = context.values.get('mongodb-atlas-projectid');
    const clusterName = context.values.get('mongodb-atlas-cluster-name-for-status-if-running');
  
    const username = context.values.get('mongodb-atlas-public-key');
    const password = context.values.get('mongodb-atlas-private-key');
    
      const arg = { 
      scheme: 'https', 
      host: 'cloud.mongodb.com', 
      path: 'api/atlas/v1.0/groups/' + projectID + '/clusters/' + clusterName, 
      username: username, 
      password: password,
      headers: {'Content-Type': ['application/json'], 'Accept-Encoding': ['bzip, deflate']}, 
      digestAuth:true,
    };
    
    response = await context.http.get(arg);
    
    console.log(response.body.text());
    
    const clusterStatus = EJSON.parse(response.body.text());
    
    console.log("=============================================ATLAS STATE: " + clusterStatus.stateName);
    
    // Check the "paused" status and take appropriate actions
      if (clusterStatus.stateName === "IDLE") {
        return {"status": "unpaused"};
      } else {
        return {"status": "paused"};
      }
};