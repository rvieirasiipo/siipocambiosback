const { Schema, model } = require('mongoose');

const OperacionSchema = Schema({
    tipoOperacion: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now
    },
    estado: {
        type: Boolean,
    },
    TotalOperacion: {
        type: Number,
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
    },

});


OperacionSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})



module.exports = model('Operacion', OperacionSchema);