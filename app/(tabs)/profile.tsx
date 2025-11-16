import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
  Modal,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ShoppingCart,
  User,
  Download,
  Play,
  Settings,
  ChevronRight,
  Menu,
  X,
  BookOpen,
} from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen() {
  const router = useRouter();
  const [menuModalVisible, setMenuModalVisible] = useState(false);
  const [preferencesModalVisible, setPreferencesModalVisible] = useState(false);
  const [downloadModalVisible, setDownloadModalVisible] = useState(false);
  const [playbackModalVisible, setPlaybackModalVisible] = useState(false);
  const [generalModalVisible, setGeneralModalVisible] = useState(false);

  const handleViewPreferences = () => {
    setPreferencesModalVisible(true);
  };

  const handleDownloadOptions = () => {
    setDownloadModalVisible(true);
  };

  const handlePlaybackOptions = () => {
    setPlaybackModalVisible(true);
  };

  const handleGeneralOptions = () => {
    setGeneralModalVisible(true);
  };

  const handleAccountSettings = () => {
    // In a real app, this would navigate to account settings screen
    // router.push('/account-settings');
  };

  const handleHelpSupport = () => {
    // In a real app, this would navigate to help screen
    // router.push('/help-support');
  };

  const handlePrivacyPolicy = () => {
    // In a real app, this would navigate to privacy policy screen
    // router.push('/privacy-policy');
  };

  const handleTermsConditions = () => {
    // In a real app, this would navigate to terms screen
    // router.push('/terms-conditions');
  };

  const handleProfilePress = () => {
    // In a real app, this would open profile edit screen
    // router.push('/edit-profile');
  };

  const handleMyCourses = () => {
    router.push('/my-courses');
  };

  const handleLogout = async () => {
    // Clear login state
    await AsyncStorage.removeItem('isLoggedIn');
    // Navigate to onboarding
    router.replace('/(onboarding)' as any);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#7c6ff5"
        translucent={false}
      />
      <LinearGradient colors={['#7c6ff5', '#9d8ff7']} style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.headerTitle}>Account</Text>
          <View style={styles.headerActions}>
            <TouchableOpacity
              style={styles.cartButton}
              onPress={() => router.push('/cart')}
            >
              <BlurView
                intensity={20}
                style={styles.cartButtonBlur}
                tint="light"
              >
                <ShoppingCart size={24} color="#1a1a1a" />
                <View style={styles.cartBadge} />
              </BlurView>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuButton}
              onPress={() => setMenuModalVisible(true)}
            >
              <BlurView
                intensity={20}
                style={styles.menuButtonBlur}
                tint="light"
              >
                <Menu size={24} color="#1a1a1a" />
              </BlurView>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <TouchableOpacity
          style={styles.profileCard}
          onPress={handleProfilePress}
          activeOpacity={0.9}
        >
          <View style={styles.profileInfo}>
            <View style={styles.avatarContainer}>
              <Image
                source={{
                  uri: 'https://randomuser.me/api/portraits/men/1.jpg',
                }}
                style={styles.avatar}
              />
              <View style={styles.avatarBadge}>
                <View style={styles.avatarBadgeDot} />
              </View>
            </View>
            <View style={styles.profileText}>
              <Text style={styles.profileName}>Eren</Text>
              <Text style={styles.profileEmail}>eren@gmail.com</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.myCoursesButton}
          onPress={handleMyCourses}
        >
          <View style={styles.myCoursesContent}>
            <View style={styles.myCoursesIcon}>
              <BookOpen size={24} color="#7c6ff5" />
            </View>
            <View style={styles.myCoursesText}>
              <Text style={styles.myCoursesTitle}>My Courses</Text>
              <Text style={styles.myCoursesSubtitle}>
                View all enrolled courses
              </Text>
            </View>
            <ChevronRight size={20} color="#999" />
          </View>
        </TouchableOpacity>

        <View style={styles.optionsGrid}>
          <TouchableOpacity
            style={styles.optionCard}
            onPress={handleViewPreferences}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={['#e6deff', '#f0ebff']}
              style={styles.optionIconGradient}
            >
              <User size={24} color="#7c6ff5" />
            </LinearGradient>
            <Text style={styles.optionTitle}>View</Text>
            <Text style={styles.optionSubtitle}>preference</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionCard}
            onPress={handleDownloadOptions}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={['#d1f4f4', '#e0f7f7']}
              style={styles.optionIconGradient}
            >
              <Download size={24} color="#4fb8b8" />
            </LinearGradient>
            <Text style={styles.optionTitle}>Download</Text>
            <Text style={styles.optionSubtitle}>options</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionCard}
            onPress={handlePlaybackOptions}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={['#ffe6f0', '#fff0f5']}
              style={styles.optionIconGradient}
            >
              <Play size={24} color="#ff69b4" />
            </LinearGradient>
            <Text style={styles.optionTitle}>Playback</Text>
            <Text style={styles.optionSubtitle}>options</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionCard}
            onPress={handleGeneralOptions}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={['#e6e6ff', '#f0f0ff']}
              style={styles.optionIconGradient}
            >
              <Settings size={24} color="#7c7cff" />
            </LinearGradient>
            <Text style={styles.optionTitle}>General</Text>
            <Text style={styles.optionSubtitle}>option</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={handleAccountSettings}
          activeOpacity={0.7}
        >
          <View style={[styles.menuIcon, { backgroundColor: '#e6deff' }]}>
            <User size={20} color="#7c6ff5" />
          </View>
          <Text style={styles.menuText}>Account setting</Text>
          <ChevronRight size={20} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={handleHelpSupport}
          activeOpacity={0.7}
        >
          <View style={[styles.menuIcon, { backgroundColor: '#ffe6f0' }]}>
            <Settings size={20} color="#ff69b4" />
          </View>
          <Text style={styles.menuText}>Help and Support</Text>
          <ChevronRight size={20} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={handlePrivacyPolicy}
          activeOpacity={0.7}
        >
          <View style={[styles.menuIcon, { backgroundColor: '#d1f4f4' }]}>
            <Download size={20} color="#4fb8b8" />
          </View>
          <Text style={styles.menuText}>Privacy Policy</Text>
          <ChevronRight size={20} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={handleTermsConditions}
          activeOpacity={0.7}
        >
          <View style={[styles.menuIcon, { backgroundColor: '#e6e6ff' }]}>
            <Settings size={20} color="#7c7cff" />
          </View>
          <Text style={styles.menuText}>Terms & Conditions</Text>
          <ChevronRight size={20} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
          activeOpacity={0.8}
        >
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Menu Modal */}
      <Modal
        visible={menuModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setMenuModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Quick Menu</Text>
              <TouchableOpacity
                onPress={() => setMenuModalVisible(false)}
                style={styles.modalCloseButton}
              >
                <X size={24} color="#1a1a1a" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.modalItem}
              onPress={() => {
                setMenuModalVisible(false);
                handleMyCourses();
              }}
            >
              <BookOpen size={20} color="#7c6ff5" />
              <Text style={styles.modalItemText}>My Courses</Text>
              <ChevronRight size={20} color="#999" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalItem}
              onPress={() => {
                setMenuModalVisible(false);
                router.push('/cart');
              }}
            >
              <ShoppingCart size={20} color="#7c6ff5" />
              <Text style={styles.modalItemText}>Shopping Cart</Text>
              <ChevronRight size={20} color="#999" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalItem}
              onPress={() => {
                setMenuModalVisible(false);
                handleAccountSettings();
              }}
            >
              <User size={20} color="#7c6ff5" />
              <Text style={styles.modalItemText}>Account Settings</Text>
              <ChevronRight size={20} color="#999" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Preferences Modal */}
      <Modal
        visible={preferencesModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setPreferencesModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>View Preferences</Text>
              <TouchableOpacity
                onPress={() => setPreferencesModalVisible(false)}
                style={styles.modalCloseButton}
              >
                <X size={24} color="#1a1a1a" />
              </TouchableOpacity>
            </View>
            <Text style={styles.modalDescription}>
              Customize your viewing preferences and display settings.
            </Text>
          </View>
        </View>
      </Modal>

      {/* Download Options Modal */}
      <Modal
        visible={downloadModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setDownloadModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Download Options</Text>
              <TouchableOpacity
                onPress={() => setDownloadModalVisible(false)}
                style={styles.modalCloseButton}
              >
                <X size={24} color="#1a1a1a" />
              </TouchableOpacity>
            </View>
            <Text style={styles.modalDescription}>
              Manage your download settings and offline content.
            </Text>
          </View>
        </View>
      </Modal>

      {/* Playback Options Modal */}
      <Modal
        visible={playbackModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setPlaybackModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Playback Options</Text>
              <TouchableOpacity
                onPress={() => setPlaybackModalVisible(false)}
                style={styles.modalCloseButton}
              >
                <X size={24} color="#1a1a1a" />
              </TouchableOpacity>
            </View>
            <Text style={styles.modalDescription}>
              Adjust video playback speed, quality, and autoplay settings.
            </Text>
          </View>
        </View>
      </Modal>

      {/* General Options Modal */}
      <Modal
        visible={generalModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setGeneralModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>General Options</Text>
              <TouchableOpacity
                onPress={() => setGeneralModalVisible(false)}
                style={styles.modalCloseButton}
              >
                <X size={24} color="#1a1a1a" />
              </TouchableOpacity>
            </View>
            <Text style={styles.modalDescription}>
              Configure general app settings and preferences.
            </Text>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#ffffff',
  },
  headerActions: {
    flexDirection: 'row',
    gap: 8,
  },
  cartButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    overflow: 'hidden',
    position: 'relative',
  },
  cartButtonBlur: {
    width: '100%',
    height: '100%',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.4)',
  },
  cartBadge: {
    width: 10,
    height: 10,
    backgroundColor: '#ff6b6b',
    borderRadius: 5,
    position: 'absolute',
    top: 8,
    right: 8,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  menuButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    overflow: 'hidden',
  },
  menuButtonBlur: {
    width: '100%',
    height: '100%',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.4)',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  profileCard: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 20,
    marginTop: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 2,
    borderColor: '#7c6ff5',
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: '#7c6ff5',
  },
  avatarBadge: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#7c6ff5',
  },
  avatarBadgeDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#4ade80',
  },
  profileText: {
    flex: 1,
  },
  profileName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    color: '#666',
  },
  optionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginBottom: 24,
  },
  optionCard: {
    width: '47%',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    minHeight: 140,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  optionIconGradient: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  optionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1a1a1a',
    textAlign: 'center',
    marginBottom: 2,
  },
  optionSubtitle: {
    fontSize: 12,
    fontWeight: '500',
    color: '#666',
    textAlign: 'center',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  myCoursesButton: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  myCoursesContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  myCoursesIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#e6deff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  myCoursesText: {
    flex: 1,
  },
  myCoursesTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  myCoursesSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 24,
    paddingBottom: 40,
    height: '70%',
    minHeight: 400,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  modalCloseButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  modalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    gap: 12,
  },
  modalItemText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  logoutButton: {
    backgroundColor: '#ff6b6b',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    marginBottom: 24,
    shadowColor: '#ff6b6b',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },
});
