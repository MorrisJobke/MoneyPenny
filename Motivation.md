# MoneyPenny

I want to track easily my expenses on my smartphone. Just get it out and quickly enter the amount I just spend. It should be roughly categorized and provide some overview how much was spend compared to the months/years before.

Additionally it should be easy and hassle-free to get a second device hooked up to the same expense tracking. (this is where all existing apps I tried failed really hard) I don't want to use a shared Dropbox, iCloud, Google or whatever account for this.

As of now this should only be an iOS/Android app.

## Expenses

* easy input of expenses/incomes (amount, text, category, date)
* amount: number pad, autocomplete/proposals of 3 most used amounts
* text: proposals of 3-5 most used/recent used
* category: autodetect based on text & most used/recent categories
* date: today, quick selector for yesterday/day before yesterday
* other apps: input of name in Scanbot, receipts (parse expense based on photo - later™)

## Recurring expenses

* monthly recurring expenses/incomes
* allow to skip a month
* same input as above, but with additional repetition scale (x month(s), x week(s)) - default once per month

## Savings

* for special events (I want to have 1500 € in 6 months for a travel)
* for generic safeguards (I want to have 2000 € always available for emergencies)

## Budgets

* allow to specify a budget per category
* show if budget reached
* what happens at end of month if budget overfull/not reached?

## Sync

* sync by a simple token - no accounts, no sharing, no hassle - just a token - enter it on two devices and done
* allow to share a token between devices to use the same money tracking across multiple devices

## Overview and stats

* expenses per month/category in a graph to see trends in time
* income/expenses ratio

## Initial balance

* optional: enter the initial amount per account
* allow for multiple accounts
* allow to enter amount at any given point in time
	* January: a: 500 €, b: 700 €, c: 50 €
	* March: a: 700 €, b: 400 €, c: 20 €
	* expenses: 1000 €, income: 900, +/- from diff between January-March: -130 €
	* missing expenses of 130 €: automatically add this as expense distributed over the time span: 65 € per month