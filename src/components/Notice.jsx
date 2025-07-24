import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { 
  Bell, 
  Calendar, 
  Search,
  Download,
  Eye,
  Filter,
  Clock,
  AlertCircle,
  FileText,
  Users,
  GraduationCap
} from 'lucide-react';

const Notice = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('সব');

  const notices = [
    {
      id: 1,
      title: 'ভর্তি বিজ্ঞপ্তি ২০২৫',
      content: '২০২৫ শিক্ষাবর্ষের জন্য ৬ষ্ঠ, ৯ম ও ১১শ শ্রেণীতে ভর্তির আবেদন শুরু হয়েছে। আবেদনের শেষ তারিখ ৩১ জানুয়ারি, ২০২৫।',
      date: '১৫ জানুয়ারি, ২০২৫',
      category: 'ভর্তি',
      priority: 'গুরুত্বপূর্ণ',
      views: 1250,
      hasAttachment: true
    },
    {
      id: 2,
      title: 'বার্ষিক পরীক্ষার রুটিন প্রকাশ',
      content: '২০২৪ সালের বার্ষিক পরীক্ষার রুটিন প্রকাশিত হয়েছে। পরীক্ষা শুরু হবে ১৫ নভেম্বর, ২০২৪ থেকে।',
      date: '১০ জানুয়ারি, ২০২৫',
      category: 'পরীক্ষা',
      priority: 'জরুরি',
      views: 890,
      hasAttachment: true
    },
    {
      id: 3,
      title: 'শীতকালীন ছুটির তালিকা',
      content: 'শীতকালীন ছুটি ২০ ডিসেম্বর, ২০২৪ থেকে ৫ জানুয়ারি, ২০২৫ পর্যন্ত। ৬ জানুয়ারি থেকে নিয়মিত ক্লাস শুরু হবে।',
      date: '৫ জানুয়ারি, ২০২৫',
      category: 'ছুটি',
      priority: 'সাধারণ',
      views: 650,
      hasAttachment: false
    },
    {
      id: 4,
      title: 'বার্ষিক ক্রীড়া প্রতিযোগিতা ২০২৫',
      content: 'বার্ষিক ক্রীড়া প্রতিযোগিতা অনুষ্ঠিত হবে ২৫ জানুয়ারি, ২০২৫। সকল শিক্ষার্থী অংশগ্রহণ করতে পারবেন।',
      date: '৩ জানুয়ারি, ২০২৫',
      category: 'ইভেন্ট',
      priority: 'সাধারণ',
      views: 420,
      hasAttachment: false
    },
    {
      id: 5,
      title: 'অভিভাবক সভা আহ্বান',
      content: 'সকল শ্রেণীর অভিভাবকদের সাথে সভা অনুষ্ঠিত হবে ৫ ফেব্রুয়ারি, ২০২৫, সকাল ১০:০০ টায়।',
      date: '২৮ ডিসেম্বর, ২০২৪',
      category: 'সভা',
      priority: 'গুরুত্বপূর্ণ',
      views: 780,
      hasAttachment: false
    },
    {
      id: 6,
      title: 'নতুন ইউনিফর্মের নির্দেশনা',
      content: 'নতুন শিক্ষাবর্ষ থেকে ইউনিফর্মের কিছু পরিবর্তন আনা হয়েছে। বিস্তারিত তথ্য সংযুক্ত ফাইলে দেখুন।',
      date: '২০ ডিসেম্বর, ২০২৪',
      category: 'সাধারণ',
      priority: 'সাধারণ',
      views: 320,
      hasAttachment: true
    },
    {
      id: 7,
      title: 'বিজ্ঞান মেলা ২০২৫',
      content: 'বার্ষিক বিজ্ঞান মেলা অনুষ্ঠিত হবে ১৫ মার্চ, ২০২৫। আগ্রহী শিক্ষার্থীরা প্রজেক্ট জমা দিতে পারেন।',
      date: '১৫ ডিসেম্বর, ২০২৪',
      category: 'ইভেন্ট',
      priority: 'সাধারণ',
      views: 560,
      hasAttachment: false
    },
    {
      id: 8,
      title: 'লাইব্রেরি নতুন বই সংযোজন',
      content: 'লাইব্রেরিতে নতুন ৫০০টি বই সংযোজন করা হয়েছে। শিক্ষার্থীরা এখনই ইস্যু করতে পারবেন।',
      date: '১০ ডিসেম্বর, ২০২৪',
      category: 'সাধারণ',
      priority: 'সাধারণ',
      views: 280,
      hasAttachment: false
    }
  ];

  const categories = ['সব', 'ভর্তি', 'পরীক্ষা', 'ছুটি', 'ইভেন্ট', 'সভা', 'সাধারণ'];

  const filteredNotices = notices.filter(notice => {
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notice.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'সব' || notice.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'জরুরি':
        return 'destructive';
      case 'গুরুত্বপূর্ণ':
        return 'default';
      default:
        return 'secondary';
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'জরুরি':
        return <AlertCircle className="h-4 w-4" />;
      case 'গুরুত্বপূর্ণ':
        return <Bell className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'ভর্তি':
        return <Users className="h-4 w-4" />;
      case 'পরীক্ষা':
        return <GraduationCap className="h-4 w-4" />;
      case 'ইভেন্ট':
        return <Calendar className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/90 to-primary/70">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              নোটিশ বোর্ড
            </h1>
            <p className="text-xl opacity-90">
              স্কুলের সকল গুরুত্বপূর্ণ নোটিশ ও ঘোষণা এক জায়গায়
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="নোটিশ খুঁজুন..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Notices */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-primary">
                সাম্প্রতিক নোটিশ ({filteredNotices.length}টি)
              </h2>
            </div>
            
            <div className="space-y-6">
              {filteredNotices.map((notice) => (
                <Card key={notice.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge 
                            variant={getPriorityColor(notice.priority)}
                            className="flex items-center space-x-1"
                          >
                            {getPriorityIcon(notice.priority)}
                            <span>{notice.priority}</span>
                          </Badge>
                          <Badge variant="outline" className="flex items-center space-x-1">
                            {getCategoryIcon(notice.category)}
                            <span>{notice.category}</span>
                          </Badge>
                        </div>
                        <CardTitle className="text-xl mb-2">{notice.title}</CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{notice.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>{notice.views} বার দেখা হয়েছে</span>
                          </div>
                        </div>
                      </div>
                      {notice.hasAttachment && (
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          ডাউনলোড
                        </Button>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {notice.content}
                    </CardDescription>
                    <div className="mt-4 flex items-center justify-between">
                      <Button variant="link" className="p-0 h-auto">
                        বিস্তারিত পড়ুন
                      </Button>
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>২ দিন আগে প্রকাশিত</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredNotices.length === 0 && (
              <div className="text-center py-12">
                <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  কোনো নোটিশ পাওয়া যায়নি
                </h3>
                <p className="text-muted-foreground">
                  আপনার অনুসন্ধান অনুযায়ী কোনো নোটিশ খুঁজে পাওয়া যায়নি।
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Notice Categories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              নোটিশের ধরন
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              বিভিন্ন ধরনের নোটিশ ও ঘোষণা
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">ভর্তি বিজ্ঞপ্তি</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  নতুন শিক্ষাবর্ষের ভর্তি সংক্রান্ত সকল তথ্য
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">পরীক্ষার নোটিশ</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  পরীক্ষার রুটিন, ফলাফল ও অন্যান্য তথ্য
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">ইভেন্ট ও অনুষ্ঠান</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  সাংস্কৃতিক অনুষ্ঠান ও বিভিন্ন ইভেন্টের তথ্য
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">সাধারণ নোটিশ</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  দৈনন্দিন কার্যক্রম ও সাধারণ ঘোষণা
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Subscribe to Notifications */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            নোটিশ আপডেট পান
          </h2>
          <p className="text-xl mb-8 opacity-90">
            নতুন নোটিশের তাৎক্ষণিক আপডেট পেতে সাবস্ক্রাইব করুন
          </p>
          <div className="max-w-md mx-auto flex space-x-2">
            <Input 
              type="email" 
              placeholder="আপনার ইমেইল ঠিকানা"
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
            />
            <Button variant="secondary">
              <Bell className="mr-2 h-4 w-4" />
              সাবস্ক্রাইব
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Notice;

