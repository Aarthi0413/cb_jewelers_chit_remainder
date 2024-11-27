import React, { useEffect } from 'react'
import TableList from './TableList'
import domo from "ryuu.js";

const Table = () => {

  const [data, setData] = React.useState([]);

  useEffect(() => {
    domo
      .get("/data/v1/customer_chit_data")
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="">
      <TableList data={data} />
    </div>
  )
}

export default Table;