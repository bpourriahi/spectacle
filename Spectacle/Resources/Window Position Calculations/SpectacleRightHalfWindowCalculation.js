windowPositionCalculationRegistry.registerWindowPositionCalculationWithAction(function (windowRect, visibleFrameOfSourceScreen, visibleFrameOfDestinationScreen) {
    var oneHalfRect = SpectacleCalculationHelpers.copyRect(visibleFrameOfDestinationScreen);
    oneHalfRect.width = Math.floor(oneHalfRect.width / 2.0);
    oneHalfRect.x += oneHalfRect.width;
    if (Math.abs(CGRectGetMidY(windowRect) - CGRectGetMidY(oneHalfRect)) <= 1.0) {
        var twoThirdRect = SpectacleCalculationHelpers.copyRect(oneHalfRect);
        twoThirdRect.width = Math.floor(visibleFrameOfDestinationScreen.width * 2 / 3.0);
        twoThirdRect.x = visibleFrameOfDestinationScreen.x + visibleFrameOfDestinationScreen.width - twoThirdRect.width;
        if (SpectacleCalculationHelpers.rectCenteredWithinRect(oneHalfRect, windowRect)) {
            return twoThirdRect;
        }
        if (SpectacleCalculationHelpers.rectCenteredWithinRect(twoThirdRect, windowRect)) {
            var oneThirdsRect = SpectacleCalculationHelpers.copyRect(oneHalfRect);
            oneThirdsRect.width = Math.floor(visibleFrameOfDestinationScreen.width / 3.0);
            oneThirdsRect.x = visibleFrameOfDestinationScreen.x + visibleFrameOfDestinationScreen.width - oneThirdsRect.width;
            return oneThirdsRect;
        }
    }

    var oneThirdRect = SpectacleCalculationHelpers.copyRect(oneHalfRect);
    oneThirdRect.width = Math.floor(visibleFrameOfDestinationScreen.width / 3.0);
    oneThirdRect.x = visibleFrameOfDestinationScreen.x + visibleFrameOfDestinationScreen.width - oneThirdRect.width;

    if (SpectacleCalculationHelpers.rectCenteredWithinRect(oneThirdRect, windowRect)) {
        var oneFourthsRect = SpectacleCalculationHelpers.copyRect(oneHalfRect);
        oneFourthsRect.width = Math.floor(visibleFrameOfDestinationScreen.width / 4.0);
        oneFourthsRect.x = visibleFrameOfDestinationScreen.x + visibleFrameOfDestinationScreen.width - oneFourthsRect.width;
        return oneFourthsRect;
    }

    return oneHalfRect;
}, "SpectacleWindowActionRightHalf");
