function makeAPICall(){
        var http = new XMLHttpRequest();
        var col = [];
        var table = document.createElement("table");
        var tr = table.insertRow(-1);

        http.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200){
                var obj = this.response;
                var result = JSON.parse(obj);
                for (var i = 0; i < result.length; i++) {
                    for (var key in result[i]) {
                        if (col.indexOf(key) === -1) {
                            col.push(key);
                        }
                    }
                }
                for (var i = 0; i < col.length; i++) {
                    var th = document.createElement("th");
                    th.innerHTML = col[i];
                    tr.appendChild(th);
                }
                for (var i = 0; i < result.length; i++) {

                    tr = table.insertRow(-1);

                    for (var j = 0; j < col.length; j++) {
                        var tabCell = tr.insertCell(-1);
                        tabCell.innerHTML = result[i][col[j]];
                    }
                }
                document.getElementById("Jsontable").innerHTML = "";
                document.getElementById("Jsontable").appendChild(table);

            }
        }


        http.open('GET','https://jsonplaceholder.typicode.com/posts',true);
        http.send();
};




