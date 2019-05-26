import { Model } from "objection";
import { Product } from ".";

export class Vat extends Model {
  static get tableName() {
    return "vat";
  }
}
