windowPositionCalculationRegistry.registerWindowPositionCalculationWithAction(function (windowRect, visibleFrameOfSourceScreen, visibleFrameOfDestinationScreen) {
    var oneHalfRect = SpectacleCalculationHelpers.copyRect(visibleFrameOfDestinationScreen);
    oneHalfRect.width = Math.floor(oneHalfRect.width / 2.0);

    if (Math.abs(CGRectGetMidY(windowRect) - CGRectGetMidY(oneHalfRect)) <= 1.0) {
        var twoThirdRect = SpectacleCalculationHelpers.copyRect(oneHalfRect);
        twoThirdRect.width = Math.floor(visibleFrameOfDestinationScreen.width * 2 / 3.0);

        if (SpectacleCalculationHelpers.rectCenteredWithinRect(oneHalfRect, windowRect)) {
            return twoThirdRect;
        }

        if (SpectacleCalculationHelpers.rectCenteredWithinRect(twoThirdRect, windowRect)) {
            var oneThirdsRect = SpectacleCalculationHelpers.copyRect(oneHalfRect);
            oneThirdsRect.width = Math.floor(visibleFrameOfDestinationScreen.width / 3.0);
            return oneThirdsRect;
        }

    }

    var oneThirdsRect = SpectacleCalculationHelpers.copyRect(oneHalfRect);
    oneThirdsRect.width = Math.floor(visibleFrameOfDestinationScreen.width / 3.0);

    if (SpectacleCalculationHelpers.rectCenteredWithinRect(oneThirdsRect, windowRect)) {
      var oneFourthsRect = SpectacleCalculationHelpers.copyRect(oneHalfRect);
      oneFourthsRect.width = Math.floor(visibleFrameOfDestinationScreen.width / 4.0);
      return oneFourthsRect;
    }

    return oneHalfRect;
}, "SpectacleWindowActionLeftHalf");
