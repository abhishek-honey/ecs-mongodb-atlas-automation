exports = async function() {
  
  context.functions.execute('atlas_unpause_cluster');
  
   await sleep(60000);

  // periodically call the atlas_check_cluster_status_pause_or_unpause function and check if status is true
  let counter = 0;
  
  while(true){
    // Your code inside the loop goes here
    console.log('Loop iteration:', counter);
  
    // Increment the counter
    counter++;
    const response = context.functions.execute('atlas_check_cluster_status_pause_or_unpause');
    
    console.log(response);
  
    if (response.paused === true) {
          console.log("paused is true");
        } else {
          console.log("paused is false");
          break;
        }
    
    await sleep(counter * 1000);
  }
  
  context.functions.execute('ecs_get_desired_count');
  // Check the application status may be using a health check API for your apllication.
  return "success"; 
};


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}