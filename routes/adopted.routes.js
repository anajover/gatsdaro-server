const isAuthenticated = require("../middlewares/isAuthenticated");
const AdoptionModel = require("../models/Adoption.model");

const router = require("express").Router();

// GET "/api/adopted" => mostrar lista de gatos adoptados
router.get("/", async (req, res, next) => {

    try {

        const response = await AdoptionModel.find().select("image adopted")
        res.json(response)
    }catch(error) {
        next(error)
    }
})

//GET "/api/adopted/:id/details" => ver los detalles de un gatito
router.get("/:id/details", async (req, res, next) => {

    const {id} = req.params;

    try {
        const response = await AdoptionModel.findById(id)
        res.json(response)
    }catch(error) {
        next(error)
    }
})

//DELETE "/api/adopted/:id" => eliminar un gatito adoptado
router.delete("/:id", async ( req, res, next) => {

    const {id} = req.params;

    try {
        
        await AdoptionModel.findByIdAndDelete(id);
        res.json("El gatito ha sido eliminado.")

    }catch(error){
        next(error)
    }
})

// PATCH "/api/adopted/:id/edit"
router.patch("/:id/edit", isAuthenticated, async(req, res, next) => {

    const {id} = req.params
    const {age, gender, sterilized, details, image, adopted} = req.body
    
    try {

        await AdoptionModel.findByIdAndUpdate(id, {
            age,
            gender,
            sterilized,
            details,
            image,
            adopted
        })
        res.json("El gatito ha sido actualizado")

    }catch(error) {
        next(error)
    }
})

module.exports = router;