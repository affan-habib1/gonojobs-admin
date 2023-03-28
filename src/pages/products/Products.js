import React, { useEffect, useMemo } from "react";
import { Button, Stack } from "@mui/material";
import DataGrid from "../../components/DataGrid";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "store/reducers/apiSlice";
import AddProduct from "./AddProduct";
import DeleteProduct from "./DeleteProduct";
import EditProduct from "./EditProduct";
import Dialog from "../../components/Dialog";
const Products = () => {
  const dispatch = useDispatch();
  const {
    items = {
      data: [],
    },
  } = useSelector(selectApi);

  useEffect(
    () =>
      dispatch(
        callApi({
          operationId: `job/categories`,
          output: "items",
        })
      ),
    []
  );

  return <>WOrking</>;
};

export default Products;
