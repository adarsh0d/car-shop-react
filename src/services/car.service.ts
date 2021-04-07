import axios from "axios";
import Car from "../interfaces/Car";
import CarData from "../interfaces/CarData";
import ColorData from "../interfaces/ColorData";
import ManufacturerData from "../interfaces/ManufacturerData";
const baseUrl = `https://auto1-mock-server.herokuapp.com/api`
export const fetchCars = async (pageNumber: number = 1, manufacturer: string = '', color: string = ''): Promise<CarData> => {
    let url = `${baseUrl}/cars?page=${pageNumber}`
    if(manufacturer) {
        url = `${url}&manufacturer=${manufacturer}`
    }
    if(color) {
        url = `${url}&color=${color}`
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
