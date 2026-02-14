import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

export type ArrowTopRightOnSquareIconHandle = IconHandle;

const ArrowTopRightOnSquareIcon = forwardRef<ArrowTopRightOnSquareIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const startAnimation = useCallback(() => {
      translateX.value = withSequence(withTiming(0, { duration: 167 }), withTiming(2, { duration: 167 }), withTiming(0, { duration: 167 }));
      translateY.value = withSequence(withTiming(0, { duration: 167 }), withTiming(-2, { duration: 167 }), withTiming(0, { duration: 167 }));
    }, [translateX, translateY]);

    const stopAnimation = useCallback(() => {
      translateX.value = withTiming(0, { duration: 200 });
      translateY.value = withTiming(0, { duration: 200 });
    }, [translateX, translateY]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ translateX: translateX.value }, { translateY: translateY.value }],
    }));

    return (
      <IconWrapper
        controlled={controlled}
        onPress={onPress}
        onPressIn={startAnimation}
        onPressOut={stopAnimation}
      >
        <Animated.View style={[animatedStyle, style]}>
          <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <Path d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M7.5 16.5L21 3m0 0h-5.25M21 3v5.25" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
          </Svg>
        </Animated.View>
      </IconWrapper>
    );
  },
);

ArrowTopRightOnSquareIcon.displayName = "ArrowTopRightOnSquareIcon";

export { ArrowTopRightOnSquareIcon };
