var PodcastView = Backbone.View.extend({
  className: "PodcastView",
  template: _.template($("#PodcastView").html()),
  initialize: function(){
  },
  render:function(){
    return this.$el.html(this.template());
  }
});