const ColonyModel = require("../models/Colonies.model");
const isAuthenticated = require("../middlewares/isAuthenticated");

const router = require("express").Router();

// GET "/api/colonies" => ver la lista de las colonias
router.get("/", async (req, res, next) => {

    try {

        const response = await ColonyModel.find()
        res.json(response)

    }catch(error) {
        next(error)
    }
})

// POST "/api/colonies" => crear una nueva colonia
router.post("/", async (req, res, next) => {

    const { location, image, description } = req.body;

    try {

        const response = await ColonyModel.create({
            location,
            image,
            description
        })
        res.json(response)

    }catch(error){
        next(error)
    }
})

// DELETE "/api/colonies/:id" => elimiar una colonia
router.delete("/:id", async (req, res, next) => {

    const {id} = req.params;

    try{

        await ColonyModel.findByIdAndDelete(id);
        res.json("La colonia ha sido eliminada")

    }catch(error) {
        next(error)
    }
})

//GET "/api/colonies/:id" => conseguir todos los datos de una colonia
router.get("/:id", async (req, res, next) => {

    const {id} = req.params

    try {
        
        const response = await ColonyModel.findById(id)
        res.json(response)

    }catch(error) {
        next(error)
    }
    
})

//PATCH "/api/colonies/:id/edit" => editar una colonia
router.patch("/:id/edit", async ( req, res, next) => {

    const {id} = req.params
    const {location, image, description} = req.body

    try {

        await ColonyModel.findByIdAndUpdate(id, {
            location,
            image,
            description
        })
        res.json("La colonia ha sido actualizada")

    }catch(error) {
        next(error)
    }
})

module.exports = router;