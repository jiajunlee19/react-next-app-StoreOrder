import { z } from "zod";

export const MemberSchema = z.object({
    member_id: z.string().nonempty().uuid(),
    member_name: z.string().nonempty(),
    member_password: z.string().nonempty().uuid(),
    member_bonus_points: z.coerce.number().positive(),
    member_created_date: z.coerce.date(),
    member_updated_date: z.coerce.date(),
});

export const MemberLevelSchema = z.object({
    member_level_id: z.string().nonempty().uuid(),
    member_level_name: z.string().nonempty(),
    bonus_points_min: z.coerce.number().positive(),
    bonus_points_max: z.coerce.number().positive(),
    member_level_created_date: z.coerce.date(),
    member_level_updated_date: z.coerce.date(),
});

export const UomSchema = z.object({
    uom_id: z.string().nonempty().uuid(),
    uom_name: z.string().nonempty(),
    uom_created_date: z.coerce.date(),
    uom_updated_date: z.coerce.date(),
});

export const ProductSchema = z.object({
    product_id: z.string().nonempty().uuid(),
    product_name: z.string().nonempty(),
    uom_id: z.string().nonempty().uuid(),
    product_unit_price: z.coerce.number().positive(),
    product_bonus_points: z.coerce.number().positive(),
    product_created_date: z.coerce.date(),
    product_updated_date: z.coerce.date(),
});

export const OrderSchema = z.object({
    order_id: z.string().nonempty().uuid(),
    member_id: z.string().nonempty().uuid(),
    order_created_date: z.coerce.date(),
    order_updated_date: z.coerce.date(),
});

export const OrderItemSchema = z.object({
    order_item_id: z.string().nonempty().uuid(),
    order_id: z.string().nonempty().uuid(),
    product_id: z.string().nonempty().uuid(),
    order_item_quantity: z.coerce.number().positive(),
    order_item_created_date: z.coerce.date(),
    order_item_updated_date: z.coerce.date(),
});