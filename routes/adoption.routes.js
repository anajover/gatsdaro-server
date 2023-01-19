const { json } = require("express");
const AdoptionModel = require("../models/Adoption.model");
const isAuthenticated = require("../middlewares/isAuthenticated")

const router = require("express").Router();

// nuestras rutas de adoption
// GET "/api/adoptions" => para ver la lista de todos los gatitos en adopción (solo las fotos)
router.get("/", async (req, res, next) => {

    try {

        const response = await AdoptionModel.find().select("image adopted")
        res.json(response)

    }catch(error) {
        next(error)
    }

})

// POST "/api/adoptions" => crear un nuevo gatito en adopción
router.post("/", isAuthenticated, async (req, res, next) => {

    const { age, gender, sterilized, details, image, adopted } = req.body;

    try {

        const response = await AdoptionModel.create({
            age,
            gender,
            sterilized,
            details,
            image,
            adopted: false
        })
        res.json(response)

    }catch(error) {
        next(error)
    }
})

// GET "/api/adoptions/:id" => ver los detalles de un gatito
router.get("/:id", async (req, res, next) => {

    const {id} = req.params;

    try {
        const response = await AdoptionModel.findById(id)
        res.json(response)
    } catch(error) {
        next(error)
    }
})

// DELETE "/api/adoptions/:id" => eliminar un gatito
router.delete("/:id", async (req, res, next) => {

    const {id} = req.params;

    try {

        await AdoptionModel.findByIdAndDelete(id);
        res.json("El gatito ha sido eliminado.")

    }catch (error) {
        next (error)
    }
})

//PATCH "/api/adoptions/:id/edit" => Editar un gatito
router.patch("/:id/edit", isAuthenticated, async (req, res, next) => {

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

    }catch (error) {
        next(error)
    }
})

module.exports = router;