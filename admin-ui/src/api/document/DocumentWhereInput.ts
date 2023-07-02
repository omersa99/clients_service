import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";

export type DocumentWhereInput = {
  amount?: FloatNullableFilter;
  amountBeforeVat?: FloatNullableFilter;
  date?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  discountAmount?: StringNullableFilter;
  discountType?: "Sum" | "Percentage";
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
    | "DepositWithdrawal";
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  items?: ItemListRelationFilter;
  status?: "Open" | "Closed";
  vatType?: "Default" | "Included" | "Exempt";
};
