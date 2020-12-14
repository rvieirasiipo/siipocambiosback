const { response } = require('express');

const Operacion = require('../models/operacion');

const getOperaciones = async(req, res = response) => {

    const operaciones = await Operacion.find()
        .populate('usuario', 'nombre')
        .populate('sucursal', 'nombre')


    res.json({
        ok: true,
        operaciones
    })
}

const crearOperacion = async(req, res = response) => {

    const uid = req.uid;
    const operacion = new Operacion({
        usuario: uid,
        ...req.body
    });


    try {

        const operacionDB = await operacion.save();


        res.json({
            ok: true,
            operacion: operacionDB
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }


}

module.exports = {
    getOperaciones,
    crearOperacion,
    actualizarTipoCambio
}