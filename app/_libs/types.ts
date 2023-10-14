import { z } from "zod";
import { InputTypeSchema } from "@/app/_libs/zod-form-client";
import { 
    SelectMemberSchema, InsertMemberSchema, UpdateMemberSchema, DeleteMemberSchema,
    SelectMemberLevelSchema, InsertMemberLevelSchema, UpdateMemberLevelSchema, DeleteMemberLevelSchema,
    SelectUomSchema, InsertUomSchema, UpdateUomSchema, DeleteUomSchema,
    SelectProductSchema, InsertProductSchema, UpdateProductSchema, DeleteProductSchema,
    SelectOrderSchema, InsertOrderSchema, UpdateOrderSchema, DeleteOrderSchema,
    SelectOrderItemSchema, InsertOrderItemSchema, UpdateOrderItemSchema, DeleteOrderItemSchema
} from "@/app/_libs/zod-form-server";

export type TInputType = z.infer<typeof InputTypeSchema>;

export type TSelectMember = z.infer<typeof SelectMemberSchema>;
export type TInsertMember = z.infer<typeof InsertMemberSchema>;
export type TUpdateMember = z.infer<typeof UpdateMemberSchema>;
export type TDeleteMember = z.infer<typeof DeleteMemberSchema>;

export type TSelectMemberLevel = z.infer<typeof SelectMemberLevelSchema>;
export type TInsertMemberLevel = z.infer<typeof InsertMemberLevelSchema>;
export type TUpdateMemberLevel = z.infer<typeof UpdateMemberLevelSchema>;
export type TDeleteMemberLevel = z.infer<typeof DeleteMemberLevelSchema>;

export type TSelectUom = z.infer<typeof SelectUomSchema>;
export type TInsertUom = z.infer<typeof InsertUomSchema>;
export type TUpdateUom = z.infer<typeof UpdateUomSchema>;
export type TDeleteUom = z.infer<typeof DeleteUomSchema>;

export type TSelectProduct = z.infer<typeof SelectProductSchema>;
export type TInsertProduct = z.infer<typeof InsertProductSchema>;
export type TUpdateProduct = z.infer<typeof UpdateProductSchema>;
export type TDeleteProduct = z.infer<typeof DeleteProductSchema>;

export type TSelectOrder = z.infer<typeof SelectOrderSchema>;
export type TInsertOrder = z.infer<typeof InsertOrderSchema>;
export type TUpdateOrder = z.infer<typeof UpdateOrderSchema>;
export type TDeleteOrder = z.infer<typeof DeleteOrderSchema>;

export type TSelectOrderItem = z.infer<typeof SelectOrderItemSchema>;
export type TInsertOrderItem = z.infer<typeof InsertOrderItemSchema>;
export type TUpdateOrderItem = z.infer<typeof UpdateOrderItemSchema>;
export type TDeleteOrderItem = z.infer<typeof DeleteOrderItemSchema>;