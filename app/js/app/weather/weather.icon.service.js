angular
    .module('mirror')
    .factory('WeatherIconService', weatherIconService);

weatherIconService.$inject = [];

function weatherIconService() {

    function _init() {
        var icons = new Skycons({ "color": "white" }),
            list = [
                "clear-day", "clear-night", "partly-cloudy-day",
                "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
                "fog"
            ],
            i;
        for (i = list.length; i--;) {
            var weatherType = list[i],
                elements = document.getElementsByClassName(weatherType);
            for (var e = elements.length; e--;) {
                icons.set(elements[e], weatherType);
            }
        }

        icons.play();
    }

    function _getIcon(icon){
        var metrix = {
            "clear sky": "clear-day",
            "clear": "clear-day",
            "few clouds": "wind",
            "scattered clouds": "partly-cloudy-day",
            "broken clouds": "partly-cloudy-day",
            "clouds": "partly-cloudy-day",
            "shower rain": "rain",
            "rain":"rain",
            "thunderstorm": "rain",
            "snow":"snow",
            "mist":"fog"
        };
        return metrix[icon];
    }

    return {
        init: _init,
        icon: _getIcon
    }
}