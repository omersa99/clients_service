import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  BooleanInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
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
        <TextInput label="address" source="address" />
        <ReferenceArrayInput
          source="clients"
          reference="Client"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ClientTitle} />
        </ReferenceArrayInput>
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
