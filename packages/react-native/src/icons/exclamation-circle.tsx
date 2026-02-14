import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

export type ExclamationCircleIconHandle = IconHandle;

const ExclamationCircleIcon = forwardRef<ExclamationCircleIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const scale = useSharedValue(1);
    const opacity = useSharedValue(1);

    const startAnimation = useCallback(() => {
      scale.value = withRepeat(withSequence(withTiming(1, { duration: 267 }), withTiming(1.1, { duration: 267 }), withTiming(1, { duration: 267 })), -1);
      opacity.value = withRepeat(withSequence(withTiming(1, { duration: 267 }), withTiming(0.4, { duration: 267 }), withTiming(1, { duration: 267 })), -1);
    }, [scale, opacity]);

    const stopAnimation = useCallback(() => {
      scale.value = withTiming(1, { duration: 200 });
      opacity.value = withTiming(1, { duration: 200 });
    }, [scale, opacity]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ scale: scale.value }],
      opacity: opacity.value,
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
            <Path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M12 9v3.75" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M12 15.75h.008v.008H12v-.008Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
          </Svg>
        </Animated.View>
      </IconWrapper>
    );
  },
);

ExclamationCircleIcon.displayName = "ExclamationCircleIcon";

export { ExclamationCircleIcon };
