export class TableData {
  date: Date;
  description: string;
  amount: number;
  category: string;
  details?: string;

  constructor(
    date: Date,
    description: string,
    amount: number,
    category: string,
    details: string = ''
  ) {
    this.date = date;
    this.description = description;
    this.amount = amount;
    this.category = category;
    this.details = details;
  }
}