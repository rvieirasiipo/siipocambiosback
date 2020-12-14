const Usuario = require('../models/usuario');
const fs = require('fs');

const Medico = require('../models/medico');
const Hospital = require('../models/hospital');
const Sucursal = require('../models/sucursal');

const borrarImagen = (path) => {
    if (fs.existsSync(path)) {
        // borrar la imagen anterior
        fs.unlinkSync(path);
    }
}


const actualizarImagen = async(tipo, id, nombreArchivo) => {

    let pathViejo = '';

    switch (tipo) {
        case 'medicos':
            const medico = await Medico.findById(id);
            if (!medico) {
                console.log('No es un médico por id');
                return false;
            }

            pathViejo = `./uploads/medicos/${ medico.img }`;
            borrarImagen(pathViejo);

            medico.img = nombreArchivo;
            await medico.save();
            return true;

            break;

        case 'hospitales':
            const hospital = await Hospital.findById(id);
            if (!hospital) {
                console.log('No es un hospital por id');
                return false;
            }

            pathViejo = `./uploads/hospitales/${ hospital.img }`;
            borrarImagen(pathViejo);

            hospital.img = nombreArchivo;
            await hospital.save();
            return true;

            break;

        case 'usuarios':

            const usuario = await Usuario.findById(id);
            if (!usuario) {
                console.log('No es un usuario por id');
                return false;
            }

            pathViejo = `./uploads/hospitales/${ usuario.img }`;
            borrarImagen(pathViejo);

            usuario.img = nombreArchivo;
            await usuario.save();
            return true;

            break;

        case 'sucursales':
            const sucursal = await Sucursal.findById(id);
            if (!sucursal) {
                console.log('No es una sucursal por id');
                return false;
            }

            pathViejo = `./uploads/sucursales/${ sucursal.img }`;
            borrarImagen(pathViejo);

            sucursal.img = nombreArchivo;
            await sucursal.save();
            return true;

            break;
    }


}



module.exports = {
    actualizarImagen
}