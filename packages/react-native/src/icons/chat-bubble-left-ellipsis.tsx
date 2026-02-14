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

export type ChatBubbleLeftEllipsisIconHandle = IconHandle;

const ChatBubbleLeftEllipsisIcon = forwardRef<ChatBubbleLeftEllipsisIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const opacity = useSharedValue(1);

    const startAnimation = useCallback(() => {
      opacity.value = withSequence(withTiming(1, { duration: 188 }), withTiming(0, { duration: 188 }), withTiming(0, { duration: 188 }), withTiming(1, { duration: 188 }), withTiming(1, { duration: 188 }), withTiming(0, { duration: 188 }), withTiming(0, { duration: 188 }), withTiming(1, { duration: 188 }));
    }, [opacity]);

    const stopAnimation = useCallback(() => {
      opacity.value = withTiming(1, { duration: 200 });
    }, [opacity]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const animatedStyle = useAnimatedStyle(() => ({
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
            <Path d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
          </Svg>
        </Animated.View>
      </IconWrapper>
    );
  },
);

ChatBubbleLeftEllipsisIcon.displayName = "ChatBubbleLeftEllipsisIcon";

export { ChatBubbleLeftEllipsisIcon };
