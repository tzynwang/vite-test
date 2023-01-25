import React, { memo } from 'react';
import cn from 'classnames';
import CssBaseline from '@mui/material/CssBaseline';
import theme, { ThemeProvider, CssVarsProvider, useMediaQuery } from './theme';
import scopedStyles from './App.module.css';

function App(): React.ReactElement {
  /* States */
  const breakpointsUpSm = useMediaQuery(theme.breakpoints.up('sm'));

  /* Main */
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <CssVarsProvider>
          {/* top nav */}
          <nav>
            <h1>普通文組</h1>
            <div
              className={cn(
                breakpointsUpSm
                  ? scopedStyles.nav_ul_container_up_sm
                  : scopedStyles.nav_ul_container
              )}
            >
              <ul className={cn(scopedStyles.nav_ul)}>
                <li>首頁</li>
                <li>技術筆記</li>
                <li>技術小抄</li>
                <li>肥宅獎盃</li>
              </ul>
              <ul className={cn(scopedStyles.nav_ul)}>
                <li>gitHub</li>
                <li>rss feed</li>
                <li>theme</li>
              </ul>
            </div>
          </nav>

          {/* about */}
          <h2>關於我</h2>
          <section>
            我是查理，一個喜歡看書跟打電動的前端工程師。技術筆記區專門保存工作相關的筆記，小抄則是收集一些有點難成篇、但我常複製貼上的東西。如果想知道我喜歡哪些小說或遊戲，請參考肥宅獎杯列表，平安喜樂。
          </section>

          {/* posts list */}
          <h2>最近更新的技術筆記</h2>
          <section>
            <div
              className={cn(
                breakpointsUpSm
                  ? scopedStyles.main_section_main_up_sm
                  : scopedStyles.main_section_main
              )}
            >
              <div className={cn(scopedStyles.main_section_main_latest)}>
                <div>latest blog</div>
              </div>
              <div className={cn(scopedStyles.main_section_main_second)}>
                <div>2nd latest blog</div>
              </div>
              <div className={cn(scopedStyles.main_section_main_third)}>
                <div>3rd latest blog</div>
              </div>
            </div>
            <div>
              <ul>
                {Array.from(Array(10).keys()).map((num) => (
                  <li key={num}>post {num + 1}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* posts filter */}
          <h2>想看舊筆記？</h2>
          <section>
            <ul>
              <li>根據主題瀏覽</li>
              <li>用關鍵字搜尋</li>
              <li>或是這邊有根據時間降冪排序的全部文章</li>
            </ul>
          </section>

          {/* footer */}
          <footer>
            <div>© {new Date().getFullYear()} Tzu Yin Wang 🦊 MIT</div>
          </footer>
        </CssVarsProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default memo(App);
