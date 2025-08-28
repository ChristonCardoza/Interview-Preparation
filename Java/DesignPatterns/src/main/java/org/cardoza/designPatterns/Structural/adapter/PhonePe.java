package org.cardoza.designPatterns.Structural.adapter;

public class PhonePe {

    public static void main(String[] args) {
        BankApi bankApi = new ICICIApiAdapter();

        String rajatAccNO = "1234";
        String sharmiliAccNo = "4321";

        double amount = 1000.0;

        bankApi.sendMoney(rajatAccNO, sharmiliAccNo, amount);
    }
}
