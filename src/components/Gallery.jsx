import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Camera, 
  Video,
  Calendar,
  Users,
  Award,
  Music,
  BookOpen,
  Trophy,
  Filter,
  Eye,
  Download
} from 'lucide-react';
import schoolLibrary from '../assets/school_library.jpg';
import studentsClassroom from '../assets/students_classroom.jpg';
import schoolBuilding from '../assets/school_building.jpg';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('সব');
  const [selectedMedia, setSelectedMedia] = useState(null);

  const categories = ['সব', 'ক্যাম্পাস', 'ক্লাসরুম', 'ইভেন্ট', 'ক্রীড়া', 'সাংস্কৃতিক', 'পুরস্কার'];

  const galleryItems = [
    {
      id: 1,
      title: 'স্কুল লাইব্রেরি',
      description: 'আমাদের সুবিশাল লাইব্রেরি যেখানে হাজারো বই রয়েছে',
      image: schoolLibrary,
      category: 'ক্যাম্পাস',
      date: '১৫ জানুয়ারি, ২০২৫',
      type: 'image',
      views: 450
    },
    {
      id: 2,
      title: 'ক্লাসরুমে পাঠদান',
      description: 'শিক্ষার্থীরা মনোযোগ সহকারে ক্লাস করছে',
      image: studentsClassroom,
      category: 'ক্লাসরুম',
      date: '১২ জানুয়ারি, ২০২৫',
      type: 'image',
      views: 320
    },
    {
      id: 3,
      title: 'স্কুল ভবন',
      description: 'আমাদের আধুনিক ও সুন্দর স্কুল ভবন',
      image: schoolBuilding,
      category: 'ক্যাম্পাস',
      date: '১০ জানুয়ারি, ২০২৫',
      type: 'image',
      views: 680
    },
    {
      id: 4,
      title: 'বার্ষিক ক্রীড়া প্রতিযোগিতা ২০২৪',
      description: 'গত বছরের ক্রীড়া প্রতিযোগিতার উত্তেজনাপূর্ণ মুহূর্ত',
      image: schoolBuilding, // Placeholder
      category: 'ক্রীড়া',
      date: '২৫ নভেম্বর, ২০২৪',
      type: 'video',
      views: 890
    },
    {
      id: 5,
      title: 'সাংস্কৃতিক অনুষ্ঠান ২০২ৄ',
      description: 'বার্ষিক সাংস্কৃতিক অনুষ্ঠানের সুন্দর পরিবেশনা',
      image: studentsClassroom, // Placeholder
      category: 'সাংস্কৃতিক',
      date: '১৫ নভেম্বর, ২০২৪',
      type: 'image',
      views: 560
    },
    {
      id: 6,
      title: 'বিজ্ঞান মেলা ২০২৪',
      description: 'শিক্ষার্থীদের বৈজ্ঞানিক প্রজেক্ট প্রদর্শনী',
      image: schoolLibrary, // Placeholder
      category: 'ইভেন্ট',
      date: '১০ নভেম্বর, ২০২৪',
      type: 'image',
      views: 420
    },
    {
      id: 7,
      title: 'পুরস্কার বিতরণী অনুষ্ঠান',
      description: 'মেধাবী শিক্ষার্থীদের পুরস্কার প্রদান',
      image: schoolBuilding, // Placeholder
      category: 'পুরস্কার',
      date: '৫ নভেম্বর, ২০২৪',
      type: 'image',
      views: 720
    },
    {
      id: 8,
      title: 'কম্পিউটার ল্যাব',
      description: 'আধুনিক কম্পিউটার ল্যাবে শিক্ষার্থীরা',
      image: studentsClassroom, // Placeholder
      category: 'ক্যাম্পাস',
      date: '১ নভেম্বর, ২০২৪',
      type: 'image',
      views: 380
    },
    {
      id: 9,
      title: 'বিতর্ক প্রতিযোগিতা',
      description: 'আন্তঃস্কুল বিতর্ক প্রতিযোগিতায় আমাদের দল',
      image: schoolLibrary, // Placeholder
      category: 'ইভেন্ট',
      date: '২৮ অক্টোবর, ২০২৪',
      type: 'video',
      views: 290
    }
  ];

  const filteredItems = galleryItems.filter(item => 
    selectedCategory === 'সব' || item.category === selectedCategory
  );

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'ক্যাম্পাস':
        return <BookOpen className="h-4 w-4" />;
      case 'ক্লাসরুম':
        return <Users className="h-4 w-4" />;
      case 'ইভেন্ট':
        return <Calendar className="h-4 w-4" />;
      case 'ক্রীড়া':
        return <Trophy className="h-4 w-4" />;
      case 'সাংস্কৃতিক':
        return <Music className="h-4 w-4" />;
      case 'পুরস্কার':
        return <Award className="h-4 w-4" />;
      default:
        return <Camera className="h-4 w-4" />;
    }
  };

  const stats = [
    { number: '৫০০+', label: 'ছবি' },
    { number: '১০০+', label: 'ভিডিও' },
    { number: '৫০+', label: 'ইভেন্ট' },
    { number: '১০+', label: 'বছরের সংগ্রহ' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/90 to-primary/70">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ফটো গ্যালারি
            </h1>
            <p className="text-xl opacity-90">
              আমাদের স্কুলের বিভিন্ন কার্যক্রম ও মুহূর্তের ছবি ও ভিডিও
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-2xl font-bold text-primary">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-4">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium">ক্যাটেগরি:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="flex items-center space-x-2"
                >
                  {getCategoryIcon(category)}
                  <span>{category}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-primary">
                {selectedCategory === 'সব' ? 'সকল ছবি ও ভিডিও' : selectedCategory} ({filteredItems.length}টি)
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    
                    {/* Media Type Badge */}
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary" className="flex items-center space-x-1">
                        {item.type === 'video' ? (
                          <Video className="h-3 w-3" />
                        ) : (
                          <Camera className="h-3 w-3" />
                        )}
                        <span>{item.type === 'video' ? 'ভিডিও' : 'ছবি'}</span>
                      </Badge>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 right-3">
                      <Badge variant="outline" className="bg-white/90 flex items-center space-x-1">
                        {getCategoryIcon(item.category)}
                        <span>{item.category}</span>
                      </Badge>
                    </div>

                    {/* Overlay Actions */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-2">
                        <Button 
                          size="sm" 
                          variant="secondary"
                          onClick={() => setSelectedMedia(item)}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          দেখুন
                        </Button>
                        <Button size="sm" variant="secondary">
                          <Download className="h-4 w-4 mr-2" />
                          ডাউনলোড
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground mb-2 line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-3 w-3" />
                        <span>{item.views}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <Camera className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  কোনো মিডিয়া পাওয়া যায়নি
                </h3>
                <p className="text-muted-foreground">
                  এই ক্যাটেগরিতে কোনো ছবি বা ভিডিও নেই।
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Albums */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              বিশেষ অ্যালবাম
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              আমাদের স্কুলের গুরুত্বপূর্ণ মুহূর্তগুলো
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">ক্রীড়া প্রতিযোগিতা</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  বার্ষিক ক্রীড়া প্রতিযোগিতার সকল মুহূর্ত
                </p>
                <Badge variant="secondary">২৫টি ছবি</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Music className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">সাংস্কৃতিক অনুষ্ঠান</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  বিভিন্ন সাংস্কৃতিক কার্যক্রমের ছবি
                </p>
                <Badge variant="secondary">৪০টি ছবি</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">একাডেমিক কার্যক্রম</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  ক্লাসরুম ও শিক্ষা কার্যক্রমের ছবি
                </p>
                <Badge variant="secondary">৬০টি ছবি</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">পুরস্কার বিতরণী</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  বিভিন্ন পুরস্কার অনুষ্ঠানের ছবি
                </p>
                <Badge variant="secondary">৩০টি ছবি</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            আপনার ছবি শেয়ার করুন
          </h2>
          <p className="text-xl mb-8 opacity-90">
            স্কুলের কোনো অনুষ্ঠানের ছবি থাকলে আমাদের সাথে শেয়ার করুন
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Camera className="mr-2 h-5 w-5" />
              ছবি আপলোড করুন
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              <Video className="mr-2 h-5 w-5" />
              ভিডিও আপলোড করুন
            </Button>
          </div>
        </div>
      </section>

      {/* Modal for viewing media */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="p-4 border-b border-border flex items-center justify-between">
              <h3 className="font-semibold text-lg">{selectedMedia.title}</h3>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setSelectedMedia(null)}
              >
                ✕
              </Button>
            </div>
            <div className="p-4">
              <img 
                src={selectedMedia.image} 
                alt={selectedMedia.title}
                className="w-full h-auto max-h-[60vh] object-contain mx-auto"
              />
              <div className="mt-4">
                <p className="text-muted-foreground mb-2">{selectedMedia.description}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{selectedMedia.date}</span>
                  <span>{selectedMedia.views} বার দেখা হয়েছে</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

