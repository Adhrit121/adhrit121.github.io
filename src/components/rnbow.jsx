const rainbowColors = [
    'hsl(198deg 79% 15%) 5%',
    'hsl(198deg 84% 19%) 15%',
    'hsl(198deg 87% 22%) 20%',
    'hsl(197deg 90% 24%) 24%',
    'hsl(197deg 92% 26%) 28%',
    'hsl(197deg 93% 28%) 31%',
    'hsl(197deg 95% 30%) 34%',
    'hsl(196deg 95% 32%) 37%',
    'hsl(195deg 96% 33%) 40%',
    'hsl(195deg 97% 34%) 43%',
    'hsl(194deg 97% 36%) 46%',
    'hsl(194deg 98% 37%) 48%',
    'hsl(193deg 99% 38%) 51%',
    'hsl(195deg 74% 44%) 53%',
    'hsl(195deg 66% 47%) 56%',
    'hsl(195deg 60% 50%) 59%',
    'hsl(195deg 61% 52%) 61%',
    'hsl(194deg 62% 54%) 64%',
    'hsl(194deg 63% 56%) 67%',
    'hsl(195deg 62% 62%) 70%',
    'hsl(195deg 61% 67%) 73%',
    'hsl(195deg 61% 71%) 77%',
    'hsl(195deg 61% 75%) 81%',
    'hsl(195deg 62% 78%) 86%',
    'hsl(194deg 63% 82%) 96%'
  ];
  const paletteSize = rainbowColors.length;
  const useRainbow = ({ intervalDelay = 500 }) => {
    // Register all custom properties.
    // This only ever needs to be done once, so there are no dependencies.
    React.useEffect(() => {
      for (let i = 0; i < 3; i++) {
        try {
          CSS.registerProperty({
            name: `--magic-rainbow-color-${i}`,
            initialValue: rainbowColors[i],
            syntax: '<color>',
            inherits: false,
          });
        } catch (err) {
          console.log(err);
        }
      }
    }, []);
    // Get an ever-incrementing number from another custom hook*
    const intervalCount = useIncrementingNumber(intervalDelay);
    // Using that interval count, derive each current color value
    return {
      '--magic-rainbow-color-0': rainbowColors[(intervalCount + 1) % paletteSize],
      '--magic-rainbow-color-1': rainbowColors[(intervalCount + 2) % paletteSize],
      '--magic-rainbow-color-2': rainbowColors[(intervalCount + 3) % paletteSize],
    };
  };
  export default useRainbow;