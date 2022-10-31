import data from "../data";

// [] in file [postId] means an array file
// postId means object Post and property id
// in const, just write the name as same as the file name >>>>> {postId}
// query is an object that return data id (what is in {})
export default function handler(req, res){
    const {postId} = req.query;
    const {Posts} = data;

    // api/posts/{id}
    // .find is a method
    if(postId){
        const post = Posts.find(value => value.id == postId)
        return res.status(200).json(post)
    }

    return res.status(404).json({error:"Data Not Found"})
}