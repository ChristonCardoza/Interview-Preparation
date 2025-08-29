package org.cardoza.designPatterns.Behavioral.stratergy;

public class PathCalculatorFactory {

    private static CarPathCalculator carPathCalculator = new CarPathCalculator();
    private static BikePathCalculator bikePathCalculator = new BikePathCalculator();
    private static WalkPathCalculator walkPathCalculator = new WalkPathCalculator();

    public static PathCalculatorStrategy getPathCalculatorForMode(TransportationModes mode) {
        if(mode.equals(TransportationModes.CAR)){
            return carPathCalculator;
        } else if(mode.equals(TransportationModes.BIKE)){
            return bikePathCalculator;
        } else {
            return walkPathCalculator;
        }
    }
}
