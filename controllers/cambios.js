const { response } = require('express');

const Cambio = require('../models/cambio');

const getCambios = async(req, res = response) => {

    const cambios = await Cambio.find()
        .populate('usuario', 'nombre')
        .populate('sucursal', 'nombre')


    res.json({
        ok: true,
        cambios
    })
}

const crearTipoCambio = async(req, res = response) => {

    const uid = req.uid;
    const cambio = new Cambio({
        usuario: uid,
        ...req.body
    });


    try {

        const cambioDB = await cambio.save();


        res.json({
            ok: true,
            cambio: cambioDB
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }


}

const actualizarTipoCambio = async(req, res = response) => {

    const id = req.params.id;
    const uid = req.uid;
    console.log(req.body, 'BODY')
    try {

        const cambio = await Cambio.findById(id);

        if (!cambio) {
            return res.status(404).json({
                ok: true,
                msg: 'Tipo de cambio no encontrado por id',
            });
        }

        /*        const cambios = {
                   ...req.body,
                   usuario: uid
               } */

        cambio.compra = req.body.compra;
        cambio.venta = req.body.venta;
        cambio.usuario = uid;

        const cambioActualizado = await Cambio.findByIdAndUpdate(id, cambio, { new: true });


        res.json({
            ok: true,
            cambio: cambioActualizado
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
    getCambios,
    crearTipoCambio,
    actualizarTipoCambio
}