import { Model } from "objection";

export class AdminUser extends Model {
  static get tableName() {
    return "admin_users";
  }
}
