import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  User, 
  GraduationCap, 
  Award, 
  Mail,
  Phone,
  BookOpen,
  Users,
  Star
} from 'lucide-react';

const Faculty = () => {
  const principalInfo = {
    name: 'অধ্যাপক মোহাম্মদ রহিম',
    position: 'প্রধান শিক্ষক',
    qualification: 'এম.এ. (বাংলা), বি.এড.',
    experience: '২৫ বছর',
    email: 'principal@vatiahighschool.edu.bd',
    phone: '+880-XXX-XXXXXX',
    specialization: 'শিক্ষা প্রশাসন ও বাংলা সাহিত্য'
  };

  const teachers = [
    {
      name: 'ড. ফাতেমা খাতুন',
      position: 'সহকারী প্রধান শিক্ষক',
      subject: 'গণিত',
      qualification: 'এম.এস.সি. (গণিত), বি.এড.',
      experience: '২০ বছর',
      email: 'fatema@vatiahighschool.edu.bd'
    },
    {
      name: 'মোহাম্মদ করিম উদ্দিন',
      position: 'সিনিয়র শিক্ষক',
      subject: 'ইংরেজি',
      qualification: 'এম.এ. (ইংরেজি), বি.এড.',
      experience: '১৮ বছর',
      email: 'karim@vatiahighschool.edu.bd'
    },
    {
      name: 'ড. রাশিদা বেগম',
      position: 'সিনিয়র শিক্ষক',
      subject: 'পদার্থবিজ্ঞান',
      qualification: 'এম.এস.সি. (পদার্থবিজ্ঞান), পিএইচ.ডি.',
      experience: '১৫ বছর',
      email: 'rashida@vatiahighschool.edu.bd'
    },
    {
      name: 'আব্দুল হামিদ',
      position: 'শিক্ষক',
      subject: 'রসায়ন',
      qualification: 'এম.এস.সি. (রসায়ন), বি.এড.',
      experience: '১২ বছর',
      email: 'hamid@vatiahighschool.edu.bd'
    },
    {
      name: 'সালমা আক্তার',
      position: 'শিক্ষক',
      subject: 'জীববিজ্ঞান',
      qualification: 'এম.এস.সি. (জীববিজ্ঞান), বি.এড.',
      experience: '১০ বছর',
      email: 'salma@vatiahighschool.edu.bd'
    },
    {
      name: 'মোহাম্মদ আলী',
      position: 'শিক্ষক',
      subject: 'ইতিহাস',
      qualification: 'এম.এ. (ইতিহাস), বি.এড.',
      experience: '১৪ বছর',
      email: 'ali@vatiahighschool.edu.bd'
    },
    {
      name: 'নাসরিন সুলতানা',
      position: 'শিক্ষক',
      subject: 'ভূগোল',
      qualification: 'এম.এ. (ভূগোল), বি.এড.',
      experience: '৮ বছর',
      email: 'nasrin@vatiahighschool.edu.bd'
    },
    {
      name: 'আহমেদ হাসান',
      position: 'শিক্ষক',
      subject: 'হিসাববিজ্ঞান',
      qualification: 'এম.কম. (হিসাববিজ্ঞান), বি.এড.',
      experience: '৯ বছর',
      email: 'ahmed@vatiahighschool.edu.bd'
    }
  ];

  const staff = [
    {
      name: 'মোহাম্মদ ইউসুফ',
      position: 'অফিস সহকারী',
      department: 'প্রশাসনিক বিভাগ',
      experience: '১৫ বছর'
    },
    {
      name: 'রহিমা খাতুন',
      position: 'গ্রন্থাগারিক',
      department: 'লাইব্রেরি',
      experience: '১০ বছর'
    },
    {
      name: 'আব্দুল কাদের',
      position: 'ল্যাব সহায়ক',
      department: 'বিজ্ঞান বিভাগ',
      experience: '৮ বছর'
    },
    {
      name: 'ফরিদা বেগম',
      position: 'আয়া',
      department: 'রক্ষণাবেক্ষণ',
      experience: '৫ বছর'
    }
  ];

  const departments = [
    {
      name: 'বিজ্ঞান বিভাগ',
      head: 'ড. রাশিদা বেগম',
      teachers: 5,
      subjects: ['পদার্থবিজ্ঞান', 'রসায়ন', 'জীববিজ্ঞান', 'গণিত']
    },
    {
      name: 'মানবিক বিভাগ',
      head: 'মোহাম্মদ আলী',
      teachers: 4,
      subjects: ['ইতিহাস', 'ভূগোল', 'পৌরনীতি', 'অর্থনীতি']
    },
    {
      name: 'ব্যবসায় শিক্ষা বিভাগ',
      head: 'আহমেদ হাসান',
      teachers: 3,
      subjects: ['হিসাববিজ্ঞান', 'ব্যবসায় সংগঠন', 'অর্থনীতি']
    },
    {
      name: 'ভাষা বিভাগ',
      head: 'মোহাম্মদ করিম উদ্দিন',
      teachers: 4,
      subjects: ['বাংলা', 'ইংরেজি', 'আরবি']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/90 to-primary/70">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              শিক্ষক ও কর্মচারী
            </h1>
            <p className="text-xl opacity-90">
              অভিজ্ঞ ও দক্ষ শিক্ষকমণ্ডলী যারা শিক্ষার্থীদের সফলতার পথে পথপ্রদর্শক
            </p>
          </div>
        </div>
      </section>

      {/* Principal Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              প্রধান শিক্ষক
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              আমাদের প্রতিষ্ঠানের নেতৃত্বে রয়েছেন একজন অভিজ্ঞ ও দূরদর্শী শিক্ষাবিদ
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <User className="h-16 w-16 text-primary" />
                    </div>
                    <Badge variant="secondary" className="mb-2">
                      {principalInfo.position}
                    </Badge>
                  </div>
                  
                  <div className="md:col-span-2 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {principalInfo.name}
                      </h3>
                      <p className="text-primary font-medium mb-4">
                        {principalInfo.position}
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <GraduationCap className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">শিক্ষাগত যোগ্যতা:</span>
                        </div>
                        <p className="text-muted-foreground">{principalInfo.qualification}</p>
                      </div>
                      
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Award className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">অভিজ্ঞতা:</span>
                        </div>
                        <p className="text-muted-foreground">{principalInfo.experience}</p>
                      </div>
                      
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Mail className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">ইমেইল:</span>
                        </div>
                        <p className="text-muted-foreground">{principalInfo.email}</p>
                      </div>
                      
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Phone className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">ফোন:</span>
                        </div>
                        <p className="text-muted-foreground">{principalInfo.phone}</p>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">বিশেষত্ব:</span>
                      </div>
                      <p className="text-muted-foreground">{principalInfo.specialization}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              বিভাগসমূহ
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              বিভিন্ন বিষয়ের জন্য আলাদা বিভাগ ও বিভাগীয় প্রধান
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{dept.name}</CardTitle>
                  <CardDescription>
                    বিভাগীয় প্রধান: {dept.head}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>শিক্ষক সংখ্যা:</span>
                      <Badge variant="secondary">{dept.teachers}</Badge>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-2">বিষয়সমূহ:</p>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {dept.subjects.map((subject, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              শিক্ষকমণ্ডলী
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              আমাদের অভিজ্ঞ ও দক্ষ শিক্ষকগণ যারা শিক্ষার্থীদের সর্বোচ্চ মানের শিক্ষা প্রদান করেন
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachers.map((teacher, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{teacher.name}</CardTitle>
                      <CardDescription>{teacher.position}</CardDescription>
                      <Badge variant="secondary" className="mt-1">
                        {teacher.subject}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <GraduationCap className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">যোগ্যতা:</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{teacher.qualification}</p>
                    </div>
                    
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <Award className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">অভিজ্ঞতা:</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{teacher.experience}</p>
                    </div>
                    
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <Mail className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">ইমেইল:</span>
                      </div>
                      <p className="text-sm text-muted-foreground break-all">{teacher.email}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Staff */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              সহায়ক কর্মচারী
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              আমাদের দক্ষ সহায়ক কর্মচারীরা যারা প্রতিষ্ঠানের সুষ্ঠু পরিচালনায় অবদান রাখেন
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {staff.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription>{member.position}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm font-medium">বিভাগ:</span>
                      <p className="text-sm text-muted-foreground">{member.department}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium">অভিজ্ঞতা:</span>
                      <p className="text-sm text-muted-foreground">{member.experience}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Statistics */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              শিক্ষক পরিসংখ্যান
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-accent/10 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">২৫+</div>
              <div className="text-muted-foreground">মোট শিক্ষক</div>
            </div>
            <div className="text-center p-6 bg-accent/10 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">৮০%</div>
              <div className="text-muted-foreground">স্নাতকোত্তর ডিগ্রিধারী</div>
            </div>
            <div className="text-center p-6 bg-accent/10 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">১৫+</div>
              <div className="text-muted-foreground">গড় অভিজ্ঞতা (বছর)</div>
            </div>
            <div className="text-center p-6 bg-accent/10 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">১০+</div>
              <div className="text-muted-foreground">সহায়ক কর্মচারী</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;

