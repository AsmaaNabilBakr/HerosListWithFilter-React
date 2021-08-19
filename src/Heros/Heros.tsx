import React, { useEffect, useState } from "react";
import TableList from "./Sections/TableList";
import FilterComponent from "./Sections/filter";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Heroes from "../HeroesData.json";
import axios from "axios";
require("./styles.scss");
interface StateProperties {
  name: string;
  phone: string;
  date: string;
  country: string;
  email: string;
  company: string;
}
function HerosComponent() {
  const [ShowFilterBox, SetShowFilterBox] = useState(true);
  const [AllHeroesData, setAllHeroesData] = useState(Heroes.Heroes);
  const [HeroesData, setHeroesData] = useState<StateProperties[]>([]);
  useEffect(() => {
    setHeroesData(Heroes.Heroes);
  }, []);
  const isFilterBoxVisable = () => {
    SetShowFilterBox(!ShowFilterBox);
  };
  const filter = async (filterdata: any) => {
    const { email, phone, date, country, company, name } = filterdata;
    let dataAfterFilter = AllHeroesData;
    if (name)
      dataAfterFilter = dataAfterFilter.filter((item) =>
        item.name.toLowerCase().includes(name.toLowerCase())
      );
    if (email)
      dataAfterFilter = dataAfterFilter.filter((item) =>
        item.email.toLowerCase().includes(email.toLowerCase())
      );
    if (phone)
      dataAfterFilter = dataAfterFilter.filter((item) =>
        item.phone.toLowerCase().includes(phone.toLowerCase())
      );
    if (date)
      dataAfterFilter = dataAfterFilter.filter((item) =>
        item.date.toLowerCase().includes(date.toLowerCase())
      );
    if (country)
      dataAfterFilter = dataAfterFilter.filter((item) =>
        item.country.toLowerCase().includes(country.toLowerCase())
      );
    if (company)
      dataAfterFilter = dataAfterFilter.filter((item) =>
        item.company.toLowerCase().includes(company.toLowerCase())
      );

    setHeroesData(dataAfterFilter);
  };
  return (
    <>
      <MDBContainer className="HerosContainer">
        <MDBRow className="HerosContainerRow">
          {/* {ShowFilterBox && ( */}
            <MDBCol md="3" className={ShowFilterBox? 'showFilters' : 'hideFilters'}>
              <FilterComponent filter={filter} />
            </MDBCol>
          {/* )} */}

          <MDBCol>
            <TableList
              isFilterBoxVisable={isFilterBoxVisable}
              Heroes={HeroesData}
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default HerosComponent;
