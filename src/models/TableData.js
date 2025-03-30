export class TableData {
  constructor(date, description, amount, category, details = '') {
    this.date = new Date(date);
    this.description = description;
    this.amount = amount;
    this.category = category;
    this.details = details;
  }
}