const CusineModel = require("../model/cusine.schema")


//put
const addCusine = async (req, res) => {
    // if (Object.keys(req.body).length === 0) {
    //     const error = new Error('Req body is null');
    //     error.statusCode = 400; // Set the desired status code
    //     throw error;
    //   }
    // let data = req.body;
    // console.log("Data ============= > ", data)
    // try {

    //     const newCuisine = new CusineModel(data);
    //     await newCuisine.save();

    //     res.json({ status: 'Data added', data: newCuisine });
    // }
    let data;
    try{
        data = await CusineModel(req.body)
        await data.save()
    }
    catch (error) {
        console.log(error.message);
    }
    if (!data) {
        res.status(500).json({ status: 'unable to add' })
    }
    res.json({ status: 'Data added' })
}

//get
const getCuisines = async(req,res)=>{
    console.log("______", req.params)
    var data;
    try{
        data = await CusineModel.find({cusineType:req.params.type})
        res.json({
            status : "success",
            data : data
        })
        console.log(data)
    }
    catch(error){
        console.log(error);
    }
    if(!data){
          res.status(404).json({status:'empty'})
    }    
}
// update
    const updateCusine = async(req,res)=>{
        let name = req.params.name
        let newData = req.body
        let data;
        console.log(name)
        console.log(newData)
    try{
         data = await CusineModel.findOneAndUpdate(
            { name },
            req.body
         )
        res.json({status:'updated'})
    }
    catch(err){
        console.log(err);

    }
    if(!data){
        res.status(500).json({status:'unable to update'})
    }
}

//delete
const deleteCuisine = async(req,res)=>{
    let name = req.params.name
    console.log(name)
    try{
        await CusineModel.findOneAndDelete({name})
        res.json({status:'deleted'})
    }
    catch(error){
        console.log(error)
        res.json({status:'unable to delete'})
    }


}

//exporting

module.exports = { addCusine , getCuisines,deleteCuisine,updateCusine}