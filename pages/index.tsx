import Head from "next/head";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import useRandomPosition from "@/hooks/RandomPositionHook";
import MiddleFingerConfetti from "@/components/MiddleFingerConfetti";
import confetti from "canvas-confetti";
import HeartsBackground from "@/components/HeartsBackground";

const MainPage = () => {
  const [showMiddleFinger, setShowMiddleFinger] = useState(false);
  const [count, setCount] = useState(0);
  const { position, randomizePosition } = useRandomPosition();

  const handleYayClick = () => {
    confetti();
    showMiddleFinger && setShowMiddleFinger(false);
    setCount(0);
  };

  const handleFuckOffHover = () => {
    randomizePosition();
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    if (count > 10) {
      setShowMiddleFinger(true);
    }
  }, [count, setShowMiddleFinger]);

  return (
    <>
      <Head>
        <title>3 meses con mi amorcito🥰</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      <HeartsBackground
        zIndex="base"
        emoji={showMiddleFinger ? "🖕🏼" : undefined}
      />
      <Center position="relative" zIndex="sticky" height="100vh">
        <VStack padding={8}>
          <Box boxSize="sm">
            <Image src="/amorcito.png" alt="Amorcito" />
          </Box>
          <Box backgroundColor="rgba(255, 255, 255, 0.8)">
            <Heading width="100%">Felices 3 meses!</Heading>
            <VStack spacing={8}>
              <Text maxW="50ch">
                Hoy se cumplen 3 meses desde que somos oficiales, y no puedo
                estar más feliz de haberme encontrado con una persona tan
                maravillosa como tú. Te amo muchísimo y espero que podamos
                seguir compartiendo muchos momentos juntos. Te amo amorcito! 🥰
              </Text>
              <HStack width="100%">
                <Button cursor="pointer" onClick={handleYayClick}>
                  Yay!
                </Button>
                <Button
                  variant="secondary"
                  display={count > 10 ? "none" : "inherit"}
                  onMouseEnter={handleFuckOffHover}
                  onClick={handleFuckOffHover}
                  position={count ? "absolute" : "inherit"}
                  top={position.top}
                  left={position.left}
                >
                  Fuck off
                </Button>
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </Center>
      <MiddleFingerConfetti active={showMiddleFinger} />
    </>
  );
};

export default MainPage;
