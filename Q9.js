  const EventEmitter=require('events');
  var eventEmitter=new EventEmitter();

  const eventlistener=(eventName)=>{
    console.log(`Thanks for subscribing ${eventName}`);
  }

eventEmitter.addListener('Subscribe',eventlistener);
eventEmitter.emit('Subscribe',"CollegeWallah");

eventEmitter.removeListener('Subscribe',eventlistener);
eventEmitter.emit('Subscribe',"CollegeWallah");

//there is no change before and ad after removing listener you can directly emit event listener
