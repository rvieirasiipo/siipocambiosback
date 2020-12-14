/*
    Monedas
    ruta: '/api/moneda'
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwt');

const {
    getMonedas,
    crearMoneda,
    actualizarMoneda,
    borrarMoneda,
    getMonedaById
} = require('../controllers/monedas')


const router = Router();

router.get('/', validarJWT, getMonedas);

router.post('/', [
        validarJWT,
        check('nombre', 'El nombre de la moneda es necesario').not().isEmpty(),
        validarCampos
    ],
    crearMedico
);

router.put('/:id', [
        validarJWT,
        validarCampos
    ],
    actualizarMedico
);

router.delete('/:id',
    validarJWT,
    borrarMoneda
);

router.get('/:id',
    validarJWT,
    getMonedaById
);



module.exports = router;