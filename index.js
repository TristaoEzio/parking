var parking = {
    name: "Estacar",
    carSpaces: 120,
    booked: 56,
    checkAvailability: function() {
        return this.carSpaces - this.booked;
    }
};

var elName = document.getElementById('parkingName');
elName.textContent = parking.name;

var elCarSpaces = document.getElementById('carSpaces');
elCarSpaces.textContent = parking.checkAvailability();

console.log(parking)
