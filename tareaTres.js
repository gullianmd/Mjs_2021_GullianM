const findLechugaWithPalta = () => sandwichOrders.filter(
    sandwichOrder => sandwichOrder.ingredients.includes('palta') && sandwichOrder.ingredients.includes('lechuga')
    )

const findSandwichOrder = (idSandwichOrder) => {
    if (sandwichOrders.length > idSandwichOrder && idSandwichOrder >= 0) {
        const {ordered, protein, bread} = sandwichOrders.find(sandwichOrder => sandwichOrder.id === idSandwichOrder)
        return `La orden fue realizada el (${ordered}), la orden llevó (${protein}) y (${bread})`
    } else {
        return `No se encontró la orden con id (${idSandwichOrder})`
    }
}

const tienePepinillos = (idSandwichOrder) => {
    const {ingredients} = sandwichOrders.find(sandwichOrder => sandwichOrder.id === idSandwichOrder)
    if (ingredients.includes('pepinillos')) {
        return `La orden ${idSandwichOrder}, tiene Pepinillos`
    } else {
        return `La orden ${idSandwichOrder}, no tiene Pepinillos`
    }
    } 

const findAllFechas = (fecha) => {
    const ordenesPorFecha = sandwichOrders.filter(sandwichOrder => sandwichOrder.ordered === fecha)
    return `Se encontraron ${ordenesPorFecha.length} ordenes para la fecha ${fecha}`

};

const findEspecial = () => {
    const ordenEspecial = sandwichOrders.filter(sandwichOrder => sandwichOrder.protein === 'not burger' && sandwichOrder.ingredients.includes('cebolla caramelizada'))
    return ordenEspecial
};
