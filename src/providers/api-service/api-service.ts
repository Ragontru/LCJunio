import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from 'src/app/modelo/Country';
import { City } from 'src/app/modelo/City';

@Injectable()
export class ApiServiceProvider {

    private URL = "http://localhost:3000";

    constructor(public http: HttpClient) {
    }

    getCountries(): Promise<Country[]> {
        let promise = new Promise<Country[]>((resolve, reject) => {
            this.http.get(this.URL + "/Country").toPromise()
                .then((data: any) => {
                    let countries = new Array<Country>();
                    data.forEach(countryJson => {
                        let country = Country.createFromJsonObject(countryJson);
                        countries.push(country);
                    });
                    resolve(countries);
                })
                .catch((error: Error) => {
                    reject(error.message);
                });
        });
        return promise;
    }

    getCities(CountryId: string): Promise<City[]> {
        let promise = new Promise<City[]>((resolve, reject) => {
            this.http.get(this.URL + "/City?CountryId=" + CountryId).toPromise()
                .then((data: any) => {
                    let cities = new Array<City>();
                    data.forEach(cityJson => {
                        let city = City.createFromJsonObject(cityJson);
                        cities.push(city);
                    });
                    resolve(cities);
                })
                .catch((error: Error) => {
                    reject(error.message);
                });
        });
        return promise;
    }

    editCity(idCity: number, nuevosDatosCity: City): Promise<City> {
        console.log("idCity en api service - "+idCity);
        let promise = new Promise<City>((resolve, reject) => {
            var header = { "headers": { "Content-Type": "application/json" } };
            let datos = nuevosDatosCity.getJsonObject();
            this.http.put(this.URL + "/City/" + idCity,
                JSON.stringify(datos),
                header).toPromise().then(
                    (data: any) => {
                        let city: City;
                        city = City.createFromJsonObject(data);
                        resolve(city);
                    }
                )
                .catch((error: Error) => {
                    reject(error.message);
                });
        });
        return promise;
    }


}
