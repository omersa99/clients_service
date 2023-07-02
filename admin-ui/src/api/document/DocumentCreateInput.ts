import { ItemCreateNestedManyWithoutDocumentsInput } from "./ItemCreateNestedManyWithoutDocumentsInput";

export type DocumentCreateInput = {
  amount?: number | null;
  amountBeforeVat?: number | null;
  date?: Date | null;
  description?: string | null;
  discountAmount?: string | null;
  discountType?: "Sum" | "Percentage" | null;
  docType?:
    | "Receipt"
    | "Invoice"
    | "PriceOffer"
    | "Order"
    | "DeliveryCertificate"
    | "ReturnCertificate"
    | "TransactionAccount"
    | "TaxInvoiceReceipt"
    | "CreditInvoice"
    | "PurchaseOrder"
    | "ReceivingADeposit"
    | "DepositWithdrawal"
    | null;
  dueDate?: Date | null;
  items?: ItemCreateNestedManyWithoutDocumentsInput;
  status?: "Open" | "Closed" | null;
  vatType?: "Default" | "Included" | "Exempt" | null;
};
