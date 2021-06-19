import React from "react";

const BASE_URL = "http://api.nbp.pl/api/exchangerates/tables/";

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
      <div>
        {this.state.currencies.map((item, no) => (
          <th key={`${item.table}${no}`}>
            <div>
              <div>
                {item.effectiveDate}
                <div>
                  {item.rates.map((data) => (
                    <div>
                      {data.currency} {data.code} {data.mid}
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
