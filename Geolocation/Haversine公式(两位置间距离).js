Number.prototype.toRadians = function() {
    return this * Math.PI / 180;
}
function distance(latitude1, longitude1, latitude2, longitude2) {
    // R是地球的半径，km单位
    var R = 6371;

    var deltaLatitude = (latitude2-latitude1).toRadians();
    var deltaLongitude = (longitude2-longitude1).toRadians();
    latitude1 = latitude1.toRadians(), latitude2 = latitude2.toRadians();

    var a = Math.sin(deltaLatitude/2) *
            Math.sin(deltaLatitude/2) +
            Math.cos(latitude1) *
            Math.cos(latitude2) *
            Math.sin(deltaLongitude/2) *
            Math.sin(deltaLongitude/2);

    var c = 2 * Math.atan2(Math.sqrt(a),
                           Math.sqrt(1-a));
    var d = R * c;
    return d;
  }
