import React from "react";

import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
  Search,
} from "@syncfusion/ej2-react-grids";
import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../compontents";

const Customers = () => {
  return (
    <div
      className="m-2 md:m-10 p-2 md:p-10
    bg-white rounded-xl"
    >
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={["Delete", "Edit", "Search"]}
        editSettings={{ allowEditing: true, allowAdding: true }}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[Page, Edit, Toolbar, Selection, Sort, Filter, Search]}
        />
      </GridComponent>
    </div>
  );
};

export default Customers;
