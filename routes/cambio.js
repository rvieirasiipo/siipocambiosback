/*
    Ruta: /api/cambio
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { getCambios, crearTipoCambio, actualizarTipoCambio } = require('../controllers/cambios');
const {
    validarJWT,
    varlidarADMIN_ROLE,
    varlidarADMIN_ROLE_o_MismoUsuario
} = require('../middlewares/validar-jwt');


const router = Router();


router.get('/', validarJWT, getCambios);

router.post('/', [
        validarJWT,
        validarCampos,
    ],
    crearTipoCambio
);

router.put('/:id', [
        validarJWT,
        varlidarADMIN_ROLE_o_MismoUsuario,
        validarCampos,
    ],
    actualizarTipoCambio
);



module.exports = router;