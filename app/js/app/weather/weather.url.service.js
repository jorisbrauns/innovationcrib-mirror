angular
    .module('weather')
    .factory('UrlService', urlService);

    urlService.$inject = ["settings"];

function urlService(settings) {
    var _city = '';
    
    // Unit Default: Metric, Metric: Celsius, Imperial: Fahrenheit.
    var _units = '';

    function _setLocation(location) {
        var location = location || 'Antwerp';
        _city = location;
    }

    function _setUnit(unit) {
        var unit = unit || 'metric';
        _units = unit;
    }
    
    function _getUrl(apiMethod) {
        return settings.apiServiceBaseUri + apiMethod + "?q=" + _city + "&appid=" + settings.openWeatherMapApiKey + "&units=" + _units;
    }

    return {
        getUrl: _getUrl,
        setLocation: _setLocation,
        setUnit: _setUnit
    }
}