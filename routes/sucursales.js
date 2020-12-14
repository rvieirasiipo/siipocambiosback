const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwt');

const {
    getSucursales,
    crearSucursal,
    actualizarSucursal,
    borrarSucursal
} = require('../controllers/sucursales')


const router = Router();

router.get('/', getSucursales);

router.post('/', [
        validarJWT,
        check('nombre', 'El nombre de la Sucursal es necesario').not().isEmpty(),
        validarCampos
    ],
    crearSucursal
);

router.put('/:id', [
        validarJWT,
        check('nombre', 'El nombre de la sucursal es necesario').not().isEmpty(),
        validarCampos
    ],
    actualizarSucursal
);

router.delete('/:id',
    validarJWT,
    borrarSucursal
);



module.exports = router;