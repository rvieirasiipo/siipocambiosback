const { response } = require('express');

const Sucursal = require('../models/sucursal');


const getSucursales = async(req, res = response) => {

    const sucursales = await Sucursal.find()
        .populate('usuario', 'nombre img');

    res.json({
        ok: true,
        sucursales
    })
}

const crearSucursal = async(req, res = response) => {

    const uid = req.uid;
    const sucursal = new Sucursal({
        usuario: uid,
        ...req.body
    });

    try {

        const sucursalDB = await sucursal.save();


        res.json({
            ok: true,
            sucursal: sucursalDB
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }



}

const actualizarSucursal = async(req, res = response) => {

    const id = req.params.id;
    const uid = req.uid;

    try {

        const sucursal = await Sucursal.findById(id);

        if (!sucursal) {
            return res.status(404).json({
                ok: true,
                msg: 'Sucursal no encontrado por id',
            });
        }

        const cambiosSucursal = {
            ...req.body,
            usuario: uid
        }

        const sucursalActualizado = await Sucursal.findByIdAndUpdate(id, cambiosSucursal, { new: true });


        res.json({
            ok: true,
            sucursal: sucursalActualizado
        })

    } catch (error) {

        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }


}

const borrarSucursal = async(req, res = response) => {

    const id = req.params.id;

    try {

        const sucursal = await Sucursal.findById(id);

        if (!sucursal) {
            return res.status(404).json({
                ok: true,
                msg: 'Sucursal no encontrado por id',
            });
        }

        await Sucursal.findByIdAndDelete(id);


        res.json({
            ok: true,
            msg: 'Sucursal eliminada'
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}



module.exports = {
    getSucursales,
    crearSucursal,
    actualizarSucursal,
    borrarSucursal
}