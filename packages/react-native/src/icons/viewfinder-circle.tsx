import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import Svg, { G, Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedG = Animated.createAnimatedComponent(G);

export type ViewfinderCircleIconHandle = IconHandle;

const ViewfinderCircleIcon = forwardRef<ViewfinderCircleIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const p0Scale = useSharedValue(1);
    const p0Rotate = useSharedValue(0);
    const p0Opacity = useSharedValue(1);
    const p1Scale = useSharedValue(1);
    const p1Rotate = useSharedValue(0);
    const p1Opacity = useSharedValue(1);
    const p2Scale = useSharedValue(1);
    const p2Rotate = useSharedValue(0);
    const p2Opacity = useSharedValue(1);
    const p3Scale = useSharedValue(1);
    const p3Rotate = useSharedValue(0);
    const p3Opacity = useSharedValue(1);
    const p4Scale = useSharedValue(1);
    const p4Opacity = useSharedValue(1);

    const startAnimation = useCallback(() => {
      p0Scale.value = withSpring(1.2, { stiffness: 200, damping: 20 });
      p0Rotate.value = withSpring(45, { stiffness: 200, damping: 20 });
      p0Opacity.value = withTiming(0, { duration: 400 });
      p1Scale.value = withSpring(1.2, { stiffness: 200, damping: 20 });
      p1Rotate.value = withSpring(45, { stiffness: 200, damping: 20 });
      p1Opacity.value = withTiming(0, { duration: 400 });
      p2Scale.value = withSpring(1.2, { stiffness: 200, damping: 20 });
      p2Rotate.value = withSpring(45, { stiffness: 200, damping: 20 });
      p2Opacity.value = withTiming(0, { duration: 400 });
      p3Scale.value = withSpring(1.2, { stiffness: 200, damping: 20 });
      p3Rotate.value = withSpring(45, { stiffness: 200, damping: 20 });
      p3Opacity.value = withTiming(0, { duration: 400 });
      p4Scale.value = withTiming(0.8, { duration: 300 });
      p4Opacity.value = withTiming(0, { duration: 300 });
    }, [p0Scale, p0Rotate, p0Opacity, p1Scale, p1Rotate, p1Opacity, p2Scale, p2Rotate, p2Opacity, p3Scale, p3Rotate, p3Opacity, p4Scale, p4Opacity]);

    const stopAnimation = useCallback(() => {
      p0Scale.value = withSpring(1);
      p0Rotate.value = withSpring(0);
      p0Opacity.value = withTiming(1, { duration: 200 });
      p1Scale.value = withSpring(1);
      p1Rotate.value = withSpring(0);
      p1Opacity.value = withTiming(1, { duration: 200 });
      p2Scale.value = withSpring(1);
      p2Rotate.value = withSpring(0);
      p2Opacity.value = withTiming(1, { duration: 200 });
      p3Scale.value = withSpring(1);
      p3Rotate.value = withSpring(0);
      p3Opacity.value = withTiming(1, { duration: 200 });
      p4Scale.value = withTiming(1, { duration: 200 });
      p4Opacity.value = withTiming(1, { duration: 200 });
    }, [p0Scale, p0Rotate, p0Opacity, p1Scale, p1Rotate, p1Opacity, p2Scale, p2Rotate, p2Opacity, p3Scale, p3Rotate, p3Opacity, p4Scale, p4Opacity]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const p0Props = useAnimatedProps(() => ({
      scale: p0Scale.value,
      rotation: p0Rotate.value,
      opacity: p0Opacity.value,
    }));

    const p1Props = useAnimatedProps(() => ({
      scale: p1Scale.value,
      rotation: p1Rotate.value,
      opacity: p1Opacity.value,
    }));

    const p2Props = useAnimatedProps(() => ({
      scale: p2Scale.value,
      rotation: p2Rotate.value,
      opacity: p2Opacity.value,
    }));

    const p3Props = useAnimatedProps(() => ({
      scale: p3Scale.value,
      rotation: p3Rotate.value,
      opacity: p3Opacity.value,
    }));

    const p4Props = useAnimatedProps(() => ({
      scale: p4Scale.value,
      opacity: p4Opacity.value,
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
              <Path d="M7.5 3.75H6C4.75736 3.75 3.75 4.75736 3.75 6V7.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            </AnimatedG>
            <AnimatedG animatedProps={p1Props}>
              <Path d="M16.5 3.75H18C19.2426 3.75 20.25 4.75736 20.25 6V7.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            </AnimatedG>
            <AnimatedG animatedProps={p2Props}>
              <Path d="M20.25 16.5V18C20.25 19.2426 19.2426 20.25 18 20.25H16.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            </AnimatedG>
            <AnimatedG animatedProps={p3Props}>
              <Path d="M7.5 20.25H6C4.75736 20.25 3.75 19.2426 3.75 18V16.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            </AnimatedG>
            <AnimatedG animatedProps={p4Props}>
              <Path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            </AnimatedG>
          </Svg>
        </Animated.View>
      </IconWrapper>
    );
  },
);

ViewfinderCircleIcon.displayName = "ViewfinderCircleIcon";

export { ViewfinderCircleIcon };
