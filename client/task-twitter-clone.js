// counter starts at 0
Session.setDefault('counter', 0);

Template.postForm.helpers({
});

Template.postForm.events({
    'submit .new-post': function (event, template) {
        alert(template.find('input[type="text"]').value);
    }
});
