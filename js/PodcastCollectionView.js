var PodcastCollectionView = Backbone.View.extend({
  className: "PodcastCollectionView",
  initialize: function(){
   
  },
  render:function(){
    this.$el.children().detach();
    this.$el.append(
      this.collection.map(function(podcast){
        return new PodcastView({model: podcast}).render();
      })
    );
    return this.$el;
  }
});