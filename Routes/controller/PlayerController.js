const asyncHandler = require("express-async-handler");
const Player = require("../../Models/Players");

const DeclinePlayer = asyncHandler (async(req,res)=>{
    const { Name,Fullname, Team, League, Nationality, Rating,level, Contract, Position, FullNamePosition,Age, Height, Weight, Condition, Price, star,
         foot,footUsage,footAcc, form,injury, category, footPic, teamPic, nationalityPic, playerDp, LeaguePic} = req.body;

       const { OffensiveA, Finishing, KinkingPower,BallControl, Dribbling, TightPossession, Balance, LowPass,
         LoftedPass, SetPieceTaking, Curl, Speed, Acceleration, PhysicalContact, Stamina,Heading, Jumping, DeffensiveAwareness, Tackling,DefensiveEngagement,
         Aggression, GkAwareness, GkCatching, GkParrying, GkReflexes, GkReach, WeakfootUsage,WeakFoot,InjuryResistance,
         PossessionGame, QuickCounter,LongBallCounter,OutWide,LongBall,selectedSkills,selectedPlayingStyle,selectedAiStyle   } = req.body
         
        //  const countP =await Player.count({})
        //  console.log(countP);
        //  console.log("helloo");
        //  Name = Name+countP
         

    const player = await Player.create({
    Name,
    Fullname,
    Team,
    League,
    Nationality,
    Rating,
    level,
    Contract,
    Position,
    FullNamePosition,
    Age,
    Height,
    Weight,
    Condition,
    Price,
    star,
    foot,
    footUsage,
    footAcc,
    form,
    injury,
    category,
    footPic,
    teamPic,
    nationalityPic, 
    playerDp, 
    LeaguePic,
    

/////ADVANCE\\\\\

    OffensiveA,
    Finishing,
    KinkingPower,
    BallControl,
    Dribbling,
    TightPossession,
    Balance,
    LowPass,
    LoftedPass,
    SetPieceTaking,
    Curl,
    Speed,
    Acceleration,
    PhysicalContact,
    Stamina,
    Heading,
    Jumping,
    DeffensiveAwareness,
    Tackling,
    DefensiveEngagement,
    Aggression,
    GkAwareness,
    GkCatching,
    GkParrying,
    GkReflexes,
    GkReach,
    WeakfootUsage,
    WeakFoot,
    InjuryResistance,
    PossessionGame,
    QuickCounter,
    LongBallCounter,
    OutWide,
    LongBall,
    selectedSkills,
    selectedPlayingStyle,
    selectedAiStyle 
    
    });

    if(player){
        res.status(201).json({
    _id: player._id,
    Name:player.Name,
    Fullname:player.Fullname,
    Team: player.Team,
    League: player.League,
    Nationality : player.Nationality,
    Rating : player. Rating,
    level : player.level,
    Contract : player.Contract,
    Position: player.Position,
    FullNamePosition:player.FullNamePosition,
    Age : player.Age,
    Height : player.Height,
    Weight : player.Weight,
    Condition : player.Condition,
    Price : player.Price,
    star : player.star,
    foot : player.foot,
    footUsage:player.footUsage,
    footAcc:player.footAcc,
    form:player.form,
    injury:player.injury,
    category : player.category,
    footPic : player.footPic,
    teamPic : player.teamPic,
    nationalityPic : player.nationalityPic, 
    playerDp : player.playerDp, 
    LeaguePic : player.LeaguePic,
   
    OffensiveA:player.OffensiveA,
          Finishing:player.Finishing,
          KinkingPower:player.KinkingPower,
          BallControl:player.BallControl,
          Dribbling:player.Dribbling,
          TightPossession:player.TightPossession,
          Balance:player.Balance,
          LowPass:player.LowPass,
          LoftedPass:player.LoftedPass,
          SetPieceTaking:player.SetPieceTaking,
          Curl:player.Curl,
          Speed:player.Speed,
          Acceleration:player.Acceleration,
          PhysicalContact:player.PhysicalContact,
          Stamina:player.Stamina,
          Heading:player.Heading,
          Jumping:player.Jumping,
          DeffensiveAwareness:player.DeffensiveAwareness,
          Tackling:player.Tackling,
          DefensiveEngagement:player.DefensiveEngagement,
          Aggression:player.Aggression,
          GkAwareness:player.GkAwareness,
          GkCatching:player.GkCatching,
          GkParrying:player.GkParrying,
          GkReflexes:player.GkReflexes,
          GkReach:player.GkReach,
          WeakfootUsage:player.WeakfootUsage,
          WeakFoot:player.WeakFoot,
          InjuryResistance:player.InjuryResistance,
          PossessionGame:player.PossessionGame,
          QuickCounter:player.QuickCounter,
          LongBallCounter:player.LongBallCounter,
          OutWide:player.OutWide,
          LongBall:player.LongBall,
          selectedSkills:player.selectedSkills
          ,selectedPlayingStyle:player.selectedPlayingStyle
          ,selectedAiStyle:player.selectedAiStyle
        })
    }else{
        res.status(400); 
        throw new Error("Failed to create the user") 
    }

})

const fetchAllPlyers = asyncHandler (async(req,res)=>{

    const allPlayers = await Player.find({}).sort( { Rating: -1 });
    res.json(allPlayers)

}) 

const fetchStanderdPlayers = asyncHandler (async(req,res)=>{

const standerdPlayers = await Player.find({ category : "Standerd" });
res.json(standerdPlayers)

})

const fetchLegenderyPlayers = asyncHandler (async(req,res)=>{

const LegendaryPlayers = await Player.find({ category : "Legend" });
res.json(LegendaryPlayers)

})

const fetchFeaturedPlayers = asyncHandler (async(req,res)=>{

const FeaturedPlayers = await Player.find({ category : "Featured" });
res.json(FeaturedPlayers)
console.log(FeaturedPlayers);

})
const fetchEpicPlayers = asyncHandler (async(req,res)=>{

const EpicPlayers = await Player.find({ category : "Epic" });
res.json(EpicPlayers)
console.log(EpicPlayers);

})

const fetchNewPlayer =(req,res)=>{

}


module.exports = {DeclinePlayer,fetchAllPlyers,fetchStanderdPlayers,fetchLegenderyPlayers,fetchFeaturedPlayers,fetchEpicPlayers}; 
