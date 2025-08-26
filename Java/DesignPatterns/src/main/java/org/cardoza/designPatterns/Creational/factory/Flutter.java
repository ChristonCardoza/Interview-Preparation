package org.cardoza.designPatterns.Creational.factory;

public class Flutter {

    void refreshUI() {
        System.out.println("Refreshing UI");
    }

    void setTheme() {
        System.out.println("Setting theme");
    }

    UIFactory createFactory(SupportedPlatforms platform){

//        if(platform.equals(SupportedPlatforms.ANDROID)){
//            return new AndroidUIFactory();
//        }else {
//            return new IosUIFactory();
//        }

        // TO manu if-else statement , hence violation of OCP

        // so implement practice factory
        return UIFactoryFactory.getUIFactory(platform);
    }
}
