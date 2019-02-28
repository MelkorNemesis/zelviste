import { Model } from "objection";
import { Product } from ".";

export class Category extends Model {
  static get tableName() {
    return "categories";
  }

  static get relationMappings() {
    return {
      products: {
        relation: Model.HasManyRelation,
        modelClass: Product,
        join: {
          from: "categories.id",
          to: "products.id_category"
        }
      },
      children: {
        relation: Model.HasManyRelation,
        modelClass: Category,
        join: {
          from: "categories.id",
          to: "categories.parent_id"
        }
      },
      parent: {
        relation: Model.HasOneRelation,
        modelClass: Category,
        join: {
          from: "categories.parent_id",
          to: "categories.id"
        }
      }
    };
  }
}
