import React, { Component } from "react";
import ReactDOM from "react-dom";
import {gql, useQuery} from '@apollo/client';

const FORM = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;


function Form() {
  const { loading, error, data } = useQuery(FORM);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
}


export default Form;
