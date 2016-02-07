Meteor.subscribe('posts');

Template.body.helpers({
    posts : function() {
        return Posts.find({});
    }
});

Template.postForm.events({
    'submit .new-post': function (event, template) {
        var message = template.find('input[type="text"]').value;
        Meteor.call("insertMessage", message);
    }
});


