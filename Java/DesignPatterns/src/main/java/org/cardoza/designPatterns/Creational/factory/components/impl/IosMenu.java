package org.cardoza.designPatterns.Creational.factory.components.impl;

import org.cardoza.designPatterns.Creational.factory.components.Menu;

public class IosMenu implements Menu {
    @Override
    public void showMenu() {
        System.out.println("Ios Menu");
    }
}
