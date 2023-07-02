import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
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
        <DateTimeInput label="date" source="date" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="discount amount" source="discountAmount" />
        <SelectInput
          source="discountType"
          label="discount type"
          choices={[
            { label: "sum", value: "Sum" },
            { label: "percentage", value: "Percentage" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="docType"
          label="doc type"
          choices={[
            { label: "Receipt", value: "Receipt" },
            { label: "Invoice", value: "Invoice" },
            { label: "Price Offer", value: "PriceOffer" },
            { label: "Order", value: "Order" },
            { label: "delivery certificate", value: "DeliveryCertificate" },
            { label: "Return certificate", value: "ReturnCertificate" },
            { label: "Transaction Account", value: "TransactionAccount" },
            { label: "Tax invoice / receipt", value: "TaxInvoiceReceipt" },
            { label: "Credit invoice", value: "CreditInvoice" },
            { label: "Purchase Order", value: "PurchaseOrder" },
            { label: "Receiving a deposit", value: "ReceivingADeposit" },
            { label: "Deposit withdrawal", value: "DepositWithdrawal" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="dueDate" source="dueDate" />
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
