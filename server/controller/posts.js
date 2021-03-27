export const getPost = (req,res)=>{
    res.send('Post');

}



export const newPost = (req,res)=>{

    const data = req.body;
    res.send(data);

}