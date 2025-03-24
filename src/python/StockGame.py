import random
import pandas as pd
import os
from datetime import datetime

class StockMarketSimulator:
    def __init__(self, first_run=True):
        self.history_file = "stock_simulation_history.csv"
        self.stocks = self.load_latest_stock_prices() if not first_run else {f"Stock {i+1}": 100 for i in range(6)}
        self.stock_changes = {stock: [] for stock in self.stocks}
        self.previous_index = self.calculate_previous_index()

        if first_run and os.path.exists(self.history_file):
            os.remove(self.history_file)  # Clear file on first run

    def load_latest_stock_prices(self):
        """Loads the most recent stock prices from the CSV file."""
        if os.path.exists(self.history_file):
            df = pd.read_csv(self.history_file)
            latest_prices = df.groupby("Stock").last()["Final Price"].to_dict()
            return latest_prices
        else:
            return {f"Stock {i+1}": 100 for i in range(6)}  # Default to 100 if no history exists

    def start(self):
        """Runs one simulation cycle."""
        print("\n--- Starting New Simulation ---")
        if self.full_market():
            self.market_fluctuation()
        else:
            self.stocks_investment()

        self.store_results()
        self.display_results()

    def full_market(self):
        """Decides whether the full market is involved (10% chance)."""
        market_event = random.choices([True, False], weights=[10, 90])[0]
        print(f"Full Market Event: {'Yes' if market_event else 'No'}")
        return market_event

    def market_fluctuation(self):
        """Handles full market impact."""
        positive = random.choices([True, False], weights=[55, 45])[0]
        if positive:
            change = random.choices([10, 20], weights=[60, 40])[0]
            print(f"Market Trend: Positive (+{change}%)")
            self.apply_market_change(change, "Full Market Positive")
        else:
            print("Market Trend: Negative")
            if self.financial_crisis():
                self.crisis_outcome()
            else:
                change = random.choices([-10, -20], weights=[70, 30])[0]
                print(f"Market Decline: {change}%")
                self.apply_market_change(change, "Full Market Negative")

    def financial_crisis(self):
        """Determines if a financial crisis occurs (30% chance)."""
        crisis_event = random.choices([True, False], weights=[30, 70])[0]
        print(f"Financial Crisis: {'Yes' if crisis_event else 'No'}")
        return crisis_event

    def crisis_outcome(self):
        """Handles financial crisis impact."""
        if random.choices([True, False], weights=[20, 80])[0]:  # Crisis happens (20%)
            change = random.choices([-30, -40, -50], weights=[50, 30, 20])[0]
            print(f"CRISIS IMPACT: {change}% drop across all stocks!")
            self.apply_market_change(change, "Financial Crisis")
        else:
            change = random.choices([-10, -20], weights=[70, 30])[0]
            print(f"Minor Market Decline: {change}% drop across all stocks.")
            self.apply_market_change(change, "Minor Market Decline")

    def stocks_investment(self):
        """Handles stock investments based on multiple runs."""
        stock_choice = random.choices([1, 2, 3], weights=[80, 15, 5])[0]
        available_stocks = list(self.stocks.keys())

        selected_stocks = random.sample(available_stocks, min(stock_choice, len(available_stocks)))

        while len(selected_stocks) < stock_choice:
            selected_stocks.append(random.choice(available_stocks))

        print(f"Stock Investment: {stock_choice} cycles on {selected_stocks}")

        for stock in selected_stocks:
            positive = random.choices([True, False], weights=[55, 45])[0]

            if positive:
                change = random.choices([10, 20, 30], weights=[60, 30, 10])[0]
                print(f"{stock}: +{change}% (Positive Trend)")
                self.apply_stock_change(stock, change, "Stock Positive Trend")
            else:
                change = random.choices([-10, -20, -30], weights=[60, 30, 10])[0]
                print(f"{stock}: {change}% (Negative Trend)")
                self.apply_stock_change(stock, change, "Stock Negative Trend")

    def apply_market_change(self, change, reason):
        """Applies the same change to all stocks due to market-wide effects."""
        for stock in self.stocks:
            self.stocks[stock] += change
            self.stock_changes[stock].append((change, reason))

    def apply_stock_change(self, stock, change, reason):
        """Applies a change to a single stock due to investment choice."""
        self.stocks[stock] += change
        self.stock_changes[stock].append((change, reason))

    def calculate_stock_index(self):
        """Calculates the Stock Market Index (average of all stocks)."""
        return round(sum(self.stocks.values()) / len(self.stocks), 2)

    def calculate_previous_index(self):
        """Gets the previous stock index before the new simulation starts."""
        if os.path.exists(self.history_file):
            df = pd.read_csv(self.history_file)
            latest_prices = df.groupby("Stock").last()["Final Price"]
            return round(latest_prices.mean(), 2) if not latest_prices.empty else 100
        return 100  # Default index is 100 if no history

    def store_results(self):
        """Stores results in a CSV file for historical tracking."""
        data = []
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

        for stock, price in self.stocks.items():
            change_log = " | ".join([f"{c:+}% ({r})" for c, r in self.stock_changes[stock]])
            data.append([timestamp, stock, price, price - 100, change_log])

        df = pd.DataFrame(data, columns=["Timestamp", "Stock", "Final Price", "Total Change", "Change Details"])
        df.to_csv(self.history_file, mode='a', header=not os.path.exists(self.history_file), index=False)

    def display_results(self):
        """Displays all six stock prices and the Stock Index."""
        print("\n📊 **Latest Stock Prices & Changes**:")
        for stock, price in self.stocks.items():
            change_log = " | ".join([f"{c:+}% ({r})" for c, r in self.stock_changes[stock]])
            print(f"{stock}: {price} ({change_log})")

        stock_index = self.calculate_stock_index()
        trend = "📈 Rising" if stock_index > self.previous_index else "📉 Falling" if stock_index < self.previous_index else "⚖️ Stable"
        print(f"\n📊 **Stock Market Index: {stock_index}** ({trend})\n")


def main():
    """Handles user interaction to continue or end the simulation."""
    first_run = True

    while True:
        simulator = StockMarketSimulator(first_run=first_run)
        simulator.start()
        first_run = False

        user_input = input("\nRun simulation again? (y/n): ").strip().lower()
        if user_input != 'y':
            print("\nSimulation ended. Historical data is saved.")
            break


if __name__ == "__main__":
    main()
