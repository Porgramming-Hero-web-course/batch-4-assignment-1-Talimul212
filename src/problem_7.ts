{
  //
  class Car {
    // make: string;
    // model: string;
    // year: number;
    constructor(
      public make: string,
      public model: string,
      public year: number
    ) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
    getCarAge() {
      const date = new Date().getFullYear();
      console.log(
        `Assuming current year is ${date}, this car age is ${date - this.year} `
      );
    }
  }
  const car = new Car("Honda", "Civic", 2018);
  car.getCarAge();

  //
}
