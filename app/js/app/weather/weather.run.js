angular
.module("weather")
.run(run);

run.$inject = ["WeatherIconService"];

function run(WeatherIconService) {
    WeatherIconService.init();
}