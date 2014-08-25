var PodcastCollectionView = Backbone.View.extend({
  className: "PodcastCollectionView",
  template: _.template($("#PodcastCollectionView").html()),
  initialize: function(){
   
  },
  render:function(){
    return this.$el.html(this.template());
  }
});