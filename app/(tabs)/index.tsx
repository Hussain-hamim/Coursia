import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  RefreshControl,
  Alert,
  Share,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Bell,
  Menu,
  Heart,
  Star,
  Play,
  FileText,
  Share2,
  Search,
} from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';
import { useState, useMemo } from 'react';
import SearchFilterModal from '../search-filter-modal';

export default function HomeScreen() {
  const router = useRouter();
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all'); // 'all', 'popular', 'newest'
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [refreshing, setRefreshing] = useState(false);

  const navigateToCourseDetails = (courseData: any) => {
    router.push({
      pathname: '/course-details',
      params: courseData,
    });
  };

  const handleShare = async (course: any) => {
    try {
      await Share.share({
        message: `Check out this course: ${course.title} by ${course.author}`,
        title: course.title,
      });
    } catch (error) {
      Alert.alert('Error', 'Failed to share course');
    }
  };

  const toggleFavorite = (courseId: string) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(courseId)) {
        newFavorites.delete(courseId);
      } else {
        newFavorites.add(courseId);
      }
      return newFavorites;
    });
  };

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate refresh
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  const featuredCourse = {
    id: '1',
    title: 'IOS Design Basics',
    author: 'Phoenix Baker',
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
    isBestseller: true,
    isPopular: true,
    isNew: false,
  };

  const allCourses = [
    {
      id: '2',
      title: 'IOS Design Basics',
      author: 'Phoenix Baker',
      authorRole: 'Mentor',
      authorAvatar:
        'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200',
      image:
        'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '$256',
      rating: '4.5',
      reviews: '123',
      students: '1.2k',
      duration: '5 Hours',
      lessons: '24',
      isBestseller: true,
      isPopular: true,
      isNew: false,
    },
    {
      id: '3',
      title: 'Product Design Mastery',
      author: 'Robert Fox',
      authorRole: 'Designer',
      authorAvatar:
        'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200',
      image:
        'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$189',
      rating: '4.8',
      reviews: '89',
      students: '850',
      duration: '6 Hours',
      lessons: '28',
      isBestseller: true,
      isPopular: false,
      isNew: true,
    },
    {
      id: '4',
      title: 'UI/UX Fundamentals',
      author: 'Sarah Johnson',
      authorRole: 'Mentor',
      authorAvatar:
        'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200',
      image:
        'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$199',
      rating: '4.7',
      reviews: '156',
      students: '1.5k',
      duration: '7 Hours',
      lessons: '32',
      isBestseller: false,
      isPopular: true,
      isNew: false,
    },
  ];

  const filteredCourses = useMemo(() => {
    let filtered = [...allCourses];

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (course) =>
          course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by active filter
    if (activeFilter === 'popular') {
      filtered = filtered.filter((course) => course.isPopular);
    } else if (activeFilter === 'newest') {
      filtered = filtered.filter((course) => course.isNew);
    }

    return filtered;
  }, [searchQuery, activeFilter]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#7c6ff5"
        translucent={false}
      />
      <LinearGradient colors={['#7c6ff5', '#9d8ff7']} style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.greeting}>Hello, Eren!</Text>
            <Text style={styles.subGreeting}>
              What you want to learn today?
            </Text>
          </View>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => router.push('/notifications')}
          >
            <Bell size={24} color="#ffffff" />
          </TouchableOpacity>
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <Search size={20} color="#999" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search courses..."
              placeholderTextColor="#999"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => setFilterModalVisible(true)}
          >
            <Menu size={20} color="#7c6ff5" />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured Courses</Text>
          <TouchableOpacity onPress={() => router.push('/(tabs)/courses')}>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.featuredCard}
          onPress={() => navigateToCourseDetails(featuredCourse)}
        >
          <View style={styles.featuredMentorSection}>
            <View style={styles.featuredMentorInfo}>
              <Image
                source={{ uri: featuredCourse.authorAvatar }}
                style={styles.featuredMentorAvatar}
              />
              <View>
                <Text style={styles.featuredMentorName}>
                  {featuredCourse.author}
                </Text>
                <Text style={styles.featuredMentorRole}>
                  {featuredCourse.authorRole}
                </Text>
              </View>
            </View>
            <View style={styles.featuredMentorActions}>
              <TouchableOpacity
                style={styles.featuredMentorButton}
                onPress={() => handleShare(featuredCourse)}
              >
                <Share2 size={18} color="#666" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.featuredMentorButtonHeart}
                onPress={() => toggleFavorite(featuredCourse.id)}
              >
                <Heart
                  size={18}
                  color={favorites.has(featuredCourse.id) ? '#ff6b6b' : '#666'}
                  fill={favorites.has(featuredCourse.id) ? '#ff6b6b' : 'none'}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.featuredImageContainer}>
            <Image
              source={{ uri: featuredCourse.image }}
              style={styles.featuredCardImage}
              resizeMode="cover"
            />
            <TouchableOpacity style={styles.featuredPlayButton}>
              <BlurView
                intensity={20}
                style={styles.featuredPlayButtonBlur}
                tint="light"
              >
                <Play size={18} color="#ffffff" fill="#ffffff" />
              </BlurView>
            </TouchableOpacity>
            <TouchableOpacity style={styles.featuredDocumentButton}>
              <BlurView
                intensity={20}
                style={styles.featuredButtonBlur}
                tint="light"
              >
                <FileText size={18} color="#1a1a1a" />
              </BlurView>
            </TouchableOpacity>
          </View>
          <View style={styles.featuredCardContent}>
            <View style={styles.featuredCourseTags}>
              <View style={styles.featuredTagsLeft}>
                <LinearGradient
                  colors={['#d0d0d0', '#e8e8e8', '#d0d0d0']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.featuredRatingTagGradient}
                >
                  <View style={styles.featuredRatingTag}>
                    <Star size={12} color="#ffa500" fill="#ffa500" />
                    <Text style={styles.featuredRatingTagText}>
                      {featuredCourse.rating}
                    </Text>
                  </View>
                </LinearGradient>
                {featuredCourse.isBestseller && (
                  <LinearGradient
                    colors={['#d4c5ff', '#e6deff', '#d4c5ff']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.featuredBestsellerTagGradient}
                  >
                    <View style={styles.featuredBestsellerTag}>
                      <Text style={styles.featuredBestsellerTagText}>
                        Bestseller
                      </Text>
                    </View>
                  </LinearGradient>
                )}
              </View>
              <Text style={styles.featuredCardPrice}>
                {featuredCourse.price}
              </Text>
            </View>
            <Text style={styles.featuredCardTitle}>{featuredCourse.title}</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Our Courses</Text>
          <TouchableOpacity onPress={() => router.push('/(tabs)/courses')}>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.filterButtons}>
          <TouchableOpacity
            style={
              activeFilter === 'all'
                ? styles.filterButtonActive
                : styles.filterButtonInactive
            }
            onPress={() => setActiveFilter('all')}
          >
            <Text
              style={
                activeFilter === 'all'
                  ? styles.filterButtonActiveText
                  : styles.filterButtonInactiveText
              }
            >
              All Course
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              activeFilter === 'popular'
                ? styles.filterButtonActive
                : styles.filterButtonInactive
            }
            onPress={() => setActiveFilter('popular')}
          >
            <Text
              style={
                activeFilter === 'popular'
                  ? styles.filterButtonActiveText
                  : styles.filterButtonInactiveText
              }
            >
              Popular
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              activeFilter === 'newest'
                ? styles.filterButtonActive
                : styles.filterButtonInactive
            }
            onPress={() => setActiveFilter('newest')}
          >
            <Text
              style={
                activeFilter === 'newest'
                  ? styles.filterButtonActiveText
                  : styles.filterButtonInactiveText
              }
            >
              Newest
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.coursesList}>
          {filteredCourses.length === 0 ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyText}>No courses found</Text>
              <Text style={styles.emptySubtext}>
                Try adjusting your search or filters
              </Text>
            </View>
          ) : (
            filteredCourses.map((course) => (
              <TouchableOpacity
                key={course.id}
                style={styles.courseCard}
                onPress={() => navigateToCourseDetails(course)}
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
                  <Text style={styles.courseCardPrice}>{course.price}</Text>
                </View>
              </TouchableOpacity>
            ))
          )}
        </View>
      </ScrollView>

      <SearchFilterModal
        visible={filterModalVisible}
        onClose={() => setFilterModalVisible(false)}
      />
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
    marginBottom: 20,
  },
  iconButton: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
  },
  subGreeting: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 2,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 48,
    gap: 8,
  },
  searchIcon: {
    marginRight: 4,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#1a1a1a',
  },
  filterButton: {
    width: 48,
    height: 48,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  seeAll: {
    fontSize: 14,
    color: '#7c6ff5',
  },
  featuredCard: {
    backgroundColor: '#ffffff',
    borderRadius: 28,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 16,
  },
  featuredMentorSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingBottom: 18,
  },
  featuredMentorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  featuredMentorAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  featuredMentorName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 2,
  },
  featuredMentorRole: {
    fontSize: 14,
    color: '#666',
  },
  featuredMentorActions: {
    flexDirection: 'row',
    gap: 8,
  },
  featuredMentorButton: {
    width: 40,
    height: 40,
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  featuredMentorButtonHeart: {
    width: 40,
    height: 40,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  featuredImageContainer: {
    width: '100%',
    height: 200,
    position: 'relative',
  },
  featuredCardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  featuredPlayButton: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    width: 44,
    height: 44,
    borderRadius: 22,
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
  featuredDocumentButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: 44,
    height: 44,
    borderRadius: 22,
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
  featuredButtonBlur: {
    width: '100%',
    height: '100%',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  featuredPlayButtonBlur: {
    width: '100%',
    height: '100%',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(124, 111, 245, 0.4)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.6)',
  },
  featuredCardContent: {
    padding: 16,
  },
  featuredCourseTags: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  featuredTagsLeft: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  featuredRatingTagGradient: {
    borderRadius: 12,
    padding: 1.5,
  },
  featuredRatingTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10.5,
    gap: 4,
  },
  featuredRatingTagText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  featuredBestsellerTagGradient: {
    borderRadius: 12,
    padding: 1.5,
  },
  featuredBestsellerTag: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10.5,
  },
  featuredBestsellerTagText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  featuredCardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 12,
  },
  featuredCardPrice: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  filterButtons: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  filterButtonActive: {
    backgroundColor: '#7c6ff5',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  filterButtonActiveText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  filterButtonInactive: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  filterButtonInactiveText: {
    color: '#666',
    fontSize: 14,
  },
  coursesList: {
    gap: 16,
    marginBottom: 88,
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
  emptyState: {
    paddingVertical: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#666',
  },
});
