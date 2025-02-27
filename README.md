# HallEase - Event and Hall Management System

The HallEase Event and Hall Management System is a tailored solution for university administrators to efficiently manage the scheduling and booking of halls, classrooms, and event spaces. It streamlines academic and extracurricular event planning, ensuring optimal resource utilization and smooth communication across departments.

## Features

### 1. User Authentication & Role-Based Access
**Secure authentication using Supabase.**

#### Role-based access:
- **Users:** Users can be classified into different categories:
  - Head of an organization
  - Mentor of an organization
  - Lecturer
  - External users (who are not affiliated with the university and can only book the university auditorium)
- **Admins:**
  - Admins primarily consist of the Dean of the faculty and administrators who hold the highest level of administrative control.
  - Some non-academic staff members are also granted administrative privileges to manage bookings.

#### User Interaction with the System
- Users must first create an account, which requires approval from an admin (manual process).
- Without an approved account, users cannot proceed with booking a hall.
- Admins have the authority to accept or reject user registration requests.
- Once registered, users can request hall bookings based on their category permissions.
- Admins oversee the booking process, approving or rejecting hall reservations to ensure efficient space utilization.

### 2. Admin Dashboard & Management
The HallEase FCT dashboard provides an intuitive navigation panel for managing hall bookings, events, notifications, and system configurations. Below is a breakdown of its functionalities:

#### 1. Settings & Configurations (Admin-Only)
- **System Preferences:**
  - Configure system-wide settings such as booking policies, time slots, and default notification preferences.
  - Enable or disable features based on institutional requirements.
  - Manage integrations with third-party tools, if applicable.
- **Access Control:**
  - Define user roles (Admin, User).
  - Assign or revoke permissions for different functionalities.
  - Manage authentication and security settings, such as enabling two-factor authentication (2FA).

#### 2. Dashboard & Calendar View
- **Dashboard:** Provides an overview of key statistics, recent activities, and quick actions.
- **Calendar View:** Displays booked and available slots in a calendar format.

#### 3. Event Management
- Allows users to browse and manage scheduled events.

#### 4. Hall & Booking Management
- **Book a Hall:** Enables users to submit hall booking requests.
- **Booking Requests:** Displays pending, approved, or rejected requests (Admins can manage approvals).
- **Hall Facilities:** Lists available halls, their capacities, and available amenities.

#### 5. Notifications & Communication
- **Email & SMS Reminders:** Sends booking confirmations and reminders.

#### 6. Reports & Analytics
- **Reports:** Generates booking and event reports.
- **Analytics:** Provides insights into hall usage, event trends, and system performance.

#### 7. Help & Support
- **FAQs & Documentation:** Provides user guides and FAQs.
- **Report an Issue:** Allows users to report technical problems.

#### 8. Logout
- Securely logs out the user from the system.

### 3. Real-Time Hall Availability Calendar

1. **Color-Coded Status** - Halls are visually marked based on their availability status.
2. **Advanced Filters** - Users can filter by:
   - **Date range:** Select specific days or weeks to view hall availability.
   - **Hall name:** Find a particular hall quickly.
   - **Event type:** Filter based on academic, extracurricular, or external events.
   - **Capacity:** Search for halls that accommodate a specific number of people.
3. **Interactive Calendar View** - Hover over an event to see booking details, organizer name, and event type.
4. **Email & SMS Notifications**
   - **Booking confirmation notifications via email and SMS:** Users receive instant confirmation emails and SMS when a booking request is approved. The confirmation includes booking details such as event name, date, time, and hall location.
   - **Reminders for upcoming events:** Automated email and SMS reminders are sent before the event date.
   - **Instant alerts for booking cancellations:** Users receive immediate notifications if their booking is canceled by an admin. Includes a reason for cancellation and alternative booking options if available.

### 4. AI/ML-Powered Features
- **Predictive analytics** to determine peak booking times.
- **Smart recommendations** for suitable halls based on event type.
- **AI-driven chatbot** for event planning assistance.

## Tech Stack

### Frontend:
- Next.js
- Tailwind CSS
- ShadCN UI

### Backend:
- Supabase for authentication and database management

### Database:
- PostgreSQL (Managed via Supabase)
