//  Jobs
export const getCreateLineOfBusiness = state => state.admin.jobs.create.lineOfBusiness || '';
export const getJobs = state => state.admin.jobs.index.jobs || [];

//  applications
export const getCreateApplicationName = state => state.admin.applications.create.applicationName || '';
export const getApps = state => state.admin.applications.index.apps || [];

//  categories
export const getCategories = state => state.admin.categories.index.categories || [];
export const getCreateCategoryTitle = state => state.admin.categories.create.title || '';
export const getCreateCategoryDescription = state => state.admin.categories.create.description || '';
