$(document).ready(function() {
  tinymce.init({
    selector: 'th.editable',
    inline: true,
    toolbar: 'undo redo',
    menubar: false
  });

  tinymce.init({
    selector: 'span.editable',
    inline: true,
    toolbar: 'undo redo',
    menubar: false
  });

  $('th.menu-title').hover(
    function() { $(this).addClass("menu-title-hover"); },
    function() { $(this).removeClass("menu-title-hover"); }
  )
  //$('th.menu-title').effect("highlight", {}, 1000);
/*
  $('th.menu-title').click(
    function() { alert('Edit Menu Title\nMenu ID Value: ' + $(this).attr('id') + '\nMenu Text Value: ' + $(this).text()); }
  )
*/
  $('span.plate-title').hover(
    function() { $(this).addClass("plate-title-hover"); },
    function() { $(this).removeClass("plate-title-hover"); }
  )
  //$('span.plate-title').effect("highlight", {}, 1000);
/*
  $('span.plate-title').click(
    function() { alert('Edit Plate Title\nPlate Title ID Value: ' + $(this).attr('id') + '\nPlate Title Text Value: ' + $(this).text()); }
  )
*/
  $('span.plate-description').hover(
    function() { $(this).addClass("plate-description-hover"); },
    function() { $(this).removeClass("plate-description-hover"); }
  )
  //$('span.plate-description').effect("highlight", {}, 1000);
/*
  $('span.plate-description').click(
    function() { alert('Edit Plate Description\nPlate Description ID Value: ' + $(this).attr('id') + '\nPlate Description Text Value: ' + $(this).text()); }
  )
*/
  $('span.plate-price').hover(
    function() { $(this).addClass("plate-price-hover"); },
    function() { $(this).removeClass("plate-price-hover"); }
  )
  //$('span.plate-price').effect("highlight", {}, 1000);
/*
  $('span.plate-price').click(
    function() { alert('Edit Plate Price\nPlate Price ID Value: ' + $(this).attr('id') + '\nPlate Price Text Value: ' + $(this).text()); }
  )
*/
  $('div.plate').hover(
    function() { $(this).addClass("plate-hover"); },
    function() { $(this).removeClass("plate-hover"); }
  )
  //$('div.plate').effect("highlight", {}, 1000);
});
