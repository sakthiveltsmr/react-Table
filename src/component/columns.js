import { format } from "date-fns";
// import ColumnFilter from "./ColumFilter";
export const Columns = [
  {
    Header: "id",
    Footer: "id",
    accessor: "id",
    // Filter: ColumnFilter,
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name",
    // Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
    // Filter: ColumnFilter,
  },
  {
    Header: "Email",
    Footer: "Email",
    accessor: "email",
    // Filter: ColumnFilter,
  },
  {
    Header: "Date of Birth",
    Footer: "Date of Birth",
    accessor: "date_of_birth",
    // Filter: ColumnFilter,
    cell: ({ value }) => {
      return format(new Date(value, "dd/MM/yyyy"));
    },
  },
  {
    Header: "Age",
    Footer: "Age",
    accessor: "age",
    // Filter: ColumnFilter,
  },
];

//Groups Header & Columns

export const GROUPED_COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Email",
        Footer: "Email",
        accessor: "email",
      },
      {
        Header: "Date of Birth",
        Footer: "Date of Birth",
        accessor: "date_of_birth",
      },
      {
        Header: "Age",
        Footer: "Age",
        accessor: "age",
      },
    ],
  },
];
