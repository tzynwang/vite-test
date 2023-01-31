import React, { memo } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Home from '@/components/Page/Home';
import TechBlog from '@/components/Page/TechBlog';
import TechBlogCategory from '@/components/Page/TechBlogCategory';
import TechBlogSinglePost from '@/components/Page/TechBlogSinglePost';
import Snippet from '@/components/Page/Snippet';
import Blog from '@/components/Page/Blog';
import Nav from '@/components/Common/Nav';
import theme, { ThemeProvider, StyledEngineProvider } from '@/themes';
import useUrlPath from '@/hooks/useUrlPath';

function App(): React.ReactElement {
  /* Data */
  const paths = useUrlPath();

  /* Main */
  return (
    <BrowserRouter>
      <CssBaseline />
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Nav />
          <Switch>
            <Route path={paths.techBlog}>
              <TechBlog />
            </Route>
            <Route path={paths.techBlogCategory}>
              <TechBlogCategory />
            </Route>
            <Route path={paths.techBlogSinglePost}>
              <TechBlogSinglePost />
            </Route>
            <Route path={paths.snippet}>
              <Snippet />
            </Route>
            <Route path={paths.blog}>
              <Blog />
            </Route>
            <Route path={paths.home}>
              <Home />
            </Route>
          </Switch>
        </ThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  );
}

export default memo(App);
