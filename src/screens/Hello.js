import * as React from "react";
import { Text, Box, Pressable } from "native-base";

export default function Hello({ navigation }) {
    return (
        <Box bg="primary.900" flex={1} alignItems="center" justifyContent="center" >

            <Text fontFamily="body" fontWeight={400} fontSize={30}>Welcome to My App</Text>
        </Box>
    );
}