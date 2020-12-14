const { Schema, model } = require('mongoose');

const CambioSchema = Schema({

    fecha: {
        type: Date,
        default: Date.now
    },
    compra: {
        type: Number,
        required: true
    },
    venta: {
        type: Number,
        required: true
    },
    estado: {
        type: Boolean,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    pais: {
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
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    sucursal: {
        type: Schema.Types.ObjectId,
        ref: 'Sucursal',
        required: true
    }
});


CambioSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})



module.exports = model('Cambio', CambioSchema);