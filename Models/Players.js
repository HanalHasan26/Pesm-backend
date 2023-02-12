const mongoose = require('mongoose');


const playerSchema = mongoose.Schema({

    Name:{type:String},
    CardType:{type:String},
    PrograssionPoint:{type:Number},
    LevelOnePic:{type:String},
    MaxPlayerPic:{type:String},

    isTranding:{type:Boolean, default:false},

    Shooting:{type:Number},
    Passing:{type:Number},
    Dribbling:{type:Number},
    Dexterity:{type:Number},
    LowerBodyStrength:{type:Number},
    AerialStrength:{type:Number},
    Defending:{type:Number},
    GkOne:{type:Number},
    GkTwo:{type:Number},
    GkThree:{type:Number}


},
{
    timestamps: true
}
)

const  Player = mongoose.model("Player",playerSchema)

module.exports= Player;

