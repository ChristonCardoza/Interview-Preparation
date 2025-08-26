package org.cardoza.designPatterns.Creational.factory.components.impl;

import org.cardoza.designPatterns.Creational.factory.components.Menu;

public class AndroidMenu implements Menu {
    @Override
    public void showMenu() {
        System.out.println("Android Menu");
    }
}
