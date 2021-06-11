import { Component, OnInit } from '@angular/core';
import { ApiServiceProvider } from 'src/providers/api-service/api-service';
import { Country } from '../modelo/Country';
import { City } from '../modelo/City';
import { EditarCiudadPage } from '../editar-ciudad/editar-ciudad.page';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ej-api-rest',
  templateUrl: './ej-api-rest.page.html',
  styleUrls: ['./ej-api-rest.page.scss'],
})
export class EjApiRestPage implements OnInit {

  private countries = new Array<Country>();
  public cities = new Array<City>();

  constructor(private apiService: ApiServiceProvider,
    public alertController: AlertController,
    public modalController: ModalController) { }

  ngOnInit(): void {
    this.apiService.getCountries()
      .then((countries: Country[]) => {
        this.countries = countries;
        console.log(this.countries);
      })
      .catch((error: string) => {
        console.log(error);
      });
  }

  mostrarCiudades(CountryId: string) {
    this.apiService.getCities(CountryId)
      .then((cities: City[]) => {
        this.cities = cities;
        console.log(this.cities);
      })
      .catch((error: string) => {
        console.log(error);
      });
  }

  async editarCiudad(idCity: number) {
    const modal = await this.modalController.create({
      component: EditarCiudadPage,
      componentProps: {
        'cityJson': JSON.stringify(this.cities[idCity])
      }
    });

    modal.onDidDismiss().then((data) => {
      if (data['data'] != null) {
        let cityJSON = JSON.parse(data['data']);
        let cityModificado: City = City.createFromJsonObject(cityJSON);
        this.apiService.editCity(cityModificado.id, cityModificado)
          .then((city: City) => {
            this.cities[idCity] = city;
          })
          .catch((error: string) => {
            console.log(error);
          });
      }
    });

    return await modal.present();
  }

}
