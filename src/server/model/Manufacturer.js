import { Model } from "objection";
import { Product } from ".";

export class Manufacturer extends Model {
  static get tableName() {
    return "manufacturers";
  }

  static get relationMappings() {
    return {
      products: {
        relation: Model.HasManyRelation,
        modelClass: Product,
        join: {
          from: "manufacturers.id",
          to: "products.id_manufacturer"
        }
      }
    };
  }
}
