import Posts from '../model/POST.js'


export const getPost = async  (req,res)=>{

    try {
        const post = await  Posts.find();
         res.status(200).send(post);
        
    } catch (error) {

        res.status(404).send( 'message : ' + error )
        
    }
    

}

export const newPost =async  (req,res)=>{

    const data = req.body;
    const newPost = new Posts (data)
    try {
        await newPost.save();
        res.send(newPost);
    } catch (error) {
        res.status(400).send( 'message : ' + error )
    }
}