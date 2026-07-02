const product_model= require('../models/card');
const user = require('../models/user')



exports.proid= async (req,res) =>{
    try {

        const {id} =  await req.body;
        console.log(id);

    //    const data_name= data.map((index)=>index.name)
    //    console.log(data_name);

        return{
            success:true,
            data
        }

    } catch (error) {
        

        console.log("err of products",error)
    }
}