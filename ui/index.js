function setFuelLevel(currentFuel) {
  if (currentFuel < 10.0) {
    $(".fuel").addClass('reserve-fuel');
  } else {
    $(".fuel").removeClass('reserve-fuel');
  }
}

function setSpeed(currentSpeed, padding) {
    var zeroes = new Array(padding+1).join("0");
    return (zeroes + currentSpeed).slice(-padding);
}

function setOilLevel(currentOil) {
  if (currentOil < 2.0) {
    $(".oil").addClass('out-oil');
  } else {
    $(".oil").removeClass('out-oil');
  }
}

$(function() {
  window.addEventListener('message', function(event) {
      if (event.data.isInVehicle) {
        setFuelLevel(event.data.fuel)
        setOilLevel(+event.data.oil)
        $("#container").addClass('isInVehicle');
        $(".speed").html(setSpeed(+event.data.speed.toFixed(), 3));
        $(".marcha").html(Math.round(event.data.marcha));
      } else {
        $("#container").removeClass('isInVehicle');
      }
  });
});