let myParty = [];
let id = 0;

module.exports={
    create:(req,res)=>{
        const{name,level}=req.body;
        console.log(name,level);
        myParty.push({id,name,level});
        id++;
        res.status(200).json(myParty);
    },

    read:(req,res)=>{
        res.status(200).json(myParty);
    },


    update:(req,res)=>{
        
    },

    delete:(req,res)=>{

    }


};