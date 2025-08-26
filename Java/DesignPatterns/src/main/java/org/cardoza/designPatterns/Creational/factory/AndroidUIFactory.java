package org.cardoza.designPatterns.Creational.factory;

import org.cardoza.designPatterns.Creational.factory.components.Button;
import org.cardoza.designPatterns.Creational.factory.components.Menu;
import org.cardoza.designPatterns.Creational.factory.components.impl.AndroidButton;
import org.cardoza.designPatterns.Creational.factory.components.impl.AndroidMenu;

public class AndroidUIFactory implements UIFactory{
    @Override
    public Button createButton() {
        return new AndroidButton();
    }

    @Override
    public Menu createMenu() {
        return new AndroidMenu();
    }
}
