Meteor.publish('posts', function(){
    return Posts.find({});
});

Meteor.methods({
    insertMessage : function(message) {

        var userId = Meteor.userId();
        var userName = Meteor.user().profile.name;
        var date = new Date();

        console.log(userId);
        console.log(userName);
        console.log(message);
        console.log(date);

        Posts.insert({
            owner: userId,
            auther: userName,
            text: message,
            createdAt: date
        });
    }
});

