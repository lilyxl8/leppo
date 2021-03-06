Leppo.Views.PostsIndex = Backbone.View.extend({
  template: JST["posts/index"],



  initialize: function () {
    this.listenTo(this.collection, "add change:title remove reset", this.render);
  },

  render: function () {
    var renderedContent = this.template({
      categories: this.collection
    });
    this.$el.html(renderedContent);
    return this;
  }
});
