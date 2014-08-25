var AppView = Backbone.View.extend({
  className: "AppView",
  template: _.template($("#AppView").html()),
  initialize: function(){
    this.headerView   = new HeaderView();
    this.navView      = new NavView();
    this.profileView  = new ProfileView();
    var followerModel = new Backbone.Model({
      podcastCollection: this.model.get("podcastCollection")
    })
    this.followerView = new FollowerView({ model: followerModel });

  },
  render:function(){
    this.$el.html(this.template());
    this.$(".headerView").html(this.headerView.render())
    this.$(".navView").html(this.navView.render())
    this.$(".profileView").html(this.profileView.render())
    this.$(".followerView").html(this.followerView.render())

    return this.$el;
  }
});

$(function(){
  var podcastCollection = new Backbone.Collection(podcastData);
  var appModel = new Backbone.Model({
    podcastCollection: podcastCollection
  });
  var appView = new AppView({ model:appModel });
  $('#container').append( appView.render() );
});