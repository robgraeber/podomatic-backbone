var FollowerView = Backbone.View.extend({
  className: "FollowerView",
  template: _.template($("#FollowerView").html()),
  events:{
    "click #podcast-list-options li a": "highlightBtn",
  },
  highlightBtn: function(e){
    this.$("#podcast-list-options li a").removeClass("active");
    $(e.currentTarget).addClass("active")
  },
  initialize: function(){
    this.podcastCollectionView  = new PodcastCollectionView({
      collection:this.model.get("podcastCollection")
    });
   
  },
  render:function(){
    this.$el.html(this.template());
    this.$(".podcastCollectionView").html(this.podcastCollectionView.render());

    return this.$el;
  }
});