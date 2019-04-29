if( $("#YMaps").length > 0 ) {

	ymaps.ready(function () {
		myMap = new ymaps.Map("YMaps", {
	        center: [55.76, 37.64],
	        zoom: 10
	    }, {
	        searchControlProvider: 'yandex#search'
	    });
	    // Создаем коллекцию геообъектов.
		var myCollection = new ymaps.GeoObjectCollection();
		// Добавляем метки в коллекцию.
		myCollection.add(new ymaps.Placemark([37.61, 55.75], {
		    balloonContentBody: '<div class="mark_desc"><h3>Заголовок / Название объекта</h3>'+
							    	'<p class="p_1"><b>г. Москва, ул. Тухачевского, 60</b></p>'+
							    	'<p>Клубный комплекс из двух домов, расположен вблизи..</p>'+
							    	'<div class="mark_link_wrapp"><i class="globus"></i><a class="yellow_link" href="#">Перейти на сайт объекта</a></div></div>',
	    },
	    {
	    	iconLayout: 'default#image',
	        iconImageHref: 'img/map_mark.png',
	        iconImageSize: [44, 51],
	        iconImageOffset: [-44, -51],
	    }));
		myCollection.add(new ymaps.Placemark([13.38, 52.51], { 
		    balloonContentBody: '<div class="mark_desc"><h3>Заголовок / Название объекта</h3>'+
							    	'<p class="p_1"><b>г. Москва, ул. Тухачевского, 60</b></p>'+
							    	'<p>Клубный комплекс из двух домов, расположен вблизи..</p>'+
							    	'<div class="mark_link_wrapp"><i class="globus"></i><a class="yellow_link" href="#">Перейти на сайт объекта</a></div></div>',
	    },
	    {
	    	iconLayout: 'default#image',
	        iconImageHref: 'img/map_mark.png',
	        iconImageSize: [44, 51],
	        iconImageOffset: [-44, -51],
	    }));
		myCollection.add(new ymaps.Placemark([30.30, 50.27], { 
		    balloonContentBody: '<div class="mark_desc"><h3>Заголовок / Название объекта</h3>'+
							    	'<p class="p_1"><b>г. Москва, ул. Тухачевского, 60</b></p>'+
							    	'<p>Клубный комплекс из двух домов, расположен вблизи..</p>'+
							    	'<div class="mark_link_wrapp"><i class="globus"></i><a class="yellow_link" href="#">Перейти на сайт объекта</a></div></div>',
	    },
	    {
	    	iconLayout: 'default#image',
	        iconImageHref: 'img/map_mark.png',
	        iconImageSize: [44, 51],
	        iconImageOffset: [-44, -51],
	    }));

		// Добавляем коллекцию на карту.
		myMap.geoObjects.add(myCollection);
		// Устанавливаем карте центр и масштаб так, чтобы охватить коллекцию целиком.
		myMap.setBounds(myCollection.getBounds());

	    myMap.controls.remove('geolocationControl');
	    myMap.controls.remove('searchControl');
	    myMap.controls.remove('trafficControl');
	    myMap.controls.remove('typeSelector');
	    myMap.controls.remove('fullscreenControl');
	    myMap.controls.remove('rulerControl');
	    myMap.controls.remove('zoomControl');
	    myMap.behaviors.disable(['scrollZoom']);

	});

}

if( $("#map2").length > 0 ) {

    ymaps.ready(init);

    var myMap2,
        myPlacemark2,
        leftCoord2,
        rigthCoord2;

        leftCoord2 = 55.818822;
        rigthCoord2 = 37.449318;

    function init(){   
        myMap2 = new ymaps.Map("map2", {
            center: [leftCoord2, rigthCoord2],
            zoom: 13
        });

        myPlacemark2 = new ymaps.Placemark([leftCoord2, rigthCoord2], { 
            hintContent: '', 
            balloonContent: ''
        },
        {
            iconLayout: 'default#image',
            iconImageHref: 'img/yellow_mark.png',
            iconImageSize: [54, 66],
            iconImageOffset: [-54, -66]
        });

        myMap2.behaviors
        .disable(['scrollZoom', 'rightMouseButtonMagnifier']);
        myMap2.geoObjects.add(myPlacemark2);
        myMap2.controls.remove('geolocationControl');
        myMap2.controls.remove('searchControl');
        myMap2.controls.remove('trafficControl');
        myMap2.controls.remove('typeSelector');
        myMap2.controls.remove('fullscreenControl');
        myMap2.controls.remove('rulerControl');
        myMap2.controls.remove('zoomControl');
        myMap2.behaviors.disable(['scrollZoom']);

    }

}