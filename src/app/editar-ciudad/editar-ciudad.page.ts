import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { City } from '../modelo/City';


@Component({
  selector: 'app-editar-ciudad',
  templateUrl: './editar-ciudad.page.html',
  styleUrls: ['./editar-ciudad.page.scss'],
})
export class EditarCiudadPage implements OnInit {

  @Input() cityJson;
  city: City;
  validations_form: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public modalController: ModalController) { }

  ngOnInit() {
    this.city = JSON.parse(this.cityJson);
    this.validations_form = this.formBuilder.group({
      id: new FormControl(this.city.id),
      Name: new FormControl(this.city.Name, Validators.compose([
        Validators.maxLength(50),
        Validators.minLength(1),
        Validators.pattern('^[a-z A-Z]+$'),
        Validators.required
      ])),
      District: new FormControl(this.city.District, Validators.compose([
        Validators.maxLength(50),
        Validators.minLength(1),
        Validators.pattern('^[a-z A-Z]+$'),
        Validators.required
      ])),
      Population: new FormControl(this.city.Population, Validators.compose([
        Validators.min(0.1),
        Validators.required
      ]))
    });
  }

  onSubmit(values) {
    this.modalController.dismiss(JSON.stringify(values));
  }

  public closeModal() {
    this.modalController.dismiss();
  }

}
