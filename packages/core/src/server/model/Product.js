import { Model } from "objection";
import { Category, Manufacturer, Vat } from ".";
import { round } from "../utils";

export class Product extends Model {
  static get tableName() {
    return "products";
  }

  static get virtualAttributes() {
    return ["price", "currency", "priceBefore"];
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
      },
      manufacturer: {
        relation: Model.BelongsToOneRelation,
        modelClass: Manufacturer,
        join: {
          from: "products.id_manufacturer",
          to: "manufacturers.id"
        }
      },
      vat: {
        relation: Model.HasOneRelation,
        modelClass: Vat,
        join: {
          from: "products.id_vat",
          to: "vat.id"
        }
      }
    };
  }

  /**
   * Custom Product query method.
   *
   * Fetches 'vat' relation for it is needed
   * for price calculation through virtual attributes.
   *
   * @param args
   * @returns {Objection.QueryBuilder<Objection.Model>}
   */
  static query(...args) {
    const query = super.query(...args);

    return query.onBuild(builder => {
      builder.mergeEager("vat");
      return builder;
    });
  }

  // -- virtual attributes

  get price() {
    const discount = this.discount || 0;
    return this.price_with_vat - discount;
  }

  get priceBefore() {
    if (this.discount) {
      return this.price_with_vat;
    }
    return null;
  }

  get currency() {
    return "Kč";
  }
}
