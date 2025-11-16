import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ChevronLeft,
  Menu,
  Heart,
  Star,
  Play,
  FileText,
  Search,
} from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';

export default function CoursesScreen() {
  const router = useRouter();

  const navigateToCourseDetails = (courseData: any) => {
    router.push({
      pathname: '/course-details',
      params: courseData,
    });
  };

  const courses = [
    {
      id: '1',
      title: '3D Design Basic',
      lessons: 24,
      rating: 4.8,
      price: 24.99,
      image:
        'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Phoenix Baker',
      authorRole: 'Mentor',
      authorAvatar:
        'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200',
      reviews: '89',
      students: '850',
      duration: '6 Hours',
      isBestseller: true,
    },
    {
      id: '2',
      title: 'Characters Design',
      lessons: 22,
      rating: 4.7,
      price: 14.99,
      image:
        'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Robert Fox',
      authorRole: 'Designer',
      authorAvatar:
        'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200',
      reviews: '76',
      students: '650',
      duration: '5 Hours',
      isBestseller: false,
    },
    {
      id: '3',
      title: '2D Abstract',
      lessons: 14,
      rating: 4.8,
      price: 18.99,
      image:
        'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Sarah Johnson',
      authorRole: 'Mentor',
      authorAvatar:
        'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200',
      reviews: '92',
      students: '720',
      duration: '4 Hours',
      isBestseller: true,
    },
    {
      id: '4',
      title: 'Product Design',
      lessons: 24,
      rating: 4.9,
      price: 21.99,
      image:
        'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Phoenix Baker',
      authorRole: 'Mentor',
      authorAvatar:
        'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200',
      reviews: '156',
      students: '1.2k',
      duration: '7 Hours',
      isBestseller: true,
    },
    {
      id: '5',
      title: 'UI Design',
      lessons: 18,
      rating: 4.6,
      price: 19.99,
      image:
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Robert Fox',
      authorRole: 'Designer',
      authorAvatar:
        'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200',
      reviews: '68',
      students: '580',
      duration: '5 Hours',
      isBestseller: false,
    },
    {
      id: '6',
      title: '3D Abstract',
      lessons: 20,
      rating: 4.7,
      price: 22.99,
      image:
        'https://images.pexels.com/photos/159519/back-to-school-paper-colored-paper-stationery-159519.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Sarah Johnson',
      authorRole: 'Mentor',
      authorAvatar:
        'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200',
      reviews: '104',
      students: '890',
      duration: '6 Hours',
      isBestseller: true,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#7c6ff5"
        translucent={false}
      />
      <LinearGradient colors={['#7c6ff5', '#9d8ff7']} style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.headerTitle}>Courses</Text>
          <TouchableOpacity style={styles.menuButton}>
            <BlurView intensity={20} style={styles.menuButtonBlur} tint="light">
              <Menu size={24} color="#1a1a1a" />
            </BlurView>
          </TouchableOpacity>
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <Search size={20} color="#999" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search courses..."
              placeholderTextColor="#999"
            />
          </View>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.coursesList}>
          {courses.map((course) => (
            <TouchableOpacity
              key={course.id}
              style={styles.courseCard}
              onPress={() =>
                navigateToCourseDetails({
                  id: course.id,
                  title: course.title,
                  author: course.author,
                  authorRole: course.authorRole,
                  authorAvatar: course.authorAvatar,
                  image: course.image,
                  price: `$${course.price}`,
                  rating: course.rating.toString(),
                  reviews: course.reviews,
                  students: course.students,
                  duration: course.duration,
                  lessons: course.lessons.toString(),
                })
              }
            >
              <View style={styles.courseCardLeft}>
                <Image
                  source={{ uri: course.image }}
                  style={styles.courseCardImage}
                  resizeMode="cover"
                />
                <TouchableOpacity style={styles.playButton}>
                  <BlurView
                    intensity={20}
                    style={styles.coursePlayButtonBlur}
                    tint="light"
                  >
                    <Play size={16} color="#ffffff" fill="#ffffff" />
                  </BlurView>
                </TouchableOpacity>
                <TouchableOpacity style={styles.documentButton}>
                  <BlurView
                    intensity={20}
                    style={styles.courseButtonBlur}
                    tint="light"
                  >
                    <FileText size={16} color="#1a1a1a" />
                  </BlurView>
                </TouchableOpacity>
              </View>
              <View style={styles.courseCardRight}>
                <View>
                  <View style={styles.courseTags}>
                    <LinearGradient
                      colors={['#d0d0d0', '#e8e8e8', '#d0d0d0']}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                      style={styles.ratingTagGradient}
                    >
                      <View style={styles.ratingTag}>
                        <Star size={12} color="#ffa500" fill="#ffa500" />
                        <Text style={styles.ratingTagText}>
                          {course.rating}
                        </Text>
                      </View>
                    </LinearGradient>
                    {course.isBestseller && (
                      <LinearGradient
                        colors={['#d4c5ff', '#e6deff', '#d4c5ff']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.bestsellerTagGradient}
                      >
                        <View style={styles.bestsellerTag}>
                          <Text style={styles.bestsellerTagText}>
                            Bestseller
                          </Text>
                        </View>
                      </LinearGradient>
                    )}
                  </View>
                  <Text style={styles.courseCardTitle}>{course.title}</Text>
                </View>
                <Text style={styles.courseCardPrice}>${course.price}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    marginBottom: 58,
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
    marginBottom: 20,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    overflow: 'hidden',
  },
  backButtonBlur: {
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
  searchContainer: {
    marginTop: 8,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 56,
    gap: 12,
  },
  searchIcon: {
    marginRight: 4,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#1a1a1a',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  coursesList: {
    gap: 16,
    marginTop: 24,
    paddingBottom: 24,
  },
  courseCard: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    flexDirection: 'row',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    height: 145,
  },
  courseCardLeft: {
    width: '50%',
    position: 'relative',
    overflow: 'hidden',
  },
  courseCardImage: {
    width: '100%',
    height: '100%',
  },
  playButton: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  documentButton: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  coursePlayButtonBlur: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(124, 111, 245, 0.4)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.6)',
  },
  courseButtonBlur: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  courseCardRight: {
    width: '50%',
    padding: 12,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'space-between',
  },
  courseTags: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 6,
  },
  ratingTagGradient: {
    borderRadius: 12,
    padding: 1.5,
  },
  ratingTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10.5,
    gap: 4,
  },
  ratingTagText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  bestsellerTagGradient: {
    borderRadius: 12,
    padding: 1.5,
  },
  bestsellerTag: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10.5,
  },
  bestsellerTagText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  courseCardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1a1a1a',
    marginTop: 4,
    marginBottom: 0,
  },
  courseCardPrice: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
    alignSelf: 'flex-end',
  },
});
