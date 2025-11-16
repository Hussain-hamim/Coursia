import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ShoppingCart, Play, FileText, Menu } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';

export default function FavoritesScreen() {
  const router = useRouter();

  const navigateToCourseDetails = (courseData: any) => {
    router.push({
      pathname: '/course-details',
      params: courseData,
    });
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
          <Text style={styles.headerTitle}>My Courses</Text>
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
              </BlurView>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuButton}>
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
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.filterButtons}>
          <TouchableOpacity style={styles.filterButtonActive}>
            <Text style={styles.filterButtonActiveText}>Recent</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>18</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButtonInactive}>
            <Text style={styles.filterButtonInactiveText}>Oldest</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButtonInactive}>
            <Text style={styles.filterButtonInactiveText}>Complete</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.courseCard}
          onPress={() =>
            navigateToCourseDetails({
              id: '1',
              title: 'Design thinking skills',
              author: 'Lana Steiner',
              authorRole: 'Mentor',
              authorAvatar:
                'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200',
              image:
                'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=400',
              price: '$256',
              rating: '4.5',
              reviews: '123',
              students: '1.2k',
              duration: '5 Hours',
              lessons: '24',
            })
          }
          activeOpacity={0.9}
        >
          <View style={styles.courseImageContainer}>
            <Image
              source={{
                uri: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=400',
              }}
              style={styles.courseImage}
            />
            <View style={styles.imageOverlay}>
              <TouchableOpacity style={styles.playButton}>
                <BlurView
                  intensity={30}
                  style={styles.playButtonBlur}
                  tint="light"
                >
                  <Play size={20} color="#ffffff" fill="#ffffff" />
                </BlurView>
              </TouchableOpacity>
              <TouchableOpacity style={styles.documentButton}>
                <BlurView
                  intensity={30}
                  style={styles.documentButtonBlur}
                  tint="light"
                >
                  <FileText size={20} color="#ffffff" />
                </BlurView>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.courseDetails}>
            <Text style={styles.courseTitle}>Design thinking skills</Text>
            <Text style={styles.courseAuthor}>By Lana Steiner</Text>
            <View style={styles.progressContainer}>
              <View style={styles.progressBarBackground}>
                <LinearGradient
                  colors={['#7c6ff5', '#9d8ff7']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={[styles.progressBar, { width: '60%' }]}
                />
              </View>
            </View>
            <View style={styles.progressInfo}>
              <Text style={styles.progressText}>Ongoing</Text>
              <Text style={styles.progressPercentage}>60%</Text>
            </View>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}>Continue Learning</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.courseCard}
          onPress={() =>
            navigateToCourseDetails({
              id: '2',
              title: 'Principle of design',
              author: 'Emma Berger',
              authorRole: 'Designer',
              authorAvatar:
                'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200',
              image:
                'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=400',
              price: '$199',
              rating: '4.7',
              reviews: '89',
              students: '850',
              duration: '4 Hours',
              lessons: '20',
            })
          }
          activeOpacity={0.9}
        >
          <View style={styles.courseImageContainer}>
            <Image
              source={{
                uri: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=400',
              }}
              style={styles.courseImage}
            />
            <View style={styles.imageOverlay}>
              <TouchableOpacity style={styles.playButton}>
                <BlurView
                  intensity={30}
                  style={styles.playButtonBlur}
                  tint="light"
                >
                  <Play size={20} color="#ffffff" fill="#ffffff" />
                </BlurView>
              </TouchableOpacity>
              <TouchableOpacity style={styles.documentButton}>
                <BlurView
                  intensity={30}
                  style={styles.documentButtonBlur}
                  tint="light"
                >
                  <FileText size={20} color="#ffffff" />
                </BlurView>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.courseDetails}>
            <Text style={styles.courseTitle}>Principle of design</Text>
            <Text style={styles.courseAuthor}>By Emma Berger</Text>
            <View style={styles.progressContainer}>
              <View style={styles.progressBarBackground}>
                <LinearGradient
                  colors={['#7c6ff5', '#9d8ff7']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={[styles.progressBar, { width: '42%' }]}
                />
              </View>
            </View>
            <View style={styles.progressInfo}>
              <Text style={styles.progressText}>Ongoing</Text>
              <Text style={styles.progressPercentage}>42%</Text>
            </View>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}>Continue Learning</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </ScrollView>
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
  headerActions: {
    flexDirection: 'row',
    gap: 8,
  },
  cartButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    overflow: 'hidden',
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
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#ffffff',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 88,
  },
  filterButtons: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  filterButtonActive: {
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  filterButtonActiveText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  badge: {
    backgroundColor: '#7c6ff5',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    minWidth: 24,
    alignItems: 'center',
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '700',
  },
  filterButtonInactive: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  filterButtonInactiveText: {
    color: '#666',
    fontSize: 14,
    fontWeight: '500',
  },
  courseCard: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 16,
    marginBottom: 20,
    flexDirection: 'row',
    gap: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  courseImageContainer: {
    width: 120,
    height: 160,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
  },
  courseImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    right: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  playButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  playButtonBlur: {
    width: '100%',
    height: '100%',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(124, 111, 245, 0.4)',
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.6)',
  },
  documentButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  documentButtonBlur: {
    width: '100%',
    height: '100%',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  courseDetails: {
    flex: 1,
    justifyContent: 'space-between',
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  courseAuthor: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  progressContainer: {
    marginBottom: 8,
  },
  progressBarBackground: {
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: 4,
  },
  progressInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  progressText: {
    fontSize: 13,
    color: '#7c6ff5',
    fontWeight: '600',
  },
  progressPercentage: {
    fontSize: 13,
    color: '#1a1a1a',
    fontWeight: '700',
  },
  startButton: {
    backgroundColor: '#7c6ff5',
    paddingVertical: 12,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#7c6ff5',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  startButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ffffff',
  },
});
