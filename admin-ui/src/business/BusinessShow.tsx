import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { BUSINESS_TITLE_FIELD } from "./BusinessTitle";

export const BusinessShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="accountingType" source="accountingType" />
        <BooleanField label="active" source="active" />
        <TextField label="address" source="address" />
        <TextField label=" business type" source="businessType" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="deductionId" source="deductionId" />
        <TextField label="deductionRate" source="deductionRate" />
        <BooleanField label="exemption" source="exemption" />
        <TextField label="ID" source="id" />
        <TextField label="taxId" source="taxId" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Client"
          target="businessId"
          label="clients"
        >
          <Datagrid rowClick="show">
            <BooleanField label="active" source="active" />
            <TextField label="balance" source="balance" />
            <TextField label="bn" source="bn" />
            <ReferenceField
              label="Business"
              source="business.id"
              reference="Business"
            >
              <TextField source={BUSINESS_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="full name" source="fullName" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
