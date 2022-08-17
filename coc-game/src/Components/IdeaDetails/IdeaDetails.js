import * as React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "#EDEEC9",
  border: "1px solid #000",
  borderRadius: "25px",
  boxShadow: 24,
  p: 4,
};

function BasicModal({ title, description, imgSrc, imgAlt, NumberVotes }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Title: {title}
          </Typography>{" "}
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Number of votes:{NumberVotes}
          </Typography>
          <img src={imgSrc} alt={imgAlt} />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Description:
          </Typography>
          <p>{description}</p>
        </Box>
      </Modal>
    </div>
  );
}

export default function IdeaDetails() {
  return (
    <>
      <BasicModal
        title="Cycle to work day"
        NumberVotes="98"
        imgSrc="https://blogimage.vantagefit.io/vfitimages/2020/02/cycle-to-work-scheme.jpg"
        description="As the public becomes more aware of the man-made climate crisis and the climate catastrophe we are heading for, many are searching for ways to decrease their carbon footprint.

By cycling instead of driving to work, it is estimated you save between two and four metric tonnes of CO2 emissions. To put this in perspective, the average UK resident emits around 12.7 tonnes of CO2 per year.

Switching from driving to cycling is a small difference that can make a huge impact."
      ></BasicModal>
    </>
  );
}
