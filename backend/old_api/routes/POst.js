
const express = require("express");
const {   handleDeletePost,handleGetAllPost,
    handleUpdatePost,
    handleRegisterPost,
    handleGetPostById} = require ('../controller/PostController');

const router = express.Router();



// fetch all post 
router.get("/" , handleGetAllPost);

// fetch post by id
router.get("/id",handleGetPostById);

router.post("/register",handleRegisterPost)

router.patch("/update" , handleUpdatePost);

router.delete("/delete", handleDeletePost)


module.exports = router;