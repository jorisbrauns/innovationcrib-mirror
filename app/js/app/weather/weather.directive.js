angular
.module('weather')
.directive('weather', weatherDirective)
.run(["$templateCache", function($templateCache) {
    $templateCache.put("template/weather.html",
    "<div class=\"row\">" +
        "<div class=\"col-md-12 col-xlg-6\">" +
        "    <div class=\"row m-t-20\">" +
        "        <div class=\"col-md-5\">" +
        "            <h4 class=\"no-margin\" style=\"line-height: 24px;\">{{vm.day}}</h4>" +
        "            <p class=\"small hint-text m-t-5\">{{vm.date}}</p>" +
        "        </div>" +
        "        <div class=\"col-md-7\">" +
        "            <div class=\"pull-left\">" +
        "                <p class=\"small hint-text no-margin\">Currently</p>" +
        "                <h4 class=\"text-danger bold no-margin\">{{vm.temp}}°" + 
        "                </h4>" +
        "            </div>" +
        "            <div class=\"pull-right\">" +
        "                <canvas height=\"64\" width=\"64\" ng-class=\"vm.icon\"></canvas>" +
        "            </div>" +
        "        </div>" +
        "    </div>" +
        "    <h5>Feels like" +
        "        <span class=\"semi-bold\">{{vm.feeling}}</span>" +
        "    </h5>" +
        "        <div class=\"row m-t-10 timeslot\">" +
        "        <div class=\"col-xs-2 p-t-10 text-center\" ng-repeat=\"(key, day) in vm.days | limitTo: 6\">" +
        "            <p class=\"small\">{{day.time}}</p>" +
        "            <canvas height=\"25\" width=\"25\" ng-class=\"day.icon\"></canvas>" +
        "            <p class=\"text-danger bold\">{{day.temp}}°C</p>" +
        "        </div>" +
        "    </div>" +
        "</div>" +
    "</div>");
  }]);

function weatherDirective(){
    return {
        restrict: 'E',
        templateUrl: 'template/weather.html',
        controller: weatherController,
        controllerAs: 'vm',
        scope: {
            location: '@?',
            unit: '@?'
        }
    }
}