angular
    .module('mirror')
    .factory('UrlService', urlService);

    urlService.$inject = ["settings"];

function urlService(settings) {
    var _city = 'Antwerpen';
    var _units = 'metric';

    function _getUrl(apiMethod) {
        return settings.apiServiceBaseUri + apiMethod + "?q=" + _city + "&appid=" + settings.openWeatherMapApiKey + "&units=" + _units;
    }

    return {
        getUrl: _getUrl
    }
}