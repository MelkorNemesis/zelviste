import { Model } from "objection";
import { Category, Manufacturer } from ".";

export class Product extends Model {
  static get tableName() {
    return "products";
  }

  static virtualAttributes = ["price", "currency", "priceBefore"];

  static get relationMappings() {
    return {
      category: {
        relation: Model.BelongsToOneRelation,
        modelClass: Category,
        join: {
          from: "products.id_category",
          to: "categories.id"
        }
      },
      manufacturer: {
        relation: Model.BelongsToOneRelation,
        modelClass: Manufacturer,
        join: {
          from: 'products.id_manufacturer',
          to: 'manufacturers.id'
        }
      }
    };
  }

  get price() {
    const discount = this.discount || 0;

    return this.priceIncVAT - discount;
  }

  get priceBefore() {
    if (this.discount) {
      return this.priceIncVAT;
    }
    return null;
  }

  get priceIncVAT() {
    return this.price_without_vat * (1 + this.vat / 100);
  }

  get currency() {
    return "Kč";
  }
}
