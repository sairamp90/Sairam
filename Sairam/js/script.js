
   $(document).ready(function(){
        $("button").click(function(){
        $.ajax({
  url: "http://samples.openweathermap.org/data/2.5/forecast/daily?zip=94040&appid=b6907d289e10d714a6e88b30761fae22",
      type: "get",
dataType: "json",

}).done(function(resp){
 var resp_str = JSON.stringify(resp);
 $('#monitor_data').append(resp_str);
 var city_obj = resp.city;
 var list_obj = resp.list;
 for (var i = 0; i < list_obj.length; i++) {
    
 var formatted_html = "Location : " + city_obj.name + "</br>" +
 					  "Country : " + city_obj.country + "</br>" +					  "Main : " + list_obj[i].weather[0].main+"</br>"+
                      "Description : " + list_obj[i].weather[0].description+"</br>"+
                      "DT : " + list_obj[i].dt+ "</br>" +
                      "Pressure : " + list_obj[i].pressure+"</br>"+
                      "Humidity : " + list_obj[i].humidity+"</br>"+
                      "Speed : " + list_obj[i].speed+ "</br>" +
                      "Rain : " + list_obj[i].rain+ "</br>" +
                      "Clouds : " + list_obj[i].clouds+ "</br>"+
                      "</br>"+"</br>";
                      
 					   ;
 $("#formatted_data").append(formatted_html);}
})})
});
