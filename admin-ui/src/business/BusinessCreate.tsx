import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  BooleanInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ClientTitle } from "../client/ClientTitle";

export const BusinessCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
