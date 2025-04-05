import { Box, Typography } from "@mui/material";
import React from "react";
import BackButton from "../backButton/BackButton.jsx";
import ContinueButton from "../continueButton/ContinueButton.jsx";
import { strings } from "../../../config/strings.js";
import {
  BluePriceTypographyStyles,
  PlusVATTypographyStyles,
  PopupBoxAnimationStyles,
  PopupBoxStyles,
  YardSizeTypographyStyles,
} from "./PopupStyles.js";

const Popup = ({ skip, animationDirection, onNext, onBack }) => {
  // Ensure perTonneCost and transportCost are numbers
  const totalCost =
    (parseFloat(skip.per_tonne_cost) || 0) +
    (parseFloat(skip.transport_cost) || 0);

  // Calculate the price before VAT (if available) and apply 20% VAT
  const priceBeforeVAT =
    skip.price_before_vat !== null ? skip.price_before_vat : totalCost;
  const priceWithVAT = priceBeforeVAT * 1.2; // 20% VAT included

  // Display the calculated price
  const displayPrice =
    skip.price_before_vat !== null
      ? `${strings.currency}${priceWithVAT.toFixed(2)}`
      : `from ${strings.currency}${priceWithVAT.toFixed(2)}`;

  return (
    <Box sx={PopupBoxAnimationStyles(animationDirection)}>
      <Box sx={PopupBoxStyles}>
        <Typography variant="h6" component="span" sx={YardSizeTypographyStyles}>
          {skip.size} {strings.yardSkipPopup}
          <Typography component="span" sx={BluePriceTypographyStyles}>
            {displayPrice}
          </Typography>
          <Typography component="span" sx={PlusVATTypographyStyles}>
            {strings.plusVAT}
          </Typography>
        </Typography>
        <Box>
          <BackButton onBack={onBack} />
          <ContinueButton onNext={onNext} />
        </Box>
      </Box>
    </Box>
  );
};

export default Popup;
