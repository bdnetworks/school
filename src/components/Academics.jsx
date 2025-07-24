import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  BookOpen, 
  Users, 
  Award, 
  Clock,
  FileText,
  Calculator,
  Globe,
  Microscope,
  Palette,
  Music
} from 'lucide-react';

const Academics = () => {
  const classes = [
    {
      grade: '৬ষ্ঠ - ৮ম শ্রেণী',
      title: 'জুনিয়র সেকশন',
      description: 'মাধ্যমিক শিক্ষার ভিত্তি স্থাপন',
      subjects: ['বাংলা', 'ইংরেজি', 'গণিত', 'বিজ্ঞান', 'সমাজবিজ্ঞান', 'ধর্ম'],
      icon: <BookOpen className="h-8 w-8 text-primary" />
    },
    {
      grade: '৯ম - ১০ম শ্রেণী',
      title: 'এসএসসি বিভাগ',
      description: 'মাধ্যমিক স্কুল সার্টিফিকেট প্রস্তুতি',
      subjects: ['বিজ্ঞান', 'মানবিক', 'ব্যবসায় শিক্ষা'],
      icon: <Award className="h-8 w-8 text-primary" />
    },
    {
      grade: '১১শ - ১২শ শ্রেণী',
      title: 'এইচএসসি বিভাগ',
      description: 'উচ্চ মাধ্যমিক স্কুল সার্টিফিকেট প্রস্তুতি',
      subjects: ['বিজ্ঞান', 'মানবিক', 'ব্যবসায় শিক্ষা'],
      icon: <Users className="h-8 w-8 text-primary" />
    }
  ];

  const subjects = [
    {
      name: 'বাংলা',
      icon: <FileText className="h-6 w-6 text-primary" />,
      description: 'মাতৃভাষার সাহিত্য ও ব্যাকরণ'
    },
    {
      name: 'ইংরেজি',
      icon: <Globe className="h-6 w-6 text-primary" />,
      description: 'আন্তর্জাতিক ভাষা দক্ষতা'
    },
    {
      name: 'গণিত',
      icon: <Calculator className="h-6 w-6 text-primary" />,
      description: 'যুক্তি ও সমস্যা সমাধান'
    },
    {
      name: 'বিজ্ঞান',
      icon: <Microscope className="h-6 w-6 text-primary" />,
      description: 'পদার্থ, রসায়ন ও জীববিজ্ঞান'
    },
    {
      name: 'চারুকলা',
      icon: <Palette className="h-6 w-6 text-primary" />,
      description: 'সৃজনশীলতা ও শিল্পকলা'
    },
    {
      name: 'সংগীত',
      icon: <Music className="h-6 w-6 text-primary" />,
      description: 'সাংস্কৃতিক ও শিল্প শিক্ষা'
    }
  ];

  const facilities = [
    {
      title: 'বিজ্ঞান ল্যাবরেটরি',
      description: 'আধুনিক যন্ত্রপাতি সহ পদার্থ, রসায়ন ও জীববিজ্ঞান ল্যাব'
    },
    {
      title: 'কম্পিউটার ল্যাব',
      description: 'সর্বাধুনিক কম্পিউটার ও ইন্টারনেট সুবিধা'
    },
    {
      title: 'লাইব্রেরি',
      description: 'বিস্তৃত বই সংগ্রহ ও পড়াশোনার পরিবেশ'
    },
    {
      title: 'মাল্টিমিডিয়া ক্লাসরুম',
      description: 'প্রজেক্টর ও স্মার্ট বোর্ড সহ আধুনিক শ্রেণীকক্ষ'
    }
  ];

  const schedule = [
    { time: '৮:০০ - ৮:৪৫', activity: 'প্রথম পিরিয়ড' },
    { time: '৮:৪৫ - ৯:৩০', activity: 'দ্বিতীয় পিরিয়ড' },
    { time: '৯:৩০ - ১০:১৫', activity: 'তৃতীয় পিরিয়ড' },
    { time: '১০:১৫ - ১০:৩০', activity: 'বিরতি' },
    { time: '১০:৩০ - ১১:১৫', activity: 'চতুর্থ পিরিয়ড' },
    { time: '১১:১৫ - ১২:০০', activity: 'পঞ্চম পিরিয়ড' },
    { time: '১২:০০ - ১২:৪৫', activity: 'ষষ্ঠ পিরিয়ড' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/90 to-primary/70">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              একাডেমিক প্রোগ্রাম
            </h1>
            <p className="text-xl opacity-90">
              আধুনিক পাঠ্যক্রম ও শিক্ষা পদ্ধতির মাধ্যমে গুণগত শিক্ষা প্রদান
            </p>
          </div>
        </div>
      </section>

      {/* Classes Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              শ্রেণী বিভাগ
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ৬ষ্ঠ থেকে ১২শ শ্রেণী পর্যন্ত সম্পূর্ণ একাডেমিক প্রোগ্রাম
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {classes.map((classInfo, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
                    {classInfo.icon}
                  </div>
                  <Badge variant="secondary" className="mb-2">
                    {classInfo.grade}
                  </Badge>
                  <CardTitle className="text-xl">{classInfo.title}</CardTitle>
                  <CardDescription className="text-base">
                    {classInfo.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">বিষয়সমূহ:</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {classInfo.subjects.map((subject, idx) => (
                        <Badge key={idx} variant="outline">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              বিষয়সমূহ
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              বিভিন্ন বিষয়ে দক্ষ শিক্ষকদের তত্ত্বাবধানে পাঠদান
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-accent/10 rounded-full flex-shrink-0">
                      {subject.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-1">
                        {subject.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {subject.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Facilities */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              একাডেমিক সুবিধাসমূহ
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              আধুনিক শিক্ষার জন্য প্রয়োজনীয় সকল সুবিধা
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{facility.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {facility.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Class Schedule */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              ক্লাসের সময়সূচী
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              দৈনিক ক্লাসের রুটিন (সোমবার - বৃহস্পতিবার)
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">দৈনিক সময়সূচী</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {schedule.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                      <span className="font-medium text-primary">{item.time}</span>
                      <span className="text-muted-foreground">{item.activity}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>বিশেষ দ্রষ্টব্য:</strong> শুক্রবার ক্লাস সকাল ৮:০০ থেকে দুপুর ১২:০০ পর্যন্ত।
                    শনিবার সাপ্তাহিক ছুটি।
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              একাডেমিক ক্যালেন্ডার
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              বার্ষিক পরীক্ষা ও গুরুত্বপূর্ণ তারিখসমূহ
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">প্রথম সাময়িক পরীক্ষা</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">এপ্রিল ২০২৫</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">দ্বিতীয় সাময়িক পরীক্ষা</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">আগস্ট ২০২৫</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">বার্ষিক পরীক্ষা</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">নভেম্বর ২০২৫</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg">
              সম্পূর্ণ ক্যালেন্ডার ডাউনলোড করুন
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;

