Leppo.Collections.Posts = Backbone.Collection.extend({
  model: Leppo.Models.Post,
  url: '/api/posts',
  comparator: 'created_time',

  getOrFetch: function (id) {
    var post = this.get(id),
      posts = this;
    if(!post) {
      post = new Leppo.Models.Post({ id: id });
      post.fetch({
        success: function () {
          posts.add(post);
        },
      });
    } else {
      post.fetch();
    }
    return post;
  }
});

Leppo.Collections.posts = new Leppo.Collections.Posts();