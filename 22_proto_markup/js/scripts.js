      $(document).ready(function() {
        $('[data-toggle="popover"]').popover({
          html: 'true',
          title: function() {
              return $('<div align="center"><p>Ваш регион - <b>Новосибирск и область</b></p></div>');
          },          
          content: function() {
              return $(
              '<div align="center">' + 
                '<p>Угадали?</p>' + 
                  '<div class="btn-group" role="group" aria-label="...">' +
                    '<button id="ok" type="button" class="btn btn-default">Да</button>' +
                    '<button id="no" type="button" class="btn btn-default" data-toggle="modal" data-target="#RegionsModal">Нет</button>' +
                  '</div>' +
              '</div>'
              );
          },
          placement: 'bottom',
        });

        $('[data-toggle="popover"]').popover('show');

        $('#ok').on('click', function() {
            $("[data-toggle='popover']").popover("destroy");
        });
      });

      function setRegion(region)
      {
        var RegionString = $(region).text();
        $('#NavbarRegionString').html('Регион: ' + RegionString + '<b class="caret"></b>');
        $('#InputFormRegionString').html('в ' + RegionString + '<span class="caret"></span>');
        $('#AppsRegionString').html(RegionString + '<span class="caret"></span>');
        $('#RegionsModal').modal('hide');
        $('[data-toggle="popover"]').popover('destroy');
      }
