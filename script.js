/* ===================== Translations ===================== */
const translations = {
  en: {
    nav_all: "All Drinks",
    nav_favorites: "Favorites",
    nav_about: "About",
    nav_contact: "Contact",
    account_login: "Log In",
    account_logout: "Log Out",
    account_hi: (name) => `Hi, ${name}`,
    hero_eyebrow: "Steeped in Phnom Penh",
    hero_title_1: "Arom first",
    hero_title_km: "អារម្មណ៍ដំបូង",
    hero_sub: "Small-batch Khmer coffee, tea and infusions — brewed the way our grandmothers taught us, served the way this city drinks today.",
    hero_cta: "Browse the menu",
    menu_title: "The Menu",
    menu_title_fav: "Your Favorites",
    footer_note: "Phnom Penh, Cambodia — brewed daily.",
    category_all: "All",
    category_coffee: "Coffee",
    category_tea: "Tea",
    category_juice: "Juice",
    category_smoothie: "Smoothie",
    category_food: "Food",
    empty_favorites: "No favorites yet — tap the heart on a drink to save it here.",
    cart_title: "Your Cart",
    cart_empty: "Your cart is empty. Add something warm.",
    cart_total: "Total",
    cart_checkout: "Checkout",
    add_to_cart: "Add",
    view_product: "View",
    added: "Added",
    toast_added: (name) => `${name} added to cart`,
    toast_removed: (name) => `${name} removed`,
    toast_fav_added: (name) => `${name} saved to favorites`,
    toast_fav_removed: (name) => `${name} removed from favorites`,
    toast_checkout: "This is a demo — checkout isn't wired up yet.",
    items_count: (n) => `${n} item${n === 1 ? "" : "s"}`,

    about_title: "About Us",

    contact_eyebrow: "Say hello",
    contact_title: "Get in Touch",
    contact_sub: "Questions, catering requests, or just want to say the palm sugar latte changed your life — write to us.",
    contact_name_label: "Name",
    contact_email_label: "Email",
    contact_message_label: "Message",
    contact_submit: "Send Message",
    contact_error_fields: "Please fill in every field.",
    contact_error_email: "Please enter a valid email address.",
    contact_success: (name) => `Thanks, ${name} — we'll get back to you soon.`,

    field_name: "Name",
    field_email: "Email",
    field_password: "Password",
    field_confirm_password: "Confirm Password",

    auth_tab_login: "Log In",
    auth_tab_signup: "Sign Up",
    auth_login_title: "Welcome back",
    auth_login_submit: "Log In",
    auth_forgot_link: "Forgot password?",
    auth_signup_title: "Create your account",
    auth_signup_submit: "Create Account",
    auth_forgot_title: "Reset your password",
    auth_forgot_help: "Enter your email and we'll send a link to reset your password.",
    auth_forgot_submit: "Send Reset Link",
    auth_back_login: "Back to Log In",

    auth_error_fields: "Please fill in every field.",
    auth_error_email: "Please enter a valid email address.",
    auth_error_password_length: "Password must be at least 6 characters.",
    auth_error_password_match: "Passwords don't match.",
    auth_error_email_taken: "An account with that email already exists.",
    auth_error_invalid_login: "Email or password is incorrect.",
    auth_success_signup: (name) => `Welcome, ${name}! Your account is ready.`,
    auth_success_login: (name) => `Welcome back, ${name}.`,
    auth_success_forgot: "If that email is registered, a reset link is on its way.",
    auth_success_logout: "You've been logged out.",

    invoice_title: "Invoice",
    invoice_shop_tagline: "Khmer Coffee & Tea House",
    invoice_number: "Invoice No.",
    invoice_date: "Date",
    invoice_customer: "Billed to",
    invoice_guest: "Guest customer",
    invoice_col_item: "Item",
    invoice_col_qty: "Qty",
    invoice_col_price: "Price",
    invoice_col_subtotal: "Subtotal",
    invoice_subtotal: "Subtotal",
    invoice_vat: "VAT (10%)",
    invoice_total: "Total Price",
    invoice_thank_you: "Thank you for your order!",
    invoice_footer_note: "ARÔM · Phnom Penh, Cambodia ",
    invoice_print: "Print",
    invoice_confirm: "Confirm & Place Order",
    invoice_close: "Close",
    invoice_empty: "Your cart is empty — add something before checking out.",
    toast_order_placed: "Order placed — thank you!",
  },
  km: {
    nav_all: "ភេសជ្ជៈទាំងអស់",
    nav_favorites: "ចំណូលចិត្ត",
    nav_about: "អំពីយើង",
    nav_contact: "ទំនាក់ទំនង",
    account_login: "ចូលគណនី",
    account_logout: "ចាកចេញ",
    account_hi: (name) => `សួស្តី ${name}`,
    hero_eyebrow: "ពោរពេញដោយអត្តសញ្ញាណ និងវប្បធម៌ភ្នំពេញ",
    hero_title_1: "Arom fist",
    hero_title_km: "អារម្មណ៍ដំបូង",
    hero_sub: "កាហ្វេ តែ និងភេសជ្ជៈខ្មែរធ្វើតាមរបៀបចាស់បុរាណ ដុតនំតាមរបៀបដែលជីដូនយើងបានបង្រៀន បម្រើតាមរបៀបទីក្រុងទំនើប។",
    hero_cta: "មើលម៉ីនុយ",
    menu_title: "ម៉ីនុយ",
    menu_title_fav: "ចំណូលចិត្តរបស់អ្នក",
    footer_note: "ភ្នំពេញ កម្ពុជា — ដុតរាល់ថ្ងៃ។",
    category_all: "ទាំងអស់",
    category_coffee: "កាហ្វេ",
    category_tea: "តែ",
    category_juice: "ទឹកផ្លែឈើ",
    category_smoothie: "ស្មូតធី",
    category_food: "អាហារ",
    empty_favorites: "មិនទាន់មានចំណូលចិត្តទេ — ចុចរូបបេះដូងលើភេសជ្ជៈណាមួយដើម្បីរក្សាទុកទីនេះ។",
    cart_title: "កន្ត្រករបស់អ្នក",
    cart_empty: "កន្ត្រករបស់អ្នកទទេ។ សូមបន្ថែមអ្វីមួយក្តៅៗ។",
    cart_total: "សរុប",
    cart_checkout: "បង់ប្រាក់",
    add_to_cart: "បន្ថែម",
    view_product: "មើល",
    added: "បានបន្ថែម",
    toast_added: (name) => `បានបន្ថែម ${name} ទៅកន្ត្រក`,
    toast_removed: (name) => `បានដកចេញ ${name}`,
    toast_fav_added: (name) => `បានរក្សាទុក ${name} ក្នុងចំណូលចិត្ត`,
    toast_fav_removed: (name) => `បានដក ${name} ចេញពីចំណូលចិត្ត`,
    toast_checkout: "នេះជាការសាកល្បង — ការបង់ប្រាក់មិនទាន់ដំណើរការនៅឡើយទេ។",
    items_count: (n) => `${n} មុខ`,

    about_title: "អំពីយើង",

    contact_eyebrow: "ជម្រាបសួរ",
    contact_title: "ទាក់ទងមកយើង",
    contact_sub: "សំណួរ ការកម្មង់ចាយពិសេស ឬគ្រាន់តែចង់ប្រាប់ថាឡាតតេស្ករត្នោតធ្វើឲ្យថ្ងៃអ្នកកាន់តែល្អ — សរសេរមកយើងបាន។",
    contact_name_label: "ឈ្មោះ",
    contact_email_label: "អ៊ីមែល",
    contact_message_label: "សារ",
    contact_submit: "ផ្ញើសារ",
    contact_error_fields: "សូមបំពេញគ្រប់ប្រអប់ទាំងអស់។",
    contact_error_email: "សូមបញ្ចូលអ៊ីមែលឲ្យត្រឹមត្រូវ។",
    contact_success: (name) => `អរគុណ ${name} — យើងនឹងឆ្លើយតបទៅអ្នកឆាប់ៗនេះ។`,

    field_name: "ឈ្មោះ",
    field_email: "អ៊ីមែល",
    field_password: "ពាក្យសម្ងាត់",
    field_confirm_password: "បញ្ជាក់ពាក្យសម្ងាត់",

    auth_tab_login: "ចូលគណនី",
    auth_tab_signup: "ចុះឈ្មោះ",
    auth_login_title: "សូមស្វាគមន៍ការត្រឡប់មកវិញ",
    auth_login_submit: "ចូលគណនី",
    auth_forgot_link: "ភ្លេចពាក្យសម្ងាត់?",
    auth_signup_title: "បង្កើតគណនីរបស់អ្នក",
    auth_signup_submit: "បង្កើតគណនី",
    auth_forgot_title: "កំណត់ពាក្យសម្ងាត់ឡើងវិញ",
    auth_forgot_help: "សូមបញ្ចូលអ៊ីមែលរបស់អ្នក ហើយយើងនឹងផ្ញើតំណភ្ជាប់ដើម្បីកំណត់ពាក្យសម្ងាត់ឡើងវិញ។",
    auth_forgot_submit: "ផ្ញើតំណភ្ជាប់កំណត់ឡើងវិញ",
    auth_back_login: "ត្រឡប់ទៅចូលគណនី",

    auth_error_fields: "សូមបំពេញគ្រប់ប្រអប់ទាំងអស់។",
    auth_error_email: "សូមបញ្ចូលអ៊ីមែលឲ្យត្រឹមត្រូវ។",
    auth_error_password_length: "ពាក្យសម្ងាត់ត្រូវមានយ៉ាងតិច ៦ តួអក្សរ។",
    auth_error_password_match: "ពាក្យសម្ងាត់មិនត្រូវគ្នាទេ។",
    auth_error_email_taken: "មានគណនីជាមួយអ៊ីមែលនេះរួចហើយ។",
    auth_error_invalid_login: "អ៊ីមែល ឬពាក្យសម្ងាត់មិនត្រឹមត្រូវ។",
    auth_success_signup: (name) => `សូមស្វាគមន៍ ${name}! គណនីរបស់អ្នករួចរាល់ហើយ។`,
    auth_success_login: (name) => `សូមស្វាគមន៍ការត្រឡប់មកវិញ ${name}។`,
    auth_success_forgot: "ប្រសិនបើអ៊ីមែលនោះបានចុះឈ្មោះ តំណភ្ជាប់កំណត់ឡើងវិញកំពុងផ្ញើទៅ។",
    auth_success_logout: "អ្នកបានចាកចេញរួចរាល់។",

    invoice_title: "វិក្កយបត្រ",
    invoice_shop_tagline: "កាហ្វេ និងតែខ្មែរ",
    invoice_number: "លេខវិក្កយបត្រ",
    invoice_date: "កាលបរិច្ឆេទ",
    invoice_customer: "អតិថិជន",
    invoice_guest: "អតិថិជនភ្ញៀវ",
    invoice_col_item: "មុខម្ហូប",
    invoice_col_qty: "ចំនួន",
    invoice_col_price: "តម្លៃ",
    invoice_col_subtotal: "តម្លៃសរុប",
    invoice_subtotal: "តម្លៃសរុប",
    invoice_vat: "អាករលើតម្លៃបន្ថែម (១០%)",
    invoice_total: "តម្លៃសរុបត្រូវបង់",
    invoice_thank_you: "សូមអរគុណសម្រាប់ការកម្មង់!",
    invoice_footer_note: "អារ៉ូម៉ · ភ្នំពេញ កម្ពុជា ",
    invoice_print: "បោះពុម្ព",
    invoice_confirm: "បញ្ជាក់ និងកម្មង់",
    invoice_close: "បិទ",
    invoice_empty: "កន្ត្រករបស់អ្នកទទេ — សូមបន្ថែមអ្វីមួយមុននឹងបង់ប្រាក់។",
    toast_order_placed: "បានកម្មង់ដោយជោគជ័យ — សូមអរគុណ!",
  }
};

/* ===================== Icons ===================== */
const icons = {
  cup: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 18h22v13a8 8 0 0 1-8 8h-6a8 8 0 0 1-8-8z"/><path d="M32 21h3a4 4 0 0 1 0 8h-3"/><path d="M16 10c-1.5 2 1 3 0 5M22 10c-1.5 2 1 3 0 5" stroke-linecap="round"/></svg>`,
  teapot: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 24h4a12 12 0 0 0 12 12h2a12 12 0 0 0 12-12" transform="translate(0,-2)"/><ellipse cx="22" cy="22" rx="14" ry="9"/><path d="M36 19h4a3 3 0 0 1 0 6h-4"/><path d="M14 13l4 5M30 13l-4 5"/><circle cx="22" cy="10" r="1.6" fill="currentColor" stroke="none"/></svg>`,
  beans: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2"><path d="M24 8c9 0 15 6 15 15s-7 17-15 17S9 32 9 23 15 8 24 8z"/><path d="M24 8c-3 6-3 12 0 17s3 11 0 15" stroke-linecap="round"/></svg>`,
  leaf: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 38C10 20 22 8 40 8 40 26 28 38 10 38z"/><path d="M10 38C18 30 26 22 38 10"/></svg>`,
  lotus: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2"><path d="M24 40c-9-2-14-9-14-16 6 0 11 3 14 8 3-5 8-8 14-8 0 7-5 14-14 16z"/><path d="M24 40V20"/><path d="M24 20c-5-3-6-9-4-14 5 2 8 7 8 12M24 20c5-3 6-9 4-14-5 2-8 7-8 12"/></svg>`,
  root: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2"><path d="M24 6c4 4 2 8 6 10s6-1 8 3-2 6 1 10-3 7-1 11"/><path d="M24 6c-4 4-2 8-6 10s-6-1-8 3 2 6-1 10 3 7 1 11" transform="scale(1,1)"/></svg>`,
  glass: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 8h20l-2.5 30a4 4 0 0 1-4 3.6h-7a4 4 0 0 1-4-3.6z"/><path d="M15.4 18h17.2M16.5 27h15"/></svg>`,
  blender: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 6h16l-1.5 22h-13z"/><path d="M15 28h18l-2 12a3 3 0 0 1-3 2.6H20a3 3 0 0 1-3-2.6z"/><path d="M18 12h12M17 17h14"/></svg>`,
  sandwich: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 22 24 10l17 12"/><path d="M9 22h30l-2 8a4 4 0 0 1-4 3H15a4 4 0 0 1-4-3z"/><path d="M15 33l1.5 5M24 33v5M33 33l-1.5 5"/></svg>`,
};

/* ===================== Categories ===================== */
const categories = ["all", "coffee", "tea", "juice", "smoothie", "food"];

/* ===================== Product data ===================== */
const products = [
  { id: "p1", icon: "cup", price: 2.50, category: "coffee",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=85",
    name: { en: "Khmer Iced Coffee", km: "កាហ្វេទឹកកកខ្មែរ" },
    desc: { en: "Dark-roast robusta over condensed milk and ice.", km: "កាហ្វេគៀមខ្មៅជាមួយទឹកដោះគោខាប់ និងទឹកកក។" } },
  { id: "p2", icon: "leaf", price: 1.80, category: "tea",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=85",
    name: { en: "Jasmine Tea", km: "តែម្លិះ" },
    desc: { en: "Whole-leaf jasmine, steeped light and floral.", km: "ស្លឹកតែម្លិះទាំងមូល ជក់ស្រាល ក្លិនផ្កា។" } },
  { id: "p3", icon: "cup", price: 3.20, category: "coffee",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=85",
    name: { en: "Palm Sugar Latte", km: "ឡាតតេស្ករត្នោត" },
    desc: { en: "Espresso, steamed milk, and Kampot palm sugar.", km: "កាហ្វេអេស្ប្រេស្សូ ទឹកដោះគោក្តៅ និងស្ករត្នោតកំពត។" } },
  { id: "p4", icon: "lotus", price: 2.00, category: "tea",
    image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=800&q=85",
    name: { en: "Lotus Root Tea", km: "តែឫសឈូក" },
    desc: { en: "Earthy lotus root simmered with rock sugar.", km: "ឫសឈូកដាំយឺតៗជាមួយស្ករសុីជ្រៅ។" } },
  { id: "p5", icon: "beans", price: 6.50, category: "coffee",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=85",
    name: { en: "Robusta Beans, 250g", km: "គ្រាប់កាហ្វេរូបូស្តា ២៥០ក្រាម" },
    desc: { en: "Whole beans from Mondulkiri highlands.", km: "គ្រាប់កាហ្វេទាំងមូលពីតំបន់មណ្ឌលគិរី។" } },
  { id: "p6", icon: "teapot", price: 2.80, category: "tea",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=85",
    name: { en: "Pandan Milk Tea", km: "តែទឹកដោះគោប៉ានដាន់" },
    desc: { en: "Fragrant pandan leaf brewed into creamy milk tea.", km: "ស្លឹកតើយប៉ានដាន់ក្រអូបលាយជាមួយតែទឹកដោះគោ។" } },
  { id: "p7", icon: "root", price: 2.40, category: "tea",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=85",
    name: { en: "Ginger Honey Brew", km: "ភេសជ្ជៈខ្ញីទឹកឃ្មុំ" },
    desc: { en: "Fresh ginger, honey, and a squeeze of lime.", km: "ខ្ញីស្រស់ ទឹកឃ្មុំ និងទឹកក្រូចថ្នមបន្តិច។" } },
  { id: "p8", icon: "leaf", price: 2.90, category: "tea",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=85",
    name: { en: "Cardamom Chai", km: "តែក្រវាញ់" },
    desc: { en: "Black tea spiced with cardamom and cinnamon.", km: "តែខ្មៅលាយគ្រឿងទេសក្រវាញ់ និងទុរេស៊ីនណាមុន។" } },

  { id: "p9", icon: "glass", price: 1.50, category: "juice",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=85",
    name: { en: "Fresh Sugarcane Juice", km: "ទឹកអំពៅ" },
    desc: { en: "Cold-pressed sugarcane with a hint of lime.", km: "ទឹកអំពៅសង្កត់ស្រស់ លាយក្រូចថ្នមបន្តិច។" } },
  { id: "p10", icon: "glass", price: 2.00, category: "juice",
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=800&q=85",
    name: { en: "Pineapple Juice", km: "ទឹកម្នាស់" },
    desc: { en: "Sweet-tart pineapple, pressed fresh daily.", km: "ទឹកម្នាស់ជូរផ្អែម សង្កត់ស្រស់រាល់ថ្ងៃ។" } },
  { id: "p11", icon: "glass", price: 1.80, category: "juice",
    image: "https://images.unsplash.com/photo-1563114773-84221bd62daa?auto=format&fit=crop&w=800&q=85",
    name: { en: "Watermelon Juice", km: "ទឹកឪឡឹក" },
    desc: { en: "Chilled watermelon, nothing added.", km: "ទឹកឪឡឹកត្រជាក់ គ្មានលាយបន្ថែម។" } },

  { id: "p12", icon: "blender", price: 2.60, category: "smoothie",
    image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=800&q=85",
    name: { en: "Mango Smoothie", km: "ស្មូតធីស្វាយ" },
    desc: { en: "Ripe mango blended thick and cold.", km: "ស្វាយទុំលាយក្រាស់ត្រជាក់។" } },
  { id: "p13", icon: "blender", price: 2.80, category: "smoothie",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=85",
    name: { en: "Avocado Smoothie", km: "ស្មូតធីអាវ៉ូកា" },
    desc: { en: "Creamy avocado with condensed milk.", km: "អាវ៉ូកាក្រែមជាមួយទឹកដោះគោខាប់។" } },
  { id: "p14", icon: "blender", price: 2.70, category: "smoothie",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=85",
    name: { en: "Dragon Fruit Smoothie", km: "ស្មូតធីស្រកានាគ" },
    desc: { en: "Bright dragon fruit blended with yogurt.", km: "ស្រកានាគលាយជាមួយទឹកដោះគោជូរ។" } },

  { id: "p15", icon: "sandwich", price: 1.50, category: "food",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=85",
    name: { en: "Banana Fritters", km: "នំចេកបំពង" },
    desc: { en: "Golden fried banana, crisp outside, soft inside.", km: "នំចេកបំពងក្រូបខាងក្រៅ ទន់ខាងក្នុង។" } },
  { id: "p16", icon: "sandwich", price: 3.50, category: "food",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=85",
    name: { en: "Kroeung Toast", km: "នំបុ័ងគ្រឿង" },
    desc: { en: "Sourdough toast with lemongrass kroeung and egg.", km: "នំបុ័ងអាំងលាយគ្រឿងស្លឹកគ្រៃ និងស៊ុត។" } },
  { id: "p17", icon: "sandwich", price: 2.20, category: "food",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=85",
    name: { en: "Grilled Pork Baguette", km: "នំបុ័ងសាច់ជ្រូកអាំង" },
    desc: { en: "Warm baguette, grilled pork, pickled veg.", km: "នំបុ័ងក្តៅជាមួយសាច់ជ្រូកអាំង និងបន្លែជម្រក់។" } },

  { id: "p18", icon: "cup", price: 2.30, category: "coffee",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=85",
    name: { en: "Black Iced Coffee", km: "កាហ្វេទឹកកកខ្មៅ" },
    desc: { en: "Bold robusta over ice, no milk.", km: "កាហ្វេគៀមខ្មៅដាក់ទឹកកក គ្មានទឹកដោះគោ។" } },
  { id: "p19", icon: "cup", price: 3.00, category: "coffee",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=85",
    name: { en: "Coconut Coffee", km: "កាហ្វេដូង" },
    desc: { en: "Espresso blended with coconut cream.", km: "កាហ្វេអេស្ប្រេស្សូលាយជាមួយក្រែមដូង។" } },
  { id: "p20", icon: "cup", price: 2.00, category: "coffee",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=85",
    name: { en: "Espresso Shot", km: "អេស្ប្រេស្សូ" },
    desc: { en: "A short, concentrated shot of espresso.", km: "កាហ្វេអេស្ប្រេស្សូមួយសាំងខាប់ខ្លី។" } },
  { id: "p21", icon: "cup", price: 2.90, category: "coffee",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=85",
    name: { en: "Cappuccino", km: "កាពូជីណូ" },
    desc: { en: "Espresso topped with steamed milk foam.", km: "កាហ្វេអេស្ប្រេស្សូគ្របដោយពពុះទឹកដោះគោក្តៅ។" } },
  { id: "p22", icon: "cup", price: 3.10, category: "coffee",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=85",
    name: { en: "Caramel Macchiato", km: "ម៉ាគីយ៉ាតូការាមែល" },
    desc: { en: "Espresso marked with milk foam and caramel drizzle.", km: "កាហ្វេអេស្ប្រេស្សូជាមួយពពុះទឹកដោះគោ និងទឹកការាមែល។" } },
  { id: "p23", icon: "glass", price: 2.70, category: "coffee",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=85",
    name: { en: "Cold Brew", km: "កាហ្វេជ្រលក់ត្រជាក់" },
    desc: { en: "Steeped 18 hours, smooth and low-acid.", km: "ជ្រលក់អស់រយៈពេល១៨ម៉ោង រសជាតិម៉ត់ចត់។" } },
  { id: "p24", icon: "cup", price: 3.00, category: "coffee",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=85",
    name: { en: "Hazelnut Latte", km: "ឡាតតេហាហ្សែលណាត" },
    desc: { en: "Espresso and milk with roasted hazelnut syrup.", km: "កាហ្វេអេស្ប្រេស្សូនិងទឹកដោះគោលាយទឹកអាំងហាហ្សែលណាត។" } },
  { id: "p25", icon: "cup", price: 2.60, category: "coffee",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=85",
    name: { en: "Vietnamese Drip Coffee", km: "កាហ្វេសំណក់វៀតណាម" },
    desc: { en: "Slow-dripped through a phin filter over condensed milk.", km: "សំណក់យឺតៗតាមចំរោះលើទឹកដោះគោខាប់។" } },
  { id: "p26", icon: "cup", price: 3.00, category: "coffee",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=85",
    name: { en: "Mocha", km: "កាហ្វេម៉ូកា" },
    desc: { en: "Espresso, steamed milk, and dark chocolate.", km: "កាហ្វេអេស្ប្រេស្សូ ទឹកដោះគោក្តៅ និងសូកូឡាខ្មៅ។" } },

  { id: "p27", icon: "leaf", price: 1.90, category: "tea",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=85",
    name: { en: "Iced Black Tea", km: "តែខ្មៅទឹកកក" },
    desc: { en: "Strong black tea over ice, lightly sweetened.", km: "តែខ្មៅខាប់ដាក់ទឹកកក ផ្អែមស្រាល។" } },
  { id: "p28", icon: "leaf", price: 2.10, category: "tea",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=85",
    name: { en: "Peach Tea", km: "តែផែស" },
    desc: { en: "Black tea infused with sweet peach.", km: "តែខ្មៅលាយផែសផ្អែម។" } },
  { id: "p29", icon: "leaf", price: 1.80, category: "tea",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=85",
    name: { en: "Green Tea", km: "តែបៃតង" },
    desc: { en: "Steamed green tea, light and grassy.", km: "តែបៃតងចំហុយ រសជាតិស្រាលៗ។" } },
  { id: "p30", icon: "leaf", price: 2.20, category: "tea",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=85",
    name: { en: "Oolong Tea", km: "តែអូឡុង" },
    desc: { en: "Semi-oxidized tea with a smooth, floral finish.", km: "តែកម្រិតបំបែកកន្លះ រសជាតិម៉ត់ចត់ក្លិនផ្កា។" } },
  { id: "p31", icon: "teapot", price: 2.60, category: "tea",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=85",
    name: { en: "Thai Milk Tea", km: "តែទឹកដោះគោថៃ" },
    desc: { en: "Spiced black tea with condensed and evaporated milk.", km: "តែខ្មៅលាយគ្រឿងទេស ជាមួយទឹកដោះគោខាប់ និងទឹកដោះគោមួន។" } },
  { id: "p32", icon: "leaf", price: 2.00, category: "tea",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=85",
    name: { en: "Honey Lemon Tea", km: "តែក្រូចឆ្មាទឹកឃ្មុំ" },
    desc: { en: "Black tea with fresh lemon and honey.", km: "តែខ្មៅជាមួយក្រូចឆ្មារស្រស់ និងទឹកឃ្មុំ។" } },
  { id: "p33", icon: "lotus", price: 2.30, category: "tea",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=85",
    name: { en: "Rose Tea", km: "តែផ្កាកុលាប" },
    desc: { en: "Black tea steeped with dried rose petals.", km: "តែខ្មៅជ្រលក់ជាមួយផ្កាកុលាបស្ងួត។" } },

  { id: "p34", icon: "glass", price: 1.60, category: "juice",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=85",
    name: { en: "Orange Juice", km: "ទឹកក្រូច" },
    desc: { en: "Fresh-squeezed orange, no added sugar.", km: "ទឹកក្រូចច្របាច់ស្រស់ គ្មានស្ករបន្ថែម។" } },
  { id: "p35", icon: "glass", price: 1.50, category: "juice",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=85",
    name: { en: "Lime Juice", km: "ទឹកក្រូចឆ្មារ" },
    desc: { en: "Tart lime juice over ice.", km: "ទឹកក្រូចឆ្មារជូរដាក់ទឹកកក។" } },
  { id: "p36", icon: "glass", price: 1.90, category: "juice",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=85",
    name: { en: "Carrot Juice", km: "ទឹកការ៉ុត" },
    desc: { en: "Cold-pressed carrot, naturally sweet.", km: "ទឹកការ៉ុតសង្កត់ស្រស់ ផ្អែមធម្មជាតិ។" } },
  { id: "p37", icon: "glass", price: 2.00, category: "juice",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=85",
    name: { en: "Green Apple Juice", km: "ទឹកផ្លែប៉ោមបៃតង" },
    desc: { en: "Crisp green apple, pressed fresh.", km: "ទឹកផ្លែប៉ោមបៃតងសង្កត់ស្រស់។" } },
  { id: "p38", icon: "glass", price: 2.20, category: "juice",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=85",
    name: { en: "Passion Fruit Juice", km: "ទឹកម៉ារ៉ាគូយ៉ា" },
    desc: { en: "Tangy passion fruit over ice.", km: "ទឹកម៉ារ៉ាគូយ៉ាជូរផ្អែមដាក់ទឹកកក។" } },
  { id: "p39", icon: "glass", price: 1.70, category: "juice",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=85",
    name: { en: "Coconut Water", km: "ទឹកដូង" },
    desc: { en: "Straight from the young coconut.", km: "ទឹកដូងស្រស់ចេញពីផ្លែដូងក្មេង។" } },
  { id: "p40", icon: "glass", price: 1.80, category: "juice",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=85",
    name: { en: "Cucumber Lime Juice", km: "ទឹកត្រសក់ក្រូចឆ្មារ" },
    desc: { en: "Cooling cucumber with a squeeze of lime.", km: "ទឹកត្រសក់ត្រជាក់លាយក្រូចឆ្មារបន្តិច។" } },

  { id: "p41", icon: "blender", price: 2.60, category: "smoothie",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=85",
    name: { en: "Strawberry Smoothie", km: "ស្មូតធីស្ត្របឺរី" },
    desc: { en: "Blended strawberry with yogurt.", km: "ស្ត្របឺរីលាយជាមួយទឹកដោះគោជូរ។" } },
  { id: "p42", icon: "blender", price: 2.40, category: "smoothie",
    image: "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?auto=format&fit=crop&w=800&q=85",
    name: { en: "Banana Smoothie", km: "ស្មូតធីចេក" },
    desc: { en: "Ripe banana blended thick with milk.", km: "ចេកទុំលាយក្រាស់ជាមួយទឹកដោះគោ។" } },
  { id: "p43", icon: "blender", price: 2.90, category: "smoothie",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=85",
    name: { en: "Mixed Berry Smoothie", km: "ស្មូតធីផ្លែបឺរីលាយ" },
    desc: { en: "Strawberry, blueberry, and raspberry blended.", km: "ស្ត្របឺរី ប្លូបឺរី និងរាស្បឺរីលាយចូលគ្នា។" } },
  { id: "p44", icon: "blender", price: 2.60, category: "smoothie",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=85",
    name: { en: "Taro Smoothie", km: "ស្មូតធីត្រាវ" },
    desc: { en: "Creamy taro root blended with milk.", km: "ត្រាវក្រែមលាយជាមួយទឹកដោះគោ។" } },
  { id: "p45", icon: "blender", price: 2.50, category: "smoothie",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=85",
    name: { en: "Coconut Smoothie", km: "ស្មូតធីដូង" },
    desc: { en: "Young coconut meat blended with coconut water.", km: "សាច់ដូងក្មេងលាយជាមួយទឹកដូង។" } },

  { id: "p46", icon: "sandwich", price: 2.00, category: "food",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=85",
    name: { en: "Fresh Spring Rolls", km: "ណែមស្រស់" },
    desc: { en: "Rice paper rolls with herbs and shrimp.", km: "ណែមប័ន្សិលចំណិលបន្លែ និងបង្គា។" } },
  { id: "p47", icon: "sandwich", price: 2.80, category: "food",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=85",
    name: { en: "Grilled Chicken Skewers", km: "សាច់មាន់អាំងញញួរ" },
    desc: { en: "Marinated chicken grilled over charcoal.", km: "សាច់មាន់ជ្រលក់គ្រឿងអាំងលើអង្រួន។" } },
  { id: "p48", icon: "sandwich", price: 1.90, category: "food",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=85",
    name: { en: "Chicken Curry Puff", km: "នំខារីមាន់" },
    desc: { en: "Flaky pastry filled with curried chicken.", km: "នំដុតបំពងបំពេញដោយសាច់មាន់ខារី។" } },
  { id: "p49", icon: "sandwich", price: 2.50, category: "food",
    image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=800&q=85",
    name: { en: "Fruit Plate", km: "ចានផ្លែឈើ" },
    desc: { en: "A plate of seasonal Cambodian fruit.", km: "ចានផ្លែឈើតាមរដូវរបស់កម្ពុជា។" } },
  { id: "p50", icon: "sandwich", price: 2.10, category: "food",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=85",
    name: { en: "Butter Croissant", km: "ក្រូវេសង់ប៊ឺ" },
    desc: { en: "Flaky, buttery, baked fresh daily.", km: "នំក្រូវេសង់ប៊ឺដុតស្រស់រាល់ថ្ងៃ។" } },
];

/* ===================== Team data ===================== */
const team = [
  {
    name: { en: "Ry Visan", km: "រ៉ី វិសាន" },
    role: { en: "Professor", km: "សាស្ត្រាចារ្យ" },
    image: "/img/Ry Visan.jpg",
    telegram: "https://t.me/visanry",
    email: "visantry20@gmail.com",
    phone: "+855 96 675 0034",
    facebook: "https://web.facebook.com/profile.php?id=100095215599737"
  },
  {
    name: { en: "Thorn Monyudom", km: "ថន មុន្នីឧត្ដម" },
    role: { en: "Student", km: "និស្សិត" },
    image: "/img/dom.PNG",
    telegram: "https://t.me/monyudomthorn",
    email: "thorn.monyudom.2003@gmail.com",
    phone: "+855 88 200 1114",
    facebook: "https://web.facebook.com/profile.php?id=100024596649019"
  }
];

/* ===================== State (in-memory only) ===================== */
let state = {
  lang: "en",
  view: "all",      // 'all' | 'favorites'
  category: "all",  // 'all' | 'coffee' | 'tea' | 'juice' | 'smoothie' | 'food'
  cart: {},         // id -> qty
  favorites: new Set(),
  currentUser: null, // { name, email } | null
  invoiceLang: "en", // language shown inside the invoice modal (independent of site lang)
  invoice: null,      // snapshot generated at checkout: { number, date, items }
};

// Demo-only in-memory "database" of registered users. Resets on reload.
let users = [];

/* ===================== DOM refs ===================== */
const categoryBar = document.getElementById("categoryBar");
const productGrid = document.getElementById("productGrid");
const emptyState = document.getElementById("emptyState");
const menuCount = document.getElementById("menuCount");
const viewTitle = document.getElementById("viewTitle");
const cartCount = document.getElementById("cartCount");
const favCountBadge = document.getElementById("favCountBadge");
const cartDrawer = document.getElementById("cartDrawer");
const drawerOverlay = document.getElementById("drawerOverlay");
const drawerItems = document.getElementById("drawerItems");
const drawerEmpty = document.getElementById("drawerEmpty");
const drawerFooter = document.getElementById("drawerFooter");
const cartTotal = document.getElementById("cartTotal");
const cartItemCount = document.getElementById("cartItemCount");
const toast = document.getElementById("toast");

const teamGrid = document.getElementById("teamGrid");
const accountBtn = document.getElementById("accountBtn");
const accountBtnLabel = document.getElementById("accountBtnLabel");
const accountDropdown = document.getElementById("accountDropdown");
const logoutBtn = document.getElementById("logoutBtn");

// The modal shell (overlay, box, tabs) is static in index.html.
// The actual login/signup/forgot forms are fetched on demand from the auth/ folder — see loadAuthForm() below.
const authOverlay = document.getElementById("authOverlay");
const authModal = document.getElementById("authModal");
const authClose = document.getElementById("authClose");
const authTabs = document.getElementById("authTabs");
const authFormContainer = document.getElementById("authFormContainer");
let authFormCache = {}; // view -> fetched HTML, so we don't re-fetch on every tab switch

const contactForm = document.getElementById("contactForm");
const contactError = document.getElementById("contactError");

const viewOverlay = document.getElementById("viewOverlay");
const viewModal = document.getElementById("viewModal");
const viewClose = document.getElementById("viewClose");
const viewIcon = document.getElementById("viewIcon");
const viewCategory = document.getElementById("viewCategory");
const viewName = document.getElementById("viewName");
const viewNameKm = document.getElementById("viewNameKm");
const viewDesc = document.getElementById("viewDesc");
const viewPrice = document.getElementById("viewPrice");
const viewQtyVal = document.getElementById("viewQtyVal");
const viewQtyDec = document.getElementById("viewQtyDec");
const viewQtyInc = document.getElementById("viewQtyInc");
const viewAddBtn = document.getElementById("viewAddBtn");
const viewFavBtn = document.getElementById("viewFavBtn");

const invoiceOverlay = document.getElementById("invoiceOverlay");
const invoiceModal = document.getElementById("invoiceModal");
const invoiceClose = document.getElementById("invoiceClose");
const invoiceLangToggle = document.getElementById("invoiceLangToggle");
const invoiceNumberEl = document.getElementById("invoiceNumber");
const invoiceDateEl = document.getElementById("invoiceDate");
const invoiceCustomerEl = document.getElementById("invoiceCustomer");
const invoiceSheetEl = document.getElementById("invoiceSheet");
const invoiceItemsBody = document.getElementById("invoiceItemsBody");
const invoiceColItem = document.getElementById("invoiceColItem");
const invoiceColQty = document.getElementById("invoiceColQty");
const invoiceColPrice = document.getElementById("invoiceColPrice");
const invoiceColSubtotal = document.getElementById("invoiceColSubtotal");
const invoiceSubtotalEl = document.getElementById("invoiceSubtotal");
const invoiceVatEl = document.getElementById("invoiceVat");
const invoiceTotalEl = document.getElementById("invoiceTotal");
const invoicePrintBtn = document.getElementById("invoicePrintBtn");
const invoiceConfirmBtn = document.getElementById("invoiceConfirmBtn");

/* ===================== i18n helpers ===================== */
function t(key, ...args) {
  const entry = translations[state.lang][key];
  return typeof entry === "function" ? entry(...args) : entry;
}

// Same as t(), but reads from the invoice's own language toggle instead of
// the site-wide language, so the invoice can be viewed in EN or KM
// independently of whatever language the rest of the page is in.
function ti(key, ...args) {
  const entry = translations[state.invoiceLang][key];
  return typeof entry === "function" ? entry(...args) : entry;
}

function applyStaticTranslations() {
  document.documentElement.lang = state.lang;
  document.body.classList.toggle("km-active", state.lang === "km");
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[state.lang][key] !== undefined) {
      el.textContent = t(key);
    }
  });
  viewTitle.textContent = state.view === "all" ? t("menu_title") : t("menu_title_fav");
}

/* ===================== Rendering ===================== */
function formatPrice(n) {
  return `$${n.toFixed(2)}`;
}

function renderCategoryBar() {
  categoryBar.hidden = state.view === "favorites";
  categoryBar.innerHTML = categories.map((cat) => {
    const isActive = state.category === cat;
    const icon = cat === "all" ? "" : icons[
      cat === "coffee" ? "cup" :
      cat === "tea" ? "leaf" :
      cat === "juice" ? "glass" :
      cat === "smoothie" ? "blender" : "sandwich"
    ];
    return `
      <button class="category-chip ${isActive ? "is-active" : ""}" data-category="${cat}">
        ${icon}<span>${t("category_" + cat)}</span>
      </button>`;
  }).join("");
}

function renderProducts() {
  let list = state.view === "all" ? products : products.filter((p) => state.favorites.has(p.id));
  if (state.view === "all" && state.category !== "all") {
    list = list.filter((p) => p.category === state.category);
  }

  productGrid.hidden = list.length === 0 && state.view === "favorites";
  emptyState.hidden = !(list.length === 0 && state.view === "favorites");

  menuCount.textContent = t("items_count", products.length === list.length ? products.length : list.length);

  productGrid.innerHTML = list.map((p) => {
    const isFav = state.favorites.has(p.id);
    const qty = state.cart[p.id] || 0;
    return `
      <article class="product-card" data-id="${p.id}">
        <div class="card-top">
          <div class="card-icon"><img class="product-image" src="${p.image}" alt="${p.name.en}" loading="lazy"></div>
          <button class="fav-btn ${isFav ? "is-fav" : ""}" data-action="fav" aria-label="Toggle favorite" aria-pressed="${isFav}">
            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" fill="${isFav ? "currentColor" : "none"}"><path d="M12 20.5s-7.5-4.7-10-9.4C0.3 7.6 2 4 5.6 4c2.1 0 3.7 1.2 4.6 2.7C11.1 5.2 12.7 4 14.8 4 18.4 4 20 7.6 20 11.1c-2.5 4.7-8 9.4-8 9.4z"/></svg>
          </button>
        </div>
        <div class="card-body">
          <p class="card-name-en">${p.name.en}</p>
          <p class="card-name-km">${p.name.km}</p>
          <p class="card-desc">${state.lang === "en" ? p.desc.en : p.desc.km}</p>
        </div>
        <div class="card-bottom">
          <span class="card-price">${formatPrice(p.price)}</span>
          <div class="card-buttons">
            <button class="view-btn" data-action="view">${t("view_product")}</button>
            <button class="add-btn ${qty > 0 ? "is-added" : ""}" data-action="add">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M12 5v14M5 12h14"/></svg>
              ${qty > 0 ? `${t("added")} · ${qty}` : t("add_to_cart")}
            </button>
          </div>
        </div>
      </article>`;
  }).join("");
}

function totalCartQty() {
  return Object.values(state.cart).reduce((a, b) => a + b, 0);
}

function renderCartBadges() {
  cartCount.textContent = totalCartQty();
  favCountBadge.textContent = state.favorites.size;
}

function renderDrawer() {
  const entries = Object.entries(state.cart).filter(([, qty]) => qty > 0);
  drawerEmpty.hidden = entries.length > 0;
  drawerFooter.style.display = entries.length > 0 ? "block" : "none";

  drawerItems.innerHTML = entries.map(([id, qty]) => {
    const p = products.find((x) => x.id === id);
    const name = state.lang === "en" ? p.name.en : p.name.km;
    return `
      <div class="drawer-item" data-id="${id}">
        <div class="drawer-item-icon">
          <img class="drawer-product-image" src="${p.image}" alt="${p.name.en}" loading="lazy">
        </div>
        <div class="drawer-item-info">
          <p class="drawer-item-name">${name}</p>
          <p class="drawer-item-price">${formatPrice(p.price)} × ${qty}</p>
          <p class="drawer-item-subtotal">${formatPrice(p.price * qty)}</p>
        </div>
        <div class="qty-controls">
          <button class="qty-btn" data-action="dec">−</button>
          <span class="qty-val">${qty}</span>
          <button class="qty-btn" data-action="inc">+</button>
          <button class="remove-btn" data-action="remove" aria-label="Remove item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 5l14 14M19 5L5 19"/></svg>
          </button>
        </div>
      </div>`;
  }).join("");

  const total = entries.reduce((sum, [id, qty]) => {
    const p = products.find((x) => x.id === id);
    return sum + p.price * qty;
  }, 0);
  const totalItems = entries.reduce((sum, [, qty]) => sum + qty, 0);

  if (cartItemCount) {
    cartItemCount.textContent = t("items_count", totalItems);
  }
  cartTotal.textContent = formatPrice(total);
}

function renderTeam() {
  teamGrid.innerHTML = team.map((member) => `
    <div class="team-card">

      <div class="team-avatar">
        <img 
          src="${member.image}" 
          alt="${member.name.en}" 
          class="team-profile-image"
          loading="lazy"
        >
      </div>

      <p class="team-name">${member.name.en}</p>
      <p class="team-name-km">${member.name.km}</p>

      <p class="team-role">
        ${state.lang === "en" ? member.role.en : member.role.km}
      </p>

      <div class="team-contact">

        <!-- Telegram -->
        <a href="${member.telegram}" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M21.5 3.5 2.8 10.7c-1.3.5-1.3 1.2-.2 1.5l4.8 1.5 1.8 5.8c.2.6.4.6.8.6.3 0 .5-.1.7-.3l2.3-2.2 4.8 3.5c.9.5 1.5.2 1.7-.8l3.2-15.1c.3-1.3-.5-1.9-1.7-1.2ZM8.1 13.3l10.8-6.8c.5-.3 1-.1.6.2l-8.8 7.9-.3 3.2-1.4-4.5-3.5-1.1c-.8-.2-.8-.6.1-.9Z"/>
          </svg>
          <span>Telegram</span>
        </a>

        <!-- Email -->
        <a href="mailto:${member.email}" aria-label="Email">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"/>
          </svg>
          <span>${member.email}</span>
        </a>

        <!-- Phone -->
        <a href="tel:${member.phone}" aria-label="Phone">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.6 2h3.1c.5 0 .9.3 1 .8l1.1 4.2c.1.4 0 .8-.3 1.1L9.7 9.9c1.2 2.4 3.1 4.3 5.5 5.5l1.8-1.8c.3-.3.7-.4 1.1-.3l4.2 1.1c.5.1.8.5.8 1V18.5c0 .8-.7 1.5-1.5 1.5C10.2 20 4 13.8 4 6.5 4 5.7 4.7 5 5.5 5H6.6V2Z"/>
          </svg>
          <span>${member.phone}</span>
        </a>

        <!-- Facebook -->
        <a href="${member.facebook}" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H8v3h2.1v8h3.4Z"/>
          </svg>
          <span>Facebook</span>
        </a>

      </div>
    </div>
  `).join("");
}

function renderAccount() {
  if (state.currentUser) {
    accountBtnLabel.textContent = t("account_hi", state.currentUser.name.split(" ")[0]);
  } else {
    accountBtnLabel.textContent = t("account_login");
  }
}

function renderAll() {
  applyStaticTranslations();
  renderCategoryBar();
  renderProducts();
  renderCartBadges();
  renderDrawer();
  renderTeam();
  renderAccount();
  if (viewModalProductId) renderViewModal();
}

/* ===================== Toast ===================== */
let toastTimer = null;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

/* ===================== Actions ===================== */
function addToCart(id) {
  state.cart[id] = (state.cart[id] || 0) + 1;
  const p = products.find((x) => x.id === id);
  showToast(t("toast_added", state.lang === "en" ? p.name.en : p.name.km));
  renderAll();
}

function changeQty(id, delta) {
  const next = (state.cart[id] || 0) + delta;
  if (next <= 0) {
    delete state.cart[id];
  } else {
    state.cart[id] = next;
  }
  renderAll();
}

function removeFromCart(id) {
  const p = products.find((x) => x.id === id);
  delete state.cart[id];
  showToast(t("toast_removed", state.lang === "en" ? p.name.en : p.name.km));
  renderAll();
}

function toggleFavorite(id) {
  const p = products.find((x) => x.id === id);
  const name = state.lang === "en" ? p.name.en : p.name.km;
  if (state.favorites.has(id)) {
    state.favorites.delete(id);
    showToast(t("toast_fav_removed", name));
  } else {
    state.favorites.add(id);
    showToast(t("toast_fav_added", name));
  }
  renderAll();
}

function openDrawer() {
  cartDrawer.classList.add("is-open");
  drawerOverlay.classList.add("is-open");
  cartDrawer.setAttribute("aria-hidden", "false");
}
function closeDrawer() {
  cartDrawer.classList.remove("is-open");
  drawerOverlay.classList.remove("is-open");
  cartDrawer.setAttribute("aria-hidden", "true");
}

/* ----- Auth modal: fetch the right form from auth/ on demand ----- */
const authFileMap = {
  login: "auth/login.html",
  signup: "auth/signup.html",
  forgot: "auth/forgotpassword.html",
};

async function loadAuthForm(view) {
  if (!authFormCache[view]) {
    try {
      const res = await fetch(authFileMap[view]);
      authFormCache[view] = await res.text();
    } catch (err) {
      console.error(`Could not load ${authFileMap[view]}`, err);
      authFormCache[view] = `<p class="field-error">Could not load this form.</p>`;
    }
  }
  authFormContainer.innerHTML = authFormCache[view];
  applyStaticTranslations(); // translate the freshly injected form
  wireAuthForm(view);
}

function wireAuthForm(view) {
  // Re-attach the "forgot password?" / "back to log in" links inside whichever form just loaded
  authFormContainer.querySelectorAll(".auth-link[data-auth-view]").forEach((el) => {
    el.addEventListener("click", () => switchAuthView(el.dataset.authView));
  });

  if (view === "login") {
    const form = document.getElementById("loginForm");
    const errorEl = document.getElementById("loginError");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      errorEl.hidden = true;
      const email = document.getElementById("loginEmail").value.trim();
      const password = document.getElementById("loginPassword").value;

      if (!email || !password) return showAuthError(errorEl, t("auth_error_fields"));
      if (!isValidEmail(email)) return showAuthError(errorEl, t("auth_error_email"));

      const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
      if (!user) return showAuthError(errorEl, t("auth_error_invalid_login"));

      state.currentUser = { name: user.name, email: user.email };
      closeAuthModal();
      showToast(t("auth_success_login", user.name.split(" ")[0]));
      renderAll();
    });
  } else if (view === "signup") {
    const form = document.getElementById("signupForm");
    const errorEl = document.getElementById("signupError");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      errorEl.hidden = true;
      const name = document.getElementById("signupName").value.trim();
      const email = document.getElementById("signupEmail").value.trim();
      const password = document.getElementById("signupPassword").value;
      const confirm = document.getElementById("signupConfirm").value;

      if (!name || !email || !password || !confirm) return showAuthError(errorEl, t("auth_error_fields"));
      if (!isValidEmail(email)) return showAuthError(errorEl, t("auth_error_email"));
      if (password.length < 6) return showAuthError(errorEl, t("auth_error_password_length"));
      if (password !== confirm) return showAuthError(errorEl, t("auth_error_password_match"));
      if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
        return showAuthError(errorEl, t("auth_error_email_taken"));
      }

      users.push({ name, email, password });
      state.currentUser = { name, email };
      closeAuthModal();
      showToast(t("auth_success_signup", name.split(" ")[0]));
      renderAll();
    });
  } else if (view === "forgot") {
    const form = document.getElementById("forgotForm");
    const errorEl = document.getElementById("forgotError");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      errorEl.hidden = true;
      const email = document.getElementById("forgotEmail").value.trim();

      if (!email) return showAuthError(errorEl, t("auth_error_fields"));
      if (!isValidEmail(email)) return showAuthError(errorEl, t("auth_error_email"));

      closeAuthModal();
      showToast(t("auth_success_forgot"));
    });
  }
}

function switchAuthView(view) {
  document.querySelectorAll(".auth-tab").forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.authView === view);
  });
  authTabs.hidden = view === "forgot";
  loadAuthForm(view);
}

function openAuthModal(view = "login") {
  switchAuthView(view);
  authOverlay.classList.add("is-open");
  authModal.classList.add("is-open");
  authModal.setAttribute("aria-hidden", "false");
}
function closeAuthModal() {
  authOverlay.classList.remove("is-open");
  authModal.classList.remove("is-open");
  authModal.setAttribute("aria-hidden", "true");
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function showAuthError(el, message) {
  el.textContent = message;
  el.hidden = false;
}

/* ----- Product view modal ----- */
let viewModalProductId = null;
let viewModalQty = 1;

function renderViewModal() {
  const p = products.find((x) => x.id === viewModalProductId);
  if (!p) return;
  viewIcon.innerHTML = `<img class="view-product-image" src="${p.image}" alt="${p.name.en}">`;
  viewCategory.textContent = t("category_" + p.category);
  viewName.textContent = p.name.en;
  viewNameKm.textContent = p.name.km;
  viewDesc.textContent = state.lang === "en" ? p.desc.en : p.desc.km;
  viewPrice.textContent = formatPrice(p.price);
  viewQtyVal.textContent = viewModalQty;
  const isFav = state.favorites.has(p.id);
  viewFavBtn.classList.toggle("is-fav", isFav);
  viewFavBtn.querySelector("svg").setAttribute("fill", isFav ? "currentColor" : "none");
}

function openViewModal(id) {
  viewModalProductId = id;
  viewModalQty = 1;
  renderViewModal();
  viewOverlay.classList.add("is-open");
  viewModal.classList.add("is-open");
  viewModal.setAttribute("aria-hidden", "false");
}

function closeViewModal() {
  viewOverlay.classList.remove("is-open");
  viewModal.classList.remove("is-open");
  viewModal.setAttribute("aria-hidden", "true");
}

/* ----- Invoice modal ----- */
const VAT_RATE = 0.10; // 10% VAT, standard rate in Cambodia

function generateInvoiceNumber() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  const rand = String(Math.floor(1000 + Math.random() * 9000));
  return `ARM-${y}${m}${d}-${rand}`;
}

function formatInvoiceDate(date, lang) {
  return date.toLocaleString(lang === "km" ? "km-KH" : "en-US", {
    year: "numeric", month: "short", day: "numeric",
    hour: "2-digit", minute: "2-digit",
  });
}

function buildInvoiceSnapshot() {
  const entries = Object.entries(state.cart).filter(([, qty]) => qty > 0);
  const items = entries.map(([id, qty]) => {
    const p = products.find((x) => x.id === id);
    return { id, name: p.name, price: p.price, qty, lineTotal: p.price * qty };
  });
  const subtotal = items.reduce((sum, item) => sum + item.lineTotal, 0);
  const vat = subtotal * VAT_RATE;
  return {
    number: generateInvoiceNumber(),
    date: new Date(),
    items,
    subtotal,
    vat,
    total: subtotal + vat,
  };
}

function renderInvoice() {
  if (!state.invoice) return;
  const inv = state.invoice;

  document.querySelectorAll(".invoice-lang-opt").forEach((el) => {
    el.classList.toggle("is-active", el.dataset.lang === state.invoiceLang);
  });

  document.querySelectorAll("#invoiceModal [data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[state.invoiceLang][key] !== undefined) {
      el.textContent = ti(key);
    }
  });

  invoiceNumberEl.textContent = inv.number;
  invoiceDateEl.textContent = formatInvoiceDate(inv.date, state.invoiceLang);
  invoiceCustomerEl.textContent = state.currentUser
    ? `${state.currentUser.name}`
    : ti("invoice_guest");

  invoiceItemsBody.innerHTML = inv.items.map((item) => {
    const name = state.invoiceLang === "en" ? item.name.en : item.name.km;
    return `
      <tr>
        <td class="invoice-cell-item">${name}</td>
        <td class="invoice-cell-qty">${item.qty}</td>
        <td class="invoice-cell-price">${formatPrice(item.price)}</td>
        <td class="invoice-cell-subtotal">${formatPrice(item.lineTotal)}</td>
      </tr>`;
  }).join("");

  invoiceSubtotalEl.textContent = formatPrice(inv.subtotal);
  invoiceVatEl.textContent = formatPrice(inv.vat);
  invoiceTotalEl.textContent = formatPrice(inv.total);
}

function openInvoiceModal() {
  if (totalCartQty() === 0) {
    showToast(t("invoice_empty"));
    return;
  }
  state.invoiceLang = state.lang;
  state.invoice = buildInvoiceSnapshot();
  renderInvoice();
  closeDrawer();
  invoiceOverlay.classList.add("is-open");
  invoiceModal.classList.add("is-open");
  invoiceModal.setAttribute("aria-hidden", "false");
}

function closeInvoiceModal() {
  invoiceOverlay.classList.remove("is-open");
  invoiceModal.classList.remove("is-open");
  invoiceModal.setAttribute("aria-hidden", "true");
}

function printInvoice() {
  if (!invoiceSheetEl) return;

  const printWindow = window.open("", "_blank", "width=650,height=800");
  if (!printWindow) {
    // Pop-up blocked — fall back to printing the current page.
    window.print();
    return;
  }

  const dir = state.invoiceLang === "km" ? "km" : "en";
  const title = state.invoice ? state.invoice.number : "Invoice";

  // Everything below is inlined in a single <style> tag (no external
  // stylesheet or font link) so there's nothing to fetch and nothing to wait
  // on — the window can be printed immediately after it's written.
  printWindow.document.write(`<!DOCTYPE html>
<html lang="${dir}">
<head>
<meta charset="UTF-8">
<title>${title} — ARÔM</title>
<style>
  body { margin: 0; padding: 30px; font-family: Georgia, "Times New Roman", serif; color: #2a1e16; }
  .invoice-brand { text-align: center; margin-bottom: 6px; }
  .invoice-brand .logo-en { font-size: 1.3rem; font-weight: 700; }
  .invoice-brand .logo-km { color: #6b5c4c; margin-left: 6px; }
  .invoice-tagline { margin: 2px 0 0; font-size: .78rem; letter-spacing: .06em; text-transform: uppercase; color: #6b5c4c; }
  .invoice-heading { text-align: center; font-size: 1.15rem; font-weight: 700; color: #b5563c; margin: 14px 0 18px; padding-top: 14px; border-top: 1px dashed #ddd; }
  .invoice-meta { font-size: .86rem; margin-bottom: 18px; }
  .invoice-meta-row { display: flex; justify-content: space-between; gap: 12px; color: #6b5c4c; padding: 2px 0; }
  .invoice-meta-row span:last-child { color: #2a1e16; font-weight: 700; text-align: right; }
  .invoice-table { width: 100%; border-collapse: collapse; font-size: .86rem; margin-bottom: 16px; }
  .invoice-table th { text-align: left; font-size: .7rem; letter-spacing: .08em; text-transform: uppercase; color: #6b5c4c; border-bottom: 1px solid #ccc; padding: 0 4px 8px; }
  .invoice-table th:not(:first-child), .invoice-table td:not(:first-child) { text-align: right; }
  .invoice-table td { padding: 8px 4px; border-bottom: 1px solid #eee; }
  .invoice-summary { margin-left: auto; width: 60%; min-width: 200px; font-size: .88rem; margin-bottom: 18px; }
  .invoice-summary-row { display: flex; justify-content: space-between; color: #6b5c4c; padding: 2px 0; }
  .invoice-summary-total { border-top: 1px solid #ccc; margin-top: 4px; padding-top: 8px; font-size: 1.1rem; font-weight: 700; color: #b5563c; }
  .invoice-thanks { text-align: center; font-size: 1rem; font-weight: 700; margin: 0 0 4px; }
  .invoice-footer-note { text-align: center; font-size: .74rem; color: #6b5c4c; margin: 0; }
  @page { margin: 16mm; }
</style>
</head>
<body>${invoiceSheetEl.innerHTML}</body>
</html>`);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
}

/* ===================== Event wiring ===================== */
document.getElementById("cartBtn").addEventListener("click", openDrawer);
document.getElementById("drawerClose").addEventListener("click", closeDrawer);
drawerOverlay.addEventListener("click", closeDrawer);

document.getElementById("checkoutBtn").addEventListener("click", openInvoiceModal);

invoiceClose.addEventListener("click", closeInvoiceModal);
invoiceOverlay.addEventListener("click", closeInvoiceModal);

invoiceLangToggle.addEventListener("click", (e) => {
  const opt = e.target.closest(".invoice-lang-opt");
  if (!opt) return;
  state.invoiceLang = opt.dataset.lang;
  renderInvoice();
});

invoicePrintBtn.addEventListener("click", printInvoice);

invoiceConfirmBtn.addEventListener("click", () => {
  state.cart = {};
  state.invoice = null;
  closeInvoiceModal();
  showToast(t("toast_order_placed"));
  renderAll();
});

document.querySelectorAll(".nav-tab").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".nav-tab").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    state.view = btn.dataset.view;
    renderAll();
  });
});

categoryBar.addEventListener("click", (e) => {
  const chip = e.target.closest(".category-chip");
  if (!chip) return;
  state.category = chip.dataset.category;
  renderAll();
});

document.getElementById("langToggle").addEventListener("click", () => {
  state.lang = state.lang === "en" ? "km" : "en";
  document.querySelectorAll(".lang-opt").forEach((el) => {
    el.classList.toggle("is-active", el.dataset.lang === state.lang);
  });
  renderAll();
});

productGrid.addEventListener("click", (e) => {
  const card = e.target.closest(".product-card");
  if (!card) return;
  const id = card.dataset.id;
  if (e.target.closest('[data-action="fav"]')) toggleFavorite(id);
  if (e.target.closest('[data-action="add"]')) addToCart(id);
  if (e.target.closest('[data-action="view"]')) openViewModal(id);
});

drawerItems.addEventListener("click", (e) => {
  const row = e.target.closest(".drawer-item");
  if (!row) return;
  const id = row.dataset.id;
  if (e.target.closest('[data-action="inc"]')) changeQty(id, 1);
  if (e.target.closest('[data-action="dec"]')) changeQty(id, -1);
  if (e.target.closest('[data-action="remove"]')) removeFromCart(id);
});

/* ----- Account button + dropdown ----- */
accountBtn.addEventListener("click", () => {
  if (state.currentUser) {
    accountDropdown.hidden = !accountDropdown.hidden;
  } else {
    openAuthModal("login");
  }
});
document.addEventListener("click", (e) => {
  if (!e.target.closest(".account-wrap")) accountDropdown.hidden = true;
});
logoutBtn.addEventListener("click", () => {
  state.currentUser = null;
  accountDropdown.hidden = true;
  showToast(t("auth_success_logout"));
  renderAll();
});

/* ----- Auth modal shell wiring (overlay, close button, tabs are static in index.html) ----- */
authClose.addEventListener("click", closeAuthModal);
authOverlay.addEventListener("click", closeAuthModal);
authTabs.addEventListener("click", (e) => {
  const tab = e.target.closest(".auth-tab");
  if (tab) switchAuthView(tab.dataset.authView);
});

/* ----- Product view modal wiring ----- */
viewClose.addEventListener("click", closeViewModal);
viewOverlay.addEventListener("click", closeViewModal);
viewQtyDec.addEventListener("click", () => {
  viewModalQty = Math.max(1, viewModalQty - 1);
  viewQtyVal.textContent = viewModalQty;
});
viewQtyInc.addEventListener("click", () => {
  viewModalQty += 1;
  viewQtyVal.textContent = viewModalQty;
});
viewAddBtn.addEventListener("click", () => {
  if (!viewModalProductId) return;
  const id = viewModalProductId;
  state.cart[id] = (state.cart[id] || 0) + viewModalQty;
  const p = products.find((x) => x.id === id);
  showToast(t("toast_added", state.lang === "en" ? p.name.en : p.name.km));
  closeViewModal();
  renderAll();
});
viewFavBtn.addEventListener("click", () => {
  if (!viewModalProductId) return;
  toggleFavorite(viewModalProductId);
  renderViewModal();
});

/* ----- Contact form ----- */
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  contactError.hidden = true;
  const name = document.getElementById("contactName").value.trim();
  const email = document.getElementById("contactEmail").value.trim();
  const message = document.getElementById("contactMessage").value.trim();

  if (!name || !email || !message) {
    contactError.textContent = t("contact_error_fields");
    contactError.hidden = false;
    return;
  }
  if (!isValidEmail(email)) {
    contactError.textContent = t("contact_error_email");
    contactError.hidden = false;
    return;
  }

  showToast(t("contact_success", name.split(" ")[0]));
  contactForm.reset();
});

/* ===================== Init ===================== */
loadAuthForm("login"); // warm the cache so the modal opens instantly on first click
renderAll();