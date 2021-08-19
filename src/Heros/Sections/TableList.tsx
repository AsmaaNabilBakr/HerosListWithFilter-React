import FilterIcon from "../../Assets/Imgs/table-filter.svg";
import SearchIcon from "../../Assets/Imgs/search.svg";
import { MDBTableHead, MDBTableBody, MDBDataTable } from "mdbreact";
import { useState } from "react";
require("../styles.scss");
function TableList(props: { isFilterBoxVisable(): void, Heroes: any }) {
  const [ShowSearchBox, SetShowSearchBox]= useState(false)
  const data = {
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
      },
      {
        label: "Phone",
        field: "phone",
        sort: "asc",
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
      },
      {
        label: "Date",
        field: "date",
        sort: "asc",
      },
      {
        label: "Country",
        field: "country",
        sort: "asc",
      },
      {
        label: "Company",
        field: "company",
        sort: "asc",
      }
    ],
    rows: props.Heroes
  };
  console.log('heros',props.Heroes)
  return (
    <>
      <div className="tableListContainer">
        <div className="tableHeader">
          <label>Heroes</label>
          <div className="tableActions">
            <img src={SearchIcon} onClick={()=> SetShowSearchBox(!ShowSearchBox)} />
            <img src={FilterIcon} onClick={props.isFilterBoxVisable}/>
          </div>
        </div>
        <div className="tableContent">
          <MDBDataTable responsive data={data} searching={ShowSearchBox} />

        </div>
      </div>
    </>
  );
}

export default TableList;
