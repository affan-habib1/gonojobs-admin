// material-ui
import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
// project import
import MainCard from 'components/MainCard';
import { callApi, selectApi } from 'store/reducers/apiSlice';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => {
  const dispatch = useDispatch();

  const {
    details = {
      data: {}
    }
  } = useSelector(selectApi);
  console.log(details);
  useEffect(() => {
    dispatch(
      callApi({
        operationId: `facility/info`,
        output: 'details'
      })
    );
  }, [dispatch]);
  return (
    <MainCard title="Sample Card">
      <Typography variant="body2">
        Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif ad
        minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in
        reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa qui
        officiate descent molls anim id est labours.
      </Typography>
    </MainCard>
  );
};

export default SamplePage;
