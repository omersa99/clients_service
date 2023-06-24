import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  NumberInput,
  TextInput,
} from "react-admin";

export const ClientEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="active" source="active" />
        <NumberInput step={1} label="bn" source="bn" />
        <TextInput label="full name" source="fullName" />
      </SimpleForm>
    </Edit>
  );
};
