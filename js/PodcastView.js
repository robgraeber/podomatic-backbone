var PodcastView = Backbone.View.extend({
  className: "PodcastView",
  tagName:"span",
  template: _.template($("#PodcastView").html()),
  events:{
    "mouseenter .podcast-item": function(e){
      this.$(".podcast-image-container").addClass("active");
    },
    "mouseleave .podcast-item": function(e){
      this.$(".podcast-image-container").removeClass("active");
    }
  },
  initialize: function(){
    
  },
  render:function(){
    return this.$el.html(this.template(this.model.toJSON()));
  }
});