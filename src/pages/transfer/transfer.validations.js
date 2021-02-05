import { Validators, createFormValidation } from "@lemoncode/fonk";
import { iban } from '@lemoncode/fonk-iban-validator';
import { rangeNumber } from '@lemoncode/fonk-range-number-validator';
import { laterDate } from '@lemoncode/fonk-later-date-validator';

const validationSchema = {
  field: {
    iban: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: iban.validator,
        message: 'El iban no es correcto',
      },
    ],
    name: [
      {
        validator: Validators.required,
        message: 'campo requerido',
      },
    ],
    amount: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    concept: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    day: [
      {
        validator: Validators.required,
      },
      {
        validator: rangeNumber.validator,
        customArgs: {
          min: {
            value: 1,
            inclusive: true,
          },
          max: {
            value: 31,
            inclusive: true,
          },
        },
      },
    ],
    month: [
      {
        validator: Validators.required,
      },
      {
        validator: rangeNumber.validator,
        customArgs: {
          min: {
            value: 1,
            inclusive: true,
          },
          max: {
            value: 12,
            inclusive: true,
          },
        },
      },
    ],
    year:[
      {
        validator: Validators.required,
      },
      {
        validator: rangeNumber.validator,
        customArgs:{
          min:{
            value: 2021,
            inclusive: true,
          },
          max:{
            value: 2022,
            inclusive: true,
          },
        },
      },
    ],
    date:[
      {
        validator: Validators.required,
        message: "Campo requerido",
      },
      {
          validator: laterDate.validator,
          message: "La fecha introducida no es válida",
          customArgs:{
            date: new Date(),
            parseStringToDateFn:(value) => new Date(value) ,
          },
      },
    ],
  
  },
};

export const formValidation = createFormValidation(validationSchema);