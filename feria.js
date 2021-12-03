var distanciasRecorridasA = [];
var distanciasRecorridasB = [];
var distanciasRecorridasC = [];
var distanciasRecorridasD = [];
var cilindraje = [125, 150, 200, 250];
var cambioaceite = 6000;
var cambiotrasero = 5000;
var cambiodelantero = 10000;
var cambiodefrenos = 500;
var tanque = [9, 12.5, 14, 16];
var consumolitro = [38, 32, 23.5, 23];
var rest1 = 0;
var rest2 = 0;
var rest3 = 0;
var rest4 = 0;
var sumaDistancias1 = 0;
var sumaDistancias2 = 0;
var sumaDistancias3 = 0;
var sumaDistancias4 = 0;
i = 0;

while (i == 0) {
    var dc = parseInt(prompt("ingresa la distancia recorrida (km)"));
    var casos = parseInt(prompt("ingresa el cilindraje"));

    switch (casos) {
        case 125:
            console.log("Cilindraje" + + cilindraje[0])

            console.log(dc + " km recorridos")

            if (distanciasRecorridasA.length > 0) {

                for (var i = 0; i < distanciasRecorridasA.length; i++) {
                    sumaDistancias1 += distanciasRecorridasA[i];
                }
            }

            if (dc >= cambioaceite || sumaDistancias1 >= cambioaceite) {
                console.log("necesita cambio de aceite");
            } if (dc < cambioaceite) {
                rest1 = cambioaceite - dc;
                console.log("Aun no toca cambiode acite restan: " + rest1);
                distanciasRecorridasA.push(dc);
            }
            if (distanciasRecorridasB.length > 0) {

                for (var i = 0; i < distanciasRecorridasB.length; i++) {
                    sumaDistancias2 += distanciasRecorridasB[i];
                }
            }

            if (dc >= cambiotrasero || sumaDistancias2 >= cambiotrasero) {
                console.log("necesita cambio de neumatico trasero");
            } if (dc < cambiotrasero) {
                rest2 = cambiotrasero - dc;
                console.log("Aun no toca cambio  de neumatico trasero restan: " + rest2);
                distanciasRecorridasB.push(dc);
            }
            if (distanciasRecorridasC.length > 0) {

                for (var i = 0; i < distanciasRecorridasC.length; i++) {
                    sumaDistancias3 += distanciasRecorridasC[i];
                }
            }

            if (dc >= cambiodelantero || sumaDistancias3 >= cambiodelantero) {
                console.log("necesita cambio de neumatico delantero");
            } if (dc < cambiodelantero) {
                rest3 = cambiodelantero - dc;
                console.log("Aun no toca cambio de neumatico delantero restan: " + rest3);
                distanciasRecorridasC.push(dc);
            }
            if (distanciasRecorridasD.length > 0) {

                for (var i = 0; i < distanciasRecorridasD.length; i++) {
                    sumaDistancias4 += distanciasRecorridasD[i];
                }
            }

            if (dc >= cambiodefrenos || sumaDistancias4 >= cambiodefrenos) {
                console.log("necesita cambio de frenos");
            } if (dc < cambiodefrenos) {
                rest4 = cambiodefrenos - dc;
                console.log("Aun no toca cambio de frenos restan: " + rest4);
                distanciasRecorridasD.push(dc);
            }
            break;

        case 150:
            console.log("Cilindraje" + + cilindraje[1])

            console.log(dc + " km recorridos")

            if (distanciasRecorridasA.length > 0) {

                for (var i = 0; i < distanciasRecorridasA.length; i++) {
                    sumaDistancias1 += distanciasRecorridasA[i];
                }
            }

            if (dc >= cambioaceite || sumaDistancias1 >= cambioaceite) {
                console.log("necesita cambio de aceite");
            } if (dc < cambioaceite) {
                rest1 = cambioaceite - dc;
                console.log("Aun no toca cambiode acite restan: " + rest1);
                distanciasRecorridasA.push(dc);
            }
            if (distanciasRecorridasB.length > 0) {

                for (var i = 0; i < distanciasRecorridasB.length; i++) {
                    sumaDistancias2 += distanciasRecorridasB[i];
                }
            }

            if (dc >= cambiotrasero || sumaDistancias2 >= cambiotrasero) {
                console.log("necesita cambio de neumatico trasero");
            } if (dc < cambiotrasero) {
                rest2 = cambiotrasero - dc;
                console.log("Aun no toca cambio  de neumatico trasero restan: " + rest2);
                distanciasRecorridasB.push(dc);
            }
            if (distanciasRecorridasC.length > 0) {

                for (var i = 0; i < distanciasRecorridasC.length; i++) {
                    sumaDistancias3 += distanciasRecorridasC[i];
                }
            }

            if (dc >= cambiodelantero || sumaDistancias3 >= cambiodelantero) {
                console.log("necesita cambio de neumatico delantero");
            } if (dc < cambiodelantero) {
                rest3 = cambiodelantero - dc;
                console.log("Aun no toca cambio de neumatico delantero restan: " + rest3);
                distanciasRecorridasC.push(dc);
            }
            if (distanciasRecorridasD.length > 0) {

                for (var i = 0; i < distanciasRecorridasD.length; i++) {
                    sumaDistancias4 += distanciasRecorridasD[i];
                }
            }

            if (dc >= cambiodefrenos || sumaDistancias4 >= cambiodefrenos) {
                console.log("necesita cambio de frenos");
            } if (dc < cambiodefrenos) {
                rest4 = cambiodefrenos - dc;
                console.log("Aun no toca cambio de frenos restan: " + rest4);
                distanciasRecorridasD.push(dc);
            }
            break;

        case 200:
            console.log("Cilindraje" + + cilindraje[2])

            console.log(dc + " km recorridos")

            if (distanciasRecorridasA.length > 0) {

                for (var i = 0; i < distanciasRecorridasA.length; i++) {
                    sumaDistancias1 += distanciasRecorridasA[i];
                }
            }

            if (dc >= cambioaceite || sumaDistancias1 >= cambioaceite) {
                console.log("necesita cambio de aceite");
            } if (dc < cambioaceite) {
                rest1 = cambioaceite - dc;
                console.log("Aun no toca cambiode acite restan: " + rest1);
                distanciasRecorridasA.push(dc);
            }
            if (distanciasRecorridasB.length > 0) {

                for (var i = 0; i < distanciasRecorridasB.length; i++) {
                    sumaDistancias2 += distanciasRecorridasB[i];
                }
            }

            if (dc >= cambiotrasero || sumaDistancias2 >= cambiotrasero) {
                console.log("necesita cambio de neumatico trasero");
            } if (dc < cambiotrasero) {
                rest2 = cambiotrasero - dc;
                console.log("Aun no toca cambio  de neumatico trasero restan: " + rest2);
                distanciasRecorridasB.push(dc);
            }
            if (distanciasRecorridasC.length > 0) {

                for (var i = 0; i < distanciasRecorridasC.length; i++) {
                    sumaDistancias3 += distanciasRecorridasC[i];
                }
            }

            if (dc >= cambiodelantero || sumaDistancias3 >= cambiodelantero) {
                console.log("necesita cambio de neumatico delantero");
            } if (dc < cambiodelantero) {
                rest3 = cambiodelantero - dc;
                console.log("Aun no toca cambio de neumatico delantero restan: " + rest3);
                distanciasRecorridasC.push(dc);
            }
            if (distanciasRecorridasD.length > 0) {

                for (var i = 0; i < distanciasRecorridasD.length; i++) {
                    sumaDistancias4 += distanciasRecorridasD[i];
                }
            }

            if (dc >= cambiodefrenos || sumaDistancias4 >= cambiodefrenos) {
                console.log("necesita cambio de frenos");
            } if (dc < cambiodefrenos) {
                rest4 = cambiodefrenos - dc;
                console.log("Aun no toca cambio de frenos restan: " + rest4);
                distanciasRecorridasD.push(dc);
            }
            break;

        case 250:
            console.log("Cilindraje" + + cilindraje[3])

            console.log(dc + " km recorridos")

            if (distanciasRecorridasA.length > 0) {

                for (var i = 0; i < distanciasRecorridasA.length; i++) {
                    sumaDistancias1 += distanciasRecorridasA[i];
                }
            }

            if (dc >= cambioaceite || sumaDistancias1 >= cambioaceite) {
                console.log("necesita cambio de aceite");
            } if (dc < cambioaceite) {
                rest1 = cambioaceite - dc;
                console.log("Aun no toca cambiode acite restan: " + rest1);
                distanciasRecorridasA.push(dc);
            }
            if (distanciasRecorridasB.length > 0) {

                for (var i = 0; i < distanciasRecorridasB.length; i++) {
                    sumaDistancias2 += distanciasRecorridasB[i];
                }
            }

            if (dc >= cambiotrasero || sumaDistancias2 >= cambiotrasero) {
                console.log("necesita cambio de neumatico trasero");
            } if (dc < cambiotrasero) {
                rest2 = cambiotrasero - dc;
                console.log("Aun no toca cambio  de neumatico trasero restan: " + rest2);
                distanciasRecorridasB.push(dc);
            }
            if (distanciasRecorridasC.length > 0) {

                for (var i = 0; i < distanciasRecorridasC.length; i++) {
                    sumaDistancias3 += distanciasRecorridasC[i];
                }
            }

            if (dc >= cambiodelantero || sumaDistancias3 >= cambiodelantero) {
                console.log("necesita cambio de neumatico delantero");
            } if (dc < cambiodelantero) {
                rest3 = cambiodelantero - dc;
                console.log("Aun no toca cambio de neumatico delantero restan: " + rest3);
                distanciasRecorridasC.push(dc);
            }
            if (distanciasRecorridasD.length > 0) {

                for (var i = 0; i < distanciasRecorridasD.length; i++) {
                    sumaDistancias4 += distanciasRecorridasD[i];
                }
            }

            if (dc >= cambiodefrenos || sumaDistancias4 >= cambiodefrenos) {
                console.log("necesita cambio de frenos");
            } if (dc < cambiodefrenos) {
                rest4 = cambiodefrenos - dc;
                console.log("Aun no toca cambio de frenos restan: " + rest4);
                distanciasRecorridasD.push(dc);
            }
            break;

        case 5:
            i = 1;
            break;
    }

}