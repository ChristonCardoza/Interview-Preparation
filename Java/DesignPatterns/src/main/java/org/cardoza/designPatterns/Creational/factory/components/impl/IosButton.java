package org.cardoza.designPatterns.Creational.factory.components.impl;

import org.cardoza.designPatterns.Creational.factory.components.Button;

public class IosButton implements Button {
    @Override
    public void showButton() {
        System.out.println("Ios Menu");
    }
}
