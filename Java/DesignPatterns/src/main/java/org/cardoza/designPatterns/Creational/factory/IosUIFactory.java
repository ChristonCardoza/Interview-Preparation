package org.cardoza.designPatterns.Creational.factory;

import org.cardoza.designPatterns.Creational.factory.components.Button;
import org.cardoza.designPatterns.Creational.factory.components.Menu;
import org.cardoza.designPatterns.Creational.factory.components.impl.IosButton;
import org.cardoza.designPatterns.Creational.factory.components.impl.IosMenu;

public class IosUIFactory implements UIFactory{
    @Override
    public Button createButton() {
        return new IosButton();
    }

    @Override
    public Menu createMenu() {
        return new IosMenu();
    }
}
