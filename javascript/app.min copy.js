function centerMarkerOnMap(e, t) {
    e.flyTo(t.getLatLng(), 12)
}

function createAMarker(e, t, o) {
    var n = L.icon({
            iconUrl: "./assets/ip-address-images/icon-location.svg",
            iconSize: [32, 32],
            iconAnchor: [16, 32]
        }),
        a = L.marker([t.location.lat, t.location.lng], {
            icon: n
        }).addTo(e);
    centerMarkerOnMap(o, a), addMarkerEvents(a)
}

function addMarkerEvents(e) {
    e.on("mouseover", () => {
        e.bindPopup("lat: " + e.getLatLng().lat + ", long: " + e.getLatLng().lng)
    })
}

function isAnIP(e) {
    var t = [],
        o = 0;
    t = e.split(".");
    for (var n = 0, a = !0; a && n < t.length;)(o = parseInt(t[n])) ? n++ : a = !1;
    return a
}

function convertNullToSpace(e) {
    return e ? " " + e : ""
}

function correctDomainFormat(e) {
    return e.includes("http://") ? e = e.toLowerCase().replace("http://", "") : e.toLowerCase().includes("https://") && (e = e.toLowerCase().replace("https://", "")), e.endsWith("/") && (e[e.length - 1] = "", e = e.substring(0, e.length - 1)), console.log(e + "1"), e
}

function getInformation(e, t, o) {
    var n = "",
        a = {},
        i = "at_22QyA1gO4QyimkLR9pVl5gWqdWLc9";
    ajaxFunction(a = "" == e ? {
        apiKey: i
    } : isAnIP(e) ? {
        apiKey: i,
        ipAddress: n = e
    } : {
        apiKey: i,
        domain: correctDomainFormat(e)
    }, t, o)
}

function ajaxFunction(e, t, o) {
    $.ajax({
        url: "https://geo.ipify.org/api/v2/country,city?",
        data: e,
        success: function(n) {
            console.log(e), displayData(n, t, o)
        },
        error: (e, t, o) => alert("IP address or domain wasn't recognized")
    })
}

function displayData(e, t, o) {
    document.getElementById("ip").innerText = e.ip, document.getElementById("location").innerText = e.location.country + ", " + e.location.region + convertNullToSpace(e.location.city) + convertNullToSpace(e.location.postalCode), document.getElementById("timezone").innerText = "UTC-" + e.location.timezone, document.getElementById("isp").innerText = e.isp, createAMarker(t, e, o)
}

function getPermission(e, t, o) {
    "" == o ? confirm("Permission to retrieve IP address") && getInformation(o, e, t) : getInformation(o, e, t)
}
$(document).ready(function() {
    var e = L.map("map", {
        zoomControl: !1,
        minZoom: 3
    }).setView([52.8067, -2.1207], 9);
    L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery \xa9 <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken: "pk.eyJ1IjoiY25vcmYiLCJhIjoiY2t3M254MzRnMGN5ajJ4cHh3eWRyNjNsNyJ9.Juf1sSTeP4kgSornOTVC9Q"
    }).addTo(e), L.control.zoom({
        position: "bottomright"
    }).addTo(e);
    var t = L.layerGroup().addTo(e),
        o = document.getElementById("search");
    document.getElementById("submit").addEventListener("click", n => {
        n.preventDefault(), t.clearLayers(), getPermission(t, e, o.value)
    })
});

function centerMarkerOnMap(e, t) {
    e.flyTo(t.getLatLng(), 12)
}

function createAMarker(e, t, o) {
    var n = L.icon({
            iconUrl: "./assets/ip-address-images/icon-location.svg",
            iconSize: [32, 32],
            iconAnchor: [16, 32]
        }),
        a = L.marker([t.location.lat, t.location.lng], {
            icon: n
        }).addTo(e);
    centerMarkerOnMap(o, a), addMarkerEvents(a)
}

function addMarkerEvents(e) {
    e.on("mouseover", () => {
        e.bindPopup("lat: " + e.getLatLng().lat + ", long: " + e.getLatLng().lng)
    })
}

function isAnIP(e) {
    var t = [],
        o = 0;
    t = e.split(".");
    for (var n = 0, a = !0; a && n < t.length;)(o = parseInt(t[n])) ? n++ : a = !1;
    return a
}

function convertNullToSpace(e) {
    return e ? " " + e : ""
}

function correctDomainFormat(e) {
    return e.includes("http://") ? e = e.toLowerCase().replace("http://", "") : e.toLowerCase().includes("https://") && (e = e.toLowerCase().replace("https://", "")), e.endsWith("/") && (e[e.length - 1] = "", e = e.substring(0, e.length - 1)), console.log(e + "1"), e
}

function getInformation(e, t, o) {
    var n = "",
        a = {},
        i = "at_22QyA1gO4QyimkLR9pVl5gWqdWLc9";
    ajaxFunction(a = "" == e ? {
        apiKey: i
    } : isAnIP(e) ? {
        apiKey: i,
        ipAddress: n = e
    } : {
        apiKey: i,
        domain: correctDomainFormat(e)
    }, t, o)
}

function ajaxFunction(e, t, o) {
    $.ajax({
        url: "https://geo.ipify.org/api/v2/country,city?",
        data: e,
        success: function(n) {
            console.log(e), displayData(n, t, o)
        },
        error: (e, t, o) => alert("IP address or domain wasn't recognized")
    })
}

function displayData(e, t, o) {
    document.getElementById("ip").innerText = e.ip, document.getElementById("location").innerText = e.location.country + ", " + e.location.region + convertNullToSpace(e.location.city) + convertNullToSpace(e.location.postalCode), document.getElementById("timezone").innerText = "UTC-" + e.location.timezone, document.getElementById("isp").innerText = e.isp, createAMarker(t, e, o)
}

function getPermission(e, t, o) {
    ("" == o || " " == o) ? confirm("Permission to retrieve IP address") && getInformation(o, e, t): getInformation(o, e, t)
}
$(document).ready(function() {
    var e = L.map("map", {
        zoomControl: !1,
        minZoom: 3
    }).setView([52.8067, -2.1207], 9);
    L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery \xa9 <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken: "pk.eyJ1IjoiY25vcmYiLCJhIjoiY2t3M254MzRnMGN5ajJ4cHh3eWRyNjNsNyJ9.Juf1sSTeP4kgSornOTVC9Q"
    }).addTo(e), L.control.zoom({
        position: "bottomright"
    }).addTo(e);
    var t = L.layerGroup().addTo(e),
        o = document.getElementById("search");
    document.getElementById("submit").addEventListener("click", n => {
        n.preventDefault(), t.clearLayers(), getPermission(t, e, o.value)
    })
});