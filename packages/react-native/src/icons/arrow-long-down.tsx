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

export type ArrowLongDownIconHandle = IconHandle;

const ArrowLongDownIcon = forwardRef<ArrowLongDownIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const p0TranslateY = useSharedValue(0);

    const startAnimation = useCallback(() => {
      p0TranslateY.value = withSequence(withTiming(0, { duration: 133 }), withTiming(-3, { duration: 133 }), withTiming(0, { duration: 133 }));
    }, [p0TranslateY]);

    const stopAnimation = useCallback(() => {
      p0TranslateY.value = withTiming(0, { duration: 200 });
    }, [p0TranslateY]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const p0Props = useAnimatedProps(() => ({
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
            <AnimatedG animatedProps={p0Props}>
              <Path d="M15.75 17.25 12 21m0 0-3.75-3.75" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            </AnimatedG>
            <Path d="M12 21V3" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
          </Svg>
        </Animated.View>
      </IconWrapper>
    );
  },
);

ArrowLongDownIcon.displayName = "ArrowLongDownIcon";

export { ArrowLongDownIcon };
