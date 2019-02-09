import { Model } from "objection";
import { Category } from ".";

export class Product extends Model {
  static get tableName() {
    return "products";
  }

  static virtualAttributes = ["price", "currency"];

  get price() {
    return this.price_without_vat * (1 + this.vat / 100);
  }

  get currency() {
    return "Kč";
  }

  static get relationMappings() {
    return {
      category: {
        relation: Model.BelongsToOneRelation,
        modelClass: Category,
        join: {
          from: "products.id_category",
          to: "categories.id"
        }
      }
    };
  }
}
