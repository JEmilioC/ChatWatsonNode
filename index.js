var app= require('express')();
var http= require('http').Server(app);
var io= require('socket.io')(http);
var ConversationV1 = require('watson-developer-cloud/conversation/v1');
var conversation = new ConversationV1({
  username: 'db542e8e-ba60-4115-b898-6c5343b826ed',
  password: 'z05uHNSa03AA',
  path: { workspace_id: 'a6a968f3-5ddf-47e2-abc4-84dd9c24d298' },
  version_date: '2017-10-10'
});
app.get('/', function(req,res){
	res.sendFile(__dirname+'/index.html');
})
io.emit('some event', { for: 'everyone' });
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
     var hoy= new Date();
     var hr= hoy.getHours();
     var min= hoy.getMinutes();
     var hora= hr+":"+min;
     if (msg!="") {
    io.emit('chat message', "You("+hora +" hrs): " + msg);
conversation.message({input: {text: msg}}, processResponse);
}
function processResponse(err, response) {
  if (err) {
    console.error(err);
    return;
  }
  if (response.intents.length > 0) {
    console.log('Detected intent: #' + response.intents[0].intent);
  }
  if (response.output.text.length != 0) {
      if (response.output.text[0]=="imagen") {
          io.emit('chat message', response.output.text[0]);
          console.log(response.output.text[0]);
      }
      else {
          console.log(response.output.text[0]);
	         io.emit('chat message', "Watson("+hora +" hrs): "  +response.output.text[0]);
        for (var i = 1; i < response.output.text.length; i++) {
          io.emit('chat message',"vacio");
          io.emit('chat message', response.output.text[i])
          }
      }
    }
}
	});
});
http.listen(3000,function(){
	console.log('listening on port 3000')
});   