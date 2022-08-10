import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function CurrencyAPI() {

    const [toExchange, setToExchange] = useState('USD')
    const [fromExchange, setFromExchange] = useState('USD')
    const [amount, setAmount] = useState(1)

    const [apiInfo, setApiInfo] = useState()

    const api_url = `https://api.apilayer.com/exchangerates_data/convert?to=${toExchange}&from=${fromExchange}&amount=${amount}&apikey=5nnWUUcj4NgzZaTLdVnSRtiENVAio915`

    // myHeaders.append("apikey", "5nnWUUcj4NgzZaTLdVnSRtiENVAio915");



    useEffect(() => {
        axios.get(api_url)
            .then(response => {
                setApiInfo(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [api_url]);

    const handleToChange = (e) => {
        if (e.target.value) {
            setToExchange(e.target.value)
        }

    }

    const handleFromChange = (e) => {
        if (e.target.value) {
            setFromExchange(e.target.value)
        }

    }

    const handleAmount = (e) => {
        if (e.target.value > 0) {
            setAmount(e.target.value)

        } else {
            setAmount(1)
        }
    }



    if (apiInfo) {
        return (
            <div className="currencies">

                <div className="exchange">
                    <select name="fromExchange" id="fromExchange" onChange={handleToChange}>
                        <option value="USD">USD</option>
                        <option value="CAD">CAD</option>
                        <option value="CNY">CNY</option>
                        <option value="JPY">JPY</option>
                    </select>
                    <div className="spacer"></div>
                    <input type="number" name="amount" id="amount" placeholder="Amount" onChange={handleAmount}></input>
                </div>

                <div className="spacer"></div>
                <button>Switch&nbsp;&nbsp;<img src='https://imgs.search.brave.com/rFbq12_-W8NUBXm2_GOgiECXKRHKF4yUGGjgYqC_afU/rs:fit:980:956:1/g:ce/aHR0cDovL2Nkbi5v/bmxpbmV3ZWJmb250/cy5jb20vc3ZnL2lt/Z18xNzYyMDMucG5n' width={'15px'} alt='select icon' /></button>
                <div className="spacer"></div>

                <div className="exchange">
                    <select name="toExchange" id="toExchange" onChange={handleFromChange}>
                        <option value="USD">USD</option>
                        <option value="CAD">CAD</option>
                        <option value="CNY">CNY</option>
                        <option value="JPY">JPY</option>
                    </select>
                    <div className="spacer"></div>
                    <p>{apiInfo.result}</p>

                </div>

            </div>
        )


    } else {
        return (
            <div className="loading">
                <h1>Loading...</h1>
            </div>
        )
    }

}

export default CurrencyAPI
