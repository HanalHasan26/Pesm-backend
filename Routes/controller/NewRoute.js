const asyncHandler = require("express-async-handler"); 
const Player = require("../../Models/Players");
const SliderHome = require("../../Models/SliderModel");

const addNewPlayer =asyncHandler(async(req,res)=>{

const {Name,CardType,PrograssionPoint,LevelOnePic,MaxPlayerPic,Shooting,Passing,Dribbling,Dexterity,LowerBodyStrength,AerialStrength,Defending,GkOne,GkTwo,GkThree} = req.body

const player = await Player.create({
    Name,
    CardType,
    PrograssionPoint,
    LevelOnePic,
    MaxPlayerPic,
    Shooting,
    Passing,
    Dribbling,
    Dexterity,
    LowerBodyStrength,
    AerialStrength,
    Defending,
    GkOne,
    GkTwo,
    GkThree

})

if (player) {
    res.status(200).json(player)
} else {
    res.status(400).json({
        message:"not posted",
        issError:true
    })
}

})

const fetchNewPlayer =asyncHandler(async(req,res)=>{
    
   const  allNewPlayer = await Player.find({})

   if (allNewPlayer) {
    res.status(200).json(allNewPlayer)
   } else {
    res.status(400).json({
        message:"not Getting",
        issError:true
    })

   }
})

const AddTrending = asyncHandler(async(req,res)=>{
    const {_id} = req.body
    const AddTrending= await Player.findByIdAndUpdate({_id:_id},{"$set":{"isTranding":true}})
    res.json(AddTrending)
})


const trending = asyncHandler (async(req,res)=>{
    const getTrending = await Player.find({isTranding:true});
    return res.json(getTrending)
})

const removeTrending = asyncHandler(async(req,res)=>{
    const {_id} = req.body
    const removeTrending = await Player.findByIdAndUpdate({_id:_id},{"$set":{"isTranding":false}})
    res.json(removeTrending)
})

const getPlayerId =asyncHandler(async(req,res)=>{
    const updatePlayer = await Player.findByIdAndRemove({_id:req.params._id})
    res.json(updatePlayer);
})

const singlePlayer =asyncHandler(async(req,res)=>{
    const _id = req.params.id
    const updatePlayer = await Player.findById(_id)
    if (updatePlayer) {
        res.status(200).json(updatePlayer);
    } else {
        res.status(400).json("no data found");
    }
    
})

const GetSlider = asyncHandler (async(req,res)=>{

    const GetSlider = await SliderHome.find({});
    return res.json(GetSlider)
})

const slider = asyncHandler (async(req,res)=>{

    const {pic1,pic2,pic3}  =req.body
    const slider = await Player.updateOne({pic1:pic1,pic2:pic2,pic3:pic3});
    return res.json(slider)
})



module.exports ={addNewPlayer,fetchNewPlayer,AddTrending,trending,removeTrending,getPlayerId,singlePlayer,slider,GetSlider}