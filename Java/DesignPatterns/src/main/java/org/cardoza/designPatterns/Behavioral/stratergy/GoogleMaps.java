package org.cardoza.designPatterns.Behavioral.stratergy;

public class GoogleMaps {

    public void findPath(String from, String to, TransportationModes mode) {
        PathCalculatorStrategy pathCalculatorStrategy = PathCalculatorFactory.getPathCalculatorForMode(mode);

        pathCalculatorStrategy.findPath(from, to);
    }
}
