package org.cardoza.designPatterns.Behavioral.stratergy;

public class Client {

    public static void main(String[] args) {
        GoogleMaps googleMaps = new GoogleMaps();
        googleMaps.findPath("Delhi", "Agra", TransportationModes.CAR);
    }
}
