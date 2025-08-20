const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({

    authorId:{type:String , required : true},
    caption: String,
    media :[String],
    hashTags : [String],
    mentions:[String],
    liked_by:[String],
    likes:Number,
    shares:Number,
    savedBy:[String],
    visibility:{ type: String, default: "public" },
comments:[]


}, { timestamps: true })


const Post = mongoose.model("Post", postSchema);
module.exports = Post;

// {
//     "postId": "123abc",
//     "authorId": "user456",
//     "caption": "Beautiful sunset 🌅 #nature #travel",
//     "media": [
//       {
//         "url": "https://cdn.fixora.com/uploads/sunset.jpg",
//         "type": "image",
//         "dimensions": { "width": 1080, "height": 1350 }
//       }
//     ],
//     "hashtags": ["#nature", "#travel"],
//     "mentions": ["user789"],
//     "likes": ["user111", "user222"],
//     "comments": ["commentId1", "commentId2"],
//     "shares": 10,
//     "savedBy": ["user555", "user999"],
//     "location": {
//       "placeName": "Santorini, Greece",
//       "coordinates": { "lat": 36.3932, "lng": 25.4615 }
//     },
//     "visibility": "public",
//     "isPinned": false,
//     "isArchived": false,
//     "createdAt": "2025-08-19T10:00:00Z",
//     "updatedAt": "2025-08-19T10:00:00Z"
//   }