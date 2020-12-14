const getMenuFrontEnd = (role = 'USER_ROLE') => {

    const menu = [{
            titulo: 'Operaciones',
            icono: 'mdi mdi-gauge',
            submenu: [
                /*               { titulo: 'Main', url: '/' },
                              { titulo: 'Gráficas', url: 'grafica1' }, */
                { titulo: 'Compra', url: 'operacion/1' },
                { titulo: 'Venta', url: 'operacion/2' },
                /*                 { titulo: 'rxjs', url: 'rxjs' },
                                { titulo: 'Promesas', url: 'promesas' },
                                { titulo: 'ProgressBar', url: 'progress' }, */
            ]
        },

        {
            titulo: 'Mantenimientos',
            icono: 'mdi mdi-folder-lock-open',
            submenu: [
                // { titulo: 'Usuarios', url: 'usuarios' },
                /*     { titulo: 'Hospitales', url: 'hospitales' }, */
                /*   { titulo: 'Médicos', url: 'medicos' }, */
                { titulo: 'Monedas', url: 'monedas' },
                { titulo: 'Sucursales', url: 'sucursales' },
                { titulo: 'Tipo de Cambios', url: 'cambios' },
            ]
        },
    ];

    if (role === 'ADMIN_ROLE') {
        menu[1].submenu.unshift({ titulo: 'Usuarios', url: 'usuarios' })
    }

    return menu;
}

module.exports = {
    getMenuFrontEnd
}