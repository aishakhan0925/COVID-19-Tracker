import React, { Component } from "react";
import { CardData, Chart, CountryPicker } from "./Components";
import style from "./App.module.css";
import { fetchData } from "./api";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      country: "",
    };
  }
  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    // console.log(data);
    this.setState({ data, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={style.container}>
        <Header />
        <img src="Images/image.png" className={style.img} />
        <CardData data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <Footer />
      </div>
    );
  }
}
export default App;
