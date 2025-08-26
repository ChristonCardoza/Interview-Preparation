package org.cardoza.designPatterns.Creational.factory;

public class UIFactoryFactory {

    public static UIFactory getUIFactory(SupportedPlatforms platform){
        if(platform.equals(SupportedPlatforms.ANDROID)){
            return new AndroidUIFactory();
        } else if (platform.equals(SupportedPlatforms.IOS)) {
            return new IosUIFactory();
        } else {
            return null;
        }
    }
}
