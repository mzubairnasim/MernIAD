const express=require("express")
const router=express.Router()
import User from '../models/userModal'
const {getToken}=require('../util')

router.post('/signin', async (req, res) => {
  const signinUser = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (signinUser) {
    res.send({
      _id: signinUser.id,
      name: signinUser.name,
      email: signinUser.email,
      isAdmin: signinUser.isAdmin,
      token: getToken(signinUser),
    });
  } else {
    res.status(401).send({ message: 'Invalid Email or Password.' });
  }
});
router.get('/data',(req,res)=>{
  res.send("hello")
})

router.post('/register', async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  const newUser = await user.save();
  if (newUser) {
    res.send({
      _id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
      token: getToken(newUser),
    });
  } else {
    res.status(401).send({ message: 'Invalid User Data.' });
  }
});


router.get("/createadmin",async(req,res)=>{
    try {
        const user=new User({
            name:"Zubair",
            email:"zu@gmail.com",
            password:"123",
            isAdmin:true
        })
        const newuser=await user.save()
        res.send(newuser)
    } catch (error) {
        res.send({msg:error.message})
    }
   
})


export default router

