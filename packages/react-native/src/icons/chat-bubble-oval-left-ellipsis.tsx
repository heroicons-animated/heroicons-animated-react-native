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

export type ChatBubbleOvalLeftEllipsisIconHandle = IconHandle;

const ChatBubbleOvalLeftEllipsisIcon = forwardRef<ChatBubbleOvalLeftEllipsisIconHandle, IconProps>(
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
            <Path d="M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
          </Svg>
        </Animated.View>
      </IconWrapper>
    );
  },
);

ChatBubbleOvalLeftEllipsisIcon.displayName = "ChatBubbleOvalLeftEllipsisIcon";

export { ChatBubbleOvalLeftEllipsisIcon };
