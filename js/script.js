var distritos;
var latitud ;
var longitud ;
var zom;
var valortotal = 600000;
var valortotal2 = 80000;
var porcetotal = 100;
var sumatotal;
$.getJSON('json/distrito.json', function(data){
    distritos=data;
    for (var i = 0; i < distritos.length; i++) {
      $('#aquidist').append('<option>'+distritos[i]['name']+'</option>');
      if (distritos[i]['name'] == 'Todos') {
        latitud = distritos[i]['lat'];
        longitud = distritos[i]['lng'];
        zom = distritos[i]['zom'];
        $('#inter').attr("title", distritos[i]['eje']+" m2");
        $('#inter1').attr("title", distritos[i]['decla']+" m2");
        $('#inter2').attr("title", distritos[i]['dese']+" m2");
        $('#inter3').attr("title", distritos[i]['ries']+" m2");
        $('#inter4').attr("title", distritos[i]['cul']+" m2");
        var inter = distritos[i]['eje'];
        var formu = (porcetotal * inter) /valortotal;
        $('#inter').css('width', formu+'%');
        var inter1 = distritos[i]['decla'];
        var formu1 = (porcetotal * inter1) /valortotal;
        $('#inter1').css('width', formu1+'%');
        var inter2 = distritos[i]['dese'];
        var formu2 = (porcetotal * inter2) /valortotal;
        $('#inter2').css('width', formu2+'%');
        var inter3 = distritos[i]['ries'];
        var formu3 = (porcetotal * inter3) /valortotal;
        $('#inter3').css('width', formu3+'%');
        var inter4 = distritos[i]['cul'];
        var formu4 = (porcetotal * inter4) /valortotal;
        $('#inter4').css('width', formu4+'%');
        sumatotal = inter + inter1 + inter2 + inter3 +inter4;
        var sumadec = sumatotal.toFixed(2);
        $('.cajatotal').append('<h2>Total = '+sumadec+' m2</h2>')
        initMap(latitud,longitud,zom);

      }
    }
    $("#aquidist").change(function() {
      var seleccionado = $('#aquidist option:selected').text();
        for (var i = 0; i < distritos.length; i++) {
          if (distritos[i]['name'] == seleccionado & seleccionado != "Todos") {
            latitud = distritos[i]['lat'];
            longitud = distritos[i]['lng'];
            zom = distritos[i]['zom'];
            $('#inter').attr("data-original-title", distritos[i]['eje']+" m2");
            $('#inter1').attr("data-original-title", distritos[i]['decla']+" m2");
            $('#inter2').attr("data-original-title", distritos[i]['dese']+" m2");
            $('#inter3').attr("data-original-title", distritos[i]['ries']+" m2");
            $('#inter4').attr("data-original-title", distritos[i]['cul']+" m2");

            initMap(latitud,longitud,zom);
            $("#detadistri").fadeIn('slow');
          }
          if (distritos[i]['name'] == seleccionado & seleccionado == "Todos") {
            latitud = distritos[i]['lat'];
            longitud = distritos[i]['lng'];
            zom = distritos[i]['zom'];
            $('#inter').attr("data-original-title", distritos[i]['eje']+" m2");
            $('#inter1').attr("data-original-title", distritos[i]['decla']+" m2");
            $('#inter2').attr("data-original-title", distritos[i]['dese']+" m2");
            $('#inter3').attr("data-original-title", distritos[i]['ries']+" m2");
            $('#inter4').attr("data-original-title", distritos[i]['cul']+" m2");

            initMap(latitud,longitud,zom);
            $("#detadistri").fadeOut('slow');
          }
          if (distritos[i]['name'] == seleccionado & seleccionado != "Todos" & seleccionado != "Ancón") {
            var inter = distritos[i]['eje'];
            var formu = (porcetotal * inter) /valortotal2;
            $('#inter').css('width', formu+'%');
            var inter1 = distritos[i]['decla'];
            var formu1 = (porcetotal * inter1) /valortotal2;
            $('#inter1').css('width', formu1+'%');
            var inter2 = distritos[i]['dese'];
            var formu2 = (porcetotal * inter2) /valortotal2;
            $('#inter2').css('width', formu2+'%');
            var inter3 = distritos[i]['ries'];
            var formu3 = (porcetotal * inter3) /valortotal2;
            $('#inter3').css('width', formu3+'%');
            var inter4 = distritos[i]['cul'];
            var formu4 = (porcetotal * inter4) /valortotal2;
            $('#inter4').css('width', formu4+'%');
            sumatotal = inter + inter1 + inter2 + inter3 +inter4;
            var sumadec = sumatotal.toFixed(2);
            $('.cajatotal').empty();
            $('.cajatotal').append('<h2>Total = '+sumadec+' m2</h2>')
          }
          if (distritos[i]['name'] == seleccionado & seleccionado == "Todos") {
            var inter = distritos[i]['eje'];
            var formu = (porcetotal * inter) /valortotal;
            $('#inter').css('width', formu+'%');
            var inter1 = distritos[i]['decla'];
            var formu1 = (porcetotal * inter1) /valortotal;
            $('#inter1').css('width', formu1+'%');
            var inter2 = distritos[i]['dese'];
            var formu2 = (porcetotal * inter2) /valortotal;
            $('#inter2').css('width', formu2+'%');
            var inter3 = distritos[i]['ries'];
            var formu3 = (porcetotal * inter3) /valortotal;
            $('#inter3').css('width', formu3+'%');
            var inter4 = distritos[i]['cul'];
            var formu4 = (porcetotal * inter4) /valortotal;
            $('#inter4').css('width', formu4+'%');
            sumatotal = inter + inter1 + inter2 + inter3 +inter4;
            var sumadec = sumatotal.toFixed(2);
            $('.cajatotal').empty();
            $('.cajatotal').append('<h2>Total = '+sumadec+' m2</h2>')
          }
          if (distritos[i]['name'] == seleccionado & seleccionado == "Ancón") {
            var inter = distritos[i]['eje'];
            var formu = (porcetotal * inter) /valortotal;
            $('#inter').css('width', formu+'%');
            var inter1 = distritos[i]['decla'];
            var formu1 = (porcetotal * inter1) /valortotal;
            $('#inter1').css('width', formu1+'%');
            var inter2 = distritos[i]['dese'];
            var formu2 = (porcetotal * inter2) /valortotal;
            $('#inter2').css('width', formu2+'%');
            var inter3 = distritos[i]['ries'];
            var formu3 = (porcetotal * inter3) /valortotal;
            $('#inter3').css('width', formu3+'%');
            var inter4 = distritos[i]['cul'];
            var formu4 = (porcetotal * inter4) /valortotal;
            $('#inter4').css('width', formu4+'%');
            sumatotal = inter + inter1 + inter2 + inter3 +inter4;
            var sumadec = sumatotal.toFixed(2);
            $('.cajatotal').empty();
            $('.cajatotal').append('<h2>Total = '+sumadec+' m2</h2>')
          }
        }
        $('#aquiarea').empty();
        $('#aquiproye').empty();
        $.getJSON('json/datasef.json', function(data){
          var distri = $('#aquidist option:selected').text();
          var datarea =[];
          for (var i = 0; i < data.length; i++) {
            var nomarea = data[i]['nombarea'];

            if (data[i]['muni'] == distri) {
            //  $('#aquiarea').append('<option>'+nomarea+'</option>');
            datarea.push(nomarea);
            }
          }
          var SinDuplicados = [];
          var SinDuplicados = datarea.filter(function(elem, pos) {
             return datarea.indexOf(elem) == pos;
          });
          for (var i = 0; i < SinDuplicados.length; i++) {
            $('#aquiarea').append('<option>'+SinDuplicados[i]+'</option>');
          }
          var detaarea = $('#aquiarea option:selected').text();
          for (var i = 0; i < data.length; i++) {
           if (data[i]['nombarea'] == detaarea) {
             $('#aquiproye').append('<option>'+data[i]['nombproyect']+'</option>');
             console.log(data[i]['nombproyect']);
           }
          }
          $('.detapro').empty();
          $('.galery > div').css('display','none');
          var detaproy = $('#aquiproye option:selected').text();
           for (var i = 0; i < data.length; i++) {
             if (data[i]['nombarea'] == detaarea && data[i]['nombproyect'] == detaproy) {
               $('.detapro').append('<h2><b>'+data[i]['nombproyect']+'</b></h2><br>');
               $('.detapro').append('<p><b>Empresa : </b>'+data[i]['empresa']+'</p>');
               $('.detapro').append('<p><b>Descripción : </b>'+data[i]['descri']+'</p>');
               $('.detapro').append('<p><b>Alcalde : </b>'+data[i]['alcalde']+'</p>');
               $('.detapro').append('<p><b>Tipo de Iniciativa : </b>'+data[i]['tipoinicia']+'</p>');
               $('.detapro').append('<p><b>Área afectada : </b>'+data[i]['areafec']+' m2</p>');
               $('.detapro').append('<p><b>Estado actual : </b>'+data[i]['estadoactual']+'</p>');
               console.log(data[i]['imagen']);
               $('#'+data[i]['imagen']).css('display','block');
             }
           }
           $("#aquiproye").change(function() {
             $('.detapro').empty();
             $('.galery > div').css('display','none');
             var detaarea = $('#aquiarea option:selected').text();
             var detaproy = $('#aquiproye option:selected').text();
              for (var i = 0; i < data.length; i++) {
                if (data[i]['nombarea'] == detaarea && data[i]['nombproyect'] == detaproy) {
                  $('.detapro').append('<h2><b>'+data[i]['nombproyect']+'</b></h2><br>');
                  $('.detapro').append('<p><b>Empresa : </b>'+data[i]['empresa']+'</p>');
                  $('.detapro').append('<p><b>Descripción : </b>'+data[i]['descri']+'</p>');
                  $('.detapro').append('<p><b>Alcalde : </b>'+data[i]['alcalde']+'</p>');
                  $('.detapro').append('<p><b>Tipo de Iniciativa : </b>'+data[i]['tipoinicia']+'</p>');
                  $('.detapro').append('<p><b>Área afectada : </b>'+data[i]['areafec']+' m2</p>');
                  $('.detapro').append('<p><b>Estado actual : </b>'+data[i]['estadoactual']+'</p>');
                  console.log(data[i]['imagen']);
                  $('#'+data[i]['imagen']).css('display','block');
                }
              }
           });
        });
     });

});
var marker;
      function initMap(latitud,longitud,zom) {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: latitud, lng: longitud},
          zoom: zom
        });
        var markers;

        $.getJSON('/json/marker.json', function(data){
          markers = data;
          for (var i = 0; i < markers.length; i++) {
            marker = new google.maps.Marker({
                      map: map,
                      draggable: true,
                      color: "#000",
                      animation: google.maps.Animation.DROP,
                      title: ''+markers[i]['nom']+'',
                      position: {lat: markers[i]['lat'], lng: markers[i]['lon']}
            });
            attachSecretMessage(marker, markers[i]['nom']);
          }

        });
      }
      function attachSecretMessage(marker, markers) {
        var infowindow = new google.maps.InfoWindow({
          content: markers
        });

        marker.addListener('click', function() {
          infowindow.open(marker.get('map'), marker);
        });
      }
      function toggleBounce() {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    }

    $("#detadistri").click(function(){
      var detadistri1 = $('#aquidist option:selected').text();
      $(' #aquiarea').empty();
      $.getJSON('json/datasef.json', function(data){
        var distri = $('#aquidist option:selected').text();
        var datarea =[];
        for (var i = 0; i < data.length; i++) {
          var nomarea = data[i]['nombarea'];

          if (data[i]['muni'] == distri) {
          //  $('#aquiarea').append('<option>'+nomarea+'</option>');
          datarea.push(nomarea);
          }
        }
        var SinDuplicados = [];
        var SinDuplicados = datarea.filter(function(elem, pos) {
           return datarea.indexOf(elem) == pos;
        });
        for (var i = 0; i < SinDuplicados.length; i++) {
          $('#aquiarea').append('<option>'+SinDuplicados[i]+'</option>');
        }
        $("#aquiarea").change(function() {
          $('#aquiproye').empty();
          $('.detapro').empty();
          $('.galery > div').css('display','none');
          var detaarea = $('#aquiarea option:selected').text();
          for (var i = 0; i < data.length; i++) {
           if (data[i]['nombarea'] == detaarea) {
             $('#aquiproye').append('<option>'+data[i]['nombproyect']+'</option>');
             console.log(data[i]['nombproyect']);
           }
          }
          var detaproy = $('#aquiproye option:selected').text();
           for (var i = 0; i < data.length; i++) {
             if (data[i]['nombarea'] == detaarea && data[i]['nombproyect'] == detaproy) {
               $('.detapro').append('<h2><b>'+data[i]['nombproyect']+'</b></h2><br>');
               $('.detapro').append('<p><b>Empresa : </b>'+data[i]['empresa']+'</p>');
               $('.detapro').append('<p><b>Descripción : </b>'+data[i]['descri']+'</p>');
               $('.detapro').append('<p><b>Alcalde : </b>'+data[i]['alcalde']+'</p>');
               $('.detapro').append('<p><b>Tipo de Iniciativa : </b>'+data[i]['tipoinicia']+'</p>');
               $('.detapro').append('<p><b>Área afectada : </b>'+data[i]['areafec']+' m2</p>');
               $('.detapro').append('<p><b>Estado actual : </b>'+data[i]['estadoactual']+'</p>');
               $('#'+data[i]['imagen']).css('display','block');
             }
           }
        });
        $("#aquiproye").change(function() {
          $('.detapro').empty();
          $('.galery > div').css('display','none');
          var detaarea = $('#aquiarea option:selected').text();
          var detaproy = $('#aquiproye option:selected').text();
           for (var i = 0; i < data.length; i++) {
             if (data[i]['nombarea'] == detaarea && data[i]['nombproyect'] == detaproy) {
               $('.detapro').append('<h2><b>'+data[i]['nombproyect']+'</b></h2><br>');
               $('.detapro').append('<p><b>Empresa : </b>'+data[i]['empresa']+'</p>');
               $('.detapro').append('<p><b>Descripción : </b>'+data[i]['descri']+'</p>');
               $('.detapro').append('<p><b>Alcalde : </b>'+data[i]['alcalde']+'</p>');
               $('.detapro').append('<p><b>Tipo de Iniciativa : </b>'+data[i]['tipoinicia']+'</p>');
               $('.detapro').append('<p><b>Área afectada : </b>'+data[i]['areafec']+' m2</p>');
               $('.detapro').append('<p><b>Estado actual : </b>'+data[i]['estadoactual']+'</p>');
               console.log(data[i]['imagen']);
               $('#'+data[i]['imagen']).css('display','block');
             }
           }
        });
      });

      $(".pantalladeta").fadeIn('slow');
      $(".select2").fadeIn('slow');
      $(".select3").fadeIn('slow');
      $(".pantalladeta > h1").empty();
    });
      $("#regredistri").click(function(){
        $(".pantalladeta").fadeOut('slow');
        $(".select2").fadeOut('slow');
        $(".select3").fadeOut('slow');
      });
