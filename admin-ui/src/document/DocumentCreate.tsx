import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ItemTitle } from "../item/ItemTitle";

export const DocumentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <NumberInput label="Amount before VAT" source="amountBeforeVat" />
        <TextInput label="description" multiline source="description" />
        <SelectInput
          source="docType"
          label="doc type"
          choices={[
            { label: "Receipt", value: "Receipt" },
            { label: "Invoice", value: "Invoice" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="items"
          reference="Item"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ItemTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "open", value: "Open" },
            { label: "closed", value: "Closed" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="vatType"
          label="vatType"
          choices={[
            { label: "Default", value: "Default" },
            { label: "Included", value: "Included" },
            { label: "Exempt", value: "Exempt" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
