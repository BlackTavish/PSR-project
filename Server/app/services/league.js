import leagueModel from "../models/leagueModel.js";

const getLeague= async(leagueName,res) => {
    const league =  await leagueModel.findOne({leagueName});
    if(league){
        res.status(200).json(league);
    }else{
        res.status(400).json({
            status: 400,
            msg: "Nie udało się pobrać danych."
        })
    }
    console.log(league);
}



export {getLeague};