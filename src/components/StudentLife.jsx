import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Trophy, 
  Music, 
  Palette, 
  Users,
  Heart,
  BookOpen,
  Camera,
  Mic,
  Gamepad2,
  Award,
  Calendar,
  Star
} from 'lucide-react';

const StudentLife = () => {
  const clubs = [
    {
      name: 'বিজ্ঞান ক্লাব',
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      description: 'বিজ্ঞানের বিভিন্ন বিষয়ে গবেষণা ও প্রজেক্ট',
      activities: ['বিজ্ঞান মেলা', 'প্রজেক্ট প্রদর্শনী', 'ল্যাব এক্সপেরিমেন্ট'],
      members: '৫০+'
    },
    {
      name: 'সাংস্কৃতিক সংগঠন',
      icon: <Music className="h-6 w-6 text-primary" />,
      description: 'গান, নাচ, নাটক ও সাংস্কৃতিক অনুষ্ঠান',
      activities: ['বার্ষিক সাংস্কৃতিক অনুষ্ঠান', 'গান ও নৃত্য প্রতিযোগিতা', 'নাটক মঞ্চায়ন'],
      members: '৮০+'
    },
    {
      name: 'চারুকলা ক্লাব',
      icon: <Palette className="h-6 w-6 text-primary" />,
      description: 'চিত্রকলা, হস্তশিল্প ও শিল্পকর্ম',
      activities: ['চিত্র প্রদর্শনী', 'হস্তশিল্প প্রতিযোগিতা', 'দেয়াল চিত্র'],
      members: '৪০+'
    },
    {
      name: 'বিতর্ক সমিতি',
      icon: <Mic className="h-6 w-6 text-primary" />,
      description: 'বিতর্ক প্রতিযোগিতা ও বক্তৃতা',
      activities: ['আন্তঃস্কুল বিতর্ক', 'বক্তৃতা প্রতিযোগিতা', 'উপস্থিত বক্তৃতা'],
      members: '৩০+'
    },
    {
      name: 'ফটোগ্রাফি ক্লাব',
      icon: <Camera className="h-6 w-6 text-primary" />,
      description: 'ফটোগ্রাফি ও ভিডিওগ্রাফি',
      activities: ['ফটো প্রদর্শনী', 'স্কুল ইভেন্ট কভারেজ', 'ফটো প্রতিযোগিতা'],
      members: '২৫+'
    },
    {
      name: 'স্বেচ্ছাসেবক দল',
      icon: <Heart className="h-6 w-6 text-primary" />,
      description: 'সমাজসেবা ও মানবিক কার্যক্রম',
      activities: ['রক্তদান কর্মসূচি', 'পরিবেশ সংরক্ষণ', 'দুর্গত সহায়তা'],
      members: '৬০+'
    }
  ];

  const sports = [
    {
      name: 'ক্রিকেট',
      icon: <Trophy className="h-6 w-6 text-primary" />,
      achievements: ['জেলা চ্যাম্পিয়ন ২০২৪', 'বিভাগীয় রানার্স আপ ২০২৩'],
      facilities: 'পূর্ণাঙ্গ ক্রিকেট মাঠ'
    },
    {
      name: 'ফুটবল',
      icon: <Trophy className="h-6 w-6 text-primary" />,
      achievements: ['আঞ্চলিক চ্যাম্পিয়ন ২০২৪', 'জেলা রানার্স আপ ২০২৩'],
      facilities: 'ফুটবল মাঠ ও ট্রেনিং সুবিধা'
    },
    {
      name: 'ব্যাডমিন্টন',
      icon: <Gamepad2 className="h-6 w-6 text-primary" />,
      achievements: ['জেলা চ্যাম্পিয়ন ২০২৪', 'আঞ্চলিক সেমিফাইনাল ২০২৩'],
      facilities: 'ইনডোর ব্যাডমিন্টন কোর্ট'
    },
    {
      name: 'দৌড়',
      icon: <Award className="h-6 w-6 text-primary" />,
      achievements: ['জাতীয় পর্যায়ে অংশগ্রহণ', 'বিভাগীয় স্বর্ণপদক'],
      facilities: 'অ্যাথলেটিক্স ট্র্যাক'
    }
  ];

  const events = [
    {
      title: 'বার্ষিক ক্রীড়া প্রতিযোগিতা',
      date: 'জানুয়ারি',
      description: 'সকল শ্রেণীর শিক্ষার্থীদের জন্য বিভিন্ন খেলাধুলার প্রতিযোগিতা',
      participants: '৫০০+'
    },
    {
      title: 'সাংস্কৃতিক সপ্তাহ',
      date: 'ফেব্রুয়ারি',
      description: 'গান, নাচ, নাটক, কবিতা আবৃত্তি ও চিত্রাঙ্কন প্রতিযোগিতা',
      participants: '৩০০+'
    },
    {
      title: 'বিজ্ঞান মেলা',
      date: 'মার্চ',
      description: 'শিক্ষার্থীদের বৈজ্ঞানিক প্রজেক্ট ও উদ্ভাবনী কাজের প্রদর্শনী',
      participants: '২০০+'
    },
    {
      title: 'বার্ষিক পুরস্কার বিতরণী',
      date: 'ডিসেম্বর',
      description: 'একাডেমিক ও সহশিক্ষা কার্যক্রমে অসাধারণ অবদানের জন্য পুরস্কার',
      participants: '১০০০+'
    }
  ];

  const facilities = [
    {
      name: 'খেলার মাঠ',
      description: 'ক্রিকেট, ফুটবল ও অন্যান্য খেলার জন্য বিশাল মাঠ',
      icon: <Trophy className="h-8 w-8 text-primary" />
    },
    {
      name: 'অডিটোরিয়াম',
      description: '৫০০ আসন বিশিষ্ট আধুনিক অডিটোরিয়াম',
      icon: <Music className="h-8 w-8 text-primary" />
    },
    {
      name: 'কমন রুম',
      description: 'শিক্ষার্থীদের বিশ্রাম ও আড্ডার জন্য আলাদা কমন রুম',
      icon: <Users className="h-8 w-8 text-primary" />
    },
    {
      name: 'ক্যান্টিন',
      description: 'স্বাস্থ্যকর ও পুষ্টিকর খাবারের ব্যবস্থা',
      icon: <Heart className="h-8 w-8 text-primary" />
    }
  ];

  const achievements = [
    {
      year: '২০২৪',
      title: 'জাতীয় বিজ্ঞান অলিম্পিয়াড',
      achievement: 'স্বর্ণপদক',
      student: 'সারা খান (১০ম শ্রেণী)'
    },
    {
      year: '২০২৪',
      title: 'আন্তঃস্কুল বিতর্ক প্রতিযোগিতা',
      achievement: 'চ্যাম্পিয়ন',
      student: 'রাহুল আহমেদ (১১শ শ্রেণী)'
    },
    {
      year: '২০২৩',
      title: 'জেলা ক্রীড়া প্রতিযোগিতা',
      achievement: 'সামগ্রিক চ্যাম্পিয়ন',
      student: 'স্কুল টিম'
    },
    {
      year: '২০২ৃ',
      title: 'জাতীয় গণিত অলিম্পিয়াড',
      achievement: 'রৌপ্যপদক',
      student: 'তানভীর হাসান (৯ম শ্রেণী)'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/90 to-primary/70">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ছাত্র জীবন
            </h1>
            <p className="text-xl opacity-90">
              একাডেমিক শিক্ষার পাশাপাশি সহশিক্ষা কার্যক্রমে সমৃদ্ধ ছাত্র জীবন
            </p>
          </div>
        </div>
      </section>

      {/* Clubs & Organizations */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              ক্লাব ও সংগঠন
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              বিভিন্ন ক্লাব ও সংগঠনের মাধ্যমে শিক্ষার্থীদের প্রতিভা বিকাশের সুযোগ
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clubs.map((club, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-accent/10 rounded-full">
                      {club.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{club.name}</CardTitle>
                      <Badge variant="secondary">{club.members} সদস্য</Badge>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {club.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">কার্যক্রম:</h4>
                    <ul className="space-y-1">
                      {club.activities.map((activity, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <Star className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sports & Athletics */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              খেলাধুলা ও ক্রীড়া
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              বিভিন্ন খেলাধুলায় অংশগ্রহণ ও অসাধারণ সাফল্য
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sports.map((sport, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
                    {sport.icon}
                  </div>
                  <CardTitle className="text-lg">{sport.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm text-foreground mb-2">অর্জন:</h4>
                      <div className="space-y-1">
                        {sport.achievements.map((achievement, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs block">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-foreground mb-1">সুবিধা:</h4>
                      <p className="text-xs text-muted-foreground">{sport.facilities}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Events */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              বার্ষিক অনুষ্ঠান
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              প্রতি বছর আয়োজিত বিভিন্ন অনুষ্ঠান ও প্রতিযোগিতা
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <Badge variant="secondary">{event.date}</Badge>
                  </div>
                  <CardDescription className="text-base">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      অংশগ্রহণকারী: {event.participants}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Facilities */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              ছাত্র সুবিধাসমূহ
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              শিক্ষার্থীদের সুবিধার জন্য বিভিন্ন আধুনিক সুবিধা
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
                    {facility.icon}
                  </div>
                  <CardTitle className="text-xl">{facility.name}</CardTitle>
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

      {/* Student Achievements */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              ছাত্র অর্জন
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              আমাদের শিক্ষার্থীদের গর্বের অর্জনসমূহ
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-accent/10 rounded-full flex-shrink-0">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="secondary">{achievement.year}</Badge>
                        <Badge variant="outline">{achievement.achievement}</Badge>
                      </div>
                      <h3 className="font-semibold text-lg text-foreground mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {achievement.student}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Council */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ছাত্র পরিষদ
          </h2>
          <p className="text-xl mb-8 opacity-90">
            শিক্ষার্থীদের কণ্ঠস্বর ও নেতৃত্ব বিকাশের মাধ্যম
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">নির্বাচিত প্রতিনিধি</div>
              <p className="opacity-90">গণতান্ত্রিক প্রক্রিয়ায় নির্বাচিত</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">ছাত্র কল্যাণ</div>
              <p className="opacity-90">শিক্ষার্থীদের সমস্যা সমাধান</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">নেতৃত্ব প্রশিক্ষণ</div>
              <p className="opacity-90">ভবিষ্যৎ নেতা তৈরি</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentLife;

