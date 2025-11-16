import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Share,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ChevronLeft,
  Heart,
  Share2,
  Star,
  Play,
  Clock,
  Users,
  BookOpen,
  CheckCircle2,
  Circle,
} from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';

export default function CourseDetailsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const [lessonProgress, setLessonProgress] = useState<Set<number>>(
    new Set([1, 2])
  );

  const course = {
    id: Array.isArray(params.id) ? params.id[0] : params.id || '1',
    title: Array.isArray(params.title)
      ? params.title[0]
      : params.title || 'IOS Design Basics',
    author: Array.isArray(params.author)
      ? params.author[0]
      : params.author || 'Phoenix Baker',
    authorRole: Array.isArray(params.authorRole)
      ? params.authorRole[0]
      : params.authorRole || 'Mentor',
    authorAvatar: Array.isArray(params.authorAvatar)
      ? params.authorAvatar[0]
      : params.authorAvatar ||
        'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200',
    image: Array.isArray(params.image)
      ? params.image[0]
      : params.image ||
        'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: Array.isArray(params.price)
      ? params.price[0]
      : params.price || '$256',
    rating: Array.isArray(params.rating)
      ? params.rating[0]
      : params.rating || '4.5',
    reviews: Array.isArray(params.reviews)
      ? params.reviews[0]
      : params.reviews || '123',
    students: Array.isArray(params.students)
      ? params.students[0]
      : params.students || '1.2k',
    duration: Array.isArray(params.duration)
      ? params.duration[0]
      : params.duration || '5 Hours',
    lessons: Array.isArray(params.lessons)
      ? params.lessons[0]
      : params.lessons || '24',
    isBestseller: true,
    description:
      'Learn the fundamentals of iOS design and create beautiful, user-friendly interfaces for iPhone and iPad applications.',
    whatYouWillLearn: [
      'iOS design principles and guidelines',
      'Creating wireframes and prototypes',
      'Working with design tools',
      'Typography and color theory',
      'User experience best practices',
      'App icon and asset design',
    ],
    curriculum: [
      {
        id: 1,
        title: 'Introduction to iOS Design',
        duration: '15 min',
        completed: true,
      },
      {
        id: 2,
        title: 'Design Tools Overview',
        duration: '20 min',
        completed: true,
      },
      {
        id: 3,
        title: 'Creating Your First Design',
        duration: '30 min',
        completed: false,
      },
      {
        id: 4,
        title: 'Typography in iOS',
        duration: '25 min',
        completed: false,
      },
      {
        id: 5,
        title: 'Color Theory and Palettes',
        duration: '20 min',
        completed: false,
      },
    ],
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Check out this course: ${course.title} by ${course.author}. ${course.description}`,
        title: course.title,
      });
    } catch (error) {
      // Share failed silently
    }
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handlePlayVideo = () => {
    // In a real app, this would open a video player
  };

  const handleLessonPress = (lessonId: number) => {
    // In a real app, this would navigate to the lesson player
  };

  const handleAddToCart = () => {
    router.push('/cart');
  };

  const handleBuyNow = () => {
    router.push('/cart');
  };

  const toggleLessonComplete = (lessonId: number) => {
    setLessonProgress((prev) => {
      const newProgress = new Set(prev);
      if (newProgress.has(lessonId)) {
        newProgress.delete(lessonId);
      } else {
        newProgress.add(lessonId);
      }
      return newProgress;
    });
  };

  const progressPercentage = Math.round(
    (lessonProgress.size / course.curriculum.length) * 100
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Image Section */}
        <View style={styles.heroSection}>
          <Image
            source={{ uri: course.image }}
            style={styles.heroImage}
            resizeMode="cover"
          />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.7)']}
            style={styles.heroGradient}
          />
          <View style={styles.heroOverlay}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => router.back()}
            >
              <BlurView
                intensity={30}
                style={styles.backButtonBlur}
                tint="light"
              >
                <ChevronLeft size={24} color="#1a1a1a" />
              </BlurView>
            </TouchableOpacity>
            <View style={styles.heroActions}>
              <TouchableOpacity
                style={styles.heroActionButton}
                onPress={toggleFavorite}
              >
                <BlurView
                  intensity={30}
                  style={styles.heroButtonBlur}
                  tint="light"
                >
                  <Heart
                    size={20}
                    color={isFavorite ? '#ff6b6b' : '#1a1a1a'}
                    fill={isFavorite ? '#ff6b6b' : 'none'}
                  />
                </BlurView>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.heroActionButton}
                onPress={handleShare}
              >
                <BlurView
                  intensity={30}
                  style={styles.heroButtonBlur}
                  tint="light"
                >
                  <Share2 size={20} color="#1a1a1a" />
                </BlurView>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.playButtonContainer}>
            <TouchableOpacity
              style={styles.playButton}
              onPress={handlePlayVideo}
            >
              <BlurView
                intensity={30}
                style={styles.playButtonBlur}
                tint="light"
              >
                <Play size={32} color="#ffffff" fill="#ffffff" />
              </BlurView>
            </TouchableOpacity>
          </View>
        </View>

        {/* Content Section */}
        <View style={styles.content}>
          {/* Course Header */}
          <View style={styles.courseHeader}>
            <View style={styles.courseTags}>
              <LinearGradient
                colors={['#d0d0d0', '#e8e8e8', '#d0d0d0']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.ratingTagGradient}
              >
                <View style={styles.ratingTag}>
                  <Star size={12} color="#ffa500" fill="#ffa500" />
                  <Text style={styles.ratingTagText}>{course.rating}</Text>
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
                    <Text style={styles.bestsellerTagText}>Bestseller</Text>
                  </View>
                </LinearGradient>
              )}
            </View>
            <Text style={styles.courseTitle}>{course.title}</Text>
            <Text style={styles.coursePrice}>{course.price}</Text>
          </View>

          {/* Author Section */}
          <View style={styles.authorSection}>
            <Image
              source={{ uri: course.authorAvatar }}
              style={styles.authorAvatar}
            />
            <View style={styles.authorInfo}>
              <Text style={styles.authorName}>{course.author}</Text>
              <Text style={styles.authorRole}>{course.authorRole}</Text>
            </View>
          </View>

          {/* Stats Section */}
          <View style={styles.statsSection}>
            <View style={styles.statItem}>
              <Clock size={18} color="#7c6ff5" />
              <Text style={styles.statText}>{course.duration}</Text>
            </View>
            <View style={styles.statItem}>
              <BookOpen size={18} color="#7c6ff5" />
              <Text style={styles.statText}>{course.lessons} Lessons</Text>
            </View>
            <View style={styles.statItem}>
              <Users size={18} color="#7c6ff5" />
              <Text style={styles.statText}>{course.students} Students</Text>
            </View>
            <View style={styles.statItem}>
              <Star size={18} color="#7c6ff5" />
              <Text style={styles.statText}>{course.reviews} Reviews</Text>
            </View>
          </View>

          {/* Description Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About this course</Text>
            <Text style={styles.description}>{course.description}</Text>
          </View>

          {/* What You'll Learn Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>What you'll learn</Text>
            <View style={styles.learnList}>
              {course.whatYouWillLearn.map((item, index) => (
                <View key={index} style={styles.learnItem}>
                  <CheckCircle2 size={16} color="#7c6ff5" />
                  <Text style={styles.learnText}>{item}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Curriculum Section */}
          <View style={styles.section}>
            <View style={styles.curriculumHeader}>
              <Text style={styles.sectionTitle}>Course curriculum</Text>
              <View style={styles.progressContainer}>
                <Text style={styles.progressText}>
                  {progressPercentage}% Complete
                </Text>
                <View style={styles.progressBar}>
                  <View
                    style={[
                      styles.progressFill,
                      { width: `${progressPercentage}%` },
                    ]}
                  />
                </View>
              </View>
            </View>
            <View style={styles.curriculumList}>
              {course.curriculum.map((lesson) => {
                const isCompleted = lessonProgress.has(lesson.id);
                return (
                  <TouchableOpacity
                    key={lesson.id}
                    style={styles.lessonItem}
                    onPress={() => handleLessonPress(lesson.id)}
                  >
                    <TouchableOpacity
                      style={styles.lessonIcon}
                      onPress={(e) => {
                        e.stopPropagation();
                        toggleLessonComplete(lesson.id);
                      }}
                    >
                      {isCompleted ? (
                        <CheckCircle2
                          size={20}
                          color="#7c6ff5"
                          fill="#7c6ff5"
                        />
                      ) : (
                        <Circle size={20} color="#d0d0d0" />
                      )}
                    </TouchableOpacity>
                    <View style={styles.lessonContent}>
                      <Text
                        style={[
                          styles.lessonTitle,
                          isCompleted && styles.lessonTitleCompleted,
                        ]}
                      >
                        {lesson.title}
                      </Text>
                      <Text style={styles.lessonDuration}>
                        {lesson.duration}
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={(e) => {
                        e.stopPropagation();
                        handleLessonPress(lesson.id);
                      }}
                    >
                      <Play
                        size={16}
                        color={isCompleted ? '#7c6ff5' : '#666'}
                      />
                    </TouchableOpacity>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Action Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={handleAddToCart}
        >
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyNowButton} onPress={handleBuyNow}>
          <Text style={styles.buyNowText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollView: {
    flex: 1,
  },
  heroSection: {
    width: '100%',
    height: 300,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    paddingTop: 8,
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
  heroActions: {
    flexDirection: 'row',
    gap: 8,
  },
  heroActionButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    overflow: 'hidden',
  },
  heroButtonBlur: {
    width: '100%',
    height: '100%',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.4)',
  },
  playButtonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  playButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  playButtonBlur: {
    width: '100%',
    height: '100%',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(124, 111, 245, 0.4)',
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  content: {
    padding: 20,
    paddingBottom: 100,
  },
  courseHeader: {
    marginBottom: 20,
  },
  courseTags: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
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
  courseTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  coursePrice: {
    fontSize: 32,
    fontWeight: '700',
    color: '#7c6ff5',
  },
  authorSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 16,
    marginBottom: 20,
    gap: 12,
  },
  authorAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  authorInfo: {
    flex: 1,
  },
  authorName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  authorRole: {
    fontSize: 14,
    color: '#666',
  },
  statsSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 24,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
    gap: 8,
    flex: 1,
    minWidth: '47%',
  },
  statText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 12,
  },
  curriculumHeader: {
    marginBottom: 16,
  },
  progressContainer: {
    marginTop: 8,
  },
  progressText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#7c6ff5',
    marginBottom: 8,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#7c6ff5',
    borderRadius: 4,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
  },
  learnList: {
    gap: 12,
  },
  learnItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  learnText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    color: '#1a1a1a',
  },
  curriculumList: {
    gap: 12,
  },
  lessonItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    gap: 12,
  },
  lessonIcon: {
    width: 24,
    alignItems: 'center',
  },
  lessonContent: {
    flex: 1,
  },
  lessonTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  lessonTitleCompleted: {
    color: '#7c6ff5',
    textDecorationLine: 'line-through',
  },
  lessonDuration: {
    fontSize: 14,
    color: '#666',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    padding: 20,
    paddingBottom: 20,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    gap: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#7c6ff5',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToCartText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#7c6ff5',
  },
  buyNowButton: {
    flex: 1,
    backgroundColor: '#7c6ff5',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buyNowText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },
});
