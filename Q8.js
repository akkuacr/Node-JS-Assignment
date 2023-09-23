  const EventEmitter=require('events');
  var eventEmitter=new EventEmitter();

  eventEmitter.on('Subscribe',()=>{
    console.log('Thanks for subscribing');
  })

  eventEmitter.emit('Subscribe');
