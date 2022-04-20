export class Company {
  constructor(
    public id: number,
    public name: string,
    public open_rate: number,
    public close_rate: number,
    public peak_rate: number,
    public least_rate: number,
    public current_rate: number,
    public market_cap_code: string,
    public volume: number,
    public stock_type: string,
    public address: string
  ) {}
}
