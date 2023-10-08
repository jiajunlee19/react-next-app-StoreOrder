import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const MemberScalarFieldEnumSchema = z.enum(['member_id','member_name','member_password','member_bonus_points','member_created_date','member_updated_date']);

export const MemberLevelScalarFieldEnumSchema = z.enum(['member_level_id','member_level_name','bonus_points_min','bonus_points_max','member_level_created_date','member_level_updated_date']);

export const UomScalarFieldEnumSchema = z.enum(['uom_id','uom_name','uom_created_date','uom_updated_date']);

export const ProductScalarFieldEnumSchema = z.enum(['product_id','product_name','uom_id','product_unit_price','product_bonus_points','product_created_date','product_updated_date']);

export const OrderScalarFieldEnumSchema = z.enum(['order_id','member_id','order_created_date','order_updated_date']);

export const OrderItemScalarFieldEnumSchema = z.enum(['order_item_id','order_id','product_id','order_item_quantity','order_item_created_date','order_item_updated_date']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// MEMBER SCHEMA
/////////////////////////////////////////

export const MemberSchema = z.object({
  member_id: z.string(),
  member_name: z.string(),
  member_password: z.string(),
  member_bonus_points: z.number(),
  member_created_date: z.coerce.date(),
  member_updated_date: z.coerce.date(),
})

export type Member = z.infer<typeof MemberSchema>

/////////////////////////////////////////
// MEMBER LEVEL SCHEMA
/////////////////////////////////////////

export const MemberLevelSchema = z.object({
  member_level_id: z.string(),
  member_level_name: z.string(),
  bonus_points_min: z.number(),
  bonus_points_max: z.number(),
  member_level_created_date: z.coerce.date(),
  member_level_updated_date: z.coerce.date(),
})

export type MemberLevel = z.infer<typeof MemberLevelSchema>

/////////////////////////////////////////
// UOM SCHEMA
/////////////////////////////////////////

export const UomSchema = z.object({
  uom_id: z.string(),
  uom_name: z.string(),
  uom_created_date: z.coerce.date(),
  uom_updated_date: z.coerce.date(),
})

export type Uom = z.infer<typeof UomSchema>

/////////////////////////////////////////
// PRODUCT SCHEMA
/////////////////////////////////////////

export const ProductSchema = z.object({
  product_id: z.string(),
  product_name: z.string(),
  uom_id: z.string(),
  product_unit_price: z.number(),
  product_bonus_points: z.number(),
  product_created_date: z.coerce.date(),
  product_updated_date: z.coerce.date(),
})

export type Product = z.infer<typeof ProductSchema>

/////////////////////////////////////////
// ORDER SCHEMA
/////////////////////////////////////////

export const OrderSchema = z.object({
  order_id: z.string(),
  member_id: z.string(),
  order_created_date: z.coerce.date(),
  order_updated_date: z.coerce.date(),
})

export type Order = z.infer<typeof OrderSchema>

/////////////////////////////////////////
// ORDER ITEM SCHEMA
/////////////////////////////////////////

export const OrderItemSchema = z.object({
  order_item_id: z.string(),
  order_id: z.string(),
  product_id: z.string(),
  order_item_quantity: z.number(),
  order_item_created_date: z.coerce.date(),
  order_item_updated_date: z.coerce.date(),
})

export type OrderItem = z.infer<typeof OrderItemSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// MEMBER
//------------------------------------------------------

export const MemberIncludeSchema: z.ZodType<Prisma.MemberInclude> = z.object({
  orders: z.union([z.boolean(),z.lazy(() => OrderFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => MemberCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const MemberArgsSchema: z.ZodType<Prisma.MemberDefaultArgs> = z.object({
  select: z.lazy(() => MemberSelectSchema).optional(),
  include: z.lazy(() => MemberIncludeSchema).optional(),
}).strict();

export const MemberCountOutputTypeArgsSchema: z.ZodType<Prisma.MemberCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => MemberCountOutputTypeSelectSchema).nullish(),
}).strict();

export const MemberCountOutputTypeSelectSchema: z.ZodType<Prisma.MemberCountOutputTypeSelect> = z.object({
  orders: z.boolean().optional(),
}).strict();

export const MemberSelectSchema: z.ZodType<Prisma.MemberSelect> = z.object({
  member_id: z.boolean().optional(),
  member_name: z.boolean().optional(),
  member_password: z.boolean().optional(),
  member_bonus_points: z.boolean().optional(),
  member_created_date: z.boolean().optional(),
  member_updated_date: z.boolean().optional(),
  orders: z.union([z.boolean(),z.lazy(() => OrderFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => MemberCountOutputTypeArgsSchema)]).optional(),
}).strict()

// MEMBER LEVEL
//------------------------------------------------------

export const MemberLevelSelectSchema: z.ZodType<Prisma.MemberLevelSelect> = z.object({
  member_level_id: z.boolean().optional(),
  member_level_name: z.boolean().optional(),
  bonus_points_min: z.boolean().optional(),
  bonus_points_max: z.boolean().optional(),
  member_level_created_date: z.boolean().optional(),
  member_level_updated_date: z.boolean().optional(),
}).strict()

// UOM
//------------------------------------------------------

export const UomIncludeSchema: z.ZodType<Prisma.UomInclude> = z.object({
  products: z.union([z.boolean(),z.lazy(() => ProductFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UomCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UomArgsSchema: z.ZodType<Prisma.UomDefaultArgs> = z.object({
  select: z.lazy(() => UomSelectSchema).optional(),
  include: z.lazy(() => UomIncludeSchema).optional(),
}).strict();

export const UomCountOutputTypeArgsSchema: z.ZodType<Prisma.UomCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => UomCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UomCountOutputTypeSelectSchema: z.ZodType<Prisma.UomCountOutputTypeSelect> = z.object({
  products: z.boolean().optional(),
}).strict();

export const UomSelectSchema: z.ZodType<Prisma.UomSelect> = z.object({
  uom_id: z.boolean().optional(),
  uom_name: z.boolean().optional(),
  uom_created_date: z.boolean().optional(),
  uom_updated_date: z.boolean().optional(),
  products: z.union([z.boolean(),z.lazy(() => ProductFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UomCountOutputTypeArgsSchema)]).optional(),
}).strict()

// PRODUCT
//------------------------------------------------------

export const ProductIncludeSchema: z.ZodType<Prisma.ProductInclude> = z.object({
  fk_uom_id: z.union([z.boolean(),z.lazy(() => UomArgsSchema)]).optional(),
  orderItem: z.union([z.boolean(),z.lazy(() => OrderItemFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProductCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ProductArgsSchema: z.ZodType<Prisma.ProductDefaultArgs> = z.object({
  select: z.lazy(() => ProductSelectSchema).optional(),
  include: z.lazy(() => ProductIncludeSchema).optional(),
}).strict();

export const ProductCountOutputTypeArgsSchema: z.ZodType<Prisma.ProductCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ProductCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ProductCountOutputTypeSelectSchema: z.ZodType<Prisma.ProductCountOutputTypeSelect> = z.object({
  orderItem: z.boolean().optional(),
}).strict();

export const ProductSelectSchema: z.ZodType<Prisma.ProductSelect> = z.object({
  product_id: z.boolean().optional(),
  product_name: z.boolean().optional(),
  uom_id: z.boolean().optional(),
  product_unit_price: z.boolean().optional(),
  product_bonus_points: z.boolean().optional(),
  product_created_date: z.boolean().optional(),
  product_updated_date: z.boolean().optional(),
  fk_uom_id: z.union([z.boolean(),z.lazy(() => UomArgsSchema)]).optional(),
  orderItem: z.union([z.boolean(),z.lazy(() => OrderItemFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProductCountOutputTypeArgsSchema)]).optional(),
}).strict()

// ORDER
//------------------------------------------------------

export const OrderIncludeSchema: z.ZodType<Prisma.OrderInclude> = z.object({
  fk_member_id: z.union([z.boolean(),z.lazy(() => MemberArgsSchema)]).optional(),
  orderItem: z.union([z.boolean(),z.lazy(() => OrderItemFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => OrderCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const OrderArgsSchema: z.ZodType<Prisma.OrderDefaultArgs> = z.object({
  select: z.lazy(() => OrderSelectSchema).optional(),
  include: z.lazy(() => OrderIncludeSchema).optional(),
}).strict();

export const OrderCountOutputTypeArgsSchema: z.ZodType<Prisma.OrderCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => OrderCountOutputTypeSelectSchema).nullish(),
}).strict();

export const OrderCountOutputTypeSelectSchema: z.ZodType<Prisma.OrderCountOutputTypeSelect> = z.object({
  orderItem: z.boolean().optional(),
}).strict();

export const OrderSelectSchema: z.ZodType<Prisma.OrderSelect> = z.object({
  order_id: z.boolean().optional(),
  member_id: z.boolean().optional(),
  order_created_date: z.boolean().optional(),
  order_updated_date: z.boolean().optional(),
  fk_member_id: z.union([z.boolean(),z.lazy(() => MemberArgsSchema)]).optional(),
  orderItem: z.union([z.boolean(),z.lazy(() => OrderItemFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => OrderCountOutputTypeArgsSchema)]).optional(),
}).strict()

// ORDER ITEM
//------------------------------------------------------

export const OrderItemIncludeSchema: z.ZodType<Prisma.OrderItemInclude> = z.object({
  fk_order_id: z.union([z.boolean(),z.lazy(() => OrderArgsSchema)]).optional(),
  fk_product_id: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
}).strict()

export const OrderItemArgsSchema: z.ZodType<Prisma.OrderItemDefaultArgs> = z.object({
  select: z.lazy(() => OrderItemSelectSchema).optional(),
  include: z.lazy(() => OrderItemIncludeSchema).optional(),
}).strict();

export const OrderItemSelectSchema: z.ZodType<Prisma.OrderItemSelect> = z.object({
  order_item_id: z.boolean().optional(),
  order_id: z.boolean().optional(),
  product_id: z.boolean().optional(),
  order_item_quantity: z.boolean().optional(),
  order_item_created_date: z.boolean().optional(),
  order_item_updated_date: z.boolean().optional(),
  fk_order_id: z.union([z.boolean(),z.lazy(() => OrderArgsSchema)]).optional(),
  fk_product_id: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const MemberWhereInputSchema: z.ZodType<Prisma.MemberWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MemberWhereInputSchema),z.lazy(() => MemberWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MemberWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MemberWhereInputSchema),z.lazy(() => MemberWhereInputSchema).array() ]).optional(),
  member_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  member_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  member_password: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  member_bonus_points: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  member_created_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  member_updated_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  orders: z.lazy(() => OrderListRelationFilterSchema).optional()
}).strict();

export const MemberOrderByWithRelationInputSchema: z.ZodType<Prisma.MemberOrderByWithRelationInput> = z.object({
  member_id: z.lazy(() => SortOrderSchema).optional(),
  member_name: z.lazy(() => SortOrderSchema).optional(),
  member_password: z.lazy(() => SortOrderSchema).optional(),
  member_bonus_points: z.lazy(() => SortOrderSchema).optional(),
  member_created_date: z.lazy(() => SortOrderSchema).optional(),
  member_updated_date: z.lazy(() => SortOrderSchema).optional(),
  orders: z.lazy(() => OrderOrderByRelationAggregateInputSchema).optional()
}).strict();

export const MemberWhereUniqueInputSchema: z.ZodType<Prisma.MemberWhereUniqueInput> = z.object({
  member_id: z.string()
})
.and(z.object({
  member_id: z.string().optional(),
  AND: z.union([ z.lazy(() => MemberWhereInputSchema),z.lazy(() => MemberWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MemberWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MemberWhereInputSchema),z.lazy(() => MemberWhereInputSchema).array() ]).optional(),
  member_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  member_password: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  member_bonus_points: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  member_created_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  member_updated_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  orders: z.lazy(() => OrderListRelationFilterSchema).optional()
}).strict());

export const MemberOrderByWithAggregationInputSchema: z.ZodType<Prisma.MemberOrderByWithAggregationInput> = z.object({
  member_id: z.lazy(() => SortOrderSchema).optional(),
  member_name: z.lazy(() => SortOrderSchema).optional(),
  member_password: z.lazy(() => SortOrderSchema).optional(),
  member_bonus_points: z.lazy(() => SortOrderSchema).optional(),
  member_created_date: z.lazy(() => SortOrderSchema).optional(),
  member_updated_date: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => MemberCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => MemberAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => MemberMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => MemberMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => MemberSumOrderByAggregateInputSchema).optional()
}).strict();

export const MemberScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.MemberScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => MemberScalarWhereWithAggregatesInputSchema),z.lazy(() => MemberScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => MemberScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MemberScalarWhereWithAggregatesInputSchema),z.lazy(() => MemberScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  member_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  member_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  member_password: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  member_bonus_points: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  member_created_date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  member_updated_date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const MemberLevelWhereInputSchema: z.ZodType<Prisma.MemberLevelWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MemberLevelWhereInputSchema),z.lazy(() => MemberLevelWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MemberLevelWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MemberLevelWhereInputSchema),z.lazy(() => MemberLevelWhereInputSchema).array() ]).optional(),
  member_level_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  member_level_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  bonus_points_min: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  bonus_points_max: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  member_level_created_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  member_level_updated_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const MemberLevelOrderByWithRelationInputSchema: z.ZodType<Prisma.MemberLevelOrderByWithRelationInput> = z.object({
  member_level_id: z.lazy(() => SortOrderSchema).optional(),
  member_level_name: z.lazy(() => SortOrderSchema).optional(),
  bonus_points_min: z.lazy(() => SortOrderSchema).optional(),
  bonus_points_max: z.lazy(() => SortOrderSchema).optional(),
  member_level_created_date: z.lazy(() => SortOrderSchema).optional(),
  member_level_updated_date: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MemberLevelWhereUniqueInputSchema: z.ZodType<Prisma.MemberLevelWhereUniqueInput> = z.object({
  member_level_id: z.string()
})
.and(z.object({
  member_level_id: z.string().optional(),
  AND: z.union([ z.lazy(() => MemberLevelWhereInputSchema),z.lazy(() => MemberLevelWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MemberLevelWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MemberLevelWhereInputSchema),z.lazy(() => MemberLevelWhereInputSchema).array() ]).optional(),
  member_level_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  bonus_points_min: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  bonus_points_max: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  member_level_created_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  member_level_updated_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());

export const MemberLevelOrderByWithAggregationInputSchema: z.ZodType<Prisma.MemberLevelOrderByWithAggregationInput> = z.object({
  member_level_id: z.lazy(() => SortOrderSchema).optional(),
  member_level_name: z.lazy(() => SortOrderSchema).optional(),
  bonus_points_min: z.lazy(() => SortOrderSchema).optional(),
  bonus_points_max: z.lazy(() => SortOrderSchema).optional(),
  member_level_created_date: z.lazy(() => SortOrderSchema).optional(),
  member_level_updated_date: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => MemberLevelCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => MemberLevelAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => MemberLevelMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => MemberLevelMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => MemberLevelSumOrderByAggregateInputSchema).optional()
}).strict();

export const MemberLevelScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.MemberLevelScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => MemberLevelScalarWhereWithAggregatesInputSchema),z.lazy(() => MemberLevelScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => MemberLevelScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MemberLevelScalarWhereWithAggregatesInputSchema),z.lazy(() => MemberLevelScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  member_level_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  member_level_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  bonus_points_min: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  bonus_points_max: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  member_level_created_date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  member_level_updated_date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const UomWhereInputSchema: z.ZodType<Prisma.UomWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UomWhereInputSchema),z.lazy(() => UomWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UomWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UomWhereInputSchema),z.lazy(() => UomWhereInputSchema).array() ]).optional(),
  uom_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  uom_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  uom_created_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  uom_updated_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  products: z.lazy(() => ProductListRelationFilterSchema).optional()
}).strict();

export const UomOrderByWithRelationInputSchema: z.ZodType<Prisma.UomOrderByWithRelationInput> = z.object({
  uom_id: z.lazy(() => SortOrderSchema).optional(),
  uom_name: z.lazy(() => SortOrderSchema).optional(),
  uom_created_date: z.lazy(() => SortOrderSchema).optional(),
  uom_updated_date: z.lazy(() => SortOrderSchema).optional(),
  products: z.lazy(() => ProductOrderByRelationAggregateInputSchema).optional()
}).strict();

export const UomWhereUniqueInputSchema: z.ZodType<Prisma.UomWhereUniqueInput> = z.object({
  uom_id: z.string()
})
.and(z.object({
  uom_id: z.string().optional(),
  AND: z.union([ z.lazy(() => UomWhereInputSchema),z.lazy(() => UomWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UomWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UomWhereInputSchema),z.lazy(() => UomWhereInputSchema).array() ]).optional(),
  uom_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  uom_created_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  uom_updated_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  products: z.lazy(() => ProductListRelationFilterSchema).optional()
}).strict());

export const UomOrderByWithAggregationInputSchema: z.ZodType<Prisma.UomOrderByWithAggregationInput> = z.object({
  uom_id: z.lazy(() => SortOrderSchema).optional(),
  uom_name: z.lazy(() => SortOrderSchema).optional(),
  uom_created_date: z.lazy(() => SortOrderSchema).optional(),
  uom_updated_date: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UomCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UomMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UomMinOrderByAggregateInputSchema).optional()
}).strict();

export const UomScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UomScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UomScalarWhereWithAggregatesInputSchema),z.lazy(() => UomScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UomScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UomScalarWhereWithAggregatesInputSchema),z.lazy(() => UomScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  uom_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  uom_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  uom_created_date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  uom_updated_date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ProductWhereInputSchema: z.ZodType<Prisma.ProductWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProductWhereInputSchema),z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductWhereInputSchema),z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  product_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  product_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  uom_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  product_unit_price: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  product_bonus_points: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  product_created_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  product_updated_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  fk_uom_id: z.union([ z.lazy(() => UomRelationFilterSchema),z.lazy(() => UomWhereInputSchema) ]).optional(),
  orderItem: z.lazy(() => OrderItemListRelationFilterSchema).optional()
}).strict();

export const ProductOrderByWithRelationInputSchema: z.ZodType<Prisma.ProductOrderByWithRelationInput> = z.object({
  product_id: z.lazy(() => SortOrderSchema).optional(),
  product_name: z.lazy(() => SortOrderSchema).optional(),
  uom_id: z.lazy(() => SortOrderSchema).optional(),
  product_unit_price: z.lazy(() => SortOrderSchema).optional(),
  product_bonus_points: z.lazy(() => SortOrderSchema).optional(),
  product_created_date: z.lazy(() => SortOrderSchema).optional(),
  product_updated_date: z.lazy(() => SortOrderSchema).optional(),
  fk_uom_id: z.lazy(() => UomOrderByWithRelationInputSchema).optional(),
  orderItem: z.lazy(() => OrderItemOrderByRelationAggregateInputSchema).optional()
}).strict();

export const ProductWhereUniqueInputSchema: z.ZodType<Prisma.ProductWhereUniqueInput> = z.object({
  product_id: z.string()
})
.and(z.object({
  product_id: z.string().optional(),
  AND: z.union([ z.lazy(() => ProductWhereInputSchema),z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductWhereInputSchema),z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  product_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  uom_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  product_unit_price: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  product_bonus_points: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  product_created_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  product_updated_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  fk_uom_id: z.union([ z.lazy(() => UomRelationFilterSchema),z.lazy(() => UomWhereInputSchema) ]).optional(),
  orderItem: z.lazy(() => OrderItemListRelationFilterSchema).optional()
}).strict());

export const ProductOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProductOrderByWithAggregationInput> = z.object({
  product_id: z.lazy(() => SortOrderSchema).optional(),
  product_name: z.lazy(() => SortOrderSchema).optional(),
  uom_id: z.lazy(() => SortOrderSchema).optional(),
  product_unit_price: z.lazy(() => SortOrderSchema).optional(),
  product_bonus_points: z.lazy(() => SortOrderSchema).optional(),
  product_created_date: z.lazy(() => SortOrderSchema).optional(),
  product_updated_date: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ProductCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ProductAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProductMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProductMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ProductSumOrderByAggregateInputSchema).optional()
}).strict();

export const ProductScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProductScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ProductScalarWhereWithAggregatesInputSchema),z.lazy(() => ProductScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductScalarWhereWithAggregatesInputSchema),z.lazy(() => ProductScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  product_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  product_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  uom_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  product_unit_price: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  product_bonus_points: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  product_created_date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  product_updated_date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const OrderWhereInputSchema: z.ZodType<Prisma.OrderWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OrderWhereInputSchema),z.lazy(() => OrderWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrderWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrderWhereInputSchema),z.lazy(() => OrderWhereInputSchema).array() ]).optional(),
  order_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  member_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  order_created_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  order_updated_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  fk_member_id: z.union([ z.lazy(() => MemberRelationFilterSchema),z.lazy(() => MemberWhereInputSchema) ]).optional(),
  orderItem: z.lazy(() => OrderItemListRelationFilterSchema).optional()
}).strict();

export const OrderOrderByWithRelationInputSchema: z.ZodType<Prisma.OrderOrderByWithRelationInput> = z.object({
  order_id: z.lazy(() => SortOrderSchema).optional(),
  member_id: z.lazy(() => SortOrderSchema).optional(),
  order_created_date: z.lazy(() => SortOrderSchema).optional(),
  order_updated_date: z.lazy(() => SortOrderSchema).optional(),
  fk_member_id: z.lazy(() => MemberOrderByWithRelationInputSchema).optional(),
  orderItem: z.lazy(() => OrderItemOrderByRelationAggregateInputSchema).optional()
}).strict();

export const OrderWhereUniqueInputSchema: z.ZodType<Prisma.OrderWhereUniqueInput> = z.object({
  order_id: z.string()
})
.and(z.object({
  order_id: z.string().optional(),
  AND: z.union([ z.lazy(() => OrderWhereInputSchema),z.lazy(() => OrderWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrderWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrderWhereInputSchema),z.lazy(() => OrderWhereInputSchema).array() ]).optional(),
  member_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  order_created_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  order_updated_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  fk_member_id: z.union([ z.lazy(() => MemberRelationFilterSchema),z.lazy(() => MemberWhereInputSchema) ]).optional(),
  orderItem: z.lazy(() => OrderItemListRelationFilterSchema).optional()
}).strict());

export const OrderOrderByWithAggregationInputSchema: z.ZodType<Prisma.OrderOrderByWithAggregationInput> = z.object({
  order_id: z.lazy(() => SortOrderSchema).optional(),
  member_id: z.lazy(() => SortOrderSchema).optional(),
  order_created_date: z.lazy(() => SortOrderSchema).optional(),
  order_updated_date: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => OrderCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => OrderMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => OrderMinOrderByAggregateInputSchema).optional()
}).strict();

export const OrderScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.OrderScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => OrderScalarWhereWithAggregatesInputSchema),z.lazy(() => OrderScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrderScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrderScalarWhereWithAggregatesInputSchema),z.lazy(() => OrderScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  order_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  member_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  order_created_date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  order_updated_date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const OrderItemWhereInputSchema: z.ZodType<Prisma.OrderItemWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OrderItemWhereInputSchema),z.lazy(() => OrderItemWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrderItemWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrderItemWhereInputSchema),z.lazy(() => OrderItemWhereInputSchema).array() ]).optional(),
  order_item_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  order_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  product_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  order_item_quantity: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  order_item_created_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  order_item_updated_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  fk_order_id: z.union([ z.lazy(() => OrderRelationFilterSchema),z.lazy(() => OrderWhereInputSchema) ]).optional(),
  fk_product_id: z.union([ z.lazy(() => ProductRelationFilterSchema),z.lazy(() => ProductWhereInputSchema) ]).optional(),
}).strict();

export const OrderItemOrderByWithRelationInputSchema: z.ZodType<Prisma.OrderItemOrderByWithRelationInput> = z.object({
  order_item_id: z.lazy(() => SortOrderSchema).optional(),
  order_id: z.lazy(() => SortOrderSchema).optional(),
  product_id: z.lazy(() => SortOrderSchema).optional(),
  order_item_quantity: z.lazy(() => SortOrderSchema).optional(),
  order_item_created_date: z.lazy(() => SortOrderSchema).optional(),
  order_item_updated_date: z.lazy(() => SortOrderSchema).optional(),
  fk_order_id: z.lazy(() => OrderOrderByWithRelationInputSchema).optional(),
  fk_product_id: z.lazy(() => ProductOrderByWithRelationInputSchema).optional()
}).strict();

export const OrderItemWhereUniqueInputSchema: z.ZodType<Prisma.OrderItemWhereUniqueInput> = z.object({
  order_item_id: z.string()
})
.and(z.object({
  order_item_id: z.string().optional(),
  AND: z.union([ z.lazy(() => OrderItemWhereInputSchema),z.lazy(() => OrderItemWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrderItemWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrderItemWhereInputSchema),z.lazy(() => OrderItemWhereInputSchema).array() ]).optional(),
  order_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  product_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  order_item_quantity: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  order_item_created_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  order_item_updated_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  fk_order_id: z.union([ z.lazy(() => OrderRelationFilterSchema),z.lazy(() => OrderWhereInputSchema) ]).optional(),
  fk_product_id: z.union([ z.lazy(() => ProductRelationFilterSchema),z.lazy(() => ProductWhereInputSchema) ]).optional(),
}).strict());

export const OrderItemOrderByWithAggregationInputSchema: z.ZodType<Prisma.OrderItemOrderByWithAggregationInput> = z.object({
  order_item_id: z.lazy(() => SortOrderSchema).optional(),
  order_id: z.lazy(() => SortOrderSchema).optional(),
  product_id: z.lazy(() => SortOrderSchema).optional(),
  order_item_quantity: z.lazy(() => SortOrderSchema).optional(),
  order_item_created_date: z.lazy(() => SortOrderSchema).optional(),
  order_item_updated_date: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => OrderItemCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => OrderItemAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => OrderItemMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => OrderItemMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => OrderItemSumOrderByAggregateInputSchema).optional()
}).strict();

export const OrderItemScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.OrderItemScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => OrderItemScalarWhereWithAggregatesInputSchema),z.lazy(() => OrderItemScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrderItemScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrderItemScalarWhereWithAggregatesInputSchema),z.lazy(() => OrderItemScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  order_item_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  order_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  product_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  order_item_quantity: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  order_item_created_date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  order_item_updated_date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const MemberCreateInputSchema: z.ZodType<Prisma.MemberCreateInput> = z.object({
  member_id: z.string(),
  member_name: z.string(),
  member_password: z.string(),
  member_bonus_points: z.number(),
  member_created_date: z.coerce.date(),
  member_updated_date: z.coerce.date(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutFk_member_idInputSchema).optional()
}).strict();

export const MemberUncheckedCreateInputSchema: z.ZodType<Prisma.MemberUncheckedCreateInput> = z.object({
  member_id: z.string(),
  member_name: z.string(),
  member_password: z.string(),
  member_bonus_points: z.number(),
  member_created_date: z.coerce.date(),
  member_updated_date: z.coerce.date(),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutFk_member_idInputSchema).optional()
}).strict();

export const MemberUpdateInputSchema: z.ZodType<Prisma.MemberUpdateInput> = z.object({
  member_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  member_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  member_password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  member_bonus_points: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  member_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  member_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutFk_member_idNestedInputSchema).optional()
}).strict();

export const MemberUncheckedUpdateInputSchema: z.ZodType<Prisma.MemberUncheckedUpdateInput> = z.object({
  member_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  member_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  member_password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  member_bonus_points: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  member_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  member_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  orders: z.lazy(() => OrderUncheckedUpdateManyWithoutFk_member_idNestedInputSchema).optional()
}).strict();

export const MemberCreateManyInputSchema: z.ZodType<Prisma.MemberCreateManyInput> = z.object({
  member_id: z.string(),
  member_name: z.string(),
  member_password: z.string(),
  member_bonus_points: z.number(),
  member_created_date: z.coerce.date(),
  member_updated_date: z.coerce.date()
}).strict();

export const MemberUpdateManyMutationInputSchema: z.ZodType<Prisma.MemberUpdateManyMutationInput> = z.object({
  member_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  member_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  member_password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  member_bonus_points: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  member_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  member_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MemberUncheckedUpdateManyInputSchema: z.ZodType<Prisma.MemberUncheckedUpdateManyInput> = z.object({
  member_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  member_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  member_password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  member_bonus_points: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  member_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  member_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MemberLevelCreateInputSchema: z.ZodType<Prisma.MemberLevelCreateInput> = z.object({
  member_level_id: z.string(),
  member_level_name: z.string(),
  bonus_points_min: z.number(),
  bonus_points_max: z.number(),
  member_level_created_date: z.coerce.date(),
  member_level_updated_date: z.coerce.date()
}).strict();

export const MemberLevelUncheckedCreateInputSchema: z.ZodType<Prisma.MemberLevelUncheckedCreateInput> = z.object({
  member_level_id: z.string(),
  member_level_name: z.string(),
  bonus_points_min: z.number(),
  bonus_points_max: z.number(),
  member_level_created_date: z.coerce.date(),
  member_level_updated_date: z.coerce.date()
}).strict();

export const MemberLevelUpdateInputSchema: z.ZodType<Prisma.MemberLevelUpdateInput> = z.object({
  member_level_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  member_level_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bonus_points_min: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  bonus_points_max: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  member_level_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  member_level_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MemberLevelUncheckedUpdateInputSchema: z.ZodType<Prisma.MemberLevelUncheckedUpdateInput> = z.object({
  member_level_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  member_level_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bonus_points_min: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  bonus_points_max: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  member_level_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  member_level_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MemberLevelCreateManyInputSchema: z.ZodType<Prisma.MemberLevelCreateManyInput> = z.object({
  member_level_id: z.string(),
  member_level_name: z.string(),
  bonus_points_min: z.number(),
  bonus_points_max: z.number(),
  member_level_created_date: z.coerce.date(),
  member_level_updated_date: z.coerce.date()
}).strict();

export const MemberLevelUpdateManyMutationInputSchema: z.ZodType<Prisma.MemberLevelUpdateManyMutationInput> = z.object({
  member_level_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  member_level_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bonus_points_min: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  bonus_points_max: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  member_level_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  member_level_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MemberLevelUncheckedUpdateManyInputSchema: z.ZodType<Prisma.MemberLevelUncheckedUpdateManyInput> = z.object({
  member_level_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  member_level_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bonus_points_min: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  bonus_points_max: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  member_level_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  member_level_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UomCreateInputSchema: z.ZodType<Prisma.UomCreateInput> = z.object({
  uom_id: z.string(),
  uom_name: z.string(),
  uom_created_date: z.coerce.date(),
  uom_updated_date: z.coerce.date(),
  products: z.lazy(() => ProductCreateNestedManyWithoutFk_uom_idInputSchema).optional()
}).strict();

export const UomUncheckedCreateInputSchema: z.ZodType<Prisma.UomUncheckedCreateInput> = z.object({
  uom_id: z.string(),
  uom_name: z.string(),
  uom_created_date: z.coerce.date(),
  uom_updated_date: z.coerce.date(),
  products: z.lazy(() => ProductUncheckedCreateNestedManyWithoutFk_uom_idInputSchema).optional()
}).strict();

export const UomUpdateInputSchema: z.ZodType<Prisma.UomUpdateInput> = z.object({
  uom_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  uom_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  uom_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  uom_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUpdateManyWithoutFk_uom_idNestedInputSchema).optional()
}).strict();

export const UomUncheckedUpdateInputSchema: z.ZodType<Prisma.UomUncheckedUpdateInput> = z.object({
  uom_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  uom_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  uom_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  uom_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUncheckedUpdateManyWithoutFk_uom_idNestedInputSchema).optional()
}).strict();

export const UomCreateManyInputSchema: z.ZodType<Prisma.UomCreateManyInput> = z.object({
  uom_id: z.string(),
  uom_name: z.string(),
  uom_created_date: z.coerce.date(),
  uom_updated_date: z.coerce.date()
}).strict();

export const UomUpdateManyMutationInputSchema: z.ZodType<Prisma.UomUpdateManyMutationInput> = z.object({
  uom_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  uom_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  uom_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  uom_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UomUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UomUncheckedUpdateManyInput> = z.object({
  uom_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  uom_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  uom_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  uom_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductCreateInputSchema: z.ZodType<Prisma.ProductCreateInput> = z.object({
  product_id: z.string(),
  product_name: z.string(),
  product_unit_price: z.number(),
  product_bonus_points: z.number(),
  product_created_date: z.coerce.date(),
  product_updated_date: z.coerce.date(),
  fk_uom_id: z.lazy(() => UomCreateNestedOneWithoutProductsInputSchema),
  orderItem: z.lazy(() => OrderItemCreateNestedManyWithoutFk_product_idInputSchema).optional()
}).strict();

export const ProductUncheckedCreateInputSchema: z.ZodType<Prisma.ProductUncheckedCreateInput> = z.object({
  product_id: z.string(),
  product_name: z.string(),
  uom_id: z.string(),
  product_unit_price: z.number(),
  product_bonus_points: z.number(),
  product_created_date: z.coerce.date(),
  product_updated_date: z.coerce.date(),
  orderItem: z.lazy(() => OrderItemUncheckedCreateNestedManyWithoutFk_product_idInputSchema).optional()
}).strict();

export const ProductUpdateInputSchema: z.ZodType<Prisma.ProductUpdateInput> = z.object({
  product_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product_unit_price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  product_bonus_points: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  product_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  product_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  fk_uom_id: z.lazy(() => UomUpdateOneRequiredWithoutProductsNestedInputSchema).optional(),
  orderItem: z.lazy(() => OrderItemUpdateManyWithoutFk_product_idNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateInput> = z.object({
  product_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  uom_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product_unit_price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  product_bonus_points: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  product_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  product_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  orderItem: z.lazy(() => OrderItemUncheckedUpdateManyWithoutFk_product_idNestedInputSchema).optional()
}).strict();

export const ProductCreateManyInputSchema: z.ZodType<Prisma.ProductCreateManyInput> = z.object({
  product_id: z.string(),
  product_name: z.string(),
  uom_id: z.string(),
  product_unit_price: z.number(),
  product_bonus_points: z.number(),
  product_created_date: z.coerce.date(),
  product_updated_date: z.coerce.date()
}).strict();

export const ProductUpdateManyMutationInputSchema: z.ZodType<Prisma.ProductUpdateManyMutationInput> = z.object({
  product_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product_unit_price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  product_bonus_points: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  product_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  product_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyInput> = z.object({
  product_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  uom_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product_unit_price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  product_bonus_points: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  product_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  product_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderCreateInputSchema: z.ZodType<Prisma.OrderCreateInput> = z.object({
  order_id: z.string(),
  order_created_date: z.coerce.date(),
  order_updated_date: z.coerce.date(),
  fk_member_id: z.lazy(() => MemberCreateNestedOneWithoutOrdersInputSchema),
  orderItem: z.lazy(() => OrderItemCreateNestedManyWithoutFk_order_idInputSchema).optional()
}).strict();

export const OrderUncheckedCreateInputSchema: z.ZodType<Prisma.OrderUncheckedCreateInput> = z.object({
  order_id: z.string(),
  member_id: z.string(),
  order_created_date: z.coerce.date(),
  order_updated_date: z.coerce.date(),
  orderItem: z.lazy(() => OrderItemUncheckedCreateNestedManyWithoutFk_order_idInputSchema).optional()
}).strict();

export const OrderUpdateInputSchema: z.ZodType<Prisma.OrderUpdateInput> = z.object({
  order_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  order_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  fk_member_id: z.lazy(() => MemberUpdateOneRequiredWithoutOrdersNestedInputSchema).optional(),
  orderItem: z.lazy(() => OrderItemUpdateManyWithoutFk_order_idNestedInputSchema).optional()
}).strict();

export const OrderUncheckedUpdateInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateInput> = z.object({
  order_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  member_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  order_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  orderItem: z.lazy(() => OrderItemUncheckedUpdateManyWithoutFk_order_idNestedInputSchema).optional()
}).strict();

export const OrderCreateManyInputSchema: z.ZodType<Prisma.OrderCreateManyInput> = z.object({
  order_id: z.string(),
  member_id: z.string(),
  order_created_date: z.coerce.date(),
  order_updated_date: z.coerce.date()
}).strict();

export const OrderUpdateManyMutationInputSchema: z.ZodType<Prisma.OrderUpdateManyMutationInput> = z.object({
  order_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  order_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderUncheckedUpdateManyInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateManyInput> = z.object({
  order_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  member_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  order_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderItemCreateInputSchema: z.ZodType<Prisma.OrderItemCreateInput> = z.object({
  order_item_id: z.string(),
  order_item_quantity: z.number(),
  order_item_created_date: z.coerce.date(),
  order_item_updated_date: z.coerce.date(),
  fk_order_id: z.lazy(() => OrderCreateNestedOneWithoutOrderItemInputSchema),
  fk_product_id: z.lazy(() => ProductCreateNestedOneWithoutOrderItemInputSchema)
}).strict();

export const OrderItemUncheckedCreateInputSchema: z.ZodType<Prisma.OrderItemUncheckedCreateInput> = z.object({
  order_item_id: z.string(),
  order_id: z.string(),
  product_id: z.string(),
  order_item_quantity: z.number(),
  order_item_created_date: z.coerce.date(),
  order_item_updated_date: z.coerce.date()
}).strict();

export const OrderItemUpdateInputSchema: z.ZodType<Prisma.OrderItemUpdateInput> = z.object({
  order_item_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_item_quantity: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  order_item_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  order_item_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  fk_order_id: z.lazy(() => OrderUpdateOneRequiredWithoutOrderItemNestedInputSchema).optional(),
  fk_product_id: z.lazy(() => ProductUpdateOneRequiredWithoutOrderItemNestedInputSchema).optional()
}).strict();

export const OrderItemUncheckedUpdateInputSchema: z.ZodType<Prisma.OrderItemUncheckedUpdateInput> = z.object({
  order_item_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_item_quantity: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  order_item_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  order_item_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderItemCreateManyInputSchema: z.ZodType<Prisma.OrderItemCreateManyInput> = z.object({
  order_item_id: z.string(),
  order_id: z.string(),
  product_id: z.string(),
  order_item_quantity: z.number(),
  order_item_created_date: z.coerce.date(),
  order_item_updated_date: z.coerce.date()
}).strict();

export const OrderItemUpdateManyMutationInputSchema: z.ZodType<Prisma.OrderItemUpdateManyMutationInput> = z.object({
  order_item_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_item_quantity: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  order_item_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  order_item_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderItemUncheckedUpdateManyInputSchema: z.ZodType<Prisma.OrderItemUncheckedUpdateManyInput> = z.object({
  order_item_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_item_quantity: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  order_item_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  order_item_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UuidFilterSchema: z.ZodType<Prisma.UuidFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidFilterSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const FloatFilterSchema: z.ZodType<Prisma.FloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const OrderListRelationFilterSchema: z.ZodType<Prisma.OrderListRelationFilter> = z.object({
  every: z.lazy(() => OrderWhereInputSchema).optional(),
  some: z.lazy(() => OrderWhereInputSchema).optional(),
  none: z.lazy(() => OrderWhereInputSchema).optional()
}).strict();

export const OrderOrderByRelationAggregateInputSchema: z.ZodType<Prisma.OrderOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MemberCountOrderByAggregateInputSchema: z.ZodType<Prisma.MemberCountOrderByAggregateInput> = z.object({
  member_id: z.lazy(() => SortOrderSchema).optional(),
  member_name: z.lazy(() => SortOrderSchema).optional(),
  member_password: z.lazy(() => SortOrderSchema).optional(),
  member_bonus_points: z.lazy(() => SortOrderSchema).optional(),
  member_created_date: z.lazy(() => SortOrderSchema).optional(),
  member_updated_date: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MemberAvgOrderByAggregateInputSchema: z.ZodType<Prisma.MemberAvgOrderByAggregateInput> = z.object({
  member_bonus_points: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MemberMaxOrderByAggregateInputSchema: z.ZodType<Prisma.MemberMaxOrderByAggregateInput> = z.object({
  member_id: z.lazy(() => SortOrderSchema).optional(),
  member_name: z.lazy(() => SortOrderSchema).optional(),
  member_password: z.lazy(() => SortOrderSchema).optional(),
  member_bonus_points: z.lazy(() => SortOrderSchema).optional(),
  member_created_date: z.lazy(() => SortOrderSchema).optional(),
  member_updated_date: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MemberMinOrderByAggregateInputSchema: z.ZodType<Prisma.MemberMinOrderByAggregateInput> = z.object({
  member_id: z.lazy(() => SortOrderSchema).optional(),
  member_name: z.lazy(() => SortOrderSchema).optional(),
  member_password: z.lazy(() => SortOrderSchema).optional(),
  member_bonus_points: z.lazy(() => SortOrderSchema).optional(),
  member_created_date: z.lazy(() => SortOrderSchema).optional(),
  member_updated_date: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MemberSumOrderByAggregateInputSchema: z.ZodType<Prisma.MemberSumOrderByAggregateInput> = z.object({
  member_bonus_points: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UuidWithAggregatesFilterSchema: z.ZodType<Prisma.UuidWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const FloatWithAggregatesFilterSchema: z.ZodType<Prisma.FloatWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const MemberLevelCountOrderByAggregateInputSchema: z.ZodType<Prisma.MemberLevelCountOrderByAggregateInput> = z.object({
  member_level_id: z.lazy(() => SortOrderSchema).optional(),
  member_level_name: z.lazy(() => SortOrderSchema).optional(),
  bonus_points_min: z.lazy(() => SortOrderSchema).optional(),
  bonus_points_max: z.lazy(() => SortOrderSchema).optional(),
  member_level_created_date: z.lazy(() => SortOrderSchema).optional(),
  member_level_updated_date: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MemberLevelAvgOrderByAggregateInputSchema: z.ZodType<Prisma.MemberLevelAvgOrderByAggregateInput> = z.object({
  bonus_points_min: z.lazy(() => SortOrderSchema).optional(),
  bonus_points_max: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MemberLevelMaxOrderByAggregateInputSchema: z.ZodType<Prisma.MemberLevelMaxOrderByAggregateInput> = z.object({
  member_level_id: z.lazy(() => SortOrderSchema).optional(),
  member_level_name: z.lazy(() => SortOrderSchema).optional(),
  bonus_points_min: z.lazy(() => SortOrderSchema).optional(),
  bonus_points_max: z.lazy(() => SortOrderSchema).optional(),
  member_level_created_date: z.lazy(() => SortOrderSchema).optional(),
  member_level_updated_date: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MemberLevelMinOrderByAggregateInputSchema: z.ZodType<Prisma.MemberLevelMinOrderByAggregateInput> = z.object({
  member_level_id: z.lazy(() => SortOrderSchema).optional(),
  member_level_name: z.lazy(() => SortOrderSchema).optional(),
  bonus_points_min: z.lazy(() => SortOrderSchema).optional(),
  bonus_points_max: z.lazy(() => SortOrderSchema).optional(),
  member_level_created_date: z.lazy(() => SortOrderSchema).optional(),
  member_level_updated_date: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MemberLevelSumOrderByAggregateInputSchema: z.ZodType<Prisma.MemberLevelSumOrderByAggregateInput> = z.object({
  bonus_points_min: z.lazy(() => SortOrderSchema).optional(),
  bonus_points_max: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductListRelationFilterSchema: z.ZodType<Prisma.ProductListRelationFilter> = z.object({
  every: z.lazy(() => ProductWhereInputSchema).optional(),
  some: z.lazy(() => ProductWhereInputSchema).optional(),
  none: z.lazy(() => ProductWhereInputSchema).optional()
}).strict();

export const ProductOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProductOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UomCountOrderByAggregateInputSchema: z.ZodType<Prisma.UomCountOrderByAggregateInput> = z.object({
  uom_id: z.lazy(() => SortOrderSchema).optional(),
  uom_name: z.lazy(() => SortOrderSchema).optional(),
  uom_created_date: z.lazy(() => SortOrderSchema).optional(),
  uom_updated_date: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UomMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UomMaxOrderByAggregateInput> = z.object({
  uom_id: z.lazy(() => SortOrderSchema).optional(),
  uom_name: z.lazy(() => SortOrderSchema).optional(),
  uom_created_date: z.lazy(() => SortOrderSchema).optional(),
  uom_updated_date: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UomMinOrderByAggregateInputSchema: z.ZodType<Prisma.UomMinOrderByAggregateInput> = z.object({
  uom_id: z.lazy(() => SortOrderSchema).optional(),
  uom_name: z.lazy(() => SortOrderSchema).optional(),
  uom_created_date: z.lazy(() => SortOrderSchema).optional(),
  uom_updated_date: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UomRelationFilterSchema: z.ZodType<Prisma.UomRelationFilter> = z.object({
  is: z.lazy(() => UomWhereInputSchema).optional(),
  isNot: z.lazy(() => UomWhereInputSchema).optional()
}).strict();

export const OrderItemListRelationFilterSchema: z.ZodType<Prisma.OrderItemListRelationFilter> = z.object({
  every: z.lazy(() => OrderItemWhereInputSchema).optional(),
  some: z.lazy(() => OrderItemWhereInputSchema).optional(),
  none: z.lazy(() => OrderItemWhereInputSchema).optional()
}).strict();

export const OrderItemOrderByRelationAggregateInputSchema: z.ZodType<Prisma.OrderItemOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProductCountOrderByAggregateInput> = z.object({
  product_id: z.lazy(() => SortOrderSchema).optional(),
  product_name: z.lazy(() => SortOrderSchema).optional(),
  uom_id: z.lazy(() => SortOrderSchema).optional(),
  product_unit_price: z.lazy(() => SortOrderSchema).optional(),
  product_bonus_points: z.lazy(() => SortOrderSchema).optional(),
  product_created_date: z.lazy(() => SortOrderSchema).optional(),
  product_updated_date: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ProductAvgOrderByAggregateInput> = z.object({
  product_unit_price: z.lazy(() => SortOrderSchema).optional(),
  product_bonus_points: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProductMaxOrderByAggregateInput> = z.object({
  product_id: z.lazy(() => SortOrderSchema).optional(),
  product_name: z.lazy(() => SortOrderSchema).optional(),
  uom_id: z.lazy(() => SortOrderSchema).optional(),
  product_unit_price: z.lazy(() => SortOrderSchema).optional(),
  product_bonus_points: z.lazy(() => SortOrderSchema).optional(),
  product_created_date: z.lazy(() => SortOrderSchema).optional(),
  product_updated_date: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProductMinOrderByAggregateInput> = z.object({
  product_id: z.lazy(() => SortOrderSchema).optional(),
  product_name: z.lazy(() => SortOrderSchema).optional(),
  uom_id: z.lazy(() => SortOrderSchema).optional(),
  product_unit_price: z.lazy(() => SortOrderSchema).optional(),
  product_bonus_points: z.lazy(() => SortOrderSchema).optional(),
  product_created_date: z.lazy(() => SortOrderSchema).optional(),
  product_updated_date: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductSumOrderByAggregateInputSchema: z.ZodType<Prisma.ProductSumOrderByAggregateInput> = z.object({
  product_unit_price: z.lazy(() => SortOrderSchema).optional(),
  product_bonus_points: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MemberRelationFilterSchema: z.ZodType<Prisma.MemberRelationFilter> = z.object({
  is: z.lazy(() => MemberWhereInputSchema).optional(),
  isNot: z.lazy(() => MemberWhereInputSchema).optional()
}).strict();

export const OrderCountOrderByAggregateInputSchema: z.ZodType<Prisma.OrderCountOrderByAggregateInput> = z.object({
  order_id: z.lazy(() => SortOrderSchema).optional(),
  member_id: z.lazy(() => SortOrderSchema).optional(),
  order_created_date: z.lazy(() => SortOrderSchema).optional(),
  order_updated_date: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrderMaxOrderByAggregateInputSchema: z.ZodType<Prisma.OrderMaxOrderByAggregateInput> = z.object({
  order_id: z.lazy(() => SortOrderSchema).optional(),
  member_id: z.lazy(() => SortOrderSchema).optional(),
  order_created_date: z.lazy(() => SortOrderSchema).optional(),
  order_updated_date: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrderMinOrderByAggregateInputSchema: z.ZodType<Prisma.OrderMinOrderByAggregateInput> = z.object({
  order_id: z.lazy(() => SortOrderSchema).optional(),
  member_id: z.lazy(() => SortOrderSchema).optional(),
  order_created_date: z.lazy(() => SortOrderSchema).optional(),
  order_updated_date: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrderRelationFilterSchema: z.ZodType<Prisma.OrderRelationFilter> = z.object({
  is: z.lazy(() => OrderWhereInputSchema).optional(),
  isNot: z.lazy(() => OrderWhereInputSchema).optional()
}).strict();

export const ProductRelationFilterSchema: z.ZodType<Prisma.ProductRelationFilter> = z.object({
  is: z.lazy(() => ProductWhereInputSchema).optional(),
  isNot: z.lazy(() => ProductWhereInputSchema).optional()
}).strict();

export const OrderItemCountOrderByAggregateInputSchema: z.ZodType<Prisma.OrderItemCountOrderByAggregateInput> = z.object({
  order_item_id: z.lazy(() => SortOrderSchema).optional(),
  order_id: z.lazy(() => SortOrderSchema).optional(),
  product_id: z.lazy(() => SortOrderSchema).optional(),
  order_item_quantity: z.lazy(() => SortOrderSchema).optional(),
  order_item_created_date: z.lazy(() => SortOrderSchema).optional(),
  order_item_updated_date: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrderItemAvgOrderByAggregateInputSchema: z.ZodType<Prisma.OrderItemAvgOrderByAggregateInput> = z.object({
  order_item_quantity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrderItemMaxOrderByAggregateInputSchema: z.ZodType<Prisma.OrderItemMaxOrderByAggregateInput> = z.object({
  order_item_id: z.lazy(() => SortOrderSchema).optional(),
  order_id: z.lazy(() => SortOrderSchema).optional(),
  product_id: z.lazy(() => SortOrderSchema).optional(),
  order_item_quantity: z.lazy(() => SortOrderSchema).optional(),
  order_item_created_date: z.lazy(() => SortOrderSchema).optional(),
  order_item_updated_date: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrderItemMinOrderByAggregateInputSchema: z.ZodType<Prisma.OrderItemMinOrderByAggregateInput> = z.object({
  order_item_id: z.lazy(() => SortOrderSchema).optional(),
  order_id: z.lazy(() => SortOrderSchema).optional(),
  product_id: z.lazy(() => SortOrderSchema).optional(),
  order_item_quantity: z.lazy(() => SortOrderSchema).optional(),
  order_item_created_date: z.lazy(() => SortOrderSchema).optional(),
  order_item_updated_date: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrderItemSumOrderByAggregateInputSchema: z.ZodType<Prisma.OrderItemSumOrderByAggregateInput> = z.object({
  order_item_quantity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrderCreateNestedManyWithoutFk_member_idInputSchema: z.ZodType<Prisma.OrderCreateNestedManyWithoutFk_member_idInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutFk_member_idInputSchema),z.lazy(() => OrderCreateWithoutFk_member_idInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutFk_member_idInputSchema),z.lazy(() => OrderUncheckedCreateWithoutFk_member_idInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutFk_member_idInputSchema),z.lazy(() => OrderCreateOrConnectWithoutFk_member_idInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyFk_member_idInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const OrderUncheckedCreateNestedManyWithoutFk_member_idInputSchema: z.ZodType<Prisma.OrderUncheckedCreateNestedManyWithoutFk_member_idInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutFk_member_idInputSchema),z.lazy(() => OrderCreateWithoutFk_member_idInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutFk_member_idInputSchema),z.lazy(() => OrderUncheckedCreateWithoutFk_member_idInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutFk_member_idInputSchema),z.lazy(() => OrderCreateOrConnectWithoutFk_member_idInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyFk_member_idInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const FloatFieldUpdateOperationsInputSchema: z.ZodType<Prisma.FloatFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const OrderUpdateManyWithoutFk_member_idNestedInputSchema: z.ZodType<Prisma.OrderUpdateManyWithoutFk_member_idNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutFk_member_idInputSchema),z.lazy(() => OrderCreateWithoutFk_member_idInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutFk_member_idInputSchema),z.lazy(() => OrderUncheckedCreateWithoutFk_member_idInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutFk_member_idInputSchema),z.lazy(() => OrderCreateOrConnectWithoutFk_member_idInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrderUpsertWithWhereUniqueWithoutFk_member_idInputSchema),z.lazy(() => OrderUpsertWithWhereUniqueWithoutFk_member_idInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyFk_member_idInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrderUpdateWithWhereUniqueWithoutFk_member_idInputSchema),z.lazy(() => OrderUpdateWithWhereUniqueWithoutFk_member_idInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrderUpdateManyWithWhereWithoutFk_member_idInputSchema),z.lazy(() => OrderUpdateManyWithWhereWithoutFk_member_idInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrderScalarWhereInputSchema),z.lazy(() => OrderScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const OrderUncheckedUpdateManyWithoutFk_member_idNestedInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateManyWithoutFk_member_idNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutFk_member_idInputSchema),z.lazy(() => OrderCreateWithoutFk_member_idInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutFk_member_idInputSchema),z.lazy(() => OrderUncheckedCreateWithoutFk_member_idInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutFk_member_idInputSchema),z.lazy(() => OrderCreateOrConnectWithoutFk_member_idInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrderUpsertWithWhereUniqueWithoutFk_member_idInputSchema),z.lazy(() => OrderUpsertWithWhereUniqueWithoutFk_member_idInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyFk_member_idInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrderUpdateWithWhereUniqueWithoutFk_member_idInputSchema),z.lazy(() => OrderUpdateWithWhereUniqueWithoutFk_member_idInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrderUpdateManyWithWhereWithoutFk_member_idInputSchema),z.lazy(() => OrderUpdateManyWithWhereWithoutFk_member_idInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrderScalarWhereInputSchema),z.lazy(() => OrderScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProductCreateNestedManyWithoutFk_uom_idInputSchema: z.ZodType<Prisma.ProductCreateNestedManyWithoutFk_uom_idInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutFk_uom_idInputSchema),z.lazy(() => ProductCreateWithoutFk_uom_idInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutFk_uom_idInputSchema),z.lazy(() => ProductUncheckedCreateWithoutFk_uom_idInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutFk_uom_idInputSchema),z.lazy(() => ProductCreateOrConnectWithoutFk_uom_idInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyFk_uom_idInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProductUncheckedCreateNestedManyWithoutFk_uom_idInputSchema: z.ZodType<Prisma.ProductUncheckedCreateNestedManyWithoutFk_uom_idInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutFk_uom_idInputSchema),z.lazy(() => ProductCreateWithoutFk_uom_idInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutFk_uom_idInputSchema),z.lazy(() => ProductUncheckedCreateWithoutFk_uom_idInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutFk_uom_idInputSchema),z.lazy(() => ProductCreateOrConnectWithoutFk_uom_idInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyFk_uom_idInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProductUpdateManyWithoutFk_uom_idNestedInputSchema: z.ZodType<Prisma.ProductUpdateManyWithoutFk_uom_idNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutFk_uom_idInputSchema),z.lazy(() => ProductCreateWithoutFk_uom_idInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutFk_uom_idInputSchema),z.lazy(() => ProductUncheckedCreateWithoutFk_uom_idInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutFk_uom_idInputSchema),z.lazy(() => ProductCreateOrConnectWithoutFk_uom_idInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductUpsertWithWhereUniqueWithoutFk_uom_idInputSchema),z.lazy(() => ProductUpsertWithWhereUniqueWithoutFk_uom_idInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyFk_uom_idInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithWhereUniqueWithoutFk_uom_idInputSchema),z.lazy(() => ProductUpdateWithWhereUniqueWithoutFk_uom_idInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductUpdateManyWithWhereWithoutFk_uom_idInputSchema),z.lazy(() => ProductUpdateManyWithWhereWithoutFk_uom_idInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProductUncheckedUpdateManyWithoutFk_uom_idNestedInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutFk_uom_idNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutFk_uom_idInputSchema),z.lazy(() => ProductCreateWithoutFk_uom_idInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutFk_uom_idInputSchema),z.lazy(() => ProductUncheckedCreateWithoutFk_uom_idInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutFk_uom_idInputSchema),z.lazy(() => ProductCreateOrConnectWithoutFk_uom_idInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductUpsertWithWhereUniqueWithoutFk_uom_idInputSchema),z.lazy(() => ProductUpsertWithWhereUniqueWithoutFk_uom_idInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyFk_uom_idInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithWhereUniqueWithoutFk_uom_idInputSchema),z.lazy(() => ProductUpdateWithWhereUniqueWithoutFk_uom_idInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductUpdateManyWithWhereWithoutFk_uom_idInputSchema),z.lazy(() => ProductUpdateManyWithWhereWithoutFk_uom_idInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UomCreateNestedOneWithoutProductsInputSchema: z.ZodType<Prisma.UomCreateNestedOneWithoutProductsInput> = z.object({
  create: z.union([ z.lazy(() => UomCreateWithoutProductsInputSchema),z.lazy(() => UomUncheckedCreateWithoutProductsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UomCreateOrConnectWithoutProductsInputSchema).optional(),
  connect: z.lazy(() => UomWhereUniqueInputSchema).optional()
}).strict();

export const OrderItemCreateNestedManyWithoutFk_product_idInputSchema: z.ZodType<Prisma.OrderItemCreateNestedManyWithoutFk_product_idInput> = z.object({
  create: z.union([ z.lazy(() => OrderItemCreateWithoutFk_product_idInputSchema),z.lazy(() => OrderItemCreateWithoutFk_product_idInputSchema).array(),z.lazy(() => OrderItemUncheckedCreateWithoutFk_product_idInputSchema),z.lazy(() => OrderItemUncheckedCreateWithoutFk_product_idInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderItemCreateOrConnectWithoutFk_product_idInputSchema),z.lazy(() => OrderItemCreateOrConnectWithoutFk_product_idInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderItemCreateManyFk_product_idInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const OrderItemUncheckedCreateNestedManyWithoutFk_product_idInputSchema: z.ZodType<Prisma.OrderItemUncheckedCreateNestedManyWithoutFk_product_idInput> = z.object({
  create: z.union([ z.lazy(() => OrderItemCreateWithoutFk_product_idInputSchema),z.lazy(() => OrderItemCreateWithoutFk_product_idInputSchema).array(),z.lazy(() => OrderItemUncheckedCreateWithoutFk_product_idInputSchema),z.lazy(() => OrderItemUncheckedCreateWithoutFk_product_idInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderItemCreateOrConnectWithoutFk_product_idInputSchema),z.lazy(() => OrderItemCreateOrConnectWithoutFk_product_idInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderItemCreateManyFk_product_idInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UomUpdateOneRequiredWithoutProductsNestedInputSchema: z.ZodType<Prisma.UomUpdateOneRequiredWithoutProductsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UomCreateWithoutProductsInputSchema),z.lazy(() => UomUncheckedCreateWithoutProductsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UomCreateOrConnectWithoutProductsInputSchema).optional(),
  upsert: z.lazy(() => UomUpsertWithoutProductsInputSchema).optional(),
  connect: z.lazy(() => UomWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UomUpdateToOneWithWhereWithoutProductsInputSchema),z.lazy(() => UomUpdateWithoutProductsInputSchema),z.lazy(() => UomUncheckedUpdateWithoutProductsInputSchema) ]).optional(),
}).strict();

export const OrderItemUpdateManyWithoutFk_product_idNestedInputSchema: z.ZodType<Prisma.OrderItemUpdateManyWithoutFk_product_idNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrderItemCreateWithoutFk_product_idInputSchema),z.lazy(() => OrderItemCreateWithoutFk_product_idInputSchema).array(),z.lazy(() => OrderItemUncheckedCreateWithoutFk_product_idInputSchema),z.lazy(() => OrderItemUncheckedCreateWithoutFk_product_idInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderItemCreateOrConnectWithoutFk_product_idInputSchema),z.lazy(() => OrderItemCreateOrConnectWithoutFk_product_idInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrderItemUpsertWithWhereUniqueWithoutFk_product_idInputSchema),z.lazy(() => OrderItemUpsertWithWhereUniqueWithoutFk_product_idInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderItemCreateManyFk_product_idInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrderItemUpdateWithWhereUniqueWithoutFk_product_idInputSchema),z.lazy(() => OrderItemUpdateWithWhereUniqueWithoutFk_product_idInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrderItemUpdateManyWithWhereWithoutFk_product_idInputSchema),z.lazy(() => OrderItemUpdateManyWithWhereWithoutFk_product_idInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrderItemScalarWhereInputSchema),z.lazy(() => OrderItemScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const OrderItemUncheckedUpdateManyWithoutFk_product_idNestedInputSchema: z.ZodType<Prisma.OrderItemUncheckedUpdateManyWithoutFk_product_idNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrderItemCreateWithoutFk_product_idInputSchema),z.lazy(() => OrderItemCreateWithoutFk_product_idInputSchema).array(),z.lazy(() => OrderItemUncheckedCreateWithoutFk_product_idInputSchema),z.lazy(() => OrderItemUncheckedCreateWithoutFk_product_idInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderItemCreateOrConnectWithoutFk_product_idInputSchema),z.lazy(() => OrderItemCreateOrConnectWithoutFk_product_idInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrderItemUpsertWithWhereUniqueWithoutFk_product_idInputSchema),z.lazy(() => OrderItemUpsertWithWhereUniqueWithoutFk_product_idInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderItemCreateManyFk_product_idInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrderItemUpdateWithWhereUniqueWithoutFk_product_idInputSchema),z.lazy(() => OrderItemUpdateWithWhereUniqueWithoutFk_product_idInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrderItemUpdateManyWithWhereWithoutFk_product_idInputSchema),z.lazy(() => OrderItemUpdateManyWithWhereWithoutFk_product_idInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrderItemScalarWhereInputSchema),z.lazy(() => OrderItemScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const MemberCreateNestedOneWithoutOrdersInputSchema: z.ZodType<Prisma.MemberCreateNestedOneWithoutOrdersInput> = z.object({
  create: z.union([ z.lazy(() => MemberCreateWithoutOrdersInputSchema),z.lazy(() => MemberUncheckedCreateWithoutOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MemberCreateOrConnectWithoutOrdersInputSchema).optional(),
  connect: z.lazy(() => MemberWhereUniqueInputSchema).optional()
}).strict();

export const OrderItemCreateNestedManyWithoutFk_order_idInputSchema: z.ZodType<Prisma.OrderItemCreateNestedManyWithoutFk_order_idInput> = z.object({
  create: z.union([ z.lazy(() => OrderItemCreateWithoutFk_order_idInputSchema),z.lazy(() => OrderItemCreateWithoutFk_order_idInputSchema).array(),z.lazy(() => OrderItemUncheckedCreateWithoutFk_order_idInputSchema),z.lazy(() => OrderItemUncheckedCreateWithoutFk_order_idInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderItemCreateOrConnectWithoutFk_order_idInputSchema),z.lazy(() => OrderItemCreateOrConnectWithoutFk_order_idInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderItemCreateManyFk_order_idInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const OrderItemUncheckedCreateNestedManyWithoutFk_order_idInputSchema: z.ZodType<Prisma.OrderItemUncheckedCreateNestedManyWithoutFk_order_idInput> = z.object({
  create: z.union([ z.lazy(() => OrderItemCreateWithoutFk_order_idInputSchema),z.lazy(() => OrderItemCreateWithoutFk_order_idInputSchema).array(),z.lazy(() => OrderItemUncheckedCreateWithoutFk_order_idInputSchema),z.lazy(() => OrderItemUncheckedCreateWithoutFk_order_idInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderItemCreateOrConnectWithoutFk_order_idInputSchema),z.lazy(() => OrderItemCreateOrConnectWithoutFk_order_idInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderItemCreateManyFk_order_idInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const MemberUpdateOneRequiredWithoutOrdersNestedInputSchema: z.ZodType<Prisma.MemberUpdateOneRequiredWithoutOrdersNestedInput> = z.object({
  create: z.union([ z.lazy(() => MemberCreateWithoutOrdersInputSchema),z.lazy(() => MemberUncheckedCreateWithoutOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MemberCreateOrConnectWithoutOrdersInputSchema).optional(),
  upsert: z.lazy(() => MemberUpsertWithoutOrdersInputSchema).optional(),
  connect: z.lazy(() => MemberWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MemberUpdateToOneWithWhereWithoutOrdersInputSchema),z.lazy(() => MemberUpdateWithoutOrdersInputSchema),z.lazy(() => MemberUncheckedUpdateWithoutOrdersInputSchema) ]).optional(),
}).strict();

export const OrderItemUpdateManyWithoutFk_order_idNestedInputSchema: z.ZodType<Prisma.OrderItemUpdateManyWithoutFk_order_idNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrderItemCreateWithoutFk_order_idInputSchema),z.lazy(() => OrderItemCreateWithoutFk_order_idInputSchema).array(),z.lazy(() => OrderItemUncheckedCreateWithoutFk_order_idInputSchema),z.lazy(() => OrderItemUncheckedCreateWithoutFk_order_idInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderItemCreateOrConnectWithoutFk_order_idInputSchema),z.lazy(() => OrderItemCreateOrConnectWithoutFk_order_idInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrderItemUpsertWithWhereUniqueWithoutFk_order_idInputSchema),z.lazy(() => OrderItemUpsertWithWhereUniqueWithoutFk_order_idInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderItemCreateManyFk_order_idInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrderItemUpdateWithWhereUniqueWithoutFk_order_idInputSchema),z.lazy(() => OrderItemUpdateWithWhereUniqueWithoutFk_order_idInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrderItemUpdateManyWithWhereWithoutFk_order_idInputSchema),z.lazy(() => OrderItemUpdateManyWithWhereWithoutFk_order_idInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrderItemScalarWhereInputSchema),z.lazy(() => OrderItemScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const OrderItemUncheckedUpdateManyWithoutFk_order_idNestedInputSchema: z.ZodType<Prisma.OrderItemUncheckedUpdateManyWithoutFk_order_idNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrderItemCreateWithoutFk_order_idInputSchema),z.lazy(() => OrderItemCreateWithoutFk_order_idInputSchema).array(),z.lazy(() => OrderItemUncheckedCreateWithoutFk_order_idInputSchema),z.lazy(() => OrderItemUncheckedCreateWithoutFk_order_idInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderItemCreateOrConnectWithoutFk_order_idInputSchema),z.lazy(() => OrderItemCreateOrConnectWithoutFk_order_idInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrderItemUpsertWithWhereUniqueWithoutFk_order_idInputSchema),z.lazy(() => OrderItemUpsertWithWhereUniqueWithoutFk_order_idInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderItemCreateManyFk_order_idInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrderItemUpdateWithWhereUniqueWithoutFk_order_idInputSchema),z.lazy(() => OrderItemUpdateWithWhereUniqueWithoutFk_order_idInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrderItemUpdateManyWithWhereWithoutFk_order_idInputSchema),z.lazy(() => OrderItemUpdateManyWithWhereWithoutFk_order_idInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrderItemScalarWhereInputSchema),z.lazy(() => OrderItemScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const OrderCreateNestedOneWithoutOrderItemInputSchema: z.ZodType<Prisma.OrderCreateNestedOneWithoutOrderItemInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutOrderItemInputSchema),z.lazy(() => OrderUncheckedCreateWithoutOrderItemInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrderCreateOrConnectWithoutOrderItemInputSchema).optional(),
  connect: z.lazy(() => OrderWhereUniqueInputSchema).optional()
}).strict();

export const ProductCreateNestedOneWithoutOrderItemInputSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutOrderItemInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutOrderItemInputSchema),z.lazy(() => ProductUncheckedCreateWithoutOrderItemInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutOrderItemInputSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputSchema).optional()
}).strict();

export const OrderUpdateOneRequiredWithoutOrderItemNestedInputSchema: z.ZodType<Prisma.OrderUpdateOneRequiredWithoutOrderItemNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutOrderItemInputSchema),z.lazy(() => OrderUncheckedCreateWithoutOrderItemInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrderCreateOrConnectWithoutOrderItemInputSchema).optional(),
  upsert: z.lazy(() => OrderUpsertWithoutOrderItemInputSchema).optional(),
  connect: z.lazy(() => OrderWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => OrderUpdateToOneWithWhereWithoutOrderItemInputSchema),z.lazy(() => OrderUpdateWithoutOrderItemInputSchema),z.lazy(() => OrderUncheckedUpdateWithoutOrderItemInputSchema) ]).optional(),
}).strict();

export const ProductUpdateOneRequiredWithoutOrderItemNestedInputSchema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutOrderItemNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutOrderItemInputSchema),z.lazy(() => ProductUncheckedCreateWithoutOrderItemInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutOrderItemInputSchema).optional(),
  upsert: z.lazy(() => ProductUpsertWithoutOrderItemInputSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProductUpdateToOneWithWhereWithoutOrderItemInputSchema),z.lazy(() => ProductUpdateWithoutOrderItemInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutOrderItemInputSchema) ]).optional(),
}).strict();

export const NestedUuidFilterSchema: z.ZodType<Prisma.NestedUuidFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidFilterSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedUuidWithAggregatesFilterSchema: z.ZodType<Prisma.NestedUuidWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedFloatWithAggregatesFilterSchema: z.ZodType<Prisma.NestedFloatWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional()
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const OrderCreateWithoutFk_member_idInputSchema: z.ZodType<Prisma.OrderCreateWithoutFk_member_idInput> = z.object({
  order_id: z.string(),
  order_created_date: z.coerce.date(),
  order_updated_date: z.coerce.date(),
  orderItem: z.lazy(() => OrderItemCreateNestedManyWithoutFk_order_idInputSchema).optional()
}).strict();

export const OrderUncheckedCreateWithoutFk_member_idInputSchema: z.ZodType<Prisma.OrderUncheckedCreateWithoutFk_member_idInput> = z.object({
  order_id: z.string(),
  order_created_date: z.coerce.date(),
  order_updated_date: z.coerce.date(),
  orderItem: z.lazy(() => OrderItemUncheckedCreateNestedManyWithoutFk_order_idInputSchema).optional()
}).strict();

export const OrderCreateOrConnectWithoutFk_member_idInputSchema: z.ZodType<Prisma.OrderCreateOrConnectWithoutFk_member_idInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrderCreateWithoutFk_member_idInputSchema),z.lazy(() => OrderUncheckedCreateWithoutFk_member_idInputSchema) ]),
}).strict();

export const OrderCreateManyFk_member_idInputEnvelopeSchema: z.ZodType<Prisma.OrderCreateManyFk_member_idInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => OrderCreateManyFk_member_idInputSchema),z.lazy(() => OrderCreateManyFk_member_idInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const OrderUpsertWithWhereUniqueWithoutFk_member_idInputSchema: z.ZodType<Prisma.OrderUpsertWithWhereUniqueWithoutFk_member_idInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OrderUpdateWithoutFk_member_idInputSchema),z.lazy(() => OrderUncheckedUpdateWithoutFk_member_idInputSchema) ]),
  create: z.union([ z.lazy(() => OrderCreateWithoutFk_member_idInputSchema),z.lazy(() => OrderUncheckedCreateWithoutFk_member_idInputSchema) ]),
}).strict();

export const OrderUpdateWithWhereUniqueWithoutFk_member_idInputSchema: z.ZodType<Prisma.OrderUpdateWithWhereUniqueWithoutFk_member_idInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OrderUpdateWithoutFk_member_idInputSchema),z.lazy(() => OrderUncheckedUpdateWithoutFk_member_idInputSchema) ]),
}).strict();

export const OrderUpdateManyWithWhereWithoutFk_member_idInputSchema: z.ZodType<Prisma.OrderUpdateManyWithWhereWithoutFk_member_idInput> = z.object({
  where: z.lazy(() => OrderScalarWhereInputSchema),
  data: z.union([ z.lazy(() => OrderUpdateManyMutationInputSchema),z.lazy(() => OrderUncheckedUpdateManyWithoutFk_member_idInputSchema) ]),
}).strict();

export const OrderScalarWhereInputSchema: z.ZodType<Prisma.OrderScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OrderScalarWhereInputSchema),z.lazy(() => OrderScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrderScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrderScalarWhereInputSchema),z.lazy(() => OrderScalarWhereInputSchema).array() ]).optional(),
  order_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  member_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  order_created_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  order_updated_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ProductCreateWithoutFk_uom_idInputSchema: z.ZodType<Prisma.ProductCreateWithoutFk_uom_idInput> = z.object({
  product_id: z.string(),
  product_name: z.string(),
  product_unit_price: z.number(),
  product_bonus_points: z.number(),
  product_created_date: z.coerce.date(),
  product_updated_date: z.coerce.date(),
  orderItem: z.lazy(() => OrderItemCreateNestedManyWithoutFk_product_idInputSchema).optional()
}).strict();

export const ProductUncheckedCreateWithoutFk_uom_idInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutFk_uom_idInput> = z.object({
  product_id: z.string(),
  product_name: z.string(),
  product_unit_price: z.number(),
  product_bonus_points: z.number(),
  product_created_date: z.coerce.date(),
  product_updated_date: z.coerce.date(),
  orderItem: z.lazy(() => OrderItemUncheckedCreateNestedManyWithoutFk_product_idInputSchema).optional()
}).strict();

export const ProductCreateOrConnectWithoutFk_uom_idInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutFk_uom_idInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductCreateWithoutFk_uom_idInputSchema),z.lazy(() => ProductUncheckedCreateWithoutFk_uom_idInputSchema) ]),
}).strict();

export const ProductCreateManyFk_uom_idInputEnvelopeSchema: z.ZodType<Prisma.ProductCreateManyFk_uom_idInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ProductCreateManyFk_uom_idInputSchema),z.lazy(() => ProductCreateManyFk_uom_idInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ProductUpsertWithWhereUniqueWithoutFk_uom_idInputSchema: z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutFk_uom_idInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProductUpdateWithoutFk_uom_idInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutFk_uom_idInputSchema) ]),
  create: z.union([ z.lazy(() => ProductCreateWithoutFk_uom_idInputSchema),z.lazy(() => ProductUncheckedCreateWithoutFk_uom_idInputSchema) ]),
}).strict();

export const ProductUpdateWithWhereUniqueWithoutFk_uom_idInputSchema: z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutFk_uom_idInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateWithoutFk_uom_idInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutFk_uom_idInputSchema) ]),
}).strict();

export const ProductUpdateManyWithWhereWithoutFk_uom_idInputSchema: z.ZodType<Prisma.ProductUpdateManyWithWhereWithoutFk_uom_idInput> = z.object({
  where: z.lazy(() => ProductScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateManyMutationInputSchema),z.lazy(() => ProductUncheckedUpdateManyWithoutFk_uom_idInputSchema) ]),
}).strict();

export const ProductScalarWhereInputSchema: z.ZodType<Prisma.ProductScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
  product_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  product_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  uom_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  product_unit_price: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  product_bonus_points: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  product_created_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  product_updated_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const UomCreateWithoutProductsInputSchema: z.ZodType<Prisma.UomCreateWithoutProductsInput> = z.object({
  uom_id: z.string(),
  uom_name: z.string(),
  uom_created_date: z.coerce.date(),
  uom_updated_date: z.coerce.date()
}).strict();

export const UomUncheckedCreateWithoutProductsInputSchema: z.ZodType<Prisma.UomUncheckedCreateWithoutProductsInput> = z.object({
  uom_id: z.string(),
  uom_name: z.string(),
  uom_created_date: z.coerce.date(),
  uom_updated_date: z.coerce.date()
}).strict();

export const UomCreateOrConnectWithoutProductsInputSchema: z.ZodType<Prisma.UomCreateOrConnectWithoutProductsInput> = z.object({
  where: z.lazy(() => UomWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UomCreateWithoutProductsInputSchema),z.lazy(() => UomUncheckedCreateWithoutProductsInputSchema) ]),
}).strict();

export const OrderItemCreateWithoutFk_product_idInputSchema: z.ZodType<Prisma.OrderItemCreateWithoutFk_product_idInput> = z.object({
  order_item_id: z.string(),
  order_item_quantity: z.number(),
  order_item_created_date: z.coerce.date(),
  order_item_updated_date: z.coerce.date(),
  fk_order_id: z.lazy(() => OrderCreateNestedOneWithoutOrderItemInputSchema)
}).strict();

export const OrderItemUncheckedCreateWithoutFk_product_idInputSchema: z.ZodType<Prisma.OrderItemUncheckedCreateWithoutFk_product_idInput> = z.object({
  order_item_id: z.string(),
  order_id: z.string(),
  order_item_quantity: z.number(),
  order_item_created_date: z.coerce.date(),
  order_item_updated_date: z.coerce.date()
}).strict();

export const OrderItemCreateOrConnectWithoutFk_product_idInputSchema: z.ZodType<Prisma.OrderItemCreateOrConnectWithoutFk_product_idInput> = z.object({
  where: z.lazy(() => OrderItemWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrderItemCreateWithoutFk_product_idInputSchema),z.lazy(() => OrderItemUncheckedCreateWithoutFk_product_idInputSchema) ]),
}).strict();

export const OrderItemCreateManyFk_product_idInputEnvelopeSchema: z.ZodType<Prisma.OrderItemCreateManyFk_product_idInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => OrderItemCreateManyFk_product_idInputSchema),z.lazy(() => OrderItemCreateManyFk_product_idInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const UomUpsertWithoutProductsInputSchema: z.ZodType<Prisma.UomUpsertWithoutProductsInput> = z.object({
  update: z.union([ z.lazy(() => UomUpdateWithoutProductsInputSchema),z.lazy(() => UomUncheckedUpdateWithoutProductsInputSchema) ]),
  create: z.union([ z.lazy(() => UomCreateWithoutProductsInputSchema),z.lazy(() => UomUncheckedCreateWithoutProductsInputSchema) ]),
  where: z.lazy(() => UomWhereInputSchema).optional()
}).strict();

export const UomUpdateToOneWithWhereWithoutProductsInputSchema: z.ZodType<Prisma.UomUpdateToOneWithWhereWithoutProductsInput> = z.object({
  where: z.lazy(() => UomWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UomUpdateWithoutProductsInputSchema),z.lazy(() => UomUncheckedUpdateWithoutProductsInputSchema) ]),
}).strict();

export const UomUpdateWithoutProductsInputSchema: z.ZodType<Prisma.UomUpdateWithoutProductsInput> = z.object({
  uom_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  uom_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  uom_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  uom_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UomUncheckedUpdateWithoutProductsInputSchema: z.ZodType<Prisma.UomUncheckedUpdateWithoutProductsInput> = z.object({
  uom_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  uom_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  uom_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  uom_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderItemUpsertWithWhereUniqueWithoutFk_product_idInputSchema: z.ZodType<Prisma.OrderItemUpsertWithWhereUniqueWithoutFk_product_idInput> = z.object({
  where: z.lazy(() => OrderItemWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OrderItemUpdateWithoutFk_product_idInputSchema),z.lazy(() => OrderItemUncheckedUpdateWithoutFk_product_idInputSchema) ]),
  create: z.union([ z.lazy(() => OrderItemCreateWithoutFk_product_idInputSchema),z.lazy(() => OrderItemUncheckedCreateWithoutFk_product_idInputSchema) ]),
}).strict();

export const OrderItemUpdateWithWhereUniqueWithoutFk_product_idInputSchema: z.ZodType<Prisma.OrderItemUpdateWithWhereUniqueWithoutFk_product_idInput> = z.object({
  where: z.lazy(() => OrderItemWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OrderItemUpdateWithoutFk_product_idInputSchema),z.lazy(() => OrderItemUncheckedUpdateWithoutFk_product_idInputSchema) ]),
}).strict();

export const OrderItemUpdateManyWithWhereWithoutFk_product_idInputSchema: z.ZodType<Prisma.OrderItemUpdateManyWithWhereWithoutFk_product_idInput> = z.object({
  where: z.lazy(() => OrderItemScalarWhereInputSchema),
  data: z.union([ z.lazy(() => OrderItemUpdateManyMutationInputSchema),z.lazy(() => OrderItemUncheckedUpdateManyWithoutFk_product_idInputSchema) ]),
}).strict();

export const OrderItemScalarWhereInputSchema: z.ZodType<Prisma.OrderItemScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OrderItemScalarWhereInputSchema),z.lazy(() => OrderItemScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrderItemScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrderItemScalarWhereInputSchema),z.lazy(() => OrderItemScalarWhereInputSchema).array() ]).optional(),
  order_item_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  order_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  product_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  order_item_quantity: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  order_item_created_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  order_item_updated_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const MemberCreateWithoutOrdersInputSchema: z.ZodType<Prisma.MemberCreateWithoutOrdersInput> = z.object({
  member_id: z.string(),
  member_name: z.string(),
  member_password: z.string(),
  member_bonus_points: z.number(),
  member_created_date: z.coerce.date(),
  member_updated_date: z.coerce.date()
}).strict();

export const MemberUncheckedCreateWithoutOrdersInputSchema: z.ZodType<Prisma.MemberUncheckedCreateWithoutOrdersInput> = z.object({
  member_id: z.string(),
  member_name: z.string(),
  member_password: z.string(),
  member_bonus_points: z.number(),
  member_created_date: z.coerce.date(),
  member_updated_date: z.coerce.date()
}).strict();

export const MemberCreateOrConnectWithoutOrdersInputSchema: z.ZodType<Prisma.MemberCreateOrConnectWithoutOrdersInput> = z.object({
  where: z.lazy(() => MemberWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MemberCreateWithoutOrdersInputSchema),z.lazy(() => MemberUncheckedCreateWithoutOrdersInputSchema) ]),
}).strict();

export const OrderItemCreateWithoutFk_order_idInputSchema: z.ZodType<Prisma.OrderItemCreateWithoutFk_order_idInput> = z.object({
  order_item_id: z.string(),
  order_item_quantity: z.number(),
  order_item_created_date: z.coerce.date(),
  order_item_updated_date: z.coerce.date(),
  fk_product_id: z.lazy(() => ProductCreateNestedOneWithoutOrderItemInputSchema)
}).strict();

export const OrderItemUncheckedCreateWithoutFk_order_idInputSchema: z.ZodType<Prisma.OrderItemUncheckedCreateWithoutFk_order_idInput> = z.object({
  order_item_id: z.string(),
  product_id: z.string(),
  order_item_quantity: z.number(),
  order_item_created_date: z.coerce.date(),
  order_item_updated_date: z.coerce.date()
}).strict();

export const OrderItemCreateOrConnectWithoutFk_order_idInputSchema: z.ZodType<Prisma.OrderItemCreateOrConnectWithoutFk_order_idInput> = z.object({
  where: z.lazy(() => OrderItemWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrderItemCreateWithoutFk_order_idInputSchema),z.lazy(() => OrderItemUncheckedCreateWithoutFk_order_idInputSchema) ]),
}).strict();

export const OrderItemCreateManyFk_order_idInputEnvelopeSchema: z.ZodType<Prisma.OrderItemCreateManyFk_order_idInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => OrderItemCreateManyFk_order_idInputSchema),z.lazy(() => OrderItemCreateManyFk_order_idInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const MemberUpsertWithoutOrdersInputSchema: z.ZodType<Prisma.MemberUpsertWithoutOrdersInput> = z.object({
  update: z.union([ z.lazy(() => MemberUpdateWithoutOrdersInputSchema),z.lazy(() => MemberUncheckedUpdateWithoutOrdersInputSchema) ]),
  create: z.union([ z.lazy(() => MemberCreateWithoutOrdersInputSchema),z.lazy(() => MemberUncheckedCreateWithoutOrdersInputSchema) ]),
  where: z.lazy(() => MemberWhereInputSchema).optional()
}).strict();

export const MemberUpdateToOneWithWhereWithoutOrdersInputSchema: z.ZodType<Prisma.MemberUpdateToOneWithWhereWithoutOrdersInput> = z.object({
  where: z.lazy(() => MemberWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MemberUpdateWithoutOrdersInputSchema),z.lazy(() => MemberUncheckedUpdateWithoutOrdersInputSchema) ]),
}).strict();

export const MemberUpdateWithoutOrdersInputSchema: z.ZodType<Prisma.MemberUpdateWithoutOrdersInput> = z.object({
  member_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  member_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  member_password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  member_bonus_points: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  member_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  member_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MemberUncheckedUpdateWithoutOrdersInputSchema: z.ZodType<Prisma.MemberUncheckedUpdateWithoutOrdersInput> = z.object({
  member_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  member_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  member_password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  member_bonus_points: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  member_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  member_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderItemUpsertWithWhereUniqueWithoutFk_order_idInputSchema: z.ZodType<Prisma.OrderItemUpsertWithWhereUniqueWithoutFk_order_idInput> = z.object({
  where: z.lazy(() => OrderItemWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OrderItemUpdateWithoutFk_order_idInputSchema),z.lazy(() => OrderItemUncheckedUpdateWithoutFk_order_idInputSchema) ]),
  create: z.union([ z.lazy(() => OrderItemCreateWithoutFk_order_idInputSchema),z.lazy(() => OrderItemUncheckedCreateWithoutFk_order_idInputSchema) ]),
}).strict();

export const OrderItemUpdateWithWhereUniqueWithoutFk_order_idInputSchema: z.ZodType<Prisma.OrderItemUpdateWithWhereUniqueWithoutFk_order_idInput> = z.object({
  where: z.lazy(() => OrderItemWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OrderItemUpdateWithoutFk_order_idInputSchema),z.lazy(() => OrderItemUncheckedUpdateWithoutFk_order_idInputSchema) ]),
}).strict();

export const OrderItemUpdateManyWithWhereWithoutFk_order_idInputSchema: z.ZodType<Prisma.OrderItemUpdateManyWithWhereWithoutFk_order_idInput> = z.object({
  where: z.lazy(() => OrderItemScalarWhereInputSchema),
  data: z.union([ z.lazy(() => OrderItemUpdateManyMutationInputSchema),z.lazy(() => OrderItemUncheckedUpdateManyWithoutFk_order_idInputSchema) ]),
}).strict();

export const OrderCreateWithoutOrderItemInputSchema: z.ZodType<Prisma.OrderCreateWithoutOrderItemInput> = z.object({
  order_id: z.string(),
  order_created_date: z.coerce.date(),
  order_updated_date: z.coerce.date(),
  fk_member_id: z.lazy(() => MemberCreateNestedOneWithoutOrdersInputSchema)
}).strict();

export const OrderUncheckedCreateWithoutOrderItemInputSchema: z.ZodType<Prisma.OrderUncheckedCreateWithoutOrderItemInput> = z.object({
  order_id: z.string(),
  member_id: z.string(),
  order_created_date: z.coerce.date(),
  order_updated_date: z.coerce.date()
}).strict();

export const OrderCreateOrConnectWithoutOrderItemInputSchema: z.ZodType<Prisma.OrderCreateOrConnectWithoutOrderItemInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrderCreateWithoutOrderItemInputSchema),z.lazy(() => OrderUncheckedCreateWithoutOrderItemInputSchema) ]),
}).strict();

export const ProductCreateWithoutOrderItemInputSchema: z.ZodType<Prisma.ProductCreateWithoutOrderItemInput> = z.object({
  product_id: z.string(),
  product_name: z.string(),
  product_unit_price: z.number(),
  product_bonus_points: z.number(),
  product_created_date: z.coerce.date(),
  product_updated_date: z.coerce.date(),
  fk_uom_id: z.lazy(() => UomCreateNestedOneWithoutProductsInputSchema)
}).strict();

export const ProductUncheckedCreateWithoutOrderItemInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutOrderItemInput> = z.object({
  product_id: z.string(),
  product_name: z.string(),
  uom_id: z.string(),
  product_unit_price: z.number(),
  product_bonus_points: z.number(),
  product_created_date: z.coerce.date(),
  product_updated_date: z.coerce.date()
}).strict();

export const ProductCreateOrConnectWithoutOrderItemInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutOrderItemInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductCreateWithoutOrderItemInputSchema),z.lazy(() => ProductUncheckedCreateWithoutOrderItemInputSchema) ]),
}).strict();

export const OrderUpsertWithoutOrderItemInputSchema: z.ZodType<Prisma.OrderUpsertWithoutOrderItemInput> = z.object({
  update: z.union([ z.lazy(() => OrderUpdateWithoutOrderItemInputSchema),z.lazy(() => OrderUncheckedUpdateWithoutOrderItemInputSchema) ]),
  create: z.union([ z.lazy(() => OrderCreateWithoutOrderItemInputSchema),z.lazy(() => OrderUncheckedCreateWithoutOrderItemInputSchema) ]),
  where: z.lazy(() => OrderWhereInputSchema).optional()
}).strict();

export const OrderUpdateToOneWithWhereWithoutOrderItemInputSchema: z.ZodType<Prisma.OrderUpdateToOneWithWhereWithoutOrderItemInput> = z.object({
  where: z.lazy(() => OrderWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => OrderUpdateWithoutOrderItemInputSchema),z.lazy(() => OrderUncheckedUpdateWithoutOrderItemInputSchema) ]),
}).strict();

export const OrderUpdateWithoutOrderItemInputSchema: z.ZodType<Prisma.OrderUpdateWithoutOrderItemInput> = z.object({
  order_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  order_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  fk_member_id: z.lazy(() => MemberUpdateOneRequiredWithoutOrdersNestedInputSchema).optional()
}).strict();

export const OrderUncheckedUpdateWithoutOrderItemInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateWithoutOrderItemInput> = z.object({
  order_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  member_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  order_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductUpsertWithoutOrderItemInputSchema: z.ZodType<Prisma.ProductUpsertWithoutOrderItemInput> = z.object({
  update: z.union([ z.lazy(() => ProductUpdateWithoutOrderItemInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutOrderItemInputSchema) ]),
  create: z.union([ z.lazy(() => ProductCreateWithoutOrderItemInputSchema),z.lazy(() => ProductUncheckedCreateWithoutOrderItemInputSchema) ]),
  where: z.lazy(() => ProductWhereInputSchema).optional()
}).strict();

export const ProductUpdateToOneWithWhereWithoutOrderItemInputSchema: z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutOrderItemInput> = z.object({
  where: z.lazy(() => ProductWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProductUpdateWithoutOrderItemInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutOrderItemInputSchema) ]),
}).strict();

export const ProductUpdateWithoutOrderItemInputSchema: z.ZodType<Prisma.ProductUpdateWithoutOrderItemInput> = z.object({
  product_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product_unit_price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  product_bonus_points: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  product_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  product_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  fk_uom_id: z.lazy(() => UomUpdateOneRequiredWithoutProductsNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateWithoutOrderItemInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutOrderItemInput> = z.object({
  product_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  uom_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product_unit_price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  product_bonus_points: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  product_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  product_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderCreateManyFk_member_idInputSchema: z.ZodType<Prisma.OrderCreateManyFk_member_idInput> = z.object({
  order_id: z.string(),
  order_created_date: z.coerce.date(),
  order_updated_date: z.coerce.date()
}).strict();

export const OrderUpdateWithoutFk_member_idInputSchema: z.ZodType<Prisma.OrderUpdateWithoutFk_member_idInput> = z.object({
  order_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  order_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  orderItem: z.lazy(() => OrderItemUpdateManyWithoutFk_order_idNestedInputSchema).optional()
}).strict();

export const OrderUncheckedUpdateWithoutFk_member_idInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateWithoutFk_member_idInput> = z.object({
  order_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  order_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  orderItem: z.lazy(() => OrderItemUncheckedUpdateManyWithoutFk_order_idNestedInputSchema).optional()
}).strict();

export const OrderUncheckedUpdateManyWithoutFk_member_idInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateManyWithoutFk_member_idInput> = z.object({
  order_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  order_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductCreateManyFk_uom_idInputSchema: z.ZodType<Prisma.ProductCreateManyFk_uom_idInput> = z.object({
  product_id: z.string(),
  product_name: z.string(),
  product_unit_price: z.number(),
  product_bonus_points: z.number(),
  product_created_date: z.coerce.date(),
  product_updated_date: z.coerce.date()
}).strict();

export const ProductUpdateWithoutFk_uom_idInputSchema: z.ZodType<Prisma.ProductUpdateWithoutFk_uom_idInput> = z.object({
  product_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product_unit_price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  product_bonus_points: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  product_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  product_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  orderItem: z.lazy(() => OrderItemUpdateManyWithoutFk_product_idNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateWithoutFk_uom_idInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutFk_uom_idInput> = z.object({
  product_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product_unit_price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  product_bonus_points: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  product_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  product_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  orderItem: z.lazy(() => OrderItemUncheckedUpdateManyWithoutFk_product_idNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateManyWithoutFk_uom_idInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutFk_uom_idInput> = z.object({
  product_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product_unit_price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  product_bonus_points: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  product_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  product_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderItemCreateManyFk_product_idInputSchema: z.ZodType<Prisma.OrderItemCreateManyFk_product_idInput> = z.object({
  order_item_id: z.string(),
  order_id: z.string(),
  order_item_quantity: z.number(),
  order_item_created_date: z.coerce.date(),
  order_item_updated_date: z.coerce.date()
}).strict();

export const OrderItemUpdateWithoutFk_product_idInputSchema: z.ZodType<Prisma.OrderItemUpdateWithoutFk_product_idInput> = z.object({
  order_item_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_item_quantity: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  order_item_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  order_item_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  fk_order_id: z.lazy(() => OrderUpdateOneRequiredWithoutOrderItemNestedInputSchema).optional()
}).strict();

export const OrderItemUncheckedUpdateWithoutFk_product_idInputSchema: z.ZodType<Prisma.OrderItemUncheckedUpdateWithoutFk_product_idInput> = z.object({
  order_item_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_item_quantity: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  order_item_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  order_item_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderItemUncheckedUpdateManyWithoutFk_product_idInputSchema: z.ZodType<Prisma.OrderItemUncheckedUpdateManyWithoutFk_product_idInput> = z.object({
  order_item_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_item_quantity: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  order_item_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  order_item_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderItemCreateManyFk_order_idInputSchema: z.ZodType<Prisma.OrderItemCreateManyFk_order_idInput> = z.object({
  order_item_id: z.string(),
  product_id: z.string(),
  order_item_quantity: z.number(),
  order_item_created_date: z.coerce.date(),
  order_item_updated_date: z.coerce.date()
}).strict();

export const OrderItemUpdateWithoutFk_order_idInputSchema: z.ZodType<Prisma.OrderItemUpdateWithoutFk_order_idInput> = z.object({
  order_item_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_item_quantity: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  order_item_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  order_item_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  fk_product_id: z.lazy(() => ProductUpdateOneRequiredWithoutOrderItemNestedInputSchema).optional()
}).strict();

export const OrderItemUncheckedUpdateWithoutFk_order_idInputSchema: z.ZodType<Prisma.OrderItemUncheckedUpdateWithoutFk_order_idInput> = z.object({
  order_item_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_item_quantity: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  order_item_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  order_item_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderItemUncheckedUpdateManyWithoutFk_order_idInputSchema: z.ZodType<Prisma.OrderItemUncheckedUpdateManyWithoutFk_order_idInput> = z.object({
  order_item_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_item_quantity: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  order_item_created_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  order_item_updated_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const MemberFindFirstArgsSchema: z.ZodType<Prisma.MemberFindFirstArgs> = z.object({
  select: MemberSelectSchema.optional(),
  include: MemberIncludeSchema.optional(),
  where: MemberWhereInputSchema.optional(),
  orderBy: z.union([ MemberOrderByWithRelationInputSchema.array(),MemberOrderByWithRelationInputSchema ]).optional(),
  cursor: MemberWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MemberScalarFieldEnumSchema,MemberScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const MemberFindFirstOrThrowArgsSchema: z.ZodType<Prisma.MemberFindFirstOrThrowArgs> = z.object({
  select: MemberSelectSchema.optional(),
  include: MemberIncludeSchema.optional(),
  where: MemberWhereInputSchema.optional(),
  orderBy: z.union([ MemberOrderByWithRelationInputSchema.array(),MemberOrderByWithRelationInputSchema ]).optional(),
  cursor: MemberWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MemberScalarFieldEnumSchema,MemberScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const MemberFindManyArgsSchema: z.ZodType<Prisma.MemberFindManyArgs> = z.object({
  select: MemberSelectSchema.optional(),
  include: MemberIncludeSchema.optional(),
  where: MemberWhereInputSchema.optional(),
  orderBy: z.union([ MemberOrderByWithRelationInputSchema.array(),MemberOrderByWithRelationInputSchema ]).optional(),
  cursor: MemberWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MemberScalarFieldEnumSchema,MemberScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const MemberAggregateArgsSchema: z.ZodType<Prisma.MemberAggregateArgs> = z.object({
  where: MemberWhereInputSchema.optional(),
  orderBy: z.union([ MemberOrderByWithRelationInputSchema.array(),MemberOrderByWithRelationInputSchema ]).optional(),
  cursor: MemberWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const MemberGroupByArgsSchema: z.ZodType<Prisma.MemberGroupByArgs> = z.object({
  where: MemberWhereInputSchema.optional(),
  orderBy: z.union([ MemberOrderByWithAggregationInputSchema.array(),MemberOrderByWithAggregationInputSchema ]).optional(),
  by: MemberScalarFieldEnumSchema.array(),
  having: MemberScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const MemberFindUniqueArgsSchema: z.ZodType<Prisma.MemberFindUniqueArgs> = z.object({
  select: MemberSelectSchema.optional(),
  include: MemberIncludeSchema.optional(),
  where: MemberWhereUniqueInputSchema,
}).strict()

export const MemberFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.MemberFindUniqueOrThrowArgs> = z.object({
  select: MemberSelectSchema.optional(),
  include: MemberIncludeSchema.optional(),
  where: MemberWhereUniqueInputSchema,
}).strict()

export const MemberLevelFindFirstArgsSchema: z.ZodType<Prisma.MemberLevelFindFirstArgs> = z.object({
  select: MemberLevelSelectSchema.optional(),
  where: MemberLevelWhereInputSchema.optional(),
  orderBy: z.union([ MemberLevelOrderByWithRelationInputSchema.array(),MemberLevelOrderByWithRelationInputSchema ]).optional(),
  cursor: MemberLevelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MemberLevelScalarFieldEnumSchema,MemberLevelScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const MemberLevelFindFirstOrThrowArgsSchema: z.ZodType<Prisma.MemberLevelFindFirstOrThrowArgs> = z.object({
  select: MemberLevelSelectSchema.optional(),
  where: MemberLevelWhereInputSchema.optional(),
  orderBy: z.union([ MemberLevelOrderByWithRelationInputSchema.array(),MemberLevelOrderByWithRelationInputSchema ]).optional(),
  cursor: MemberLevelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MemberLevelScalarFieldEnumSchema,MemberLevelScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const MemberLevelFindManyArgsSchema: z.ZodType<Prisma.MemberLevelFindManyArgs> = z.object({
  select: MemberLevelSelectSchema.optional(),
  where: MemberLevelWhereInputSchema.optional(),
  orderBy: z.union([ MemberLevelOrderByWithRelationInputSchema.array(),MemberLevelOrderByWithRelationInputSchema ]).optional(),
  cursor: MemberLevelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MemberLevelScalarFieldEnumSchema,MemberLevelScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const MemberLevelAggregateArgsSchema: z.ZodType<Prisma.MemberLevelAggregateArgs> = z.object({
  where: MemberLevelWhereInputSchema.optional(),
  orderBy: z.union([ MemberLevelOrderByWithRelationInputSchema.array(),MemberLevelOrderByWithRelationInputSchema ]).optional(),
  cursor: MemberLevelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const MemberLevelGroupByArgsSchema: z.ZodType<Prisma.MemberLevelGroupByArgs> = z.object({
  where: MemberLevelWhereInputSchema.optional(),
  orderBy: z.union([ MemberLevelOrderByWithAggregationInputSchema.array(),MemberLevelOrderByWithAggregationInputSchema ]).optional(),
  by: MemberLevelScalarFieldEnumSchema.array(),
  having: MemberLevelScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const MemberLevelFindUniqueArgsSchema: z.ZodType<Prisma.MemberLevelFindUniqueArgs> = z.object({
  select: MemberLevelSelectSchema.optional(),
  where: MemberLevelWhereUniqueInputSchema,
}).strict()

export const MemberLevelFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.MemberLevelFindUniqueOrThrowArgs> = z.object({
  select: MemberLevelSelectSchema.optional(),
  where: MemberLevelWhereUniqueInputSchema,
}).strict()

export const UomFindFirstArgsSchema: z.ZodType<Prisma.UomFindFirstArgs> = z.object({
  select: UomSelectSchema.optional(),
  include: UomIncludeSchema.optional(),
  where: UomWhereInputSchema.optional(),
  orderBy: z.union([ UomOrderByWithRelationInputSchema.array(),UomOrderByWithRelationInputSchema ]).optional(),
  cursor: UomWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UomScalarFieldEnumSchema,UomScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const UomFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UomFindFirstOrThrowArgs> = z.object({
  select: UomSelectSchema.optional(),
  include: UomIncludeSchema.optional(),
  where: UomWhereInputSchema.optional(),
  orderBy: z.union([ UomOrderByWithRelationInputSchema.array(),UomOrderByWithRelationInputSchema ]).optional(),
  cursor: UomWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UomScalarFieldEnumSchema,UomScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const UomFindManyArgsSchema: z.ZodType<Prisma.UomFindManyArgs> = z.object({
  select: UomSelectSchema.optional(),
  include: UomIncludeSchema.optional(),
  where: UomWhereInputSchema.optional(),
  orderBy: z.union([ UomOrderByWithRelationInputSchema.array(),UomOrderByWithRelationInputSchema ]).optional(),
  cursor: UomWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UomScalarFieldEnumSchema,UomScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const UomAggregateArgsSchema: z.ZodType<Prisma.UomAggregateArgs> = z.object({
  where: UomWhereInputSchema.optional(),
  orderBy: z.union([ UomOrderByWithRelationInputSchema.array(),UomOrderByWithRelationInputSchema ]).optional(),
  cursor: UomWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const UomGroupByArgsSchema: z.ZodType<Prisma.UomGroupByArgs> = z.object({
  where: UomWhereInputSchema.optional(),
  orderBy: z.union([ UomOrderByWithAggregationInputSchema.array(),UomOrderByWithAggregationInputSchema ]).optional(),
  by: UomScalarFieldEnumSchema.array(),
  having: UomScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const UomFindUniqueArgsSchema: z.ZodType<Prisma.UomFindUniqueArgs> = z.object({
  select: UomSelectSchema.optional(),
  include: UomIncludeSchema.optional(),
  where: UomWhereUniqueInputSchema,
}).strict()

export const UomFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UomFindUniqueOrThrowArgs> = z.object({
  select: UomSelectSchema.optional(),
  include: UomIncludeSchema.optional(),
  where: UomWhereUniqueInputSchema,
}).strict()

export const ProductFindFirstArgsSchema: z.ZodType<Prisma.ProductFindFirstArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProductScalarFieldEnumSchema,ProductScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const ProductFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProductFindFirstOrThrowArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProductScalarFieldEnumSchema,ProductScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const ProductFindManyArgsSchema: z.ZodType<Prisma.ProductFindManyArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProductScalarFieldEnumSchema,ProductScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const ProductAggregateArgsSchema: z.ZodType<Prisma.ProductAggregateArgs> = z.object({
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const ProductGroupByArgsSchema: z.ZodType<Prisma.ProductGroupByArgs> = z.object({
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithAggregationInputSchema.array(),ProductOrderByWithAggregationInputSchema ]).optional(),
  by: ProductScalarFieldEnumSchema.array(),
  having: ProductScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const ProductFindUniqueArgsSchema: z.ZodType<Prisma.ProductFindUniqueArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereUniqueInputSchema,
}).strict()

export const ProductFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProductFindUniqueOrThrowArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereUniqueInputSchema,
}).strict()

export const OrderFindFirstArgsSchema: z.ZodType<Prisma.OrderFindFirstArgs> = z.object({
  select: OrderSelectSchema.optional(),
  include: OrderIncludeSchema.optional(),
  where: OrderWhereInputSchema.optional(),
  orderBy: z.union([ OrderOrderByWithRelationInputSchema.array(),OrderOrderByWithRelationInputSchema ]).optional(),
  cursor: OrderWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OrderScalarFieldEnumSchema,OrderScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const OrderFindFirstOrThrowArgsSchema: z.ZodType<Prisma.OrderFindFirstOrThrowArgs> = z.object({
  select: OrderSelectSchema.optional(),
  include: OrderIncludeSchema.optional(),
  where: OrderWhereInputSchema.optional(),
  orderBy: z.union([ OrderOrderByWithRelationInputSchema.array(),OrderOrderByWithRelationInputSchema ]).optional(),
  cursor: OrderWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OrderScalarFieldEnumSchema,OrderScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const OrderFindManyArgsSchema: z.ZodType<Prisma.OrderFindManyArgs> = z.object({
  select: OrderSelectSchema.optional(),
  include: OrderIncludeSchema.optional(),
  where: OrderWhereInputSchema.optional(),
  orderBy: z.union([ OrderOrderByWithRelationInputSchema.array(),OrderOrderByWithRelationInputSchema ]).optional(),
  cursor: OrderWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OrderScalarFieldEnumSchema,OrderScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const OrderAggregateArgsSchema: z.ZodType<Prisma.OrderAggregateArgs> = z.object({
  where: OrderWhereInputSchema.optional(),
  orderBy: z.union([ OrderOrderByWithRelationInputSchema.array(),OrderOrderByWithRelationInputSchema ]).optional(),
  cursor: OrderWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const OrderGroupByArgsSchema: z.ZodType<Prisma.OrderGroupByArgs> = z.object({
  where: OrderWhereInputSchema.optional(),
  orderBy: z.union([ OrderOrderByWithAggregationInputSchema.array(),OrderOrderByWithAggregationInputSchema ]).optional(),
  by: OrderScalarFieldEnumSchema.array(),
  having: OrderScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const OrderFindUniqueArgsSchema: z.ZodType<Prisma.OrderFindUniqueArgs> = z.object({
  select: OrderSelectSchema.optional(),
  include: OrderIncludeSchema.optional(),
  where: OrderWhereUniqueInputSchema,
}).strict()

export const OrderFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.OrderFindUniqueOrThrowArgs> = z.object({
  select: OrderSelectSchema.optional(),
  include: OrderIncludeSchema.optional(),
  where: OrderWhereUniqueInputSchema,
}).strict()

export const OrderItemFindFirstArgsSchema: z.ZodType<Prisma.OrderItemFindFirstArgs> = z.object({
  select: OrderItemSelectSchema.optional(),
  include: OrderItemIncludeSchema.optional(),
  where: OrderItemWhereInputSchema.optional(),
  orderBy: z.union([ OrderItemOrderByWithRelationInputSchema.array(),OrderItemOrderByWithRelationInputSchema ]).optional(),
  cursor: OrderItemWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OrderItemScalarFieldEnumSchema,OrderItemScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const OrderItemFindFirstOrThrowArgsSchema: z.ZodType<Prisma.OrderItemFindFirstOrThrowArgs> = z.object({
  select: OrderItemSelectSchema.optional(),
  include: OrderItemIncludeSchema.optional(),
  where: OrderItemWhereInputSchema.optional(),
  orderBy: z.union([ OrderItemOrderByWithRelationInputSchema.array(),OrderItemOrderByWithRelationInputSchema ]).optional(),
  cursor: OrderItemWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OrderItemScalarFieldEnumSchema,OrderItemScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const OrderItemFindManyArgsSchema: z.ZodType<Prisma.OrderItemFindManyArgs> = z.object({
  select: OrderItemSelectSchema.optional(),
  include: OrderItemIncludeSchema.optional(),
  where: OrderItemWhereInputSchema.optional(),
  orderBy: z.union([ OrderItemOrderByWithRelationInputSchema.array(),OrderItemOrderByWithRelationInputSchema ]).optional(),
  cursor: OrderItemWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OrderItemScalarFieldEnumSchema,OrderItemScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const OrderItemAggregateArgsSchema: z.ZodType<Prisma.OrderItemAggregateArgs> = z.object({
  where: OrderItemWhereInputSchema.optional(),
  orderBy: z.union([ OrderItemOrderByWithRelationInputSchema.array(),OrderItemOrderByWithRelationInputSchema ]).optional(),
  cursor: OrderItemWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const OrderItemGroupByArgsSchema: z.ZodType<Prisma.OrderItemGroupByArgs> = z.object({
  where: OrderItemWhereInputSchema.optional(),
  orderBy: z.union([ OrderItemOrderByWithAggregationInputSchema.array(),OrderItemOrderByWithAggregationInputSchema ]).optional(),
  by: OrderItemScalarFieldEnumSchema.array(),
  having: OrderItemScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const OrderItemFindUniqueArgsSchema: z.ZodType<Prisma.OrderItemFindUniqueArgs> = z.object({
  select: OrderItemSelectSchema.optional(),
  include: OrderItemIncludeSchema.optional(),
  where: OrderItemWhereUniqueInputSchema,
}).strict()

export const OrderItemFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.OrderItemFindUniqueOrThrowArgs> = z.object({
  select: OrderItemSelectSchema.optional(),
  include: OrderItemIncludeSchema.optional(),
  where: OrderItemWhereUniqueInputSchema,
}).strict()

export const MemberCreateArgsSchema: z.ZodType<Prisma.MemberCreateArgs> = z.object({
  select: MemberSelectSchema.optional(),
  include: MemberIncludeSchema.optional(),
  data: z.union([ MemberCreateInputSchema,MemberUncheckedCreateInputSchema ]),
}).strict()

export const MemberUpsertArgsSchema: z.ZodType<Prisma.MemberUpsertArgs> = z.object({
  select: MemberSelectSchema.optional(),
  include: MemberIncludeSchema.optional(),
  where: MemberWhereUniqueInputSchema,
  create: z.union([ MemberCreateInputSchema,MemberUncheckedCreateInputSchema ]),
  update: z.union([ MemberUpdateInputSchema,MemberUncheckedUpdateInputSchema ]),
}).strict()

export const MemberCreateManyArgsSchema: z.ZodType<Prisma.MemberCreateManyArgs> = z.object({
  data: z.union([ MemberCreateManyInputSchema,MemberCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const MemberDeleteArgsSchema: z.ZodType<Prisma.MemberDeleteArgs> = z.object({
  select: MemberSelectSchema.optional(),
  include: MemberIncludeSchema.optional(),
  where: MemberWhereUniqueInputSchema,
}).strict()

export const MemberUpdateArgsSchema: z.ZodType<Prisma.MemberUpdateArgs> = z.object({
  select: MemberSelectSchema.optional(),
  include: MemberIncludeSchema.optional(),
  data: z.union([ MemberUpdateInputSchema,MemberUncheckedUpdateInputSchema ]),
  where: MemberWhereUniqueInputSchema,
}).strict()

export const MemberUpdateManyArgsSchema: z.ZodType<Prisma.MemberUpdateManyArgs> = z.object({
  data: z.union([ MemberUpdateManyMutationInputSchema,MemberUncheckedUpdateManyInputSchema ]),
  where: MemberWhereInputSchema.optional(),
}).strict()

export const MemberDeleteManyArgsSchema: z.ZodType<Prisma.MemberDeleteManyArgs> = z.object({
  where: MemberWhereInputSchema.optional(),
}).strict()

export const MemberLevelCreateArgsSchema: z.ZodType<Prisma.MemberLevelCreateArgs> = z.object({
  select: MemberLevelSelectSchema.optional(),
  data: z.union([ MemberLevelCreateInputSchema,MemberLevelUncheckedCreateInputSchema ]),
}).strict()

export const MemberLevelUpsertArgsSchema: z.ZodType<Prisma.MemberLevelUpsertArgs> = z.object({
  select: MemberLevelSelectSchema.optional(),
  where: MemberLevelWhereUniqueInputSchema,
  create: z.union([ MemberLevelCreateInputSchema,MemberLevelUncheckedCreateInputSchema ]),
  update: z.union([ MemberLevelUpdateInputSchema,MemberLevelUncheckedUpdateInputSchema ]),
}).strict()

export const MemberLevelCreateManyArgsSchema: z.ZodType<Prisma.MemberLevelCreateManyArgs> = z.object({
  data: z.union([ MemberLevelCreateManyInputSchema,MemberLevelCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const MemberLevelDeleteArgsSchema: z.ZodType<Prisma.MemberLevelDeleteArgs> = z.object({
  select: MemberLevelSelectSchema.optional(),
  where: MemberLevelWhereUniqueInputSchema,
}).strict()

export const MemberLevelUpdateArgsSchema: z.ZodType<Prisma.MemberLevelUpdateArgs> = z.object({
  select: MemberLevelSelectSchema.optional(),
  data: z.union([ MemberLevelUpdateInputSchema,MemberLevelUncheckedUpdateInputSchema ]),
  where: MemberLevelWhereUniqueInputSchema,
}).strict()

export const MemberLevelUpdateManyArgsSchema: z.ZodType<Prisma.MemberLevelUpdateManyArgs> = z.object({
  data: z.union([ MemberLevelUpdateManyMutationInputSchema,MemberLevelUncheckedUpdateManyInputSchema ]),
  where: MemberLevelWhereInputSchema.optional(),
}).strict()

export const MemberLevelDeleteManyArgsSchema: z.ZodType<Prisma.MemberLevelDeleteManyArgs> = z.object({
  where: MemberLevelWhereInputSchema.optional(),
}).strict()

export const UomCreateArgsSchema: z.ZodType<Prisma.UomCreateArgs> = z.object({
  select: UomSelectSchema.optional(),
  include: UomIncludeSchema.optional(),
  data: z.union([ UomCreateInputSchema,UomUncheckedCreateInputSchema ]),
}).strict()

export const UomUpsertArgsSchema: z.ZodType<Prisma.UomUpsertArgs> = z.object({
  select: UomSelectSchema.optional(),
  include: UomIncludeSchema.optional(),
  where: UomWhereUniqueInputSchema,
  create: z.union([ UomCreateInputSchema,UomUncheckedCreateInputSchema ]),
  update: z.union([ UomUpdateInputSchema,UomUncheckedUpdateInputSchema ]),
}).strict()

export const UomCreateManyArgsSchema: z.ZodType<Prisma.UomCreateManyArgs> = z.object({
  data: z.union([ UomCreateManyInputSchema,UomCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const UomDeleteArgsSchema: z.ZodType<Prisma.UomDeleteArgs> = z.object({
  select: UomSelectSchema.optional(),
  include: UomIncludeSchema.optional(),
  where: UomWhereUniqueInputSchema,
}).strict()

export const UomUpdateArgsSchema: z.ZodType<Prisma.UomUpdateArgs> = z.object({
  select: UomSelectSchema.optional(),
  include: UomIncludeSchema.optional(),
  data: z.union([ UomUpdateInputSchema,UomUncheckedUpdateInputSchema ]),
  where: UomWhereUniqueInputSchema,
}).strict()

export const UomUpdateManyArgsSchema: z.ZodType<Prisma.UomUpdateManyArgs> = z.object({
  data: z.union([ UomUpdateManyMutationInputSchema,UomUncheckedUpdateManyInputSchema ]),
  where: UomWhereInputSchema.optional(),
}).strict()

export const UomDeleteManyArgsSchema: z.ZodType<Prisma.UomDeleteManyArgs> = z.object({
  where: UomWhereInputSchema.optional(),
}).strict()

export const ProductCreateArgsSchema: z.ZodType<Prisma.ProductCreateArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  data: z.union([ ProductCreateInputSchema,ProductUncheckedCreateInputSchema ]),
}).strict()

export const ProductUpsertArgsSchema: z.ZodType<Prisma.ProductUpsertArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereUniqueInputSchema,
  create: z.union([ ProductCreateInputSchema,ProductUncheckedCreateInputSchema ]),
  update: z.union([ ProductUpdateInputSchema,ProductUncheckedUpdateInputSchema ]),
}).strict()

export const ProductCreateManyArgsSchema: z.ZodType<Prisma.ProductCreateManyArgs> = z.object({
  data: z.union([ ProductCreateManyInputSchema,ProductCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const ProductDeleteArgsSchema: z.ZodType<Prisma.ProductDeleteArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereUniqueInputSchema,
}).strict()

export const ProductUpdateArgsSchema: z.ZodType<Prisma.ProductUpdateArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  data: z.union([ ProductUpdateInputSchema,ProductUncheckedUpdateInputSchema ]),
  where: ProductWhereUniqueInputSchema,
}).strict()

export const ProductUpdateManyArgsSchema: z.ZodType<Prisma.ProductUpdateManyArgs> = z.object({
  data: z.union([ ProductUpdateManyMutationInputSchema,ProductUncheckedUpdateManyInputSchema ]),
  where: ProductWhereInputSchema.optional(),
}).strict()

export const ProductDeleteManyArgsSchema: z.ZodType<Prisma.ProductDeleteManyArgs> = z.object({
  where: ProductWhereInputSchema.optional(),
}).strict()

export const OrderCreateArgsSchema: z.ZodType<Prisma.OrderCreateArgs> = z.object({
  select: OrderSelectSchema.optional(),
  include: OrderIncludeSchema.optional(),
  data: z.union([ OrderCreateInputSchema,OrderUncheckedCreateInputSchema ]),
}).strict()

export const OrderUpsertArgsSchema: z.ZodType<Prisma.OrderUpsertArgs> = z.object({
  select: OrderSelectSchema.optional(),
  include: OrderIncludeSchema.optional(),
  where: OrderWhereUniqueInputSchema,
  create: z.union([ OrderCreateInputSchema,OrderUncheckedCreateInputSchema ]),
  update: z.union([ OrderUpdateInputSchema,OrderUncheckedUpdateInputSchema ]),
}).strict()

export const OrderCreateManyArgsSchema: z.ZodType<Prisma.OrderCreateManyArgs> = z.object({
  data: z.union([ OrderCreateManyInputSchema,OrderCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const OrderDeleteArgsSchema: z.ZodType<Prisma.OrderDeleteArgs> = z.object({
  select: OrderSelectSchema.optional(),
  include: OrderIncludeSchema.optional(),
  where: OrderWhereUniqueInputSchema,
}).strict()

export const OrderUpdateArgsSchema: z.ZodType<Prisma.OrderUpdateArgs> = z.object({
  select: OrderSelectSchema.optional(),
  include: OrderIncludeSchema.optional(),
  data: z.union([ OrderUpdateInputSchema,OrderUncheckedUpdateInputSchema ]),
  where: OrderWhereUniqueInputSchema,
}).strict()

export const OrderUpdateManyArgsSchema: z.ZodType<Prisma.OrderUpdateManyArgs> = z.object({
  data: z.union([ OrderUpdateManyMutationInputSchema,OrderUncheckedUpdateManyInputSchema ]),
  where: OrderWhereInputSchema.optional(),
}).strict()

export const OrderDeleteManyArgsSchema: z.ZodType<Prisma.OrderDeleteManyArgs> = z.object({
  where: OrderWhereInputSchema.optional(),
}).strict()

export const OrderItemCreateArgsSchema: z.ZodType<Prisma.OrderItemCreateArgs> = z.object({
  select: OrderItemSelectSchema.optional(),
  include: OrderItemIncludeSchema.optional(),
  data: z.union([ OrderItemCreateInputSchema,OrderItemUncheckedCreateInputSchema ]),
}).strict()

export const OrderItemUpsertArgsSchema: z.ZodType<Prisma.OrderItemUpsertArgs> = z.object({
  select: OrderItemSelectSchema.optional(),
  include: OrderItemIncludeSchema.optional(),
  where: OrderItemWhereUniqueInputSchema,
  create: z.union([ OrderItemCreateInputSchema,OrderItemUncheckedCreateInputSchema ]),
  update: z.union([ OrderItemUpdateInputSchema,OrderItemUncheckedUpdateInputSchema ]),
}).strict()

export const OrderItemCreateManyArgsSchema: z.ZodType<Prisma.OrderItemCreateManyArgs> = z.object({
  data: z.union([ OrderItemCreateManyInputSchema,OrderItemCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const OrderItemDeleteArgsSchema: z.ZodType<Prisma.OrderItemDeleteArgs> = z.object({
  select: OrderItemSelectSchema.optional(),
  include: OrderItemIncludeSchema.optional(),
  where: OrderItemWhereUniqueInputSchema,
}).strict()

export const OrderItemUpdateArgsSchema: z.ZodType<Prisma.OrderItemUpdateArgs> = z.object({
  select: OrderItemSelectSchema.optional(),
  include: OrderItemIncludeSchema.optional(),
  data: z.union([ OrderItemUpdateInputSchema,OrderItemUncheckedUpdateInputSchema ]),
  where: OrderItemWhereUniqueInputSchema,
}).strict()

export const OrderItemUpdateManyArgsSchema: z.ZodType<Prisma.OrderItemUpdateManyArgs> = z.object({
  data: z.union([ OrderItemUpdateManyMutationInputSchema,OrderItemUncheckedUpdateManyInputSchema ]),
  where: OrderItemWhereInputSchema.optional(),
}).strict()

export const OrderItemDeleteManyArgsSchema: z.ZodType<Prisma.OrderItemDeleteManyArgs> = z.object({
  where: OrderItemWhereInputSchema.optional(),
}).strict()