angular
    .module("mirror")
    .run(run);

run.$inject = ["WeatherIconService"];

function run(WeatherIconService) {
    WeatherIconService.init();
}