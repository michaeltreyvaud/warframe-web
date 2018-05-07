//  Jobs
export const getJobs = state => state.admin.jobs.index.jobs || [];
export const getJobsLoading = state => state.admin.jobs.index.attempt || false;
export const getCreateLineOfBusiness = state => state.admin.jobs.create.lineOfBusiness || '';

//  applications
export const getApps = state => state.admin.applications.index.apps || [];
export const getAppsLoading = state => state.admin.applications.index.attempt || false;
export const getCreateApplicationName = state => state.admin.applications.create.applicationName || '';

//  categories
export const getCategories = state => state.admin.categories.index.categories || [];
export const getCategoriesLoading = state => state.admin.categories.index.attempt || false;
export const getCreateCategoryTitle = state => state.admin.categories.create.title || '';
export const getCreateCategoryDescription = state => state.admin.categories.create.description || '';
