import React from 'react';
import { Box, Typography } from '@mui/material';

import {ContinueButton, BackButton} from '../../ui/index'
import {StepTemplateBox, TypographyStyles} from "./StepTemplateStyles.js";

function StepTemplate({ stepName, onNext, onBack, activeStep }) {
    return (
        <Box sx={StepTemplateBox(false)}>
            <Typography variant="h4" sx={TypographyStyles}>
                {stepName}
            </Typography>
            <Box sx={StepTemplateBox(true)}>
                {activeStep > 0 ? (
                    <BackButton onBack={onBack} />
                ) : null}
                {activeStep < 5 ? (
                    <ContinueButton onNext={onNext} />
                ) : null}
            </Box>
        </Box>
    );
}

export default StepTemplate;