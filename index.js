var app= require('express')();
var http= require('http').Server(app);
var io= require('socket.io')(http);

var ConversationV1 = require('watson-developer-cloud/conversation/v1');

var conversation = new ConversationV1({
  username: 'b56f3160-774b-4c90-9341-dde436c46dc3',
  password: 'wmTZU13BtHoh',
  path: { workspace_id: 'be6008e1-1343-4962-b174-79ff8726c1ca' },
  version_date: '2017-10-10'
});


app.get('/', function(req,res){
	res.sendFile(__dirname+'/index.html');
})

io.emit('some event', { for: 'everyone' });

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', "You: "+msg);


conversation.message({input: {text: msg}}, processResponse);

function processResponse(err, response) {
  if (err) {
    console.error(err);
    return;
  }
  if (response.intents.length > 0) {
    console.log('Detected intent: #' + response.intents[0].intent);
  }

  if (response.output.text.length != 0) {
      console.log(response.output.text[0]);
	  io.emit('chat message', "Watson: " +response.output.text[0]);
  }

}

	});
});
http.listen(3000,function(){
	console.log('listening on port 3000')
});
