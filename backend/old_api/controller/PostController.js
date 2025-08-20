const Post = require("../models/PostModal");

// ✅ Utility response function
const sendResponse = (res, statusCode, success, message, data = null) => {
  return res.status(statusCode).json({ success, message, data });
};

// ✅ Get all posts
const handleGetAllPost = async (req, res) => {
  try {
    const posts = await Post.find();
    return sendResponse(res, 200, true, "Posts fetched successfully", posts);
  } catch (error) {
    return sendResponse(res, 500, false, "Failed to fetch posts", error);
  }
};

// ✅ Get post by ID
const handleGetPostById = async (req, res) => {
  try {
    const { id } = req.query;
    if (!id) {
      return sendResponse(res, 400, false, "Post Id is required");
    }
    const post = await Post.findById(id);
    if (!post) {
      return sendResponse(res, 404, false, "Post not found");
    }
    return sendResponse(res, 200, true, "Post fetched Successfully !!!", post);
  } catch (error) {
    return sendResponse(res, 500, false, "Failed to fetch post !!!", error);
  }
};

// ✅ Create new post
const handleRegisterPost = async (req, res) => {
  try {
    const {
      authorId,
      caption,
      media,
      content,
      hashTags,
      mentions,
      liked_by,
      likes,
      shares,
      savedBy,
      visibility,
      comments,
    } = req.body;

    if (!authorId || !caption) {
      return sendResponse(res, 400, false, "authorId or caption are required");
    }

    const newPost = await Post.create({
      authorId,
      caption,
      media,
      content,
      hashTags,
      mentions,
      liked_by,
      likes,
      shares,
      savedBy,
      visibility,
      comments,
    });

    return sendResponse(res, 201, true, "Post created successfully", newPost);
  } catch (error) {
    return sendResponse(res, 500, false, "Failed to create post !!!", error);
  }
};

// ✅ Update post
const handleUpdatePost = async (req, res) => {
  try {
    const { id } = req.query;
    const updates = req.body;

    if (!id) {
      return sendResponse(res, 400, false, "Post id is required");
    }

    const post = await Post.findByIdAndUpdate(id, updates, { new: true });
    if (!post) {
      return sendResponse(res, 404, false, "Post not found");
    }
    return sendResponse(res, 200, true, "Post updated successfully !!!", post);
  } catch (error) {
    return sendResponse(res, 500, false, "Failed to update post", error);
  }
};

// ✅ Delete post
const handleDeletePost = async (req, res) => {
  try {
    const { id } = req.query;
    if (!id) {
      return sendResponse(res, 400, false, "Post Id is required");
    }

    const deletedPost = await Post.findByIdAndDelete(id);
    if (!deletedPost) {
      return sendResponse(res, 404, false, "Post not found");
    }

    return sendResponse(res, 200, true, "Post deleted successfully", deletedPost);
  } catch (error) {
    return sendResponse(res, 500, false, "Failed to delete post", error);
  }
};

// ✅ Export all handlers (CommonJS)
module.exports = {
  handleGetAllPost,
  handleGetPostById,
  handleRegisterPost,
  handleUpdatePost,
  handleDeletePost,
};
