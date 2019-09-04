function _extends() {_extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};return _extends.apply(this, arguments);} // utils
const getOnlyDate = date => date.match(/\d{4}-\d{2}-\d{2}/g).join('');

const convertDateFormat = (date) =>
getOnlyDate(date).replace(/(\d{4})-(\d{2})-(\d{2})/g, '$2/$3/$1');

const convertToPlural = singularTag => `${singularTag}s`;

const handleTagsPlural = (quantity, tagName) => {
  const singularTag = `${quantity} ${tagName}`;

  if (quantity === 0) {
    return String(quantity);
  }

  return quantity === 1 ? singularTag : convertToPlural(singularTag);
};

const isLicenseNameTooBig = licenseName => licenseName.length >= 20;
const getShortLicenseName = licenseName => licenseName.slice(0, 16);
const getDottedLicenseName = (licenseName) =>
`${getShortLicenseName(licenseName)}...`;


const handleTagsLicense = license => {
  if (license === null) {
    return license;
  }

  const { name } = license;

  if (name === 'Other') {
    return `License: ${name}`;
  }

  if (isLicenseNameTooBig(name)) {
    return getDottedLicenseName(name);
  }

  return name;
};

// app
const SearchSvg = ({ className }) =>
React.createElement("svg", {
  viewBox: "0 0 87 87",
  xmlns: "http://www.w3.org/2000/svg",
  className: className },

React.createElement("path", { d: "M62.782 58.537C68.22 52.113 71.189 44.058 71.189 35.596C71.189 15.969 55.221 0 35.595 0C15.968 0 0 15.968 0 35.596C0 55.223 15.968 71.191 35.595 71.191C44.056 71.191 52.113 68.222 58.538 62.782L82.647 86.889L86.888 82.648L62.782 58.537ZM56.511 56.511C50.914 62.108 43.487 65.19 35.595 65.19C19.277 65.19 6 51.914 6 35.595C6 19.276 19.276 5.999 35.595 5.999C51.914 5.999 65.189 19.275 65.189 35.595C65.19 43.486 62.108 50.915 56.511 56.511Z" }));



const Search = ({ isDisabled, handleSubmit }) =>
React.createElement("div", { className: "search" },
React.createElement("form", {
  className: "form",
  onSubmit: handleSubmit },

React.createElement("input", {
  autoFocus: true,
  id: "input-username",
  className: "input",
  type: "search",
  placeholder: "e.g.: lucaspompeun",
  disabled: isDisabled }),

React.createElement("button", { className: "button" },
React.createElement(SearchSvg, { className: "search-svg" }),
React.createElement("span", { className: "button-text" }, "Search GitHub User"))));





const EmptyStateSvg = ({ iconStyle }) =>
React.createElement("svg", {
  className: iconStyle,
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 470 470",
  enableBackground: "new 0 0 470 470" },

React.createElement("g", null,
React.createElement("path", { d: "M16.105,219.443h50.842l18.252,36.506c1.27,2.54,3.867,4.146,6.708,4.146s5.438-1.605,6.708-4.146l18.253-36.506h3.724 c4.142,0,7.5-3.357,7.5-7.5s-3.358-7.5-7.5-7.5h-8.359c-2.841,0-5.438,1.604-6.708,4.146l-13.618,27.235L78.29,208.589 c-1.27-2.54-3.867-4.146-6.708-4.146H16.105c-0.609,0-1.105-0.495-1.105-1.104V16.105C15,15.496,15.496,15,16.105,15h151.604   c0.61,0,1.106,0.496,1.106,1.105v81.306c0,4.143,3.358,7.5,7.5,7.5s7.5-3.357,7.5-7.5V16.105C183.815,7.225,176.59,0,167.709,0 H16.105C7.225,0,0,7.225,0,16.105v187.233C0,212.219,7.225,219.443,16.105,219.443z" }),

React.createElement("path", { d: "m91.908,30c-20.688,0-37.518,16.83-37.518,37.518s16.831,37.519 37.518,37.519 37.518-16.831 37.518-37.519-16.831-37.518-37.518-37.518zm0,60.036c-12.417,0-22.518-10.102-22.518-22.519 0-12.415 10.101-22.517 22.518-22.517s22.518,10.102 22.518,22.518c0,12.417-10.102,22.518-22.518,22.518z" }),

React.createElement("path", { d: "m91.908,135.036c8.819,0 17.411,2.459 24.845,7.11 3.513,2.198 8.139,1.133 10.336-2.379s1.132-8.14-2.379-10.336c-9.823-6.146-21.166-9.396-32.802-9.396-34.137,0.001-61.908,27.773-61.908,61.908 0,4.143 3.358,7.5 7.5,7.5h83.092c4.142,0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-74.993c3.601-22.311 22.996-39.407 46.309-39.407z" }),

React.createElement("path", { d: "M453.896,0H302.291c-8.881,0-16.106,7.225-16.106,16.105v81.306c0,4.143,3.357,7.5,7.5,7.5s7.5-3.357,7.5-7.5V16.105   c0-0.609,0.496-1.105,1.106-1.105h151.604c0.609,0,1.104,0.496,1.104,1.105v187.233c0,0.609-0.495,1.104-1.104,1.104h-55.478   c-2.841,0-5.438,1.605-6.708,4.146l-13.617,27.235l-13.618-27.235c-1.271-2.541-3.867-4.146-6.708-4.146h-8.358   c-4.143,0-7.5,3.357-7.5,7.5s3.357,7.5,7.5,7.5h3.724l18.253,36.506c1.271,2.541,3.867,4.146,6.708,4.146s5.438-1.605,6.708-4.146   l18.253-36.506h50.842c8.88,0,16.104-7.225,16.104-16.104V16.105C470,7.225,462.775,0,453.896,0z" }),

React.createElement("path", { d: "m378.093,30c-20.688,0-37.519,16.83-37.519,37.518s16.831,37.519 37.519,37.519 37.518-16.831 37.518-37.519-16.831-37.518-37.518-37.518zm0,60.036c-12.417,0-22.519-10.102-22.519-22.519 0-12.416 10.102-22.518 22.519-22.518 12.416,0 22.518,10.102 22.518,22.518-0.001,12.418-10.102,22.519-22.518,22.519z" }),

React.createElement("path", { d: "m341.908,181.943c0,4.143 3.357,7.5 7.5,7.5h83.092c4.143,0 7.5-3.357 7.5-7.5 0-34.136-27.771-61.907-61.907-61.907-11.637,0-22.979,3.249-32.802,9.396-3.511,2.196-4.576,6.824-2.38,10.336 2.198,3.511 6.823,4.576 10.337,2.379 7.435-4.651 16.025-7.11 24.845-7.11 23.313,0 42.707,17.096 46.309,39.407h-74.993c-4.143-0.001-7.501,3.357-7.501,7.499z" }),

React.createElement("path", { d: "m143.092,136.01v187.234c0,8.88 7.225,16.104 16.105,16.104h50.842l18.252,36.506c1.271,2.54 3.868,4.146 6.708,4.146 2.84,0 5.438-1.605 6.708-4.146l18.253-36.506h50.841c8.881,0 16.105-7.225 16.105-16.104v-187.234c0-8.88-7.225-16.104-16.105-16.104h-151.604c-8.88-0.001-16.105,7.224-16.105,16.104zm168.815,0v187.234c0,0.609-0.496,1.104-1.105,1.104h-55.476c-2.841,0-5.438,1.604-6.708,4.146l-13.618,27.235-13.617-27.235c-1.27-2.54-3.867-4.146-6.708-4.146h-55.477c-0.609,0-1.105-0.495-1.105-1.104v-187.234c0-0.609 0.496-1.104 1.105-1.104h151.604c0.609-0.001 1.105,0.494 1.105,1.104z" }),

React.createElement("path", { d: "m235,224.941c20.687,0 37.518-16.831 37.518-37.519s-16.83-37.518-37.518-37.518c-20.688,0-37.518,16.83-37.518,37.518s16.83,37.519 37.518,37.519zm0-60.036c12.416,0 22.518,10.102 22.518,22.518 0,12.417-10.102,22.519-22.518,22.519-12.417,0-22.518-10.102-22.518-22.519-2.84217e-14-12.416 10.101-22.518 22.518-22.518z" }),

React.createElement("path", { d: "m180.592,309.349h108.815c4.143,0 7.5-3.357 7.5-7.5 0-34.136-27.771-61.907-61.907-61.907-34.136,0-61.908,27.771-61.908,61.907-2.84217e-14,4.142 3.358,7.5 7.5,7.5zm54.408-54.408c23.312,0 42.707,17.096 46.309,39.407h-92.617c3.6-22.311 22.995-39.407 46.308-39.407z" }),

React.createElement("path", { d: "m381.5,440.5c4.411,0 8-3.589 8-8s-3.589-8-8-8-8,3.589-8,8 3.589,8 8,8z" }),

React.createElement("path", { d: "m340.5,440.5c4.411,0 8-3.589 8-8s-3.589-8-8-8-8,3.589-8,8 3.589,8 8,8z" }),

React.createElement("path", { d: "m422.5,440.5c4.411,0 8-3.589 8-8s-3.589-8-8-8-8,3.589-8,8 3.589,8 8,8z" }),

React.createElement("path", { d: "m462.5,395h-455c-4.142,0-7.5,3.357-7.5,7.5v60c0,4.143 3.358,7.5 7.5,7.5h455c4.143,0 7.5-3.357 7.5-7.5v-60c0-4.143-3.357-7.5-7.5-7.5zm-447.5,15h277.5v45h-277.5v-45zm440,45h-147.5v-45h147.5v45z" })));




const EmptyState = () =>
React.createElement("div", { className: "empty-state" },
React.createElement(EmptyStateSvg, { iconStyle: "svg" }),

React.createElement("h3", { className: "welcome" }, "Welcome!"),
React.createElement("p", { className: "hint" }, "Type a GitHub user to start"));



const UserInfo = ({ userinfo }) =>
React.createElement("div", { className: "user-info" },
React.createElement("img", {
  src: userinfo.photo,
  alt: "user avatar",
  className: "img" }),


React.createElement("div", { className: "user-data-container" },
React.createElement("h1", null,
React.createElement("a", {
  className: "username",
  href: `https://github.com/${userinfo.login}`,
  target: "_blank" },

userinfo.username)),



React.createElement("p", { className: "location" }, userinfo.location)));




const Actions = ({ getRepos, getStarred, emptyRepos }) =>
React.createElement("div", { className: "actions" },
React.createElement("button", {
  className: `
        button button-left ${emptyRepos === 'repos' && 'transparent-button'}
      `,
  onClick: getRepos }, "Public Repos"),




React.createElement("button", {
  className: `
        button button-right ${emptyRepos === 'starred' && 'transparent-button'}
      `,
  onClick: getStarred }, "Starred Repos"));






const IconLink = ({ style }) =>
React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  className: style },


React.createElement("g", null,
React.createElement("path", { d: "M14.9,1.11a3.79,3.79,0,0,0-5.35,0L6.87,3.78a.58.58,0,0,0,.82.82l2.68-2.68a2.62,2.62,0,0,1,3.7,3.71l-3.5,3.5a2.62,2.62,0,0,1-3.71,0A.58.58,0,0,0,6,10a3.79,3.79,0,0,0,5.35,0l3.5-3.5a3.79,3.79,0,0,0,0-5.35Z" }),

React.createElement("path", { d: "M7.9,11.81,5.63,14.07a2.62,2.62,0,1,1-3.71-3.71L5.22,7.08a2.63,2.63,0,0,1,3.7,0,.58.58,0,0,0,.82-.82,3.79,3.79,0,0,0-5.35,0L1.1,9.55A3.78,3.78,0,0,0,6.46,14.9l2.26-2.26a.58.58,0,0,0-.82-.82Z" })));




const Dots = ({ className }) => React.createElement("span", { className: className }, "...");

const Page = ({ page, onClick, pagelink }) => {
  const Component = page === '...' ? Dots : 'a';

  const handleClick = !onClick ? null : e => {
    e.preventDefault();
    onClick(page);
  };

  return (
    React.createElement(Component, {
      className: "page",
      href: pagelink,
      onClick: handleClick },

    page));


};

const centerRule = ({ totalPages, activePage }) =>
activePage - 1 <= 0 ?
1 :
activePage === totalPages ?
activePage - 2 :
activePage - 1;


const isNumber = value => typeof value === 'number';

const pagination = ({ totalPages = 1, activePage = 1 } = {}) => {
  if (!isNumber(totalPages)) {
    throw new TypeError('totalPages should be a number');
  }

  if (!isNumber(activePage)) {
    throw new TypeError('activePage should be a number');
  }

  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const visiblePages = 3;
  let pages = [
  1,
  ...Array.from({ length: visiblePages }, (_, i) => i + centerRule({ totalPages, activePage })),
  totalPages];


  pages = pages.filter((page, index, array) => array.indexOf(page) === index);

  let firstPage = pages[0];
  let secondPage = pages[1];

  if (secondPage === firstPage + 2) {
    pages = [
    firstPage,
    firstPage + 1,
    ...pages.slice(1)];

  }

  let penultimatePage = pages[pages.length - 2];
  let lastPage = pages[pages.length - 1];

  if (penultimatePage === lastPage - 2) {
    pages = [
    ...pages.slice(0, -1),
    lastPage - 1,
    lastPage];

  }

  firstPage = pages[0];
  secondPage = pages[1];

  if (secondPage > firstPage + 2) {
    pages = [
    firstPage,
    '...',
    ...pages.slice(1)];

  }

  penultimatePage = pages[pages.length - 2];
  lastPage = pages[pages.length - 1];

  if (penultimatePage < lastPage - 2) {
    pages = [
    ...pages.slice(0, -1),
    '...',
    lastPage];

  }

  return pages;
};

const Pagination = ({ totalPages, activePage, onClick }) =>
React.createElement("ul", { className: "pagination" },
pagination({ totalPages, activePage }).map((page, index) =>
React.createElement("li", {
  key: index,
  className: `li ${activePage === page ? 'active' : ''}` },

React.createElement(Page, {
  page: page,
  onClick: onClick,
  pagelink: page }))));






Pagination.defaultProps = {
  pageLink: '',
  activePage: 1 };


const isNotZero = value => value !== '0';

const Repos = ({ repos, handlePagination }) =>
React.createElement("div", { className: "repos" },
React.createElement("ul", { className: "repos-list" },
repos.repos.map((repo) =>
React.createElement("li", { className: "repo-container", key: repo.link },
React.createElement("div", { className: "info-container" },
React.createElement("h4", null,
React.createElement("a", {
  className: "repo-name",
  href: repo.link,
  target: "_blank" },

repo.name)),



!!repo.description &&
React.createElement("p", { className: "repo-description" },
repo.description),



React.createElement("ul", {
  style: !repo.description ? { marginTop: '15px' } : null,
  className: "repo-tags-container" },

!!repo.language &&
React.createElement("li", { className: "repo-tag tag-language" },
repo.language),


isNotZero(repo.forks) &&
React.createElement("li", { className: "repo-tag tag-forks" },
repo.forks),


isNotZero(repo.stars) &&
React.createElement("li", { className: "repo-tag tag-stars" },
repo.stars),


!!repo.license &&
React.createElement("li", { className: "repo-tag tag-license" },
repo.license))),





React.createElement("div", { className: "date-container" },
React.createElement("div", { className: "repo-date-container" },
React.createElement("h5", { className: "repo-date-creation" }, "Created at"),
React.createElement("p", { className: "repo-date" }, repo.createdAt)),


React.createElement("div", { className: "repo-date-container" },
React.createElement("h5", { className: "repo-date-creation" }, "Updated at"),
React.createElement("p", { className: "repo-date" }, repo.updatedAt))),



React.createElement("div", { className: "link-container" },
React.createElement("a", {
  href: repo.link,
  target: "_blank",
  className: "link" },

React.createElement(IconLink, { style: "link-icon" })))))),






React.createElement(Pagination, {
  totalPages: repos.pagination.totalPages,
  activePage: repos.pagination.activePage,
  onClick: handlePagination }));




Repos.defaultProps = {
  className: '' };


const AppContent = ({
  userinfo,
  repos,
  starred,
  getRepos,
  getStarred,
  isFetchingData,
  handleSubmit,
  emptyRepos,
  handlePagination }) =>

React.createElement("div", { className: "app" },
React.createElement(Search, {
  handleSubmit: handleSubmit,
  isDisabled: isFetchingData }),


!!userinfo || React.createElement(EmptyState, null),
isFetchingData && React.createElement("div", null, "Loading"),

!!userinfo && React.createElement(UserInfo, { userinfo: userinfo }),
!!userinfo && React.createElement(Actions, {
  getRepos: getRepos,
  getStarred: getStarred,
  emptyRepos: emptyRepos }),


!!repos.repos.length && React.createElement(Repos, {
  repos: repos,
  handlePagination: (clickedPage) =>
  handlePagination('repos', clickedPage) }),



!!starred.repos.length && React.createElement(Repos, {
  repos: starred,
  handlePagination: (clickedPage) =>
  handlePagination('starred', clickedPage) }));





const initialReposState = {
  repos: [],
  pagination: {
    totalPages: 1,
    activePage: 1 } };



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userinfo: null,
      repos: initialReposState,
      starred: initialReposState,
      isFetchingData: false,
      emptyRepos: null };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.perPage = 10;
  }

  getGithubUrlApi(userName, reposType, clickedPage = 1) {
    const userNameInternal = userName ? `/${userName}` : '';
    const reposTypeInternal = reposType ? `/${reposType}` : '';
    const perPage = `?per_page=${this.perPage}&page=${clickedPage}`;

    return `https://api.github.com/users${userNameInternal}${reposTypeInternal}${perPage}`;
  }

  handleSubmit(e) {
    e.preventDefault();
    const value = e.target['input-username'].value;

    this.setState({ isFetchingData: true });

    ajax().get(this.getGithubUrlApi(value)).
    then(res => {
      this.setState({
        userinfo: {
          username: res.name,
          photo: res.avatar_url,
          login: res.login,
          location: res.location },

        repos: initialReposState,
        starred: initialReposState },
      () => {
        this.getRepos('repos')();
      });
    }).always(() => this.setState({ isFetchingData: false }));
  }

  getRepos(type, clickedPage) {
    const listShouldBeEmpty = type === 'repos' ? 'starred' : 'repos';

    return () => {
      const userLogin = this.state.userinfo.login;

      ajax().get(this.getGithubUrlApi(userLogin, type, clickedPage)).
      then((response, xhr) => {
        const linkHeader = xhr.getResponseHeader('link') || '';
        const totalPagesMatch = linkHeader.match(/&page=(\d+)>; rel="last/);

        this.setState({
          [type]: {
            repos: response.map(item => ({
              id: item.id,
              link: item.html_url,
              name: item.name,
              description: item.description,
              language: item.language,
              forks: handleTagsPlural(item.forks_count, 'fork'),
              stars: handleTagsPlural(item.stargazers_count, 'star'),
              license: handleTagsLicense(item.license),
              createdAt: convertDateFormat(item.created_at),
              updatedAt: convertDateFormat(item.updated_at) })),

            pagination: {
              totalPages: totalPagesMatch ?
              Number(totalPagesMatch[1]) :
              this.state[type].pagination.totalPages,
              activePage: clickedPage } },


          [listShouldBeEmpty]: initialReposState,
          emptyRepos: listShouldBeEmpty });

      });
    };
  }

  render() {
    return (
      React.createElement(AppContent, _extends({},
      this.state, {
        handleSubmit: this.handleSubmit,
        getRepos: this.getRepos('repos'),
        getStarred: this.getRepos('starred'),
        handlePagination: (reposType, clickedPage) =>
        this.getRepos(reposType, clickedPage)() })));



  }}


ReactDOM.render(React.createElement(App, null), document.querySelector('[data-js="app"]'));
