var ProfileView = Backbone.View.extend({
  className: "ProfileView",
  template: _.template($("#ProfileView").html()),
  initialize: function(){
   
  },
  render:function(){
    return this.$el.html(this.template());
  }
});