type = "text/javascript" >
  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // center: [55.762099, 37.645537],
    center: [55.760009, 37.612946],
    // от 0 (весь мир) до 19.
    zoom: 14,
  });



  myPlacemark = new ymaps.Placemark([55.760019, 37.611946], {
    hintContent: 'Москва, Россия, 125009',
    balloonContent: 'Леонтьевский переулок, 5с1'
  }, {
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: 'img/map/ellipse.svg',
    // Размеры метки.
    iconImageSize: [20, 20],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-5, -38]
  }),


    myMap.geoObjects.add(myPlacemark);

}

