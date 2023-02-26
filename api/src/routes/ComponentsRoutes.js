const { Router }= require("express");
const {allComps, findComp, findByCategory, findById, findStock} = require("../controllers/getComponents.js");
const createComponent = require('./../controllers/createComponents.js');
const deleteComponent = require('./../controllers/deleteComponent.js');
const updateComponents = require('./../controllers/updateComponents.js');
const multer= require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
// const resultImg= require("../controllers/createComponents")
const cloudinary = require("../cloudinaryConfig/cloudinary.js")

const componentsRoutes= Router();

componentsRoutes.get("/", async (req, res) =>{
    const {name}= req.query;
    try {
        if(name){
            const compSearch = await findComp(name)
            if(!compSearch){ //preguntarle a Ivan si es necesario el [0] o no
                return res.status(400).send({error:"No such component found"})
            }else{
                return res.status(200).send(compSearch)
            }
        }
        return res.status(200).send(await allComps())
    } catch (error) {
        return res.status(500).send({error: error.message})

    }
});

componentsRoutes.get("/:category", async(req, res)=>{
    const {category}= req.params;
    try {
        if(category){
            const allComp= await findByCategory(category);
            if(!allComp){
                return res.status(404).send(`${category} is not a category`)
            }else{
                res.status(200).send(allComp)
            }
        }
    } catch (error) {
        return error
    }
});

componentsRoutes.get("/id/:id", async(req, res)=>{
    const {id}= req.params
    try {
        return res.status(200).send(await findById(id))
    } catch (error) {
        return error
    }
})

// componentsRoutes.post("/", async(req, res)=>{
//     const {name, description, img, description_2, description_3, description_4, price, category, stock, quantityStock}= req.body
//     try {
//         const resultImg= await cloudinary.uploader.upload(img, {
//             folder: "components",
//         })
        
//         res.status(201).send(await createComponent({
//             name:name,
//             category:category,
//             price:price,
//             description:description,
//             img:{
//                 public_id: resultImg.public_id,
//                 url: resultImg.secure_url
//             },
//             description_2:description_2,
//             description_3:description_3,
//             description_4:description_4,
//             stock:stock,
//             quantityStock:quantityStock

//         }));
//     } catch (error) {
//         console.log(error)
//         res.status(400).send({error})
//     }
// })

componentsRoutes.delete('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        await deleteComponent(id);
        res.status(201).send({status: 'Registro eliminado con éxito'});
    } catch (error) {
        res.status(404).send({error});
    }
})

componentsRoutes.put('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const data = req.body;
        res.status(204).send(await updateComponents(id, data))
    } catch (error) {
        res.status(404).send({error})
    }
})

componentsRoutes.get("/stock", async(req, res)=>{
    try {
        return res.status(200).send(await findStock())
    } catch (error) {

    }
})


// componentsRoutes.post("/", upload.single('img'), async(req, res) => {
//     try {
//         console.log(req.file)
//         const sles=cloudinary.uploader.upload_stream({ resource_type: 'image' },
//     async(error, result) => {
//         console.log("sdsdasdasda")
//       if (error) {
//         console.error(error);
//         res.status(500).send('Error al subir archivo a Cloudinary');
//       } else {
//         console.log('URL del archivo en Cloudinary: ', result.url);
//         console.log(req.body)
//         const newObject= {
//             name:req.body.name,
//             category:req.body.category,
//             price:req.body.price,
//             description:req.body.description,
//             img:req.file.originalname,
//             description_2:req.body.description_2,
//             description_3:req.body.description_3,
//             description_4:req.body.description_4,
//             stock:req.body.stock,
//             quantityStock:req.body.quantityStock
//         }

//         const result= await createComponent(newObject);
//         res.status(201).send(result)
//       }
//     })
//     // console.log(sles)
//     } catch (error) {
//         console.log(error)
//         res.status(400).send({error})
//     }
//     const file = req.file;
// //   console.log(file);
// });
module.exports= componentsRoutes;