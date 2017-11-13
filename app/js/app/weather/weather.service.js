angular
    .module('weather')
    .factory('WeatherService', weatherService);

weatherService.$inject = ["$http", "UrlService"];

function weatherService($http, UrlService) {

    function _setLocation(location) {
        UrlService.setLocation(location);
    }

    function _setUnit(unit) {
        UrlService.setUnit(unit);
    }

    function _getCurrent() {
        return $http({
            method: 'GET',
            url: UrlService.getUrl("weather")
        });
    }

    function _getForecast() {
        return $http({
            method: 'GET',
            url: UrlService.getUrl("forecast")
        });
    }

    return {
        forecast: _getForecast,
        current: _getCurrent,
        setLocation: _setLocation,
        setUnit: _setUnit
    }
}