import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';// -- classes que usaremos

declare var google: any; // -- quando chamarmos a api google fica como indefinido

@Component
(
  {
    selector: 'app-mapa',
    templateUrl: './mapa.page.html',
    styleUrls: ['./mapa.page.scss'],
  }
)
export class MapaPage implements OnInit 
{
  //ATRIBUTOS
  map: any;
  janelasInfo: any = [];
  marcadores: any = [ 
    {
      title: "ravetalize",
      latitude: "-23.550776",
      longitude: "-46.649521"
    },
    {
      title: "grind",
      latitude:"-23.554992",
      longetude:"-46.655728" 
    },
    {
      title: "blitz",
      latitude: "-23.55201592967986",
      longetude:"-46.652235252449806" 
    }
  ];
  @ViewChild
  ( // -- recebe as infos do atributo mapa
    'map', {read: ElementRef, static: false}
  ) 
  mapRef: ElementRef; // -- referencia o elemento map declarado no html

  //MÉTODOS
  ionViewDidEnter() 
  { // -- ciclo de vida da view
    this.mostrarMapa();
  }
  constructor() { }
  mostrarMapa(): void
  { // -- configura o mapa a partir do ponto local
    const local = new google.maps.LatLng(
      -23.551308872585132, -46.65032141801534
      );
    const opcoes = 
    {
      center: local,
      zoom: 15,
      desableDefaultUI: true, // -- desativa o controler de zoom ???????????
    }
    this.map = new google.maps.Map
    ( // -- rederiza o mapa 
      this.mapRef.nativeElement, 
      opcoes
    );
    this.adicionarMarcadoresNoMapa(this.marcadores);
  }
  adicionarMarcadoresNoMapa(marcadores): void 
  { // -- coloca os marcadores no mapa criado
    var pins = [];
    for (let marcador of marcadores) 
    { // -- passa por cada marcador e cria um por um 
      let posicao = new google.maps.LatLng
      ( // -- recebe as coordenadas
        marcador.latitude, marcador.longitude 
      );
      let marcadorNoMapa = new google.maps.Marker
      ( // -- renderiza o marcador 
        {
          position: posicao,
          map: this.map,
          title: marcador.title,
          latitude: marcador.latitude,
          longitude: marcador.longitude,
          icon: "./assets/icon/unicorn-icon.png",
          opacity: 0.7,
          animation: google.maps.Animation.BOUNCE,
        }
      );
      marcadorNoMapa.setMap(this.map);
      this.adicionarInfoAoMarcador(marcadorNoMapa); 
    }
  }
  adicionarInfoAoMarcador(marcador): void
  { // -- adiciona informações relaciona ao marcador
    let conteudoDaJanelaInfo =
      '<div id="content">' +
        '<h2 id="firstHeading" class"firstHeading">' 
          + marcador.title + 
        '</h2>' +
        '<p>Latitude: ' 
          + marcador.latitude + 
        '</p>' +
        '<p> Longitude: ' 
          + marcador.longitude + 
        '</p>' +
        '<ion-button target="_blank" rel="noopener noreferrer" slot="end" href="https://developers.google.com/maps/documentation/javascript/reference/info-window" color="clear">' +
          '<ion-icon name="sparkles-outline" color="secondary">' +
        '</ion-icon>' +
      '</ion-button>'
      '</div>';
    let janelaInfo = new google.maps.InfoWindow
    ( // -- renderiza a janela de info
      {
        content: conteudoDaJanelaInfo
      }
    );
    marcador.addListener
    ( // -- adiciona o evento ao marcador
      'click', () => 
      {
        this.fecharTodasJanelasInfo();
        janelaInfo.open(this.map, marcador);
      }
    );
    this.janelasInfo.push(janelaInfo);
  }
  fecharTodasJanelasInfo(): void
  { // -- fecha todas as janelas de informação abertas
    for (let janela of this.janelasInfo)
    {
      janela.close();
    }
  }
  ngOnInit() {}
}
