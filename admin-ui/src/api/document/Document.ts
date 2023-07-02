import { Item } from "../item/Item";

export type Document = {
  amount: number | null;
  amountBeforeVat: number | null;
  createdAt: Date;
  date: Date | null;
  description: string | null;
  discountAmount: string | null;
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
  dueDate: Date | null;
  id: string;
  items?: Array<Item>;
  status?: "Open" | "Closed" | null;
  updatedAt: Date;
  vatType?: "Default" | "Included" | "Exempt" | null;
};
