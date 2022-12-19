import footballModel from "../models/footballModel.js";

export const allTeam = async(req,res)=>{
    try{
        const teams = await footballModel.findAll();
        if(teams.length === 0){
            res.status(404).jso
            n({
                message: "Sorry this is Wrong"
            })
        }else{
            res.status(200).json({
                message: "All teams in this league " + teams.length,
                data: teams
            })
        }
    }catch(err){
        console.log(err.message)
    }
};

export const oneTeam = async(req,res)=>{
    try{
        let id = req.params.id;
        const team = await footballModel.findAll({where:{id:id}})
        if(team.length === 0){
            res.status(404).json({
                message: `This team is with thus id: ${id} is not found`
            })
        }else{
            res.status(200).json({
                data: team[0]
            })
        }
    }catch(err){
        console.log(err.message)
    }
};

export const updTeam = async(req,res)=>{
    try{
        let id = req.params.id;
        let body = req.body.numberOfPlayers
        console.log(body)
        const team = await footballModel.update(req.body, {where: {id:id}})
        if(team[0] === 1 && body >= 22 && body <= 25 ){
        res.status(200).json({
            message: "Updated Successfully"
        })

        }else{
            res.status(400).json({
                message: "Please check your numbers of players or the user with the id is not available"
            })
    }
    }catch(err){
        console.log(err.message)
    }
};

export const deleteTeam = async(req,res)=>{
    try{
        let id = req.params.id;
        const team = await footballModel.destroy({where: {id:id}});
        if(team === 0){
            res.status(404).json({
                message: "Team not found"
            })
        }else{
        res.status(200).json({
            message: `Successfully Deleted this team. `,
        })
        }
    }catch(err){
        console.log(err.message)
    }
}