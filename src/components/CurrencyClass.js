import React from "react";
import { CurrencyList } from "./CurrencyList";

class CurrencyClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
    };
  }

  componentDidMount() {
    const BASE_URL = "http://api.nbp.pl/api/exchangerates/tables/";
    fetch(BASE_URL + "A/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ currencies: data });
        console.log("state ,", this.state.currencies);
      })

      .catch((error) => {
        console.log(error);
      });
  }

 

  render() {
    return (
      <div className="App-header">
        {this.state.currencies.map((item, no) => (
          <th key={`${item.table}${no}`}>
            <div>
              <div>
                Data publikacji: {item.effectiveDate}
                <div className="wrapper">
                  {item.rates.map((data) => (
                    <div>
                      <CurrencyList  style={{ display: "flex"}}
                      key={data.id}
                        name={data.currency.toUpperCase()}
                        kod={data.code}
                        mid={data.mid}
                       
                      >
                       
                      </CurrencyList>

                      {/* Nazwa waluty:{data.currency},Kod waluty  {data.code}, Kurs średni waluty{data.mid} */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </th>
        ))}
      </div>
    );
  }
}

export default CurrencyClass;
