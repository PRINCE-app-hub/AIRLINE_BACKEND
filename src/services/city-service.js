const {CityRepository}=require('../repository/city-repository');

class CityService {
    constructor(){
        this.cityRepository= new CityRepository
    }

    async addCity({data}){
        try{
            const city= await this.cityRepository.createCity(data);
            return city;
        }
        catch{
            console.log("Error in adding city ");
            throw{error}; 
        }
    }

    async deleteCity(cityId){
        try{
            const response=await this.cityRepository.deleteCity(cityId)
            return response;
        }
        catch{
                console.log ("Error in deleting city");
                throw{error};
        }
    }
    async updateCity(cityId,data){
        try{
            const response= await this.cityRepository.updateCity(cityId,data);
            return response;
        }
        catch{
            console.log ("Error in deleting city");
                throw{error};
        }
    }
    async getCity(cityId){
        try{
            const response=await this.cityRepository.getCity(cityId);
            return response;
        }
        catch{
            console.log ("Error in deleting city");
                throw{error};
        }
    }
}