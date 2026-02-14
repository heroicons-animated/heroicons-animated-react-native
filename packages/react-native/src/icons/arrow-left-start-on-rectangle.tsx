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

export type ArrowLeftStartOnRectangleIconHandle = IconHandle;

const ArrowLeftStartOnRectangleIcon = forwardRef<ArrowLeftStartOnRectangleIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const translateX = useSharedValue(0);

    const startAnimation = useCallback(() => {
      translateX.value = withSequence(withTiming(0, { duration: 167 }), withTiming(-2, { duration: 167 }), withTiming(0, { duration: 167 }));
    }, [translateX]);

    const stopAnimation = useCallback(() => {
      translateX.value = withTiming(0, { duration: 200 });
    }, [translateX]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ translateX: translateX.value }],
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
            <Path d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M5.25 15l-3-3m0 0 3-3m-3 3H15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
          </Svg>
        </Animated.View>
      </IconWrapper>
    );
  },
);

ArrowLeftStartOnRectangleIcon.displayName = "ArrowLeftStartOnRectangleIcon";

export { ArrowLeftStartOnRectangleIcon };
