class Post < ActiveRecord::Base
  validates :feed_id, presence: true
  validates :full_img, presence: true, uniqueness: true
  validates :thumb_img, presence: true, uniqueness: true
  validates :created_time, presence: true

  belongs_to :feed

  has_many :likes
  has_many :likers, through: :likes, source: :user

  has_many :comments

  def author
    feed.ig_user
  end

  def country
    feed.country.name
  end

  def category
    feed.category.name
  end

  def like_count
    likes.count
  end

  def likers_names
    likers.map(&:email).join(", ")
  end

  def comment_count
    comments.count
  end
end
