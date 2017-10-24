intent = "imagen";
var intents=[
    {"id":"imagen","html":'<li><img style="margin-top:1px;"src="https://image.ibb.co/nctEYw/Snap7.jpg" width="3  50px""/>'},
    {"id":"acr1","html":'<li><img style="margin-top:1px;"src="https://image.ibb.co/jrTsLb/acron1.jpg"width="300px""/>'},
    {"id":"acr2","html":'<li><img style="margin-top:1px;"src="https://image.ibb.co/exUz0b/acron2.jpg" width="300px""/>'},
    {"id":"acr3","html":'<li><img style="margin-top:1px;"src="https://image.ibb.co/cRR1Dw/acron3.jpg" width="300px""/>'},
    {"id":"morty","html":'<li><img style="margin-top:1px;"src="http://68.media.tumblr.com/e66fc07ffe291d283f79859344cafd01/tumblr_o0ekjwNacC1s61ireo1_250.gif" width="300px""/>'},
    {"id":"imgdailylogin","html":'<li><img style="margin-top:1px;"src="https://w3-connections.ibm.com/wikis/form/api/wiki/06f08e7c-fd3d-4b2f-8125-4d4bcdf187e2/page/7ddb9615-f88d-443a-83e1-f394dc9211c6/attachment/3144a780-f7a0-425a-9058-7683b6ec4a5d/media/Error%20login%20Upper%20case.jpg" width="400px""/>'},
    {"id":"imgnav","html":'<li><img style="margin-top:1px;"src="https://w3-connections.ibm.com/wikis/form/api/wiki/06f08e7c-fd3d-4b2f-8125-4d4bcdf187e2/page/0c6cb4da-7442-471a-9376-8e383f481143/attachment/16cd903a-0a8b-40ae-b1b1-a8d146ece0b1/media/maximun.jpg" width="200px""/>'},
    {"id":"imgshort","html":'<li><img style="margin-top:1px;"src="https://w3-connections.ibm.com/wikis/form/api/wiki/06f08e7c-fd3d-4b2f-8125-4d4bcdf187e2/page/25d451e7-301f-4980-9b53-2c554ecb390c/attachment/b7749873-c812-4886-b6c7-f03803170cc7/media/Key%20Function.jpg" width="250px""/>'},
    {"id":"main1","html":'<li><img style="margin-top:1px;"src="https://w3-connections.ibm.com/wikis/form/api/wiki/06f08e7c-fd3d-4b2f-8125-4d4bcdf187e2/page/094932c4-9ca8-4fbb-b882-64e0051ca53c/attachment/f5aab08e-19e9-49fb-9663-f9b06398f074/media/new%20main%20menu.jpg" width="250px""/>'},
    {"id":"main2","html":'<li><img style="margin-top:1px;"src="https://image.ibb.co/ektRLm/menubar.jpg" width="250px""/>'},
    {"id":"main3","html":'<li><img style="margin-top:1px;"src="https://w3-connections.ibm.com/wikis/form/api/wiki/06f08e7c-fd3d-4b2f-8125-4d4bcdf187e2/page/094932c4-9ca8-4fbb-b882-64e0051ca53c/attachment/22c8c188-8a19-4335-b33b-fe13be48da5d/media/icon.jpg" width="250px""/>'},
    {"id":"hover","html":'<li><img style="margin-top:1px;"src="https://w3-connections.ibm.com/wikis/form/api/wiki/06f08e7c-fd3d-4b2f-8125-4d4bcdf187e2/page/fb9da3c5-da49-4f7e-9e68-649dc28c9726/attachment/9cd9e4f8-889c-468e-9b3e-3f247c81c364/media/new%20%20Conventions.jpg" width="500px""/>'},
    {"id":"sberror1","html":'<li><img style="margin-top:1px;"src="https://w3-connections.ibm.com/wikis/form/api/wiki/06f08e7c-fd3d-4b2f-8125-4d4bcdf187e2/page/98c154d1-5e12-4911-aa7e-f9a24ad55813/attachment/613f92c5-f633-401d-87a0-29b62e83420a/media/Error%20Message.jpg" width="200px""/>'},
    {"id":"sberror2","html":'<li><img style="margin-top:1px;"src="https://w3-connections.ibm.com/wikis/form/api/wiki/06f08e7c-fd3d-4b2f-8125-4d4bcdf187e2/page/98c154d1-5e12-4911-aa7e-f9a24ad55813/attachment/de48d6ff-8f21-4a49-b27e-45576466a3ec/media/Error%20Message%202.jpg" width="200px""/>'},
    {"id":"sberror3","html":'<li><img style="margin-top:1px;"src="https://w3-connections.ibm.com/wikis/form/api/wiki/06f08e7c-fd3d-4b2f-8125-4d4bcdf187e2/page/98c154d1-5e12-4911-aa7e-f9a24ad55813/attachment/30d594ea-d731-458a-9c71-b8d84810c5ad/media/Error%20Message%203.jpg" width="200px""/>'}
]
var a=0;
var c;
var flag = false;
while(a<intents.length){
    c=intents[a].id;
    if(intent==c){
        flag=true;
        c=intents[a].html;
        break;
    }
    a++;
}
if(flag){
    $('#messages').append($());
    $('body').scrollTop(9000);
}
else{
    $('#messages').append($('<li>').text(msg));
    //   $('#messages').append($('<img style="margin-top:1px;"src="https://www.ibm.com/thought-leadership/you/img/icon-01.png" width="60px"/>'));
      $('body').scrollTop(9000);
}
