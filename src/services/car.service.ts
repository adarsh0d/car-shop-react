import axios from "axios";
import Car from "../interfaces/Car";
import CarData from "../interfaces/CarData";
import CarFilterObj from "../interfaces/CarFilterObj";
import ColorData from "../interfaces/ColorData";
import ManufacturerData from "../interfaces/ManufacturerData";
const baseUrl = `https://auto1-mock-server.herokuapp.com/api`
export const fetchCars = async (pageNumber: number = 1, { selectedManufacturer, selectedColor }: CarFilterObj): Promise<CarData> => {
    let url = `${baseUrl}/cars?page=${pageNumber}`
    if(selectedManufacturer) {
        url = `${url}&manufacturer=${selectedManufacturer.value}`
    }
    if(selectedColor) {
        url = `${url}&color=${selectedColor.value}`
    }
    return axios.get(url)
}

export const fetchColors = (): Promise<ColorData> => {
    let url = `${baseUrl}/colors`
   
    return axios.get(url)
}

export const fetchManufacturers = (): Promise<ManufacturerData> => {
    let url = `${baseUrl}/manufacturers`
   
    return axios.get(url)
}

export const fetchCar = (stock: string): Promise<{data:{car: Car}}> => {
    let url = `${baseUrl}/cars/${stock}`
   
    return axios.get(url)
}
