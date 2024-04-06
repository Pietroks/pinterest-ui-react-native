import { Text, View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { forwardRef } from "react";
import { MenuProps } from "./menu";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./styles";
import { theme } from "@/themes";
import { MenuButton } from "../menuButton";

export const Menu = forwardRef<BottomSheet, MenuProps>(({onClose}, ref) => {
    return (
        <BottomSheet ref={ref} index={0} snapPoints={[0.01, 230]} backgroundStyle={styles.container} handleComponent={() => null}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <FontAwesome name="close" size={24} color={theme.colors.white} onPress={onClose} />
                    <Text style={styles.title}>Começe a criar agora!</Text>
                </View>

                <View style={styles.options}>
                    <MenuButton title='Pin' icon="home" />
                    <MenuButton title='Colagem' icon="paste" />
                    <MenuButton title='Pasta' icon="folder" />
                </View>
            </View>
        </BottomSheet>
    )
})