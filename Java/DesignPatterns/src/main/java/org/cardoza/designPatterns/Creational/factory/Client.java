package org.cardoza.designPatterns.Creational.factory;

import org.cardoza.designPatterns.Creational.factory.components.Button;
import org.cardoza.designPatterns.Creational.factory.components.Menu;

public class Client {

    public static void main(String[] args) {
        Flutter flutter = new Flutter();
        UIFactory uiFactory = flutter.createFactory(SupportedPlatforms.ANDROID);

        Button button = uiFactory.createButton();
        button.showButton();

        Menu menu = uiFactory.createMenu();
        menu.showMenu();
    }
}
