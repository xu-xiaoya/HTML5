/*
PERMISSION_DENIED(错误编号1)——用户拒绝浏览器获得其位置信息
POSITION_UNAVAILABLE(错误编号2)——尝试获取用户位置信息，失败。
TIMEOUT(错误编号3)——尝试确定用户位置的过程超时。
*/
function handleLocationError(error) {
    switch(error.code) {
    case 0:
      updateStatus("There was an error while retrieving your location: " + error.message);
      break;
    case 1:
      updateStatus("The user prevented this page from retrieving a location.");
      break;
    case 2:
      updateStatus("The browser was unable to determine your location: " + error.message);
      break;
    case 3:
      updateStatus("The browser timed out before retrieving the location.");
      break;
    }
}