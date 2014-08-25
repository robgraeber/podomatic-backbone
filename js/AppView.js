var AppView = Backbone.View.extend({
  className: "AppView",
  template: _.template($("#AppView").html()),
  initialize: function(){
    this.headerView  = new HeaderView();
    this.navView     = new NavView();
    this.profileView = new ProfileView();

    var podcastCollection = new Backbone.Collection(this.model.get("podcasts"));
    this.followerView = new FollowerView({
      collection: podcastCollection
    });

  },
  render:function(){
    return this.$el.html(this.template({
      headerView: this.headerView.render().html(),
      navView: this.navView.render().html(),
      profileView: this.profileView.render().html(),
      followerView: this.followerView.render().html()
    }));
  }
});

$(function(){
  var appModel = new Backbone.Model({podcasts: podcastData});
  var appView = new AppView({model:appModel});
  $('#container').append(appView.render());
});