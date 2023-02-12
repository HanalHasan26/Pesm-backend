const mongoose = require('mongoose');

const sliderSchema = mongoose.Schema({
    pic1:{type:String},
    pic2:{type:String},
    pic3:{type:String},

},
{
    timestamps: true
}
)

const  SliderHome = mongoose.model("SliderHome",sliderSchema)

module.exports= SliderHome;