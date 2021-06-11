export class City {

    constructor(
        public id: number,
        public Name: string,
        public CountryId: string,
        public District: string,
        public Population: number
    ) { }

    public static createFromJsonObject(jsonObject: any): City {
        let city: City = new City(
            jsonObject['id'],
            jsonObject['Name'],
            jsonObject['CountryId'],
            jsonObject['District'],
            jsonObject['Population']);
        return city;
    }


    public getJsonObject(): any {
        let jsonObject: any = {};
        jsonObject['id'] = this.id;
        jsonObject['Name'] = this.Name;
        jsonObject['CountryId'] = this.CountryId;
        jsonObject['District'] = this.District;
        jsonObject['Population'] = this.Population;
        return jsonObject;
    }
}