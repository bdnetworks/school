import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  BookOpen, 
  Users, 
  Award, 
  Building, 
  Calendar,
  Bell,
  ArrowRight,
  GraduationCap,
  Heart,
  Star
} from 'lucide-react';
import heroBanner from '../assets/hero_banner.jpg';
import studentsClassroom from '../assets/students_classroom.jpg';
import schoolLibrary from '../assets/school_library.jpg';

const Home = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: 'গুণগত শিক্ষা',
      description: 'আধুনিক পাঠ্যক্রম ও শিক্ষা পদ্ধতি'
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: 'অভিজ্ঞ শিক্ষক',
      description: 'দক্ষ ও অভিজ্ঞ শিক্ষকমণ্ডলী'
    },
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: 'আধুনিক সুবিধা',
      description: 'বিজ্ঞান ল্যাব, কম্পিউটার ল্যাব ও লাইব্রেরি'
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: 'সহশিক্ষা কার্যক্রম',
      description: 'খেলাধুলা ও সাংস্কৃতিক কার্যক্রম'
    }
  ];

  const notices = [
    {
      title: 'ভর্তি বিজ্ঞপ্তি ২০২৫',
      date: '১৫ জানুয়ারি, ২০২৫',
      type: 'গুরুত্বপূর্ণ'
    },
    {
      title: 'বার্ষিক পরীক্ষার রুটিন প্রকাশ',
      date: '১০ জানুয়ারি, ২০২৫',
      type: 'পরীক্ষা'
    },
    {
      title: 'শীতকালীন ছুটির তালিকা',
      date: '৫ জানুয়ারি, ২০২৫',
      type: 'ছুটি'
    }
  ];

  const events = [
    {
      title: 'বার্ষিক ক্রীড়া প্রতিযোগিতা',
      date: '২৫ জানুয়ারি, ২০২৫',
      time: 'সকাল ৯:০০'
    },
    {
      title: 'সাংস্কৃতিক অনুষ্ঠান',
      date: '৩০ জানুয়ারি, ২০২৫',
      time: 'বিকাল ৩:০০'
    },
    {
      title: 'অভিভাবক সভা',
      date: '৫ ফেব্রুয়ারি, ২০২৫',
      time: 'সকাল ১০:০০'
    }
  ];

  const successStories = [
    {
      name: 'রাহুল আহমেদ',
      achievement: 'ঢাকা বিশ্ববিদ্যালয়ে ভর্তি',
      year: '২০২৪',
      quote: 'Vatia High School আমার স্বপ্ন পূরণে সাহায্য করেছে।'
    },
    {
      name: 'সারা খান',
      achievement: 'জাতীয় বিজ্ঞান অলিম্পিয়াডে স্বর্ণপদক',
      year: '২০২৪',
      quote: 'এখানকার শিক্ষকরা আমাকে সর্বোচ্চ সাহায্য করেছেন।'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-primary/90 to-primary/70 flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBanner})` }}
        />
        <div className="absolute inset-0 bg-primary/60" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Vatia High School
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-accent">
              শিক্ষার আলোয় আগামীর পথ
            </p>
            <p className="text-lg mb-8 opacity-90">
              গুণগত শিক্ষা, নৈতিক মূল্যবোধ ও সৃজনশীলতার সমন্বয়ে গড়ে তুলছি আগামীর নেতৃত্ব
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link to="/admission">
                  ভর্তি হন
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                <Link to="/about">
                  আমাদের সম্পর্কে জানুন
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Vatia High School-এ স্বাগতম
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                আমরা একটি আধুনিক শিক্ষা প্রতিষ্ঠান যেখানে ঐতিহ্য ও আধুনিকতার সুন্দর মেলবন্ধন রয়েছে। 
                আমাদের লক্ষ্য প্রতিটি শিক্ষার্থীর সর্বোচ্চ সম্ভাবনা বিকশিত করা এবং তাদের একজন 
                দক্ষ ও নৈতিক মানুষ হিসেবে গড়ে তোলা।
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-accent/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary">১৫+</div>
                  <div className="text-sm text-muted-foreground">বছরের অভিজ্ঞতা</div>
                </div>
                <div className="text-center p-4 bg-accent/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary">৫০০+</div>
                  <div className="text-sm text-muted-foreground">শিক্ষার্থী</div>
                </div>
              </div>
              <Button asChild>
                <Link to="/about">
                  আরও জানুন
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={studentsClassroom} 
                alt="Students in classroom" 
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              আমাদের বিশেষত্ব
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vatia High School-এ আমরা শিক্ষার্থীদের সর্বোচ্চ মানের শিক্ষা ও সুবিধা প্রদান করি
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Notice & Events Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Latest Notices */}
            <div>
              <div className="flex items-center mb-6">
                <Bell className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-2xl font-bold text-primary">সাম্প্রতিক নোটিশ</h3>
              </div>
              <div className="space-y-4">
                {notices.map((notice, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-foreground">{notice.title}</h4>
                        <Badge variant="secondary">{notice.type}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{notice.date}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Button asChild className="mt-6">
                <Link to="/notice">
                  সব নোটিশ দেখুন
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Upcoming Events */}
            <div>
              <div className="flex items-center mb-6">
                <Calendar className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-2xl font-bold text-primary">আসন্ন ইভেন্ট</h3>
              </div>
              <div className="space-y-4">
                {events.map((event, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">{event.title}</h4>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{event.date}</span>
                        <span>{event.time}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Button asChild className="mt-6" variant="outline">
                <Link to="/notice">
                  সব ইভেন্ট দেখুন
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              সাফল্যের গল্প
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              আমাদের শিক্ষার্থীদের অর্জন আমাদের গর্ব
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-accent/10 rounded-full">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-foreground mb-1">{story.name}</h4>
                      <p className="text-primary font-medium mb-2">{story.achievement}</p>
                      <p className="text-sm text-muted-foreground mb-3">ব্যাচ: {story.year}</p>
                      <blockquote className="text-muted-foreground italic">
                        "{story.quote}"
                      </blockquote>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            আজই যোগ দিন Vatia High School পরিবারে
          </h2>
          <p className="text-xl mb-8 opacity-90">
            আপনার সন্তানের উজ্জ্বল ভবিষ্যৎ গড়তে আমাদের সাথে থাকুন
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/admission">
                ভর্তির জন্য আবেদন করুন
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              <Link to="/contact">
                যোগাযোগ করুন
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

