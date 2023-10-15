import { z } from "zod";

// Member
export const SelectMemberSchema = z.object({
    member_id: z.string().min(1).uuid().optional(),
    member_name: z.string().min(1).optional(),
    member_password: z.string().min(1).uuid().optional(),
    member_bonus_points: z.coerce.number().positive().optional(),
    member_created_date: z.coerce.date().optional(),
    member_updated_date: z.coerce.date().optional(),
});

export const InsertMemberSchema = z.object({
    member_id: z.string().min(1).uuid(),
    member_name: z.string().min(1),
    member_password: z.string().min(1).uuid(),
    member_bonus_points: z.coerce.number().positive(),
    member_created_date: z.coerce.date(),
    member_updated_date: z.coerce.date(),
});

export const UpdateMemberSchema = z.object({
    member_id: z.string().min(1).uuid(),
    member_name: z.string().min(1),
    member_password: z.string().min(1).uuid(),
    member_bonus_points: z.coerce.number().positive(),
    member_updated_date: z.coerce.date(),
});

export const DeleteMemberSchema = z.object({
    member_id: z.string().min(1).uuid(),
});


// MemberLevel
export const SelectMemberLevelSchema = z.object({
    member_level_id: z.string().min(1).uuid().optional(),
    member_level_name: z.string().min(1).optional(),
    bonus_points_min: z.coerce.number().positive().optional(),
    bonus_points_max: z.coerce.number().positive().optional(),
    member_level_created_date: z.coerce.date().optional(),
    member_level_updated_date: z.coerce.date().optional(),
});

export const InsertMemberLevelSchema = z.object({
    member_level_id: z.string().min(1).uuid(),
    member_level_name: z.string().min(1),
    bonus_points_min: z.coerce.number().positive(),
    bonus_points_max: z.coerce.number().positive(),
    member_level_created_date: z.coerce.date(),
    member_level_updated_date: z.coerce.date(),
});

export const UpdateMemberLevelSchema = z.object({
    member_level_id: z.string().min(1).uuid(),
    member_level_name: z.string().min(1),
    bonus_points_min: z.coerce.number().positive(),
    bonus_points_max: z.coerce.number().positive(),
    member_level_updated_date: z.coerce.date(),
});

export const DeleteMemberLevelSchema = z.object({
    member_level_id: z.string().min(1).uuid(),
});


// Uom
export const SelectUomSchema = z.object({
    uom_id: z.string().min(1).uuid().optional(),
    uom_name: z.string().min(1).optional(),
    uom_created_date: z.coerce.date().optional(),
    uom_updated_date: z.coerce.date().optional(),
});

export const InsertUomSchema = z.object({
    uom_id: z.string().min(1).uuid(),
    uom_name: z.string().min(1),
    uom_created_date: z.coerce.date(),
    uom_updated_date: z.coerce.date(),
});

export const UpdateUomSchema = z.object({
    uom_id: z.string().min(1).uuid(),
    uom_name: z.string().min(1),
    uom_updated_date: z.coerce.date(),
});

export const DeleteUomSchema = z.object({
    uom_id: z.string().min(1).uuid(),
});


// Product
export const SelectProductSchema = z.object({
    product_id: z.string().min(1).uuid().optional(),
    product_name: z.string().min(1).optional(),
    uom_id: z.string().min(1).uuid().optional(),
    uom_name: z.string().min(1).optional(),
    product_unit_price: z.coerce.number().positive().optional(),
    product_bonus_points: z.coerce.number().positive().optional(),
    product_created_date: z.coerce.date().optional(),
    product_updated_date: z.coerce.date().optional(),
});

export const InsertProductSchema = z.object({
    product_id: z.string().min(1).uuid(),
    product_name: z.string().min(1),
    uom_id: z.string().min(1).uuid(),
    product_unit_price: z.coerce.number().positive(),
    product_bonus_points: z.coerce.number().positive(),
    product_created_date: z.coerce.date(),
    product_updated_date: z.coerce.date(),
});

export const UpdateProductSchema = z.object({
    product_id: z.string().min(1).uuid(),
    product_name: z.string().min(1),
    uom_id: z.string().min(1).uuid(),
    product_unit_price: z.coerce.number().positive(),
    product_bonus_points: z.coerce.number().positive(),
    product_updated_date: z.coerce.date(),
});

export const DeleteProductSchema = z.object({
    product_id: z.string().min(1).uuid(),
});


// Order
export const SelectOrderSchema = z.object({
    order_id: z.string().min(1).uuid().optional(),
    member_id: z.string().min(1).uuid().optional(),
    member_name: z.string().min(1).optional(),
    order_created_date: z.coerce.date().optional(),
    order_updated_date: z.coerce.date().optional(),
});

export const InsertOrderSchema = z.object({
    order_id: z.string().min(1).uuid(),
    member_id: z.string().min(1).uuid(),
    order_created_date: z.coerce.date(),
    order_updated_date: z.coerce.date(),
});

export const UpdateOrderSchema = z.object({
    order_id: z.string().min(1).uuid(),
    member_id: z.string().min(1).uuid(),
    order_updated_date: z.coerce.date(),
});

export const DeleteOrderSchema = z.object({
    order_id: z.string().min(1).uuid(),
});


// OrderItem
export const SelectOrderItemSchema = z.object({
    order_item_id: z.string().min(1).uuid().optional(),
    order_id: z.string().min(1).uuid().optional(),
    product_id: z.string().min(1).uuid().optional(),
    product_name: z.string().min(1).optional(),
    uom_id: z.string().min(1).uuid().optional(),
    uom_name: z.string().min(1).optional(),
    order_item_quantity: z.coerce.number().positive().optional(),
    order_item_subtotal: z.coerce.number().positive().optional(),
    order_item_created_date: z.coerce.date().optional(),
    order_item_updated_date: z.coerce.date().optional(),
});

export const InsertOrderItemSchema = z.object({
    order_item_id: z.string().min(1).uuid(),
    order_id: z.string().min(1).uuid(),
    product_id: z.string().min(1).uuid(),
    order_item_quantity: z.coerce.number().positive(),
    order_item_created_date: z.coerce.date(),
    order_item_updated_date: z.coerce.date(),
});

export const UpdateOrderItemSchema = z.object({
    order_item_id: z.string().min(1).uuid(),
    order_id: z.string().min(1).uuid(),
    product_id: z.string().min(1).uuid(),
    order_item_quantity: z.coerce.number().positive(),
    order_item_updated_date: z.coerce.date(),
});

export const DeleteOrderItemSchema = z.object({
    order_item_id: z.string().min(1).uuid(),
});