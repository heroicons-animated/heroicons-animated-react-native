import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import Svg, { G, Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedG = Animated.createAnimatedComponent(G);

export type IdentificationIconHandle = IconHandle;

const IdentificationIcon = forwardRef<IdentificationIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const s2Opacity = useSharedValue(1);
    const s2Scale = useSharedValue(1);
    const s1Opacity = useSharedValue(1);
    const s1Scale = useSharedValue(1);
    const s0Opacity = useSharedValue(1);
    const s0Scale = useSharedValue(1);

    const startAnimation = useCallback(() => {
      s2Opacity.value = withDelay(200, withSequence(withTiming(0, { duration: 150 }), withTiming(1, { duration: 150 })));
      s2Opacity.value = withDelay(200, withSequence(withTiming(0, { duration: 150 }), withTiming(1, { duration: 150 })));
      s2Scale.value = withDelay(200, withSequence(withTiming(0.5, { duration: 150 }), withTiming(1, { duration: 150 })));
      s2Opacity.value = withDelay(200, withSequence(withTiming(0, { duration: 150 }), withTiming(1, { duration: 150 })));
      s2Opacity.value = withDelay(200, withSequence(withTiming(0, { duration: 150 }), withTiming(1, { duration: 150 })));
      s2Scale.value = withDelay(200, withSequence(withTiming(0.5, { duration: 150 }), withTiming(1, { duration: 150 })));
      s2Opacity.value = withDelay(200, withSequence(withTiming(0, { duration: 150 }), withTiming(1, { duration: 150 })));
      s2Opacity.value = withDelay(200, withSequence(withTiming(0, { duration: 150 }), withTiming(1, { duration: 150 })));
      s2Scale.value = withDelay(200, withSequence(withTiming(0.5, { duration: 150 }), withTiming(1, { duration: 150 })));
      s1Opacity.value = withDelay(100, withSequence(withTiming(0, { duration: 150 }), withTiming(1, { duration: 150 })));
      s1Opacity.value = withDelay(100, withSequence(withTiming(0, { duration: 150 }), withTiming(1, { duration: 150 })));
      s1Scale.value = withDelay(100, withSequence(withTiming(0.5, { duration: 150 }), withTiming(1, { duration: 150 })));
      s0Opacity.value = withSequence(withTiming(0, { duration: 150 }), withTiming(1, { duration: 150 }));
      s0Opacity.value = withSequence(withTiming(0, { duration: 150 }), withTiming(1, { duration: 150 }));
      s0Scale.value = withSequence(withTiming(0.5, { duration: 150 }), withTiming(1, { duration: 150 }));
    }, [s2Opacity, s2Scale, s1Opacity, s1Scale, s0Opacity, s0Scale]);

    const stopAnimation = useCallback(() => {
      s2Opacity.value = withTiming(1, { duration: 200 });
      s2Opacity.value = withTiming(1, { duration: 200 });
      s2Scale.value = withTiming(1, { duration: 200 });
      s2Opacity.value = withTiming(1, { duration: 200 });
      s2Opacity.value = withTiming(1, { duration: 200 });
      s2Scale.value = withTiming(1, { duration: 200 });
      s2Opacity.value = withTiming(1, { duration: 200 });
      s2Opacity.value = withTiming(1, { duration: 200 });
      s2Scale.value = withTiming(1, { duration: 200 });
      s1Opacity.value = withTiming(1, { duration: 200 });
      s1Opacity.value = withTiming(1, { duration: 200 });
      s1Scale.value = withTiming(1, { duration: 200 });
      s0Opacity.value = withTiming(1, { duration: 200 });
      s0Opacity.value = withTiming(1, { duration: 200 });
      s0Scale.value = withTiming(1, { duration: 200 });
    }, [s2Opacity, s2Scale, s1Opacity, s1Scale, s0Opacity, s0Scale]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const s2Props = useAnimatedProps(() => ({
      opacity: s2Opacity.value,
      scale: s2Scale.value,
    }));

    const s1Props = useAnimatedProps(() => ({
      opacity: s1Opacity.value,
      scale: s1Scale.value,
    }));

    const s0Props = useAnimatedProps(() => ({
      opacity: s0Opacity.value,
      scale: s0Scale.value,
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
            <Path d="M4.5 19.5H19.5C20.7426 19.5 21.75 18.4926 21.75 17.25V6.75C21.75 5.50736 20.7426 4.5 19.5 4.5H4.5C3.25736 4.5 2.25 5.50736 2.25 6.75V17.25C2.25 18.4926 3.25736 19.5 4.5 19.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <AnimatedG animatedProps={s2Props}>
              <Path d="M15 9H18.75" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            </AnimatedG>
            <AnimatedG animatedProps={s2Props}>
              <Path d="M15 12H18.75" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            </AnimatedG>
            <AnimatedG animatedProps={s2Props}>
              <Path d="M15 15H18.75" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            </AnimatedG>
            <AnimatedG animatedProps={s1Props}>
              <Path d="M10.5 9.375C10.5 10.4105 9.66053 11.25 8.625 11.25C7.58947 11.25 6.75 10.4105 6.75 9.375C6.75 8.33947 7.58947 7.5 8.625 7.5C9.66053 7.5 10.5 8.33947 10.5 9.375Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            </AnimatedG>
            <AnimatedG animatedProps={s0Props}>
              <Path d="M11.7939 15.7114C10.8489 16.2147 9.77021 16.5 8.62484 16.5C7.47948 16.5 6.40074 16.2147 5.45581 15.7114C5.92986 14.4207 7.16983 13.5 8.62484 13.5C10.0799 13.5 11.3198 14.4207 11.7939 15.7114Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            </AnimatedG>
          </Svg>
        </Animated.View>
      </IconWrapper>
    );
  },
);

IdentificationIcon.displayName = "IdentificationIcon";

export { IdentificationIcon };
