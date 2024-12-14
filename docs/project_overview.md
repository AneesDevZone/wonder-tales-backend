
# WonderTales - Project Overview

## App Concept
WonderTales is a creative app designed specifically for kids to bring their imaginative stories to life. 
Children can use prebuilt notebook-style templates or start with a blank canvas to create their own stories 
using text, emojis, clip art, and pictures. The app provides a fun and engaging digital storytelling 
experience with the following features:

1. **Prebuilt Templates**: Kids can choose from visually appealing, themed templates with fancy backgrounds, 
   where they can add and place text as they desire to craft their stories.
2. **Blank Page Option**: Kids can start with an empty page and design their story using their preferred 
   emojis, pictures, and clip art, creating characters or themes entirely from their imagination.
3. **Story Sharing Options**: After creating a story, users can:
   - Keep it private.
   - Share it publicly within the app for other kids to enjoy.
   - Share it directly via WhatsApp or other external platforms.
4. **Digital Story Features**: Stories are designed to scroll vertically like a word document with 
   themes and arts, instead of turning traditional book pages.

Stories include the following elements:
- A **title**.
- The **story text**.
- **Author name** and **avatar**.
- **Creation date**.
- Optional **images or clip art** to support the story theme.

### User Roles
1. **Guest Users**: Guests can only read publicly shared stories.  
2. **Registered Users**: Registered users can create, edit, and share stories.

## Feasibility and Recommendations

### Achievability
This project is feasible for a single developer with basic to intermediate skills, especially when leveraging 
tools like ChatGPT for guidance and problem-solving. By focusing on small milestones and iterative development, 
you can complete this project successfully.

### Cost Estimation (for 1000 Users)
- **Data Usage**: If each user shares 3 stories daily, with an average story size of ~202 KB, the app will handle 
  ~600 MB/day (~18 GB/month).
- **Cloud Hosting Costs** (AWS, Azure, or Firebase):
  - Storage: ~$5/month for 20 GB.
  - API hosting: ~$20-$50/month for 1000 daily active users.
  - **Total Cost**: ~$25-$55/month.

### Suggested Features for Improvement
- Introduce seasonal or themed templates (e.g., Christmas, Halloween).
- Add gamification features (e.g., badges, rewards).
- Allow public stories to receive likes or comments.

## Development Plan

### Backend Development Steps
1. **Define API Requirements**:
   - User authentication (JWT-based).
   - Endpoints for story creation, retrieval, and sharing.
2. **Database Design**:
   - Tables for `users`, `stories`, `templates`, and `media`.
3. **Set Up NestJS Modules**:
   - Use modular architecture (e.g., `AuthModule`, `StoriesModule`).
4. **Implement Features**:
   - Role-based access control for guests and registered users.
   - Story sharing functionality (public/private).
5. **Testing and Documentation**:
   - Test APIs using Postman or Swagger.
   - Document APIs using NestJS Swagger integration.

### Tools and Extensions
- **VSCode Extensions**:
  - ESLint, Prettier, NestJS Snippets, REST Client, Docker, GitLens.
- **Database Management**:
  - MySQL Workbench or DBeaver for visual schema design.
- **Testing**:
  - Postman or Insomnia for API testing.
- **Monitoring**:
  - NestJS Logger for debugging and insights.

## Next Steps
1. Start with user authentication and database schema design.
2. Gradually implement and test each feature.
3. Focus on scalability and maintainability while iterating.

By following this structured approach, the WonderTales app can become a reality, offering kids a unique and enjoyable 
platform for storytelling!
