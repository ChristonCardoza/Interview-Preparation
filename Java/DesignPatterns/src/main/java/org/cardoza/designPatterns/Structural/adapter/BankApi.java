package org.cardoza.designPatterns.Structural.adapter;

public interface BankApi {

    double getBalance(String accountNumber);

    boolean sendMoney(String fromAcc, String toAcc, double amount);
}
