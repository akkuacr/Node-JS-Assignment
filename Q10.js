  const EventEmitter=require('events');
  var eventEmitter=new EventEmitter();

   eventEmitter.defaultMaxListeners=10;
   console.log('Default event Listeners are' ,eventEmitter.defaultMaxListeners);

  eventEmitter.setMaxListeners(5);
  console.log('Default event Listeners now are' ,eventEmitter.getMaxListeners());
