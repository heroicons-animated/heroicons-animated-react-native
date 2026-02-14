import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import Svg, { G, Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedG = Animated.createAnimatedComponent(G);

export type CursorArrowRaysIconHandle = IconHandle;

const CursorArrowRaysIcon = forwardRef<CursorArrowRaysIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const p0TranslateX = useSharedValue(0);
    const p0TranslateY = useSharedValue(0);

    const startAnimation = useCallback(() => {
      p0TranslateX.value = withSequence(withTiming(0, { duration: 250 }), withTiming(0, { duration: 250 }), withTiming(-3, { duration: 250 }), withTiming(0, { duration: 250 }));
      p0TranslateY.value = withSequence(withTiming(0, { duration: 250 }), withTiming(-4, { duration: 250 }), withTiming(0, { duration: 250 }), withTiming(0, { duration: 250 }));
    }, [p0TranslateX, p0TranslateY]);

    const stopAnimation = useCallback(() => {
      p0TranslateX.value = withTiming(0, { duration: 200 });
      p0TranslateY.value = withTiming(0, { duration: 200 });
    }, [p0TranslateX, p0TranslateY]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const p0Props = useAnimatedProps(() => ({
      x: p0TranslateX.value,
      y: p0TranslateY.value,
    }));

    return (
      <IconWrapper
        controlled={controlled}
        onPress={onPress}
        onPressIn={startAnimation}
        onPressOut={stopAnimation}
      >
        <Animated.View style={style}>
          <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <Path d="M12 2.25V4.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M17.8336 4.66637L16.2426 6.25736" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M20.25 10.5H18" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M7.75736 14.7426L6.16637 16.3336" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M6 10.5H3.75" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M7.75736 6.25736L6.16637 4.66637" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <AnimatedG animatedProps={p0Props}>
              <Path d="M15.0423 21.6718L13.6835 16.6007M13.6835 16.6007L11.1741 18.826L11.7425 9.35623L16.9697 17.2731L13.6835 16.6007Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            </AnimatedG>
          </Svg>
        </Animated.View>
      </IconWrapper>
    );
  },
);

CursorArrowRaysIcon.displayName = "CursorArrowRaysIcon";

export { CursorArrowRaysIcon };
