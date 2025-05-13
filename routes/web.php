<?php

use App\Http\Controllers\AccountSetupController;
use App\Http\Controllers\ActivityController;
use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\Api\AuthUserController;
use App\Http\Controllers\Api\DocumentViewApiController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\DesignationController;
use App\Http\Controllers\EntityController;
use App\Http\Controllers\PermissionsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Api\UserApiController;
use App\Http\Controllers\BankDetailsController;
use App\Http\Controllers\BillingController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CommissionRuleController;
use App\Http\Controllers\CurrencyController;
use App\Http\Controllers\DealregisterController;
use App\Http\Controllers\DocumentAccessController;
use App\Http\Controllers\DocumentCategoryController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\EditorController;
use App\Http\Controllers\FaqcategoryController;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\FaqsubcategoryController;
use App\Http\Controllers\FaqtypeController;
use App\Http\Controllers\FramworkPriceController;
use App\Http\Controllers\MasterSettingController;
use App\Http\Controllers\NdaController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\OffersController;
use App\Http\Controllers\OrganizationController;
use App\Http\Controllers\PartnerController;
use App\Http\Controllers\QuotationController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\SalesController;
use App\Http\Controllers\SassPackageController;
use App\Http\Controllers\SmtpSettingController;
use App\Http\Controllers\SubMenuController;
use App\Http\Controllers\SupportteamManageController;
use App\Http\Controllers\SupportTicketsController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VelzonRoutesController;
use App\Models\SupportTickets;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::redirect('/', '/dashboard');


Route::get('/forgot-password', function () {
    return inertia('Auth/ForgotPassword');
})->middleware('guest')->name('password.request');

Route::get('/reset-password/{token}', function (string $token) {
    return inertia('Auth/ResetPassword', ['token' => $token]);
})->middleware('guest')->name('password.reset');



Route::middleware('auth')->group(function () {
    Route::get('/profile-edit', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile-update', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile-destroy', [ProfileController::class, 'destroy'])->name('profile.destroy');


    Route::controller(AdminDashboardController::class)->group(function () {
        // Route::get("/", "index");
        Route::get("/dashboard", 'index')->middleware('check.nda');
    });

    Route::resource('organization', OrganizationController::class);
    Route::resource('designation', DesignationController::class);
    Route::resource('department', DepartmentController::class);
    Route::resource('entity', EntityController::class);
    Route::resource('user', UserController::class);
    Route::resource('role', RoleController::class);
    Route::resource('permission', PermissionsController::class);
    Route::resource('nda', NdaController::class);

    Route::resource('category', CategoryController::class);
    Route::patch('/category/{$1}', [CategoryController::class, 'update'])->name('category.update');
    Route::delete('/category/{$1}', [CategoryController::class, 'destroy'])->name("category.destroy");


    Route::resource('logs', ActivityController::class);
    //Notification 
    Route::post('/notifications/mark-as-read/{id}', [NotificationController::class, 'markAsRead'])->name('notifications.markAsRead');


    //Document Viewer Api

    Route::middleware('check.document.access')->group(function () {
        Route::get('/show-document/{filepath}', [DocumentViewApiController::class, 'show'])->where('filepath', '.*');
    });
    Route::middleware('document.management')->group(function () {});
    Route::resource('document', DocumentController::class);
    // Route::get('/document/{name}/access/', [DocumentController::class, 'access']);
    Route::resource('documentcategory', DocumentCategoryController::class);
    Route::resource('documentaccess', DocumentAccessController::class);

    Route::resource('sasspackage', SassPackageController::class);

    Route::resource('offers', OffersController::class);
    Route::resource('currency', CurrencyController::class);
    Route::resource('framworkprice', FramworkPriceController::class);

    Route::resource('partner', PartnerController::class);
    Route::resource('sales', SalesController::class);
    Route::resource('commission', CommissionRuleController::class);

    Route::resource('mastersetting', MasterSettingController::class);
    Route::resource('billing', BillingController::class);
    Route::resource('bankdetails', BankDetailsController::class);

    Route::get('/framework-price/{id}', [BillingController::class, 'getPrice']);
    Route::get('/entities/{id}', [EntityController::class, 'getEntity']);
    Route::get('/departmentuser/{id}', [UserController::class, 'departmentuser']);

    Route::get('/duepayment', [BillingController::class, 'duepayment'])->name('billing.duepayment');

    Route::post('/billing.cancel', [BillingController::class, 'cancelinvoice'])->name('billing.cancel');

    Route::post('/billing.regenrate', [BillingController::class, 'regenrate'])->name('billing.regenrate');

    Route::get('/billing-history', [BillingController::class, 'getBillingHistory']);
    Route::get('/billing-accountcheck', [BillingController::class, 'accountcheck']);
    Route::get('/loginCheck', [BillingController::class, 'loginCheck']);
    Route::post('/tickets', [SupportTicketsController::class, 'createTicket']);

    Route::resource('supportteammanage', SupportteamManageController::class);

    Route::resource('supporttickets', SupportTicketsController::class);

    Route::post('/ticketassign', [SupportTicketsController::class, 'ticketassign'])->name('ticketassign');

    Route::resource('smtpSetting', SmtpSettingController::class);

    Route::resource('faqcategory', FaqcategoryController::class);

    Route::resource('faqsubcategory', FaqsubcategoryController::class);

    Route::resource('faqtype', FaqtypeController::class);

    Route::resource('faq', FaqController::class);

    Route::resource('quotation', QuotationController::class);


    Route::resource('dealregister', DealregisterController::class);


    Route::get('billing.menu', [BillingController::class, 'menu'])->name('billing.menu');


    Route::post('/quotation.movetobilling', [QuotationController::class, 'movetobilling'])->name('quotation.movetobilling');

    Route::post('/billing.quotationstore', [BillingController::class, 'quotationstore'])->name('billing.quotationstore');
    Route::post('/billing.paymentstatus', [BillingController::class, 'paymentstatus'])->name('billing.paymentstatus');

    Route::post('/update-status', [BillingController::class, 'updateStatus'])->name('update-status');

    // Route::middleware('api')->group(function () {
    //     Route::post('/billing-accountcheck', [BillingController::class, 'accountcheck']);
    // });


    Route::resource('edit/{type}/document', EditorController::class)->parameters([
        'document' => 'editor',
    ])->names([
        'index' => 'editor.index',
        'create' => 'editor.create',
        'store' => 'editor.store',
        'show' => 'editor.show',
        'edit' => 'editor.edit',
        'update' => 'editor.update',
        'destroy' => 'editor.destroy',
    ]);


    Route::get('/framework/index', [AdminDashboardController::class, 'framework'])->name('framework.index');
    Route::get('/organizationpolicy/index', [AdminDashboardController::class, 'organizationpolicy'])->name('organizationpolicy.index');
    Route::get('/organizationevidence/index', [AdminDashboardController::class, 'organizationevidence'])->name('organizationevidence.index');
    Route::get('/people/index', [AdminDashboardController::class, 'people'])->name('people.index');
    Route::get('/lmsadminaccess', [AdminDashboardController::class, 'lmsadminaccess'])->name('lmsadminaccess');
    Route::get('/purplecop/index', [AdminDashboardController::class, 'purplecop'])->name('purplecop.index');
    Route::get('/assets/index', [AdminDashboardController::class, 'assets'])->name('assets.index');
    Route::get('/riskregister/index', [AdminDashboardController::class, 'riskregister'])->name('riskregister.index');
    Route::get('/correctiveaction/index', [AdminDashboardController::class, 'correctiveaction'])->name('correctiveaction.index');
    Route::get('/auditcenter/index', [AdminDashboardController::class, 'auditcenter'])->name('auditcenter.index');
    Route::get('/reports/index', [AdminDashboardController::class, 'auditcenter'])->name('reports.index');
    Route::get('/reportcomplience', [AdminDashboardController::class, 'reportcomplience'])->name('reportcomplience');
    Route::get('/assetcategory/index', [AdminDashboardController::class, 'assetcategory'])->name('assetcategory.index');
    Route::get('/assetsubcategory/index', [AdminDashboardController::class, 'assetsubcategory'])->name('assetsubcategory.index');
    Route::get('/assetlocation/index', [AdminDashboardController::class, 'assetlocation'])->name('assetlocation.index');
    Route::get('/criticality/index', [AdminDashboardController::class, 'criticality'])->name('criticality.index');
    Route::get('/vendor/index', [AdminDashboardController::class, 'vendor'])->name('vendor.index');
    Route::get('/risk/index', [AdminDashboardController::class, 'risk'])->name('risk.index');
    Route::get('/threats/index', [AdminDashboardController::class, 'threats'])->name('threats.index');
    Route::get('/riskcategory/index', [AdminDashboardController::class, 'threats'])->name('riskcategory.index');
    Route::get('/userlms', [AdminDashboardController::class, 'userlms'])->name('userlms');

    //WYSIWYG Editor
    // Route::get('editor/{data}', [EditorController::class, 'editor'])->name('editor.editor');

    Route::resource('menu', MenuController::class);

    Route::post('/menu/store', [MenuController::class, 'store'])->name('menu.store');

    Route::get('/menu/edit/{id}', [MenuController::class, 'edit'])->name('menu.edit');

    Route::resource('submenu', SubMenuController::class);
    Route::post('/submenu/store', [SubMenuController::class, 'store'])->name('submenu.store');
    Route::get('/submenu/edit/{id}', [SubMenuController::class, 'edit'])->name('submenu.edit');


    Route::get('/get-assignee-list', [UserApiController::class, 'get']);

    Route::get('/get-auth-user', [AuthUserController::class, 'get'])->name("get.auth.user");


    Route::resource('accountsetup', AccountSetupController::class);

    //AssignUser 
    Route::controller(VelzonRoutesController::class)->group(function () {
        // dashboard routes
        // Route::get("/", "index");
        Route::get("/dashboard-analytics", "dashboard_analytics");
        Route::get("/dashboard-crm", "dashboard_crm");
        Route::get("/dashboard-ecommerce", "dashboard_ecommerce");
        Route::get("/dashboard-crypto", "dashboard_crypto");
        Route::get("/dashboard-projects", "dashboard_projects");
        Route::get("/dashboard-job", "dashboard_job");
        Route::get("/apps-calendar", "apps_calendar");
        Route::get("/apps-calendar-month-grid", "apps_calendar_month_grid");
        Route::get("/apps-ecommerce-products", "apps_ecommerce_products");
        Route::get("/apps-ecommerce-product-details/{id}", "apps_ecommerce_product_details");
        Route::get("/apps-ecommerce-product-details", "apps_ecommerce_product_details");
        Route::get("/apps-ecommerce-add-product", "apps_ecommerce_add_product");
        Route::get("/apps-ecommerce-order-details", "apps_ecommerce_order_details");
        Route::get("/apps-ecommerce-customers", "apps_ecommerce_customers");
        Route::get("/apps-ecommerce-cart", "apps_ecommerce_cart");
        Route::get("/apps-ecommerce-checkout", "apps_ecommerce_checkout");
        Route::get("/apps-ecommerce-sellers", "apps_ecommerce_sellers");
        Route::get("/apps-ecommerce-seller-details", "apps_ecommerce_seller_details");
        Route::get("/apps-file-manager", "apps_file_manager");
        Route::get("/apps-todo", "apps_todo");
        Route::get("/apps-chat", "apps_chat");
        Route::get("/apps-mailbox", "apps_mailbox");
        Route::get("/apps-email-basic", "apps_email_basic");
        Route::get("/apps-email-ecommerce", "apps_email_ecommerce");
        Route::get("/apps-projects-list", "apps_projects_list");
        Route::get("/apps-projects-overview", "apps_projects_overview");
        Route::get("/apps-projects-create", "apps_projects_create");
        Route::get("/apps-tasks-list-view", "apps_tasks_list_view");
        Route::get("/apps-tasks-details", "apps_tasks_details");
        Route::get("/apps-tasks-kanban", "apps_tasks_kanban");
        Route::get("/apps-api-key", "apps_api_key");
        Route::get("/apps-crm-contacts", "apps_crm_contacts");
        Route::get("/apps-crm-companies", "apps_crm_companies");
        Route::get("/apps-crm-deals", "apps_crm_deals");
        Route::get("/apps-crm-leads", "apps_crm_leads");
        Route::get("/apps-invoices-list", "apps_invoices_list");
        Route::get("/apps-invoices-details", "apps_invoices_details");
        Route::get("/apps-invoices-create", "apps_invoices_create");
        Route::get("/apps-tickets-list", "apps_tickets_list");
        Route::get("/apps-tickets-details", "apps_tickets_details");
        Route::get("/apps-crypto-transactions", "apps_crypto_transactions");
        Route::get("/apps-crypto-buy-sell", "apps_crypto_buy_sell");
        Route::get("/apps-crypto-orders", "apps_crypto_orders");
        Route::get("/apps-crypto-wallet", "apps_crypto_wallet");
        Route::get("/apps-crypto-ico", "apps_crypto_ico");
        Route::get("/apps-crypto-kyc", "apps_crypto_kyc");
        Route::get("/apps-nft-marketplace", "apps_nft_marketplace");
        Route::get("/apps-nft-collections", "apps_nft_collections");
        Route::get("/apps-nft-create", "apps_nft_create");
        Route::get("/apps-nft-creators", "apps_nft_creators");
        Route::get("/apps-nft-explore", "apps_nft_explore");
        Route::get("/apps-nft-item-details", "apps_nft_item_details");
        Route::get("/apps-nft-auction", "apps_nft_auction");
        Route::get("/apps-nft-ranking", "apps_nft_ranking");
        Route::get("/apps-nft-wallet", "apps_nft_wallet");
        Route::get("/charts-apex-line", "charts_apex_line");
        Route::get("/charts-apex-area", "charts_apex_area");
        Route::get("/charts-apex-column", "charts_apex_column");
        Route::get("/charts-apex-bar", "charts_apex_bar");
        Route::get("/charts-apex-mixed", "charts_apex_mixed");
        Route::get("/charts-apex-timeline", "charts_apex_timeline");
        Route::get("/charts-apex-range-area", "charts_apex_range_area");
        Route::get("/charts-apex-funnel", "charts_apex_funnel");
        Route::get("/charts-apex-candlestick", "charts_apex_candlestick");
        Route::get("/charts-apex-boxplot", "charts_apex_boxplot");
        Route::get("/charts-apex-bubble", "charts_apex_bubble");
        Route::get("/charts-apex-scatter", "charts_apex_scatter");
        Route::get("/charts-apex-heatmap", "charts_apex_heatmap");
        Route::get("/charts-apex-treemap", "charts_apex_treemap");
        Route::get("/charts-apex-pie", "charts_apex_pie");
        Route::get("/charts-apex-radialbar", "charts_apex_radialbar");
        Route::get("/charts-apex-radar", "charts_apex_radar");
        Route::get("/charts-apex-polar", "charts_apex_polar");
        Route::get("/charts-chartjs", "charts_chartjs");
        Route::get("/charts-echarts", "charts_echarts");
        Route::get("/ui-alerts", "ui_alerts");
        Route::get("/ui-badges", "ui_badges");
        Route::get("/ui-buttons", "ui_buttons");
        Route::get("/ui-colors", "ui_colors");
        Route::get("/ui-cards", "ui_cards");
        Route::get("/ui-carousel", "ui_carousel");
        Route::get("/ui-dropdowns", "ui_dropdowns");
        Route::get("/ui-grid", "ui_grid");
        Route::get("/ui-images", "ui_images");
        Route::get("/ui-tabs", "ui_tabs");
        Route::get("/ui-accordions", "ui_accordions");
        Route::get("/ui-modals", "ui_modals");
        Route::get("/ui-offcanvas", "ui_offcanvas");
        Route::get("/ui-placeholders", "ui_placeholders");
        Route::get("/ui-progress", "ui_progress");
        Route::get("/ui-notifications", "ui_notifications");
        Route::get("/ui-media", "ui_media");
        Route::get("/ui-embed-video", "ui_embed_video");
        Route::get("/ui-typography", "ui_typography");
        Route::get("/ui-lists", "ui_lists");
        Route::get("/ui-links", "ui_links");
        Route::get("/ui-general", "ui_general");
        Route::get("/ui-ribbons", "ui_ribbons");
        Route::get("/ui-utilities", "ui_utilities");
        Route::get("/advance-ui-scrollbar", "advance_ui_scrollbar");
        Route::get("/advance-ui-animation", "advance_ui_animation");
        Route::get("/advance-ui-swiper", "advance_ui_swiper");
        Route::get("/advance-ui-ratings", "advance_ui_ratings");
        Route::get("/advance-ui-highlight", "advance_ui_highlight");
        Route::get("/widgets", "widgets");
        Route::get("/forms-elements", "forms_elements");
        Route::get("/forms-select", "forms_select");
        Route::get("/forms-checkboxes-radios", "forms_checkboxes_radios");
        Route::get("/forms-pickers", "forms_pickers");
        Route::get("/forms-masks", "forms_masks");
        Route::get("/forms-advanced", "forms_advanced");
        Route::get("/forms-range-sliders", "forms_range_sliders");
        Route::get("/forms-validation", "forms_validation");
        Route::get("/forms-wizard", "forms_wizard");
        Route::get("/forms-editors", "forms_editors");
        Route::get("/forms-file-uploads", "forms_file_uploads");
        Route::get("/forms-layouts", "forms_layouts");
        Route::get("/forms-select2", "forms_select2");
        Route::get("/tables-basic", "tables_basic");
        Route::get("/tables-listjs", "tables_listjs");
        Route::get("/tables-react", "tables_react");
        Route::get("/icons-remix", "icons_remix");
        Route::get("/icons-boxicons", "icons_boxicons");
        Route::get("/icons-materialdesign", "icons_materialdesign");
        Route::get("/icons-feather", "icons_feather");
        Route::get("/icons-lineawesome", "icons_lineawesome");
        Route::get("/icons-crypto", "icons_crypto");
        Route::get("/maps-google", "maps_google");
        Route::get("/pages-starter", "pages_starter");
        Route::get("/pages-profile", "pages_profile");
        Route::get("/pages-profile-settings", "pages_profile_settings");
        Route::get("/pages-team", "pages_team");
        Route::get("/pages-timeline", "pages_timeline");
        Route::get("/pages-faqs", "pages_faqs");
        Route::get("/pages-gallery", "pages_gallery");
        Route::get("/pages-pricing", "pages_pricing");
        Route::get("/pages-sitemap", "pages_sitemap");
        Route::get("/pages-search-results", "pages_search_results");
        Route::get("/apps-job-statistics", "apps_job_statistics");
        Route::get("/apps-job-lists", "apps_job_lists");
        Route::get("/apps-job-grid-lists", "apps_job_grid_lists");
        Route::get("/apps-job-details", "apps_job_details");
        Route::get("/apps-job-candidate-lists", "apps_job_candidate_lists");
        Route::get("/apps-job-candidate-grid", "apps_job_candidate_grid");
        Route::get("/apps-job-application", "apps_job_application");
        Route::get("/apps-job-new", "apps_job_new");
        Route::get("/apps-job-companies-lists", "apps_job_companies_lists");
        Route::get("/apps-job-categories", "apps_job_categories");
        Route::get("/pages-privacy-policy", "pages_privacy_policy");
        Route::get("/pages-terms-condition", "pages_terms_condition");
        // Route::get("/forgot-password", "forgot_password");
        Route::get("/register", "register");
        Route::get("/auth-signin-basic", "auth_signin_basic");
        Route::get("/auth-signin-cover", "auth_signin_cover");
        Route::get("/auth-signup-basic", "auth_signup_basic");
        Route::get("/auth-signup-cover", "auth_signup_cover");
        Route::get("/auth-pass-reset-basic", "auth_pass_reset_basic");
        Route::get("/auth-pass-reset-cover", "auth_pass_reset_cover");
        Route::get("/auth-lockscreen-basic", "auth_lockscreen_basic");
        Route::get("/auth-lockscreen-cover", "auth_lockscreen_cover");
        Route::get("/auth-logout-basic", "auth_logout_basic");
        Route::get("/auth-logout-cover", "auth_logout_cover");
        Route::get("/auth-success-msg-basic", "auth_success_msg_basic");
        Route::get("/auth-success-msg-cover", "auth_success_msg_cover");
        Route::get("/auth-twostep-basic", "auth_twostep_basic");
        Route::get("/auth-twostep-cover", "auth_twostep_cover");
        Route::get("/auth-404-basic", "auth_404_basic");
        Route::get("/auth-404-cover", "auth_404_cover");
        Route::get("/auth-404-alt", "auth_404_alt");
        Route::get("/auth-500", "auth_500");
        Route::get("/landing", "landing");
        Route::get("/nft-landing", "nft_landing");
        Route::get("/job-landing", "job_landing");
        Route::get("/auth-pass-change-basic", "auth_pass_change_basic");
        Route::get("/auth-pass-change-cover", "auth_pass_change_cover");
        Route::get("/auth-offline", "auth_offline");
        Route::get("/pages-maintenance", "pages_maintenance");
        Route::get("/pages-coming-soon", "pages_coming_soon");
    });
});

require __DIR__ . '/auth.php';
