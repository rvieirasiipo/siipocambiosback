const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { getOperaciones, crearOperacion, obtenerOperacionId } = require('../controllers/operacion');
const {
    validarJWT,
    varlidarADMIN_ROLE,
    varlidarADMIN_ROLE_o_MismoUsuario
} = require('../middlewares/validar-jwt');

const router = Router();


router.get('/', validarJWT, getOperaciones);

router.post('/', [
        validarJWT,
        validarCampos,
    ],
    crearOperacion
);

router.get('/:id', validarJWT, obtenerOperacionId);



module.exports = router;