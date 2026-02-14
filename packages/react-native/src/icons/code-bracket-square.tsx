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

export type CodeBracketSquareIconHandle = IconHandle;

const CodeBracketSquareIcon = forwardRef<CodeBracketSquareIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const s1Rotate = useSharedValue(0);
    const s1TranslateX = useSharedValue(0);
    const s1Opacity = useSharedValue(1);
    const ns0Rotate = useSharedValue(0);
    const ns0TranslateX = useSharedValue(0);
    const ns0Opacity = useSharedValue(1);

    const startAnimation = useCallback(() => {
      s1Rotate.value = withDelay(150, withSequence(withTiming(0, { duration: 250 }), withTiming(0, { duration: 250 })));
      s1TranslateX.value = withDelay(150, withSequence(withTiming(0, { duration: 250 }), withTiming(0, { duration: 250 })));
      s1Opacity.value = withDelay(150, withTiming(1, { duration: 500 }));
      ns0Rotate.value = withSequence(withTiming(0, { duration: 250 }), withTiming(0, { duration: 250 }));
      ns0TranslateX.value = withSequence(withTiming(0, { duration: 250 }), withTiming(0, { duration: 250 }));
      ns0Opacity.value = withTiming(1, { duration: 500 });
    }, [s1Rotate, s1TranslateX, s1Opacity, ns0Rotate, ns0TranslateX, ns0Opacity]);

    const stopAnimation = useCallback(() => {
      s1Rotate.value = withTiming(0, { duration: 200 });
      s1TranslateX.value = withTiming(0, { duration: 200 });
      s1Opacity.value = withTiming(1, { duration: 200 });
      ns0Rotate.value = withTiming(0, { duration: 200 });
      ns0TranslateX.value = withTiming(0, { duration: 200 });
      ns0Opacity.value = withTiming(1, { duration: 200 });
    }, [s1Rotate, s1TranslateX, s1Opacity, ns0Rotate, ns0TranslateX, ns0Opacity]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const s1Props = useAnimatedProps(() => ({
      rotation: s1Rotate.value,
      x: s1TranslateX.value,
      opacity: s1Opacity.value,
    }));

    const ns0Props = useAnimatedProps(() => ({
      rotation: ns0Rotate.value,
      x: ns0TranslateX.value,
      opacity: ns0Opacity.value,
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
            <Path d="M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <AnimatedG animatedProps={s1Props}>
              <Path d="M14.25 9.75 16.5 12l-2.25 2.25" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            </AnimatedG>
            <AnimatedG animatedProps={ns0Props}>
              <Path d="M9.75 9.75L7.5 12l2.25 2.25" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            </AnimatedG>
          </Svg>
        </Animated.View>
      </IconWrapper>
    );
  },
);

CodeBracketSquareIcon.displayName = "CodeBracketSquareIcon";

export { CodeBracketSquareIcon };
