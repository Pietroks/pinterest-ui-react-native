import { ScrollView, View } from "react-native";
import { Post } from "@/components/POST";
import { PostsProps } from "./posts";
import { styles } from "./styles";

export function Posts({posts}: PostsProps) {
    function postsByColumn(column: 'right' | 'left') {
        
        const rest = column === 'left' ? 0 : 1
        
        return posts.filter((_, index) => index % 2 === rest)
        .map((posts) => (
            <Post key={posts.id} post={posts} />
        ))
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.list}>
            <View style={styles.container}>
                <View style={styles.column}>{postsByColumn('left')}</View>
                <View style={styles.column}>{postsByColumn('right')}</View>
            </View>
        </ScrollView>
    )
}