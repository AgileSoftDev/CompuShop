const filterCategoryParams = (categoryPick) =>{
    let response;
    switch (categoryPick) {
        case 'Procesadores INTEL':
            response=["CPU","INTEL"]
            break;
        case 'Procesadores AMD':
            response=["CPU","AMD"]
            break;
        case 'MothearBoards INTEL':
            response=["BOARD","INTEL"]
            break;
        case 'MothearBoards AMD"':
            response=["BOARD","AMD"]
            break;
        case 'Placas de Video GeForce':
            response=["GPU","GeForce"]
            break;
        case 'Placas de Video Radeon AMD':
            response=["GPU","Radeon"]
            break;
        case 'Memorias RAM':
            response=["RAM"]
            break;
        case 'Discos Duros':
            response=["STORAGE"]
            break;
        case 'Discos Solidos SDD':
            response=["SSD"]
            break;
        case 'Fuentes de Alimentación':
            response=["FUENTE",]
            break;       
        case 'Gabinetes':
            response=["CHASIS",]
            break;
    
        default:
            break;
    }

    return response;
};

export {
    filterCategoryParams,
}