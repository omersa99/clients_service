import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { ClientTitle } from "../client/ClientTitle";

export const BusinessEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="accountingType"
          label="accountingType"
          choices={[
            { label: "unknown", value: "Unknown" },
            { label: "cash", value: "Cash" },
            { label: "accumulated", value: "Accumulated" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <BooleanInput label="active" source="active" />
        <div />
        <SelectInput
          source="businessType"
          label=" business type"
          choices={[
            { label: "Osek Murshe", value: "OsekMurshe" },
            { label: "LTD company", value: "LtdCompany" },
            { label: "Osek Patur", value: "OsekPatur" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="clients"
          reference="Client"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ClientTitle} />
        </ReferenceArrayInput>
        <TextInput label="deductionId" source="deductionId" />
        <TextInput label="deductionRate" source="deductionRate" />
        <BooleanInput label="exemption" source="exemption" />
        <NumberInput step={1} label="taxId" source="taxId" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
