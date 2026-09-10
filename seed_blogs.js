const mysql = require('mysql2/promise');

async function seed() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST || '127.0.0.1',
      port: process.env.MYSQL_PORT || 8889,
      user: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASSWORD || 'root',
      database: process.env.MYSQL_DATABASE || 'carestaff_os',
    });

    console.log('Connected to MySQL. Clearing old blogs...');
    await connection.execute('DELETE FROM blogs');

    const blogs = [
      {
        title: 'How CareStaff OS Revolutionizes Care Homes',
        slug: 'how-carestaff_os-os-revolutionizes-care-homes',
        excerpt: 'Discover how an integrated 3-panel system changes the way care homes operate.',
        content: '<p>The modern care home faces unprecedented challenges in compliance, staffing, and operations. CareStaff OS bridges this gap by unifying three distinct panels into one ecosystem.</p><p>By giving admins a powerful web app, care workers an intuitive mobile app, and families a transparent portal, we eliminate data silos and scattered spreadsheets.</p><h3>The Power of Real-Time Data</h3><p>When a carer logs a medication round on their phone, the admin dashboard updates instantly. This real-time synchronization is the key to preventing errors and maintaining CQC compliance effortlessly.</p>',
        author_name: 'Sarah Jenkins'
      },
      {
        title: 'The Importance of Family Portals in Social Care',
        slug: 'importance-of-family-portals',
        excerpt: 'Transparency and communication with families is crucial. Learn how our Family Portal achieves this.',
        content: '<p>Family members often feel disconnected from the daily care of their loved ones. A dedicated family portal changes this dynamic completely.</p><p>By providing a secure, consent-gated timeline of non-clinical updates and photos, families gain peace of mind, and care homes see a dramatic reduction in inbound phone calls asking for updates.</p>',
        author_name: 'David Okafor'
      },
      {
        title: 'Preparing for Your Next CQC Inspection',
        slug: 'preparing-for-cqc-inspection',
        excerpt: 'Top tips on maintaining an outstanding rating with digital audit trails.',
        content: '<p>CQC inspections can be stressful, but with a digital-first approach, you are always ready.</p><p>CareStaff OS automatically builds comprehensive audit trails for eMAR, incident reports, and staff training. When inspectors arrive, you can simply grant them read-only access to your compliance dashboard.</p>',
        author_name: 'Emma Thompson'
      },
      {
        title: 'Mastering eMAR: Digital Medication Administration',
        slug: 'mastering-emar-digital-medication',
        excerpt: 'Why moving away from paper MAR charts is essential for resident safety.',
        content: '<p>Paper MAR charts are prone to human error, illegible handwriting, and missed signatures.</p><p>Our Smart eMAR system forces carers to provide mandatory reasoning if a dose is skipped, and alerts managers instantly if a critical medication is missed.</p>',
        author_name: 'James Wright'
      },
      {
        title: 'Optimizing Kitchen Inventory and Dietary Needs',
        slug: 'optimizing-kitchen-inventory',
        excerpt: 'How to sync care plans directly with your catering team.',
        content: '<p>One of the biggest risks in a care home is a breakdown in communication between the care team and the kitchen regarding allergies and IDDSI levels.</p><p>CareStaff OS links dietary profiles directly to the kitchen dashboard, ensuring chefs always have real-time information.</p>',
        author_name: 'Linda Patel'
      },
      {
        title: 'The Future of Offline-Capable Care Apps',
        slug: 'future-offline-care-apps',
        excerpt: 'Why your care app must work seamlessly without Wi-Fi.',
        content: '<p>Care homes often have Wi-Fi dead zones, especially in older buildings. A care app that requires constant internet connection will fail on the frontline.</p><p>Our PWA architecture ensures that carers can continue logging shift notes and eMAR offline, automatically syncing when they return to a connected zone.</p>',
        author_name: 'Admin'
      },
      {
        title: 'Automating Rosters and Agency Spend',
        slug: 'automating-rosters-agency-spend',
        excerpt: 'Take control of your staffing budgets with intelligent rostering.',
        content: '<p>Building weekly rosters manually is a massive drain on management time. Furthermore, over-reliance on agency staff can cripple budgets.</p><p>Our drag-and-drop roster builder highlights agency spend in red, helping managers visualize and optimize their staffing costs instantly.</p>',
        author_name: 'Sarah Jenkins'
      },
      {
        title: 'Streamlining Maintenance Requests',
        slug: 'streamlining-maintenance-requests',
        excerpt: 'Fixing broken equipment faster with digital ticketing.',
        content: '<p>A broken hoist or a leaking radiator can severely impact care quality. Paper maintenance logs often get lost or ignored.</p><p>With our ticketing system, carers can log maintenance issues directly from their phones, complete with photos, which instantly alerts the maintenance team.</p>',
        author_name: 'David Okafor'
      },
      {
        title: 'The Role of AI in Social Care',
        slug: 'role-of-ai-social-care',
        excerpt: 'Exploring how artificial intelligence will shape the future of care homes.',
        content: '<p>While AI will never replace the human touch of a care worker, it can drastically reduce administrative burden.</p><p>From predictive staffing analytics to AI-assisted shift note summaries, we are exploring the safe, ethical integration of AI into CareStaff OS.</p>',
        author_name: 'James Wright'
      },
      {
        title: 'Why We Built CareStaff OS',
        slug: 'why-we-built-carestaff_os-os',
        excerpt: 'The origin story of our platform and our mission to modernize social care.',
        content: '<p>We saw firsthand how dedicated care workers were being crushed by administrative paperwork and outdated, clunky software.</p><p>We built CareStaff OS to be the platform that carers actually want to use—beautiful, fast, and completely reliable.</p>',
        author_name: 'Admin'
      }
    ];

    console.log(`Inserting ${blogs.length} blogs...`);
    
    for (const blog of blogs) {
      await connection.execute(
        'INSERT INTO blogs (title, slug, excerpt, content, author_name) VALUES (?, ?, ?, ?, ?)',
        [blog.title, blog.slug, blog.excerpt, blog.content, blog.author_name]
      );
    }
    
    console.log('Successfully seeded 10 blogs!');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding DB:', err);
    process.exit(1);
  }
}

seed();
