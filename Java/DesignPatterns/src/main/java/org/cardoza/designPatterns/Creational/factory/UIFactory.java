package org.cardoza.designPatterns.Creational.factory;

import org.cardoza.designPatterns.Creational.factory.components.Button;
import org.cardoza.designPatterns.Creational.factory.components.Menu;

public interface UIFactory {

    Button createButton();

    Menu createMenu();

}
