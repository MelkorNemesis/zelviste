import { Model } from "objection";

export class Vat extends Model {
  static get tableName() {
    return "vat";
  }
}
