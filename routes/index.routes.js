const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)
const adoptionRoutes = require("./adoption.routes.js")
router.use("/adoptions", adoptionRoutes)

const adoptedRoutes = require("./adopted.routes.js")
router.use("/adopted", adoptedRoutes)

const authRoutes = require("./auth.routes.js")
router.use("/auth", authRoutes)

const coloniesRoutes = require("./colonies.routes.js")
router.use("/colonies", coloniesRoutes)

const uploaderRoutes = require("./uploader.routes")
router.use("/uploader", uploaderRoutes)

module.exports = router;
