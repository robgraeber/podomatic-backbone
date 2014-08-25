var HeaderView = Backbone.View.extend({
  className: "HeaderView",
  template: _.template($("#HeaderView").html()),
  initialize: function(){
   
  },
  render:function(){
    return this.$el.html(this.template());
  }
});