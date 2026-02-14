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

export type ArrowLeftIconHandle = IconHandle;

const ArrowLeftIcon = forwardRef<ArrowLeftIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const p0TranslateX = useSharedValue(0);

    const startAnimation = useCallback(() => {
      p0TranslateX.value = withSequence(withTiming(0, { duration: 133 }), withTiming(3, { duration: 133 }), withTiming(0, { duration: 133 }));
    }, [p0TranslateX]);

    const stopAnimation = useCallback(() => {
      p0TranslateX.value = withTiming(0, { duration: 200 });
    }, [p0TranslateX]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const p0Props = useAnimatedProps(() => ({
      x: p0TranslateX.value,
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
            <AnimatedG animatedProps={p0Props}>
              <Path d="M10.5 19.5 3 12m0 0 7.5-7.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            </AnimatedG>
            <Path d="M3 12h18" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
          </Svg>
        </Animated.View>
      </IconWrapper>
    );
  },
);

ArrowLeftIcon.displayName = "ArrowLeftIcon";

export { ArrowLeftIcon };
