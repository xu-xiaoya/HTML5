function updateLocation(position) {
    /*
    该函数只接收一个参数：位置对象（包括坐标coords特性、获取位置数据时的时间戳）
    coords前三个特性：
    latituede   纬度
    longitude   经度
    accuracy     精确度
    */
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var accuracy = position.coords.accuracy;

    var timestamp = position.timestamp;//时间戳

    document.getElementById("latitude").innerHTML = latitude;
    document.getElementById("longitude").innerHTML = longitude;
    document.getElementById("accuracy").innerHTML = accuracy;
    document.getElementById("timestamp").innerHTML = timestamp;
}
