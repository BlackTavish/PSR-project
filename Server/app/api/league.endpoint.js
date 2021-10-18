import { getLeague } from "../services/league.js";

const leagueEndpoint = (router) =>{
    router.get("/api/league", async(req,res) => {
        try{
            console.log("Udało się pobrać dane dotyczące ligi.");
            await getLeague(req.query.leagueName, res);
        }catch(err){
            console.log("Nie udało się pobrać.", err)
        }
    })
}
export default leagueEndpoint;