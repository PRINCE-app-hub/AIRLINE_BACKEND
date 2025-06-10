const { City} =require('../models/index');
// this is the place to interact with the models 
class CityRepository{
    async createCity({name}){
        try{
            const city=await City.create({name});
        }
        catch(error){
            console.log("Something went wrong int the repository layer");
            throw(error); 
        }
    }
    async deleteCity({cityId}){
        try{
            await City.destroy({
                where: {
                    id:cityId
                }
            });
        }
        catch(error){
            console.log("something went wrong here ");
            throw{error};
        }
    }
    async updateCity({updated_name,cityId}){
        try{
        const city= await City.update(
            { name: updated_name },
            { where: { name: prev_name } }
                        );

        }   
        catch(error){
                console.log("Something went wrong here in updation ");
                throw(error); 

        }
    }
    async getCity({cityId}){
        try{
            const city=await City.findByPk(cityId);
        }
        catch(error){

        }
    }
}
module.exports=CityRepository