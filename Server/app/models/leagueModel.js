import mongoose from "mongoose";

const leagueSchema = new mongoose.Schema({
    leagueName: {type: String},
    clubsPL: [
        {
            name: {type: String},
            image_url: {type: String},
            description: {type: String},
            coach: {type: String},
            players: [
            {
                name: {type: String},
                pos: {type: String}
            }
        ]
        }
       
    ]
    
}, {
    collection: "clubs",
    _id: false
});

const leagueModel = mongoose.model("league", leagueSchema);

export default leagueModel;