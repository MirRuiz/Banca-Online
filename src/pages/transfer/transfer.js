import { onSetError, onUpdateField, onSubmitForm, onSetFormErrors } from '../../common/helpers';
import { history } from '../../core/router';
import { formValidation } from "./transfer.validations";
import { getAccountList, insertTrans} from "./transfer.api";
import { setAccountOptions } from "./transfer.helpers";
import { mapTransferFronApiToVm } from "./transfer.mapper"


const params = history.getParams();
getAccountList().then(accountList => {
    setAccountOptions(accountList, params.id);
});

let transfer = {
 accountId : params.id,
  iban: '',
  name: '',
  amount: '',
  concept: '',
  notes: '',
  day: '',
  month: '',
  year: '',
  date: '',
  email: '',
};

onUpdateField('iban',(event)=>{
  const value = event.target.value;
  transfer = {
    ...transfer,
    iban: value,
  };
  formValidation.validateField("iban", transfer.iban)
  .then((result) =>{
    onSetError('iban', result);
  }) 
});

onUpdateField("name",(event) =>{
  const value = event.target.value;
  transfer ={
    ...transfer,
    name: value,
  };
  formValidation.validateField("name", transfer.name)
  .then((result) =>{
    onSetError("name", result);
  });

});

onUpdateField("amount",(event) =>{
  const value = event.target.value;
  transfer = {
    ...transfer,
    amount: value,
  };
  formValidation.validateField("amount", transfer.amount)
  .then((result) =>{
    onSetError("amount",result);
  });
});

onUpdateField("concept", (event) =>{
  const value = event.target.value;
  transfer = {
    ...transfer,
    concept : value,
  };
  formValidation.validateField("concept", transfer.concept)
  .then((result) =>{
    onSetError("concept", result);
  });
});

onUpdateField("notes",(event) =>{
  const value = event.target.value;
  transfer = {
    ...transfer,
    notes: value,
  };
});
onUpdateField("day",(event) =>{
  const value = event.target.value;
  transfer = {
    ...transfer,
    day: value,
    date: `${transfer.year}-${transfer.month}-${value}`,
  };
  formValidation.validateField("day", transfer.day)
  .then((result) =>{
    onSetError("day", result);
  });
});
onUpdateField("month",(event) =>{
  const value = event.target.value;
  transfer = {
    ...transfer,
    month: value,
    date: `${transfer.year}-${value}-${transfer.day}`,
  };
  formValidation.validateField("month", transfer.month)
  .then((result) =>{
    onSetError("month", result)
  });
});
onUpdateField("year",(event)=>{
  const value = event.target.value;
  transfer = {
    ...transfer,
    year: value,
    date: `${value}-${transfer.month}-${transfer.day}`,
  };
  formValidation.validateField("year",transfer.year)
  .then((result)=>{
    onSetError("year", result);
  });
});

onUpdateField("email", (event) =>{
  const value = event.target.value;
  transfer = {
    ...transfer,
    email: value,
  };
});
onSubmitForm("transfer-button",() =>{
  formValidation.validateForm(transfer).then((result) =>{
    onSetFormErrors(result);
    if(result.succeeded){
      insertTrans(mapTransferFronApiToVm(transfer)).then(() =>{
        history.back();
      });
  }
});
});
