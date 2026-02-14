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

export type ArrowUturnRightIconHandle = IconHandle;

const ArrowUturnRightIcon = forwardRef<ArrowUturnRightIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const scaleX = useSharedValue(1);
    const translateX = useSharedValue(0);

    const startAnimation = useCallback(() => {
      scaleX.value = withSequence(withTiming(1, { duration: 150 }), withTiming(1.15, { duration: 150 }), withTiming(1, { duration: 150 }));
      translateX.value = withSequence(withTiming(0, { duration: 150 }), withTiming(1.5, { duration: 150 }), withTiming(0, { duration: 150 }));
    }, [scaleX, translateX]);

    const stopAnimation = useCallback(() => {
      scaleX.value = withTiming(1, { duration: 200 });
      translateX.value = withTiming(0, { duration: 200 });
    }, [scaleX, translateX]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ scaleX: scaleX.value }, { translateX: translateX.value }],
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
            <Path d="M21 9H9a6 6 0 0 0 0 12h3" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <Path d="m15 15 6-6m0 0-6-6m6 6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
          </Svg>
        </Animated.View>
      </IconWrapper>
    );
  },
);

ArrowUturnRightIcon.displayName = "ArrowUturnRightIcon";

export { ArrowUturnRightIcon };
