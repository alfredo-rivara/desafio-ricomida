const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

$(document).ready(function () {
  $("#enviarCorreo").click(function () {
    window.alert("Correo enviado correctamente");
  });
});

$(document).ready(function () {
  $(".subtitulo").dblclick(function () {
    $(this).css({ color: "red" });
  });
});

$(document).ready(function () {
  $(".card-title").click(function () {
    $(".card").toggle();
  });
});
