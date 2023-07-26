exports = function() {
    context.functions.execute('ecs_pause_num_task_zero');
    // The count would decrease to zero, but wait for the application to stop. The team needs to write some code in hte context of your application health check.

    context.functions.execute('atlas_pause_cluster');
  
    return "success";
};