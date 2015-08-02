module.exports=function(server){
	var io = require('socket.io')(server);
	io.on('connection', function (socket) {
	  socket.emit('userSign', { hello: 'world' });
	  socket.on('userSign', function (data) {
	    console.log("userSign:");
	    console.log(data);
	  });
	  socket.on('clientMsg', function (data) {
	    console.log("emit:"+data.name+'to'+data.toUser);
	    socket.broadcast.emit('to'+data.toUser,data);//---返回消息
	  });
	});
}