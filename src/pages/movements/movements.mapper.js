
export const mapMovementsListFromApiToVm = (movements) => {
  return movements.map((account) => mapMovementsFromApiToVm(account));
};
const mapMovementsFromApiToVm = (movement) => {
  return {
    description: movement.description, 
    amount: `${movement.amount}€`,
    balance: `${movement.balance}€`,
    transaction: new Date(movement.transaction).toLocaleDateString(),
    realTransaction: new Date(movement.realTransaction).toLocaleDateString(),
  };
};
export const mapAccountFromApiToVm = (account) => {
  return { 
    balance: `${account.balance}€`,
    iban: account.iban,
    alias: account.name,
  };
};

