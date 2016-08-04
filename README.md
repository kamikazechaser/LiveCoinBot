# LiveCoinBot
A :zap: Fast Crypto-Currency Bot For Fetching **Real-time** Charts, Market Prices and Network Statistics.

[![Build Status](https://travis-ci.org/kamikazechaser/LiveCoinBot.svg?branch=master)](https://travis-ci.org/kamikazechaser/LiveCoinBot)
[![https://github.com/kamikazechaser/LiveCoinBot/blob/master/LICENSE.md](https://img.shields.io/badge/license-GNU%20GPLv3-lightgrey.svg)](https://github.com/kamikazechaser/LiveCoinBot/blob/master/LICENSE.md)
[![https://telegram.me/LiveCoinBot](https://img.shields.io/badge/%F0%9F%92%AC_Telegram-LiveCoin%20Bot-blue.svg)](https://telegram.me/LiveCoinBot)
[![https://telegram.me/kamikazechaser](https://img.shields.io/badge/%F0%9F%92%AC_Telegram-kamikazechaser-blue.svg)](https://telegram.me/kamikazechaser)
[![devDependency Status](https://david-dm.org/kamikazechaser/LiveCoinBot.svg)](https://david-dm.org/kamikazechaser/LiveCoinBot.svg#info=Dependencies)


## Commands

### Stats Commands

*This section relates to the BitCoin Mining network. Halving is a phenomnon where the reward per block will be halved from 25 BitCoins to 12.5 Bitcoins.*

Command | Description
--- | ---
/halving | Returns number of blocks remaining to the "halving".
/blocktime | Returns estimated time taken to mine a block.
/blocksmined | Returns the number of blocks mined today.
/hashrate | Returns estimated BTC network hash rate in GH/s.
/difficulty | Returns the current BitCoin difficulty target.

### Markets Commands

Command | Description
--- | ---
/btcusd | Returns the current BitCoin market price in US Dollars.
/btcgbp | Returns the current BitCoin market price in Sterling Pounds.
/btcrub | Returns the current BitCoin market price in Russian Roubles.
/btceur | Returns the current BitCoin market price in Euros.
/btccny | Returns the current BitCoin market price in Chinese Yuan.
/ltcusd | Returns the current LiteCoin market price in US Dollars.
/ethusd | Returns the current Ethereum market price in US Dollars.[reply] | set up a reply to an hashtag

### Charts Commands

*The bot fetches charts in real-time every single time.The charts exhibit a line which is the BitCoin market price and Red/Green bars which indicate a +/- in the net volume traded on BitFinex, where volume is the amount of amount of bitcoin traded in either selling of it or buying.*

Command | Description
--- | ---
/chartdaily | Returns The Daily Trading Chart.
/chartweekly | Returns The Weekly Trading Chart.
/chartmonthly | Returns The Monthly Trading Chart.
/chartquarterly | Returns The Quarterly Trading Chart.
/chartyearly | Returns The Yearly Trading Chart.
/chartalltime | Returns The All-Time Trading Chart.
/charthashrate | Returns The Weekly Bit-Coin Network Statistics.


### Features Checklist

- [x] Real-Time Charts
- [x] Real-Time Market Prices
- [x] Real-Time Networks Statistics
- [ ] Fully Inline
- [ ] Add BTC transaction Details Command
- [ ] Add Block Details
- [ ] Add News Command

## License
 
    LiveCoinBot
    Copyright (C) 2016 Mohammed Sohail <kamikazechaser.github.io>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
