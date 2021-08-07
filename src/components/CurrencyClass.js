import React from "react";

import Card from "./Card";



class CurrencyClass extends React.Component {
  constructor(props ) {
    super(props);
    this.state = {
      currencies: [],
    };
    this.isFav = props.isFav
    
  }

  componentDidMount() {
    const BASE_URL = "http://api.nbp.pl/api/exchangerates/tables/";
    fetch(BASE_URL + "A/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ currencies: data });
       
      })

      .catch((error) => {
        console.log(error);
      });

      
  }

  render() {
    return (
      <div >
        <div>
        </div>
        {this.state.currencies.map((item, no) => (
          <th key={`${item.table}${no}`}>
            <div>
              <div >
                <h3 style={{ fontSize: "50px", color: "silver" }}>
                  Data publikacji: {item.effectiveDate}
                </h3>
               
                <div className="wrapper">
                  {item.rates.map((data) => (
                    <div>
                      <Card
                        key={data.id}
                        name={data.currency.toUpperCase()}
                        kod={data.code}
                        mid={data.mid}
                      ></Card>
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
