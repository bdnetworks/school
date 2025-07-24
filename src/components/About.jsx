import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Users, 
  BookOpen,
  Building,
  Calendar
} from 'lucide-react';
import schoolBuilding from '../assets/school_building.jpg';

const About = () => {
  const achievements = [
    {
      year: '২০২৪',
      title: 'জাতীয় শিক্ষা পুরস্কার',
      description: 'শিক্ষার মানোন্নয়নে অবদানের জন্য'
    },
    {
      year: '২০২৩',
      title: 'সেরা স্কুল পুরস্কার',
      description: 'জেলা পর্যায়ে সেরা পারফরমেন্সের জন্য'
    },
    {
      year: '২০২২',
      title: 'ডিজিটাল শিক্ষা পুরস্কার',
      description: 'আধুনিক শিক্ষা পদ্ধতি বাস্তবায়নের জন্য'
    }
  ];

  const values = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: 'শিক্ষার মান',
      description: 'উচ্চমানের শিক্ষা প্রদান ও শিক্ষার্থীদের সর্বোচ্চ সম্ভাবনা বিকাশ'
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: 'নৈতিক মূল্যবোধ',
      description: 'চরিত্র গঠন ও নৈতিক শিক্ষার মাধ্যমে আদর্শ মানুষ তৈরি'
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: 'সামাজিক দায়বদ্ধতা',
      description: 'সমাজের প্রতি দায়বদ্ধ ও সেবামূলক মানসিকতা গড়ে তোলা'
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: 'উৎকর্ষতা',
      description: 'সকল ক্ষেত্রে উৎকর্ষতা অর্জন ও ক্রমাগত উন্নতির প্রচেষ্টা'
    }
  ];

  const stats = [
    { number: '১৫+', label: 'বছরের অভিজ্ঞতা' },
    { number: '৫০০+', label: 'শিক্ষার্থী' },
    { number: '৩৫+', label: 'শিক্ষক ও কর্মচারী' },
    { number: '৯৫%', label: 'পাস রেট' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/90 to-primary/70">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              আমাদের সম্পর্কে
            </h1>
            <p className="text-xl opacity-90">
              এ.এস.বি একাডেমী, কেন্দুয়া - একটি আদর্শ শিক্ষা প্রতিষ্ঠান যেখানে ঐতিহ্য ও আধুনিকতার মেলবন্ধন
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                আমাদের পরিচয়
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                এ.এস.বি একাডেমী, কেন্দুয়া ২০১২ সালে প্রতিষ্ঠিত একটি আধুনিক শিক্ষা প্রতিষ্ঠান। 
                আমাদের প্রতিষ্ঠানে Play থেকে Ten শ্রেণী পর্যন্ত শিক্ষা কার্যক্রম পরিচালিত হয়। 
                আমরা বিশ্বাস করি যে, প্রতিটি শিক্ষার্থীর মধ্যে অসীম সম্ভাবনা রয়েছে এবং 
                সঠিক পরিচর্যা ও নির্দেশনার মাধ্যমে তা বিকশিত করা যায়।
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                আমাদের অভিজ্ঞ শিক্ষকমণ্ডলী, আধুনিক শিক্ষা পদ্ধতি এবং উন্নত অবকাঠামোর 
                মাধ্যমে আমরা শিক্ষার্থীদের একাডেমিক শিক্ষার পাশাপাশি নৈতিক ও সামাজিক 
                মূল্যবোধ শেখাতে প্রতিশ্রুতিবদ্ধ।
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-accent/10 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src={schoolBuilding} 
                alt="School Building" 
                className="rounded-lg shadow-lg w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">আমাদের মিশন</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  প্রতিটি শিক্ষার্থীকে জ্ঞান, দক্ষতা ও নৈতিক মূল্যবোধে সমৃদ্ধ করে তুলে 
                  দেশ ও জাতির কল্যাণে অবদান রাখতে সক্ষম নাগরিক হিসেবে গড়ে তোলা। 
                  আমরা শিক্ষার্থীদের সৃজনশীলতা, সমালোচনামূলক চিন্তাভাবনা এবং 
                  নেতৃত্বের গুণাবলী বিকাশে সহায়তা করি।
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Eye className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">আমাদের ভিশন</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  একটি আদর্শ শিক্ষা প্রতিষ্ঠান হিসেবে স্থানীয় ও জাতীয় পর্যায়ে স্বীকৃতি 
                  লাভ করা এবং শিক্ষার মানোন্নয়নে অগ্রণী ভূমিকা পালন করা। আমাদের 
                  স্বপ্ন হলো এমন একটি প্রতিষ্ঠান গড়ে তোলা যেখানে প্রতিটি শিক্ষার্থী 
                  তার সর্বোচ্চ সম্ভাবনা বিকশিত করতে পারে।
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              আমাদের মূল্যবোধ
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              যে মূল্যবোধগুলো আমাদের শিক্ষা দর্শনের ভিত্তি এবং আমাদের সকল কার্যক্রমের পথপ্রদর্শক
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              আমাদের অর্জন
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              বছরের পর বছর ধরে আমাদের প্রতিষ্ঠান বিভিন্ন ক্ষেত্রে স্বীকৃতি ও পুরস্কার অর্জন করেছে
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-sm">
                      {achievement.year}
                    </Badge>
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {achievement.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-primary mb-4">
                  প্রধান শিক্ষকের বার্তা
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">অধ্যাপক মোহাম্মদ রহিম</h4>
                  <p className="text-muted-foreground">প্রধান শিক্ষক</p>
                </div>
                <blockquote className="text-lg text-muted-foreground leading-relaxed italic">
                  "এ.এস.বি একাডেমী, কেন্দুয়া-এ আমাদের লক্ষ্য শুধু একাডেমিক শিক্ষা প্রদান নয়, 
                  বরং প্রতিটি শিক্ষার্থীকে একজন সম্পূর্ণ মানুষ হিসেবে গড়ে তোলা। 
                  আমরা বিশ্বাস করি যে, সঠিক শিক্ষা ও নির্দেশনার মাধ্যমে প্রতিটি 
                  শিশুর মধ্যে লুকিয়ে থাকা প্রতিভা বিকশিত করা সম্ভব। আমাদের 
                  অভিজ্ঞ শিক্ষকমণ্ডলী ও আধুনিক শিক্ষা পদ্ধতির মাধ্যমে আমরা 
                  শিক্ষার্থীদের ভবিষ্যতের জন্য প্রস্তুত করে তুলছি।"
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

