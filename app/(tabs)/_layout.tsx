import { Tabs } from 'expo-router';
import { Home, BookOpen, User, Search, Play } from 'lucide-react-native';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';

const tabLabels: { [key: string]: string } = {
  index: 'Home',
  search: 'Search',
  courses: 'Courses',
  favorites: 'My',
  profile: 'Profile',
};

const tabIcons: { [key: string]: any } = {
  index: Home,
  search: Search,
  courses: Play,
  favorites: BookOpen,
  profile: User,
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#1a1a1a',
          borderTopWidth: 0,
          height: 75,
          paddingBottom: 10,
          paddingTop: 10,
          paddingHorizontal: 16,
          borderRadius: 32,
          marginVertical: 10,
          position: 'absolute',
        },
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#ffffff',
        tabBarShowLabel: false,
      }}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="#7c6ff5"
        translucent={false}
      />
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => {
            const Icon = tabIcons.index;
            if (focused) {
              return (
                <View style={styles.activeTabContainer}>
                  <View style={styles.activeIconCircle}>
                    <Icon size={18} color="#ffffff" strokeWidth={2} />
                  </View>
                  <Text style={styles.activeTabLabel}>{tabLabels.index}</Text>
                </View>
              );
            }
            return (
              <View style={styles.iconCircle}>
                <Icon size={20} color="#ffffff" strokeWidth={2} />
              </View>
            );
          },
          tabBarButton: (props: any) => (
            <TouchableOpacity
              {...props}
              style={styles.tabButton}
              activeOpacity={0.7}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ focused }) => {
            const Icon = tabIcons.search;
            if (focused) {
              return (
                <View style={styles.activeTabContainer}>
                  <View style={styles.activeIconCircle}>
                    <Icon size={18} color="#ffffff" strokeWidth={2} />
                  </View>
                  <Text style={styles.activeTabLabel}>{tabLabels.search}</Text>
                </View>
              );
            }
            return (
              <View style={styles.iconCircle}>
                <Icon size={20} color="#ffffff" strokeWidth={2} />
              </View>
            );
          },
          tabBarButton: (props: any) => (
            <TouchableOpacity
              {...props}
              style={styles.tabButton}
              activeOpacity={0.7}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="courses"
        options={{
          tabBarIcon: ({ focused }) => {
            const Icon = tabIcons.courses;
            if (focused) {
              return (
                <View style={styles.activeTabContainer}>
                  <View style={styles.activeIconCircle}>
                    <Icon
                      size={18}
                      color="#ffffff"
                      strokeWidth={2}
                      fill="#ffffff"
                    />
                  </View>
                  <Text style={styles.activeTabLabel}>{tabLabels.courses}</Text>
                </View>
              );
            }
            return (
              <View style={styles.iconCircle}>
                <Icon size={20} color="#ffffff" strokeWidth={2} />
              </View>
            );
          },
          tabBarButton: (props: any) => (
            <TouchableOpacity
              {...props}
              style={styles.tabButton}
              activeOpacity={0.7}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="myCourses"
        options={{
          tabBarIcon: ({ focused }) => {
            const Icon = tabIcons.favorites;
            if (focused) {
              return (
                <View style={styles.activeTabContainer}>
                  <View style={styles.activeIconCircle}>
                    <Icon size={18} color="#ffffff" strokeWidth={2} />
                  </View>
                  <Text style={styles.activeTabLabel}>
                    {tabLabels.favorites}
                  </Text>
                </View>
              );
            }
            return (
              <View style={styles.iconCircle}>
                <Icon size={20} color="#ffffff" strokeWidth={2} />
              </View>
            );
          },
          tabBarButton: (props: any) => (
            <TouchableOpacity
              {...props}
              style={styles.tabButton}
              activeOpacity={0.7}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => {
            const Icon = tabIcons.profile;
            if (focused) {
              return (
                <View style={styles.activeTabContainer}>
                  <View style={styles.activeIconCircle}>
                    <Icon size={18} color="#ffffff" strokeWidth={2} />
                  </View>
                  <Text style={styles.activeTabLabel}>{tabLabels.profile}</Text>
                </View>
              );
            }
            return (
              <View style={styles.iconCircle}>
                <Icon size={20} color="#ffffff" strokeWidth={2} />
              </View>
            );
          },
          tabBarButton: (props: any) => (
            <TouchableOpacity
              {...props}
              style={styles.tabButton}
              activeOpacity={0.7}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7c6ff5',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 24,
    gap: 8,
    minWidth: 100,
  },
  activeIconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTabLabel: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
});
