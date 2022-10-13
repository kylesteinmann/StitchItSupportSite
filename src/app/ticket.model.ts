export class Ticket {
  public fullName: string;
  public companyName!: string;
  public phoneNumber: string;
  public email: string;
  public brand: string;
  public description: string

  constructor(fullName: string, companyName: string, phoneNumber: string, email: string, brand: string, description: string) {

    this.fullName = fullName;
    this.companyName = companyName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.brand = brand;
    this.description = description;
  }
}
