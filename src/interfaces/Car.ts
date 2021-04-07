export default interface Car {
    stockNumber: number,
    manufacturerName: string,
    modelName:string
    mileage: {
        number: number,
        unit: string
      },
    fuelType: "Petrol" | "Diesel",
    color: string,
    pictureUrl: string
}