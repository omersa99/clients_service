import { ItemUpdateManyWithoutDocumentsInput } from "./ItemUpdateManyWithoutDocumentsInput";

export type DocumentUpdateInput = {
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
  items?: ItemUpdateManyWithoutDocumentsInput;
  status?: "Open" | "Closed" | null;
  vatType?: "Default" | "Included" | "Exempt" | null;
};
