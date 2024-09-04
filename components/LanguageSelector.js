import { IconButton, Menu, MenuItem } from "@mui/material";
import { useContext, useRef, useState } from "react";
import TranslationContext from "@/context/TranslationContext";

export default function LanguageSelector({ style = {} }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const ref = useRef();
  const languages = { pl: "Polski", en: "English" };
  const flags = { pl: "pl", en: "gb" };
  const { dictionary, lang, changeLanguage } = useContext(TranslationContext);
  return (
    <>
      <IconButton ref={ref} onClick={handleClick} sx={{ padding: 1, ...style }}>
        <img
          height={18}
          width={28}
          src={`https://flagpedia.net/data/flags/h24/${flags[lang]}.webp`}
        />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}>
        {Object.entries(languages).map((item) => (
          <MenuItem
            key={item[0]}
            value={item[0]}
            onClick={() => {
              console.log(item[0]);
              changeLanguage(item[0]).then(() => {
                window.location.replace(window.location.href);
              });
            }}>
            <img
              height={18}
              width={28}
              style={{ marginRight: 10 }}
              src={`https://flagpedia.net/data/flags/h24/${
                flags[item[0]]
              }.webp`}
            />{" "}
            {item[1]}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
