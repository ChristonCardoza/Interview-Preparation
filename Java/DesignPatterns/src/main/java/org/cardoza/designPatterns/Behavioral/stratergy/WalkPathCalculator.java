package org.cardoza.designPatterns.Behavioral.stratergy;

public class WalkPathCalculator implements PathCalculatorStrategy{
    @Override
    public void findPath(String fromLocation, String toLocation) {
        System.out.println("Walking path");
    }
}
