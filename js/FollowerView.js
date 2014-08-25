var FollowerView = Backbone.View.extend({
  className: "FollowerView",
  template: _.template($("#FollowerView").html()),
  initialize: function(){
    this.podcastCollectionView  = new PodcastCollectionView();
   
  },
  render:function(){
    return this.$el.html(this.template({
      podcastCollectionView: this.podcastCollectionView.render().html()
    }));
  }
});