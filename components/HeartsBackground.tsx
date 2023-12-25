import { Box, BoxProps } from "@chakra-ui/react";

export interface HeartsBackgroundProps extends BoxProps {
  emoji?: string;
  numberOfemojis?: number;
}

const HeartsBackground = ({
  emoji = "❤️",
  numberOfemojis = 50,
  ...props
}: HeartsBackgroundProps) => {
  const getRandomSize = () => {
    return `${Math.random() * 2 + 0.5}em`; // Random size between 0.5em and 2.5em
  };

  const getRandomPosition = () => {
    return `${Math.random() * 100}%`;
  };

  const emojiElems = Array.from({ length: numberOfemojis }).map((_, index) => (
    <Box
      key={index}
      position="absolute"
      top={getRandomPosition()}
      left={getRandomPosition()}
      fontSize={getRandomSize()}
    >
      {emoji}
    </Box>
  ));

  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      overflow="hidden"
      {...props}
    >
      {emojiElems}
    </Box>
  );
};

export default HeartsBackground;
