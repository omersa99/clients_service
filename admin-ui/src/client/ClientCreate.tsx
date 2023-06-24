import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  NumberInput,
  TextInput,
} from "react-admin";

export const ClientCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="active" source="active" />
        <NumberInput step={1} label="bn" source="bn" />
        <TextInput label="full name" source="fullName" />
      </SimpleForm>
    </Create>
  );
};
