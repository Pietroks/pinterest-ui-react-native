import { Pressable, PressableProps, Text } from "react-native";
import { FilterProps } from "./filter";
import { styles } from "./styles";

export function Filter({filter, selected, ...rest}: PressableProps & FilterProps) {
    return (
        <Pressable {...rest} style={[styles.pressable, selected && styles.pressableSelected]}>
            <Text style={styles.text}>{filter}</Text>
        </Pressable>
    )
}