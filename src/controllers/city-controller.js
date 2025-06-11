const {CityService}=require('../services/city-service'); 

const cityService=new CityService();
const create= async ( req,res)=>{
    try{
        const city=await CityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:'Succesfully created a city ',
            err:{}
        });
    }
    catch{ 
        console.log(error);
        return res.status(500).json({
            data:{},
            message:'city nhi bana sorry dhnag se code likh liye hote ',
            success:false,
            err:error
        });
    }
}

const destroy=( req,res)=>{
    try{

    }
    catch{
        console.log(error);
    }
}

const get=( req,res)=>{
    try{

    }
    catch{
        console.log(error);
    }
}

const update=( req,res)=>{
    try{

    }
    catch{
        console.log(error);
    }
}
module.exports={
    create,
    destroy ,
    get, 
    update
}