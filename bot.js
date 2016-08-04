'use strict'

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const tg = new Telegram.Telegram('229519093:AAH-2iZwLBE1y0RpARQN3fGSrGPgBr6kJpo')
var request = require('request');

class StatsController extends TelegramBaseController {
    hashrateHandler($) {
        request('https://blockchain.info/stats?format=json', (error, response, body) =>
            $.sendMessage('*Hash Rate:*' + ' ' + (Number(JSON.parse(body).hash_rate)).toFixed(2) + ' ' + 'GH/s', {
                parse_mode: 'Markdown'
            })
        )
    };

    blocksHandler($) {
        request('https://blockchain.info/stats?format=json', (error, response, body) =>
            $.sendMessage('*Blocks Mined Today:*' + ' ' + (JSON.parse(body).n_blocks_mined), {
                parse_mode: 'Markdown'
            })
        )
    };

    timeHandler($) {
        request('https://blockchain.info/stats?format=json', (error, response, body) =>
            $.sendMessage('*Times Between Blocks:*' + ' ' + (Number(JSON.parse(body).minutes_between_blocks)).toFixed(2) + ' ' + 'Minutes', {
                parse_mode: 'Markdown'
            })
        )
    };

    diffHandler($) {
        request('https://blockchain.info/stats?format=json', (error, response, body) =>
            $.sendMessage('*Difficulty:*' + ' ' + (Number(JSON.parse(body).difficulty)).toFixed(2), {
                parse_mode: 'Markdown'
            })
        )
    };

    allblocksHandler($) {
        request('https://blockexplorer.com/api/status?q=getBlockCount', (error, response, body) =>
            $.sendMessage('*All-Time Blocks Mined:*' + ' ' + (JSON.parse(body).blockcount) + ' ' + 'Blocks', {
                parse_mode: 'Markdown'
            })
        )
    };
    
    halvingHandler($) {
        request('https://blockexplorer.com/api/status?q=getBlockCount', (error, response, body) =>
            $.sendMessage('⚠️*Halving Complete. BTC Reward Per Block Is Now 12.5 BTC*⚠️', {
                parse_mode: 'Markdown'
            })
        )
    };

    lastblockHandler($) {
        request('https://blockexplorer.com/api/status?q=getLastBlockHash', (error, response, body) =>
            $.sendMessage('*Last Block:*' + ' ' + (JSON.parse(body).lastblockhash), {
                parse_mode: 'Markdown'
            })
        )
    };
    
    get routes() {
        return {
            '/difficulty': 'diffHandler',
            '/blocktime': 'timeHandler',
            '/blocksmined': 'blocksHandler',
            '/hashrate': 'hashrateHandler',
            '/lastblock': 'lastblockHandler',
            '/allblocks': 'allblocksblockHandler',
            '/halving': 'halvingHandler'

        }
    }
}

class MarketsController extends TelegramBaseController {
    btcusdHandler($) {
        request('https://api.bitfinex.com/v1/pubticker/btcusd.json', (error, response, body) =>
            $.sendMessage('*BitCoin Market Price:*' + ' ' + '$' + (Number(JSON.parse(body).last_price)).toFixed(2), {
                parse_mode: 'Markdown'
            })
        )
    };

    btcgbpHandler($) {
        request('https://blockchain.info/ticker', (error, response, body) =>
            $.sendMessage('*BitCoin Market Price:*' + ' ' + '£' + JSON.parse(body).GBP.last, {
                parse_mode: 'Markdown'
            })
        )
    };

    btcrubHandler($) {
        request('https://blockchain.info/ticker', (error, response, body) =>
            $.sendMessage('*BitCoin Market Price:*' + ' ' + '₽' + JSON.parse(body).RUB.last, {
                parse_mode: 'Markdown'
            })
        )
    };

    btceurHandler($) {
        request('https://blockchain.info/ticker', (error, response, body) =>
            $.sendMessage('*BitCoin Market Price:*' + ' ' + '€' + JSON.parse(body).EUR.last, {
                parse_mode: 'Markdown'
            })
        )
    };

    btccnyHandler($) {
        request('https://blockchain.info/ticker', (error, response, body) =>
            $.sendMessage('*BitCoin Market Price:*' + ' ' + '¥' + JSON.parse(body).CNY.last, {
                parse_mode: 'Markdown'
            })
        )
    };

    ethusdHandler($) {
        request('https://api.bitfinex.com/v1/pubticker/ethusd.json', (error, response, body) =>
            $.sendMessage('*Ethereum Market Price:*' + ' ' + '$' + JSON.parse(body).last_price, {
                parse_mode: 'Markdown'
            })
        )
    };

    ltcusdHandler($) {
        request('https://api.bitfinex.com/v1/pubticker/ltcusd.json', (error, response, body) =>
            $.sendMessage('*LiteCoin Market Price:*' + ' ' + '$' + JSON.parse(body).last_price, {
                parse_mode: 'Markdown'
            })
        )
    };

    get routes() {
        return {
            '/ltcusd': 'ltcusdHandler',
            '/ethusd': 'ethusdHandler',
            '/btccny': 'btccnyHandler',
            '/btceur': 'btceurHandler',
            '/btcrub': 'btcrubHandler',
            '/btcgbp': 'btcgbpHandler',
            '/btcusd': 'btcusdHandler'
        }
    }
}

class ChartsController extends TelegramBaseController {
    dailyHandler($) {
        $.sendPhoto({
            url: 'http://bitcoincharts.com/charts/chart.png?width=1307&m=bitfinexUSD&SubmitButton=Draw&r=1&i=&c=0&s=&e=&Prev=&Next=&t=T&b=&a1=&m1=10&a2=&m2=25&x=0&i1=&i2=&i3=&i4=&v=1&cv=0&ps=0&l=0&p=0&',
            filename: 'daily.png'
        })
    };

    alltimeHandler($) {
        $.sendPhoto({
            url: 'http://bitcoincharts.com/charts/chart.png?width=1307&m=bitfinexUSD&SubmitButton=Draw&r=&i=&c=0&s=&e=&Prev=&Next=&t=T&b=&a1=&m1=10&a2=&m2=25&x=0&i1=&i2=&i3=&i4=&v=1&cv=0&ps=0&l=0&p=0&',
            filename: 'alltime.png'
        })
    };

    monthlyHandler($) {
        $.sendPhoto({
            url: 'http://bitcoincharts.com/charts/chart.png?width=1307&m=bitfinexUSD&SubmitButton=Draw&r=30&i=&c=0&s=&e=&Prev=&Next=&t=T&b=&a1=&m1=10&a2=&m2=25&x=0&i1=&i2=&i3=&i4=&v=1&cv=0&ps=0&l=0&p=0&',
            filename: 'monthly.png'
        })
    };

    quarterlyHandler($) {
        $.sendPhoto({
            url: 'http://bitcoincharts.com/charts/chart.png?width=1307&m=bitfinexUSD&SubmitButton=Draw&r=120&i=&c=0&s=&e=&Prev=&Next=&t=T&b=&a1=&m1=10&a2=&m2=25&x=0&i1=&i2=&i3=&i4=&v=1&cv=0&ps=0&l=0&p=0&',
            filename: 'quarterly.png'
        })
    };

    yearlyHandler($) {
        $.sendPhoto({
            url: 'http://bitcoincharts.com/charts/chart.png?width=1307&m=bitfinexUSD&SubmitButton=Draw&r=360&i=&c=0&s=&e=&Prev=&Next=&t=T&b=&a1=&m1=10&a2=&m2=25&x=0&i1=&i2=&i3=&i4=&v=1&cv=0&ps=0&l=0&p=0&',
            filename: 'yearly.png'
        })

    };

    weeklyHandler($) {
        $.sendPhoto({
            url: 'http://bitcoincharts.com/charts/chart.png?width=1307&m=bitfinexUSD&SubmitButton=Draw&r=10&i=&c=0&s=&e=&Prev=&Next=&t=T&b=&a1=&m1=10&a2=&m2=25&x=0&i1=&i2=&i3=&i4=&v=1&cv=0&ps=0&l=0&p=0&',
            filename: 'weekly.png'
        })

    };

    hashchartHandler($) {
        $.sendPhoto({
            url: 'http://bitcoin.sipa.be/speed-lin-2k.png',
            filename: 'hash.png'
        })

    };

    get routes() {
        return {
            '/chartweekly': 'weeklyHandler',
            '/chartyearly': 'yearlyHandler',
            '/chartquarterly': 'quarterlyHandler',
            '/chartmonthly': 'monthlyHandler',
            '/chartalltime': 'alltimeHandler',
            '/chartdaily': 'dailyHandler',
            '/charthashrate': 'hashchartHandler'
        }
    }
}

class StartController extends TelegramBaseController {
    startHandler($) {
        $.runInlineMenu({
            layout: 2,
            method: 'sendMessage',
            params: ['Hi There! I Am A *Real-Time* Bot That Fetches The Latest CryptoCurrency Statistics And Market Prices.I Work In Both *Groups* And In *Private* ', {
                parse_mode: 'Markdown'
            }],
            menu: [
                {
                    text: '🔰Help',
                    callback: (callbackQuery) => {
                        $.runInlineMenu({
                            layout: 3,
                            method: 'sendMessage', //here you must pass the method name
                            params: ['*Use The Commands As Is*', {
                                parse_mode: 'Markdown'
                            }],
                            menu: [
                                {
                                    text: '🔌Stats Help', //text of the button
                                    callback: (callbackQuery) => {
                                        $.sendMessage('_BitCoin Mining Statistics_\n\nThis section relates to the BitCoin Mining network. Halving is a phenomnon where the reward per block will be halved from 25 BitCoins to 12.5 Bitcoins.\n\n/halving : *Returns number of blocks remaining to the "halving".*\n/blocktime : *Returns estimated time taken to mine a block.*\n/blocksmined : *Returns the number of blocks mined today.*\n/hashrate : *Returns estimated BTC network hash rate in GH/s.*\n/difficulty : *Returns the current BitCoin difficulty target.*', {
                                            parse_mode: 'Markdown'
                                        })
                                        tg.api.answerCallbackQuery(callbackQuery.id, {
                                            text: '🔌Stats Help',
                                            show_alert: false
                                        })
                                    }
                                             },
                                {
                                    text: '💰Markets Help',
                                    callback: (callbackQuery) => {
                                        $.sendMessage('_Market Prices In Realtime_\n\n/btcusd : *Returns the current BitCoin market price in US Dollars.*\n/btcgbp : *Returns the current BitCoin market price in Sterling Pounds.*\n/btcrub : *Returns the current BitCoin market price in Russian Roubles.*\n/btceur : *Returns the current BitCoin market price in Euros.*\n/btccny : *Returns the current BitCoin market price in Chinese Yuan.*\n/ltcusd : *Returns the current LiteCoin market price in US Dollars.*\n/ethusd : *Returns the current Ethereum market price in US Dollars.*', {
                                            parse_mode: 'Markdown'
                                        })
                                        tg.api.answerCallbackQuery(callbackQuery.id, {
                                            text: '💰Markets Help',
                                            show_alert: false
                                        })
                                    }
                                            },
                                {
                                    text: '📈Charts Help',
                                    callback: (callbackQuery) => {
                                        $.sendMessage('_Charts_\n\nThe bot fetches charts in real-time every single time.The charts exhibit a line which is the BitCoin market price and Red/Green bars which indicate a +/- in the net volume traded on BitFinex, where volume is the amount of amount of bitcoin traded in either selling of it or buying.\n\n/chartdaily : *Returns The Daily Trading Chart.*\n/chartweekly : *Returns The Weekly Trading Chart.*\n/chartmonthly : *Returns The Monthly Trading Chart.*\n/chartquarterly : *Returns The Quarterly Trading Chart.*\n/chartyearly : *Returns The Yearly Trading Chart.*\n/chartalltime : *Returns The All-Time Trading Chart.*\n/charthashrate : *Reurns The Bitcoin Network Chart*', {
                                            parse_mode: 'Markdown'
                                        })
                                        tg.api.answerCallbackQuery(callbackQuery.id, {
                                            text: '📈Charts Help',
                                            show_alert: false
                                        })
                                    }
                                            }
                                          ]
                        })
                        tg.api.answerCallbackQuery(callbackQuery.id, {
                            text: '🔰Showing Help',
                            show_alert: false
                        })

                    }
              },
                {
                    text: '🌀About',
                    callback: (callbackQuery) => {
                        $.sendMessage('`v 1.3`\n\n⚒*Made By :* @kamikazechaser\n\n❤️*Made With :* NodeJS\n\n⚡️*Powered By :* baum.xyz\n\n`Report Any Bugs Directly To Me!`', {
                            parse_mode: 'Markdown'
                        })
                        tg.api.answerCallbackQuery(callbackQuery.id, {
                            text: '🌀Showing About',
                            show_alert: false
                        })
                    }

                },
                {
                    text: '😺GitHub',
                    url: 'https://github.com/kamikazechaser/LiveCoinBot'

                    }

            ]
        })
    };

    masterhelpHandler($) {
        $.runInlineMenu({
            layout: 3,
            method: 'sendMessage', //here you must pass the method name
            params: ['*Use The Commands As Is*', {
                parse_mode: 'Markdown'
            }],
            menu: [
                {
                    text: '🔌Stats Help', //text of the button
                    callback: (callbackQuery) => {
                        $.sendMessage('_BitCoin Mining Statistics_\n\nThis section relates to the BitCoin Mining network. Halving is a phenomnon where the reward per block will be halved from 25 BitCoins to 12.5 Bitcoins.\n\n/halving : *Returns number of blocks remaining to the "halving".*\n/blocktime : *Returns estimated time taken to mine a block.*\n/blocksmined : *Returns the number of blocks mined today.*\n/hashrate : *Returns estimated BTC network hash rate in GH/s.*\n/difficulty : *Returns the current BitCoin difficulty target.*', {
                            parse_mode: 'Markdown'
                        })
                        tg.api.answerCallbackQuery(callbackQuery.id, {
                            text: '🔌Stats Help',
                            show_alert: false
                        })
                    }
                                             },
                {
                    text: '💰Markets Help',
                    callback: (callbackQuery) => {
                        $.sendMessage('_Market Prices In Realtime_\n\n/btcusd : *Returns the current BitCoin market price in US Dollars.*\n/btcgbp : *Returns the current BitCoin market price in Sterling Pounds.*\n/btcrub : *Returns the current BitCoin market price in Russian Roubles.*\n/btceur : *Returns the current BitCoin market price in Euros.*\n/btccny : *Returns the current BitCoin market price in Chinese Yuan.*\n/ltcusd : *Returns the current LiteCoin market price in US Dollars.*\n/ethusd : *Returns the current Ethereum market price in US Dollars.*', {
                            parse_mode: 'Markdown'
                        })
                        tg.api.answerCallbackQuery(callbackQuery.id, {
                            text: '💰Markets Help',
                            show_alert: false
                        })
                    }
                                            },
                {
                    text: '📈Charts Help',
                    callback: (callbackQuery) => {
                        $.sendMessage('_Charts_\n\nThe bot fetches charts in real-time every single time.The charts exhibit a line which is the BitCoin market price and Red/Green bars which indicate a +/- in the net volume traded on BitFinex, where volume is the amount of amount of bitcoin traded in either selling of it or buying.\n\n/chartdaily : *Returns The Daily Trading Chart.*\n/chartweekly : *Returns The Weekly Trading Chart.*\n/chartmonthly : *Returns The Monthly Trading Chart.*\n/chartquarterly : *Returns The Quarterly Trading Chart.*\n/chartyearly : *Returns The Yearly Trading Chart.*\n/chartalltime : *Returns The All-Time Trading Chart.*', {
                            parse_mode: 'Markdown'
                        })
                        tg.api.answerCallbackQuery(callbackQuery.id, {
                            text: '📈Charts Help',
                            show_alert: false
                        })
                    }
                                            }
                                          ]
        })
        tg.api.answerCallbackQuery(callbackQuery.id, {
            text: '🔰Showing Help',
            show_alert: false
        })
    };


    get routes() {
        return {
            '/start': 'startHandler',
            '/help': 'masterhelpHandler'


        }
    }
}

class OtherwiseController extends TelegramBaseController {
    handle() {
        console.log('Random Message From Telegram Detected')
    }
}

tg.router
    .when('/hashrate', new StatsController())
    .when('/halving', new StatsController())
    .when('/lastblock', new StatsController())
    .when('/allblocks', new StatsController())
    .when('/difficulty', new StatsController())
    .when('/blocktime', new StatsController())
    .when('/blocksmined', new StatsController())
    .when('/start', new StartController())
    .when('/help', new StartController())
    .when('/btcusd', new MarketsController())
    .when('/btcgbp', new MarketsController())
    .when('/btcrub', new MarketsController())
    .when('/btceur', new MarketsController())
    .when('/btccny', new MarketsController())
    .when('/ethusd', new MarketsController())
    .when('/ltcusd', new MarketsController())
    .when('/chartdaily', new ChartsController())
    .when('/chartmonthly', new ChartsController())
    .when('/chartquarterly', new ChartsController())
    .when('/chartyearly', new ChartsController())
    .when('/chartweekly', new ChartsController())
    .when('/chartalltime', new ChartsController())
    .when('/charthashrate', new ChartsController())
    .otherwise(new OtherwiseController())
