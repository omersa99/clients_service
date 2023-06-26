import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const BusinessList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Businesses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
