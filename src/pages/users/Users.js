import React, { useEffect, useMemo } from "react";
import { Button, Stack } from "@mui/material";
import DataGrid from "../../components/DataGrid";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "store/reducers/apiSlice";
import AddProduct from "../products/AddProduct";
import DeleteProduct from "../products/DeleteProduct";
import EditProduct from "../products/EditProduct";
import Dialog from "../../components/Dialog";
const Users = () => {
  const dispatch = useDispatch();
  const {
    items = {
      data: [],
    },
    itemDeleted = {
      data: {
        id: null,
      },
    },
    itemSaved,
  } = useSelector(selectApi);

  useEffect(
    () =>
      dispatch(
        callApi({
          operationId: `localhost:5000/api/products`,
          output: "items",
        })
      ),
    [itemDeleted.data.id, itemSaved]
  );
  const columns = useMemo(() => [
    {
      field: "id",
      headerName: "CODE",
      width: 70,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "serviceName",
      headerName: "SERVICE NAME",
      flex: 1,
      headerAlign: "left",
      editable: true,
    },
    {
      field: "basePrice",
      headerName: "PRICE",
      type: "number",
      minWidth: 120,
      headerAlign: "center",
      align: "center",
      editable: true,
    },
    {
      field: "discountPerUnit",
      headerName: "DISCOUNT",
      type: "number",
      minWidth: 120,
      headerAlign: "center",
      align: "center",
      editable: true,
    },
    {
      field: "vatPerUnit",
      headerName: "VAT PER UNIT",
      type: "number",
      minWidth: 120,
      headerAlign: "center",
      align: "center",
      editable: true,
    },
    {
      field: "expiryDate",
      headerName: "EXPIRY DATE",
      type: "number",
      minWidth: 120,
      headerAlign: "center",
      align: "center",
      editable: true,
    },
    {
      minWidth: 120,
      align: "center",
      field: "actions",
      headerName: "ACTION",
      type: "actions",
      renderCell: (params) => (
        <Stack direction="row">
          <EditProduct shouldUpdate={params.row} />
          <DeleteProduct shouldDelete={params.id} />
        </Stack>
      ),
    },
  ]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const ActionButton = () => {
    return (
      <Stack direction="row">
        <Button variant="contained" onClick={() => setOpen(true)}>
          NEW ITEM
        </Button>
        <Dialog
          title=" NEW ITEM"
          handleOpen={handleOpen}
          handleClose={handleClose}
          open={open}
        >
          <AddProduct />
        </Dialog>
      </Stack>
    );
  };
  return (
    <DataGrid
      getRowId={(row) => row._id}
      rows={items.data}
      columns={columns}
      gridTitle="Users"
      actionbutton={<ActionButton />}
    />
  );
};

export default Users;
