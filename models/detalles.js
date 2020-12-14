const { Schema, model } = require('mongoose');

const DetalleSchema = Schema({

    precio: {
        type: Number,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    monto: {
        type: Number,
        required: true
    },
    moneda: {
        type: String,
        required: true
    },
    operacion: {
        type: Schema.Types.ObjectId,
        ref: 'Operacion',
        required: true
    },

});


DetalleSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})



module.exports = model('Detalle', DetalleSchema);