function doXhrRequest(method, url, data, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(JSON.stringify(data));

  xhr.onreadystatechange = function(state) {
    if((xhr.status == 200 ||  xhr.status == 201) && xhr.readyState == 4) {

      cb(JSON.parse(xhr.responseText));
    }
  }
}

module.exports = {
  doXhrRequest: doXhrRequest
};