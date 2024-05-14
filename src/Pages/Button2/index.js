import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import { Avatar, Button, ButtonGroup } from "@mui/material";
import mine from "../../Images/mine.jpg";

export default function LoadingButtonGroup() {
  return (
    <div className="py-5">
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button startIcon={<SaveAltOutlinedIcon />}>One</Button>
        <Avatar alt="Cindy Baker" src={mine} className="ms-5" />
        <Avatar
          alt="Remy Sharp"
          src={mine}
          sx={{ width: 56, height: 56 }}
          className="ms-5"
        />
      </ButtonGroup>
    </div>
  );
}
