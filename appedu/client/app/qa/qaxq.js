/**
 * Created by Luforn on 2015/9/16.
 */

Template.qaxq.helpers({
    'qaxq':function(){
        return dbQa.findOne({'_id':this.qaid});
    }
});


Template.qaxq.events({
    'click #add_reply':function(event,template){
        event.preventDefault();
        template.$('#reply_zone').show();
        template.$('#add_reply').hide();
    },
    'click #submit_reply':function(event,template){
        event.preventDefault();
        var replycontent = template.$('#qreply').val();
        var reply = {
            'replyuserid':Meteor.userId(),
            'replyusername':Meteor.user().username,
            'replycontent':replycontent,
            'replytime':'2015-09-17 20:27:30'
        };
        Meteor.call('updateQA',{'_id':this.qaid},{$push: {'replylist': reply}});
        template.$('#qreply').val('');
        template.$('#reply_zone').hide();
        template.$('#add_reply').show();

    },
    'click #cancle_reply':function(event,template){
        event.preventDefault();
        template.$('#qreply').val('');
        template.$('#reply_zone').hide();
        template.$('#add_reply').show();
    },
});