import { z } from "zod";
import { MemberSchema, MemberLevelSchema, UomSchema, ProductSchema, OrderSchema, OrderItemSchema } from "./zod-form-server";

export type Member = z.infer<typeof MemberSchema>;

export type MemberLevel = z.infer<typeof MemberLevelSchema>;

export type Uom = z.infer<typeof UomSchema>;

export type Product = z.infer<typeof ProductSchema>;

export type Order = z.infer<typeof OrderSchema>;

export type OrderItem = z.infer<typeof OrderItemSchema>;