import { useTheme, useMediaQuery, Button, Menu, MenuItem, Drawer, Badge } from "@mui/material";
import { useState } from "react";
import "../navbars/searchNavBar/Navbar.css"

const ResponsiveDropdownButton = ({ label, menuItems, icon }) => {
  const [anchorEl, setAnchorEl]     = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:1024px)"); 

  const handleClick = (event) => {
    if (isMobile) {
      setDrawerOpen(true);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    setDrawerOpen(false);
  };

  return (
    <>
      <Button className={""} variant="" onClick={handleClick}>
        {buttonContent}
      </Button>

      {/* Dropdown para pantallas grandes */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuItems.map((item, index) => (
          <MenuItem key={index} onClick={() => {item.onClick(); handleClose();}}>
            {item.label}
          </MenuItem>
        ))}
      </Menu>

      {/* Drawer para mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleClose}
        sx={{zIndex:10000000000000}}
      >
        <div style={{ padding: 16, width: "200px" }}>
          {menuItems.map((item, index) => (
            <div key={index} onClick={() => {item.onClick(); handleClose();}} style={{ margin: "8px 0" }}>
              {item.label}
            </div>
          ))}
        </div>
      </Drawer>
    </>
  );
};

export default ResponsiveDropdownButton;