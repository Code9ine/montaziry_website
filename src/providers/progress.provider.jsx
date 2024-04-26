"use client";
import { useMantineTheme } from "@mantine/core";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const ProgressProvider = () => {
  const theme = useMantineTheme();
  return (
    <ProgressBar
      height="3px"
      color={theme.colors[theme.primaryColor][5]}
      options={{ showSpinner: true }}
      shallowRouting
    />
  );
};

export default ProgressProvider;
