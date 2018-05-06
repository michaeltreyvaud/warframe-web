//  Jobs
export const getCreateLineOfBusiness = state => state.admin.jobs.create.lineOfBusiness || '';
export const getJobs = state => state.admin.jobs.index.jobs || [];

//  applications
export const getCreateApplicationName = state => state.admin.applications.applicationName || '';

//  categories
export const getCreateCategoryTitle = state => state.admin.categories.title || '';
export const getCreateCategoryDescription = state => state.admin.categories.description || '';
