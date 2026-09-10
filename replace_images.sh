#!/bin/bash
cd public

# Auth Cover - Nurse holding hands
curl -sL "https://images.unsplash.com/photo-1576765608532-0739c13b28f7?auto=format&fit=crop&w=1600&q=80" -o auth_cover.jpg

# Family Portal - Elderly care / happiness
curl -sL "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=1600&q=80" -o family-portal-mockup.jpg

# Hero Dashboard & About Dashboard - Doctor on laptop
curl -sL "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80" -o hero-dashboard.jpg
cp hero-dashboard.jpg about-dashboard.jpg
cp hero-dashboard.jpg ../src/app/opengraph-image.jpg

# Mobile App - Nurse using phone (or similar medical context)
curl -sL "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=800&q=80" -o mobile-app-mockup.jpg

# Blogs
curl -sL "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1600&q=80" -o blog_gen_1.jpg
curl -sL "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=1600&q=80" -o blog_gen_2.jpg
curl -sL "https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?auto=format&fit=crop&w=1600&q=80" -o blog_gen_3.jpg
curl -sL "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&w=1600&q=80" -o blog_gen_4.jpg

# Headers
cp blog_gen_1.jpg header_about.jpg
cp blog_gen_2.jpg header_blogs.jpg
cp blog_gen_3.jpg header_contact.jpg
cp blog_gen_4.jpg header_features.jpg

echo "Images replaced successfully!"
