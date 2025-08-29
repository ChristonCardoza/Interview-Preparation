package org.cardoza.designPatterns.Behavioral.observer;

public class Client {

    public static void main(String[] args) {

        Flipkart flipkart = Flipkart.getInstance();

        EmailService emailService = new EmailService();
        InventoryService inventoryService = new InventoryService();
        InvoiceGenerator invoiceGenerator = new InvoiceGenerator();

        flipkart.onOrderPlaced();

        System.out.println("*".repeat(100));

        flipkart.unRegisterSubscriber(inventoryService);
        flipkart.onOrderPlaced();
    }
}
