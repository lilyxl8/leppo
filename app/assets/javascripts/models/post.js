Leppo.Models.Post = Backbone.Model.extend({
  urlRoot: '/api/posts',

  comments: function () {
    if (!this._comments) {
      this._comments = new Leppo.Collections.Comments([], { collection: this });
    }
    return this._comments;
  },

  parse: function (response) {
    if (response.comments) {
      this.comments().set(response.comments, { parse: true });
      delete response.comments;
    }

    return response;
  }
});
