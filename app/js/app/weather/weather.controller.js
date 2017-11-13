weatherController.$inject = ["$scope","$filter", "WeatherService", "$log", "WeatherIconService", "$timeout"];

function weatherController($scope, $filter, WeatherService, $log, WeatherIconService, $timeout) {

    var _self = this;
    _self.currentDate = new Date();

    this.day = $filter('date')(_self.currentDate, 'EEEE');
    this.date = $filter('date')(_self.currentDate, 'd MMM y');
    this.temp = "Loading...";
    this.days = [];
    this.feeling = 'something went wrong !?';
    this.icon = "";

    WeatherService.setLocation($scope.location);
    WeatherService.setUnit($scope.unit);

    // Current weather
    WeatherService.current().then(function (result) {
        var currentWeather = result.data;
        _self.temp = currentWeather.main.temp;
        _self.feeling = currentWeather.weather[0].description;
        _self.icon = WeatherIconService.icon(currentWeather.weather[0].main.toLowerCase());
        $timeout(function () {
            WeatherIconService.init();
        }, 100)
    }, function (error) {
        $log.error(error);
    })

    // Forecast
    WeatherService.forecast().then(function (result) {
        var result = result.data.list;
        result.forEach(function (record) {
            var dt = new Date(record.dt * 1000);
            _self.days.push({
                icon: WeatherIconService.icon(record.weather[0].main.toLowerCase()),
                time: dt.getHours() + ":" + ("0" + dt.getMinutes()).substr(-2),
                temp: record.main.temp
            })
        }, this);
    }, function (error) {
        $log.error(error);
    });
}