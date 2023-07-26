exports = async function() {
  
  // Supply projectID and clusterNames...
  const projectID = context.values.get('mongodb-atlas-projectid');
  const clusterNames = context.values.get('mongodb-atlas-cluster-names-to-pause');

  // Get stored credentials...
  const username = context.values.get('mongodb-atlas-public-key');
  const password = context.values.get('mongodb-atlas-private-key');

  // Set desired state...
  const body = {paused: false};

  var result = "";
  
  clusterNames.forEach(async function (name) {
    result = await context.functions.execute('modifyCluster', username, password, projectID, name, body)
    console.log("Cluster " + name + ": " + EJSON.stringify(result));
    
    if (result.error) { 
      return result;
    }
  })


  return clusterNames.length + " clusters unpaused"; 
};