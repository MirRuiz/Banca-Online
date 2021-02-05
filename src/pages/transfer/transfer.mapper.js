export const mapTransferFronApiToVm = transfer =>{
    return{
        ...transfer,
        date: new Date(transfer.date),
    };
};