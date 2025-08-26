package org.cardoza.designPatterns.Creational.factory.components.impl;

import org.cardoza.designPatterns.Creational.factory.components.Button;

public class AndroidButton implements Button {
    @Override
    public void showButton() {
        System.out.println("Android Button");
    }
}
