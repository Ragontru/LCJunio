export class Country {

    constructor(
        public id: string,
        public Name: string,
        public Continent: string,
        public Region: string,
        public SurfaceArea: number,
        public IndepYear: number,
        public Population: number,
        public LifeExpectancy: number,
        public GNP: number,
        public GNPOld: number,
        public LocalName: string,
        public GovernmentForm: string,
        public HeadOfState: string,
        public Capital: number,
        public id2: string
    ) { }

    public static createFromJsonObject(jsonObject: any): Country {
        let country: Country = new Country(
            jsonObject['id'],
            jsonObject['Name'],
            jsonObject['Continent'],
            jsonObject['Region'],
            jsonObject['SurfaceArea'],
            jsonObject['IndepYear'],
            jsonObject['Population'],
            jsonObject['LifeExpectancy'],
            jsonObject['GNP'],
            jsonObject['GNPOld'],
            jsonObject['LocalName'],
            jsonObject['GovernmentForm'],
            jsonObject['HeadOfState'],
            jsonObject['CapitalP'],
            jsonObject['id2']);
        return country;
    }


    public getJsonObject(): any {
        let jsonObject: any = {};
        jsonObject['id'] = this.id;
        jsonObject['Name'] = this.Name;
        jsonObject['Continent'] = this.Continent;
        jsonObject['Region'] = this.Region;
        jsonObject['SurfaceArea'] = this.SurfaceArea;
        jsonObject['IndepYear'] = this.IndepYear;
        jsonObject['Population'] = this.Population;
        jsonObject['LifeExpectancy'] = this.LifeExpectancy;
        jsonObject['GNP'] = this.GNP;
        jsonObject['GNPOld'] = this.GNPOld;
        jsonObject['LocalName'] = this.LocalName;
        jsonObject['GovernmentForm'] = this.GovernmentForm;
        jsonObject['HeadOfState'] = this.HeadOfState;
        jsonObject['CapitalP'] = this.Capital;
        jsonObject['id2'] = this.id2;
        return jsonObject;
    }
}