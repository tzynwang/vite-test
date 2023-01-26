import React, { memo, useMemo } from 'react';
import cn from 'classnames';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import theme, { ThemeProvider, useMediaQuery } from '@/theme';
import scopedStyles from './App.module.css';

function App(): React.ReactElement {
  /* States */
  const breakpointsUpSm = useMediaQuery(theme.breakpoints.up('sm'));

  /* Views */
  const LatestPostsBlock = useMemo(
    () => (
      <div
        className={cn(
          breakpointsUpSm
            ? scopedStyles.main_section_main_up_sm
            : scopedStyles.main_section_main
        )}
      >
        <div className={cn(scopedStyles.main_section_main_latest)}>
          <div
            className={cn(scopedStyles.blog_post)}
            style={{ backgroundColor: theme.palette.grey[200] }}
          >
            latest blog
          </div>
        </div>
        <div className={cn(scopedStyles.main_section_main_second)}>
          <div
            className={cn(scopedStyles.blog_post)}
            style={{ backgroundColor: theme.palette.grey[300] }}
          >
            2nd latest blog
          </div>
        </div>
        <div className={cn(scopedStyles.main_section_main_third)}>
          <div
            className={cn(scopedStyles.blog_post)}
            style={{ backgroundColor: theme.palette.grey[400] }}
          >
            3rd latest blog
          </div>
        </div>
      </div>
    ),
    [breakpointsUpSm]
  );

  /* Main */
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Nav />

        {/* about */}
        <section>
          <Container>
            <h2>關於我</h2>
            <div>
              我是查理，一個喜歡看書跟打電動的前端工程師。技術筆記區專門保存工作相關的筆記，小抄則是列出那些內容長度不足成文，但我常複製貼上的東西。而如果想知道我喜歡哪些小說或遊戲，請參考肥宅圖書館，平安喜樂。
            </div>
          </Container>
        </section>

        {/* posts list */}
        <section>
          <Container>
            <h2>最近更新的技術筆記</h2>
          </Container>
          {LatestPostsBlock}
          <Container>
            <ul>
              {Array.from(Array(5).keys()).map((num) => (
                <li key={num}>post {num + 4}</li>
              ))}
              <li>更舊的筆記請洽技術筆記區</li>
            </ul>
          </Container>
        </section>

        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default memo(App);
