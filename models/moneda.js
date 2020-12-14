const { Schema, model } = require('mongoose');

const MonedaSchema = Schema({

    nombre: {
        type: String,
        required: true
    },
    pais: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    nombreCorto: {
        type: String,
        required: true,
    },
    img: {
        type: String
    },
    estado: {
        type: Boolean,
        required: true,
    },


});


MedicoSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})



module.exports = model('Moneda', MonedaSchema);