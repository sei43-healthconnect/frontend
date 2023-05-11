import { Button, Container, IconButton, Stack, TextField } from "@mui/material";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import React from "react";
import styles from './ChatInput.module.css'

const ChatInput = () => {
  return (
    <div className={ styles['main-container'] }>
      <Stack direction="row" spacing={1} >
        {/* <Button
          variant="contained"
          sx={{
            width: 90,
            height: "3rem",
            color: "#FFFFFF",
            font: "Roboto",
            textTransform: "none",
            fontWeight: 100,
            fontSize: "0.75rem",
            lineHeight: "1rem",
            padding: 0,
            backgroundColor: "#004B64",
            flexGrow: 0
          }}
        >
          + Quick Text
        </Button> */}
        <TextField
          id="outlined-basic"
          placeholder="Type a message..."
          variant="outlined"
          multiline
          inputProps={{
            style: {
              // input box initial height
              minHeight: "1rem",
              lineHeight: "0.875rem",
              fontSize: "0.875rem",
            },
          }}
          sx={{
            // input box outline
            color: "#79747E",
            flexGrow: 1,
            backgroundColor: "#FFFFFF"
          }}
          // InputProps={{
          //   style: {
          //     font: "Roboto",
          //     color: "#000000",
          //     fontSize: "1rem",
          //   },
          // }}
        />
        <IconButton size="small" sx={{ flexGrow: 0 }}> 
          <SendRoundedIcon fontSize="inherit" />
        </IconButton>
      </Stack>
    </div>
  );
};

export default ChatInput;
