import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Box,
} from "@mui/material";
import SelectSkipButton from "../selectSkipButton/SelectSkipButton.jsx";
import { COLORS, strings } from "../../../config/strings.js";
import WarningMessageTemplate from "../../templates/warningMessageTemplate/WarningMessageTemplate.jsx";
import {
  CardStyles,
  PriceBoxStyles,
  SizeChipStyles,
  TypographyStyles,
} from "./SingleCardStyles.js";

function SingleCard({
  size,
  hirePeriod,
  price,
  selected,
  onSelect,
  allowedOnRoad,
  allowsHeavyWaste,
  perTonneCost,
  transportCost,
}) {
  const isDisabled = !allowsHeavyWaste;

  // Ensure perTonneCost and transportCost are numbers
  const totalCost =
    (parseFloat(perTonneCost) || 0) + (parseFloat(transportCost) || 0);

  // Calculate price if price_before_vat is null
  const displayPrice =
    price !== null
      ? `${strings.currency}${price}`
      : `from ${strings.currency}${totalCost.toFixed(2)}`;

  return (
    <Card
      sx={CardStyles(selected, isDisabled)}
      onClick={!isDisabled ? onSelect : undefined}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="200"
          image={strings.imageURL}
          alt="Container Yard"
        />
        <Chip label={`${size} Yards`} sx={SizeChipStyles} />
        {!allowedOnRoad ? (
          <WarningMessageTemplate
            message={strings.privatePropertyWarning}
            color={COLORS.warning}
            bottomPosition={allowsHeavyWaste ? "0.75rem" : "3.25rem"}
          />
        ) : null}
        {!allowsHeavyWaste ? (
          <WarningMessageTemplate
            message={strings.heavyWasteError}
            color={COLORS.error}
            bottomPosition="0.75rem"
          />
        ) : null}
      </Box>
      <CardContent>
        <Typography
          variant="h6"
          gutterBottom
          sx={TypographyStyles(false)}
        >{`${size} ${strings.yardSkip}`}</Typography>
        <Typography
          variant="body2"
          color="gray"
          sx={TypographyStyles(false)}
        >{`${hirePeriod} ${strings.dayHirePeriod}`}</Typography>
        <Box sx={PriceBoxStyles}>
          <Typography variant="h4" color="#0037C1" sx={TypographyStyles(false)}>
            {displayPrice}
          </Typography>
          <Typography variant="body1" color="gray" sx={TypographyStyles(true)}>
            {strings.perWeek}
          </Typography>
        </Box>
        <SelectSkipButton isDisabled={isDisabled} selected={selected} />
      </CardContent>
    </Card>
  );
}

export default SingleCard;
