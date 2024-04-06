import { Tabs } from "expo-router";
import { Foundation, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { theme } from "@/themes";
import { Avatar } from "@/components/avatar";
import { View } from "react-native";
import { Menu } from "@/components/menu";
import { useRef } from "react";
import BottomSheet from "@gorhom/bottom-sheet";

export default function TabLayout() {
    const bottomSheetRef = useRef <BottomSheet>(null)

    const handleBottomSheetOpen = () => bottomSheetRef.current?.expand()
    const handleBottomSheetClose = () => bottomSheetRef.current?.snapToIndex(0)

    return (
        <View style={{flex:1}}>
            <Tabs screenOptions={{
            headerShown: false, 
            tabBarShowLabel: false,
            tabBarActiveTintColor: theme.colors.white,
            tabBarInactiveTintColor: theme.colors.gray[600],
            tabBarStyle: {
                backgroundColor: theme.colors.black,
                borderColor: theme.colors.black,
            }
            }}>
            <Tabs.Screen name="index" options={{
                tabBarIcon: ({size, color}) => (<Foundation name="home" size={size} color={color} />)
            }}/>
            <Tabs.Screen name="search" options={{
                tabBarIcon: ({size, color}) => (<Ionicons name="search" size={size} color={color} />)
            }}/>

            <Tabs.Screen name="menu" options={{
                tabBarIcon: ({size, color}) => (<FontAwesome5 name="plus" size={size} color={color} />)
            }}
                listeners={() => ({
                    tabPress: (event) => {
                        event.preventDefault()
                        handleBottomSheetOpen()
                    }
                })}
            />

            <Tabs.Screen name="messages" options={{
                tabBarIcon: ({size, color}) => (<Ionicons name="chatbubble-ellipses" size={size} color={color} />)
            }}/>
            <Tabs.Screen name="profile" options={{
                tabBarIcon: ({color}) => <Avatar selected={color === theme.colors.white} source={{uri: 'https://github.com/Pietroks.png'}}/>
            }}/>
            </Tabs>

            <Menu ref={bottomSheetRef} onClose={handleBottomSheetClose}/>
        </View>
    )
}