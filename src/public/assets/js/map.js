ymaps.ready(function () {

    var myMap = new     ymaps.Map('map', {
             center: [56.010214, 37.868367],
            zoom: 13,
            controls: ['fullscreenControl','zoomControl']
        }),
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),
        MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
          '<h3 class="popover-title font-sans">$[properties.balloonHeader]</h3> ' +
                '<div class="popover-content font-sans text-base ml-[18px]">$[properties.balloonContentBody]</div>'
        ),
        myPlacemarkWithContent = new ymaps.Placemark(myMap.getCenter(), {
        balloonContentBody: '<img src="/assets/logo.svg" width="120" class="mx-auto"> <br/> ' +
            '<a class="text-center block" href="tel:+7-916-263-49-11">+7 (916) 263-49-11</a><p class="text-gray-400 text-center">Пушкино , мкр. Серебрянка , д.48, к. 2</p>',
        hintContent: 'Лаборатория «Бонвильский треугольник»'},{

            iconLayout: 'default#imageWithContent',
            balloonShadow: true,
            iconImageHref: '/assets/ico.svg',
            iconImageSize: [70, 70],
            iconImageOffset: [-35, -35],
            iconContentLayout: MyIconContentLayout,
            balloonContentLayout: MyBalloonContentLayout,
            balloonPanelMaxMapArea: 0
        });

    myMap.geoObjects.add(myPlacemarkWithContent);
    myMap.panes._array.find(p=>p.key=='ground').pane._element.classList.add('ya-gray-pane');
});