import { Box, Pagination } from "@mui/material";
import React from "react";
import { useState } from "react";
import CardList from "./CardList";

const Openpage = (props) => {
  const { children, page, index } = props;
  return (
    <div hidden={page !== index}>
      {page === index && <Box mt={2}>{children}</Box>}
    </div>
  );
};
const PaginationCard = ({ items, pageitems }) => {
  const [apage, setapage] = useState(1);
  const n = items?.length;
  const cardsPerPage = 8;
  const indexOfLastCard = apage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = items?.slice(indexOfFirstCard, indexOfLastCard);
  return (

    <>

      {items.length === 0 ? (
       <div className="resulttext-container"> <h3 className="resultText">No result Found...</h3></div>
      ) : (
        <div className="page">
          <div className="pages">
            <Box display={"flex"} justifyContent="start">
              {
                <Openpage page={apage} index={apage}>
                  {currentCards ? <CardList items={currentCards} /> : null}
                </Openpage>
              }
            </Box>
          </div>

          <div className="page-num">
            <Pagination
              count={parseInt(n / cardsPerPage) + 1}
              size="large"
              color="secondary"
              // shape='rounded'
              // defaultPage={5}
              // siblingCount={3}
              variant="outlined"
              onChange={(ev, newPage) => setapage(newPage)}
              sx={{
                "Button.MuiPaginationItem-circular.Mui-selected": {
                  bgcolor: "#64A1F5",
                  color: "#ffffff",
                },
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
                marginBottom: "10px",
                width: "100%",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PaginationCard;
