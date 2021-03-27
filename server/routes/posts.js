import express from 'express'
import { getPost  , newPost} from '../controller/posts.js'


const router = express.Router();

router.get('/' , getPost)
router.post('/new' , newPost)



export default router ;