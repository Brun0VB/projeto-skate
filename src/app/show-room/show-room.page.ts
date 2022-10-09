import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-show-room',
  templateUrl: './show-room.page.html',
  styleUrls: ['./show-room.page.scss'],
})
export class ShowRoomPage implements OnInit {

  produtos: any[] = [];
  
  constructor(private alertController: AlertController) {
    this.add();
  }

  ngOnInit() {
  }

  async showPopUp(produto){
    console.log("evento Ok")
    const alert = await this.alertController.create({
      subHeader: produto.categoria,
      message: `<img src=produto.foto` + produto.descricao + produto.preco ,  //fonte da imagem do produto d 
      buttons: [
        {
        text: 'CANCELAR',
        role: 'cancel',
        },
        {
            text:'COMPRAR',
        },
      ],
    });

    await alert.present();
  }

  async add(){

    let produto = {categoria: 'skate',nome:'skt1',descricao:'descrição',preco:'100',foto:"../../assets/images/skate.jpg"};

    this.produtos.push(produto);
  }
}
