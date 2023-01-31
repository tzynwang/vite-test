import React, { memo, useMemo } from 'react';
import cn from 'classnames';
import Typography from '@mui/material/Typography';
import TableOfContent from '@/components/Common/TechBlogSinglePost/TableOfContent';
import SeriesPost from '@/components/Common/TechBlogSinglePost/SeriesPost';
import CategoryList from '@/components/Common/TechBlogSinglePost/CategoryList';
import TechBlogSinglePostLayout from '@/components/Layout/TechBlogSinglePost';
import {
  MOCK_TABLE_OF_CONTENTS,
  MOCK_SERIES_POSTS,
  MOCK_POST_CATEGORIES,
} from '@/models/GeneralModels';
import theme, { useMediaQuery } from '@/themes';
import scopedStyles from './index.module.css';

function TechBlogSinglePost(): React.ReactElement {
  /* States */
  const breakpointsUpMd = useMediaQuery(theme.breakpoints.up('md'));

  /* Views */
  const TableOfContents = useMemo(
    () =>
      breakpointsUpMd ? (
        <TableOfContent tableOfContents={MOCK_TABLE_OF_CONTENTS} />
      ) : (
        <React.Fragment />
      ),
    [breakpointsUpMd]
  );
  const SeriesPosts = <SeriesPost seriesPosts={MOCK_SERIES_POSTS} />;
  const CategoryLists = <CategoryList categoryLists={MOCK_POST_CATEGORIES} />;

  /* Main */
  return (
    <TechBlogSinglePostLayout
      side={
        <div className={scopedStyles.side_wrapper}>
          {TableOfContents}
          {SeriesPosts}
          {CategoryLists}
        </div>
      }
      main={
        <div className={cn(scopedStyles.main_wrapper)}>
          <Typography variant="h2" className={cn(scopedStyles.post_title)}>
            post title
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            corrupti iste non? Mollitia et voluptatum dolore quas quos
            necessitatibus similique autem quidem ratione at velit, assumenda
            eligendi, totam vero eum.
          </Typography>
          <Typography
            variant="h3"
            id={MOCK_TABLE_OF_CONTENTS[0].to}
            className={cn(scopedStyles.post_sub_title)}
          >
            {MOCK_TABLE_OF_CONTENTS[0].postSubTitle}
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad pariatur
            quam cumque laborum ut nesciunt libero perferendis iure, sed, itaque
            omnis dolor id molestias. Tenetur nobis soluta repudiandae dolore,
            cupiditate accusantium dignissimos expedita possimus, optio error
            veniam non perferendis unde eveniet quaerat. Error assumenda tenetur
            tempore unde corrupti dolorum inventore neque quisquam fugiat! Sequi
            consequuntur obcaecati facilis ab reiciendis fugit animi natus
            fugiat aut iusto! Cum odio libero eligendi ipsa ipsum unde quibusdam
            iure consequatur dicta omnis nisi quos minus rerum blanditiis,
            obcaecati voluptatibus quaerat natus optio dolore nostrum. Quo,
            doloribus. A rerum aut magnam ex, ut est quos explicabo, ullam at
            atque laborum recusandae corrupti tenetur fugiat eum deleniti
            provident eaque tempora odit! Dolorum, perspiciatis? Accusantium
            odio pariatur mollitia similique, harum fugiat optio suscipit
            aliquid voluptatibus vel. Dolorum consequatur labore quaerat vitae
            distinctio, vero molestias sunt. Voluptates eius alias qui enim
            maiores repellendus suscipit a hic aut facere eveniet quaerat,
            aliquam, nisi deserunt, sit ipsum cum ipsam. Animi facere, modi
            minima quam quas, quibusdam optio illum repellat facilis maxime,
            perspiciatis illo eum soluta eligendi sed expedita? Architecto
            provident possimus quidem alias, nemo nobis doloribus temporibus
            pariatur fuga, numquam corrupti eligendi id similique aperiam veniam
            mollitia sint voluptas magnam necessitatibus error dolorum libero
            neque placeat! Consectetur dolore alias numquam veniam, impedit
            magnam voluptas. Error debitis aliquam labore id eius reiciendis
            optio eos. Repellat, ipsum inventore! Praesentium earum facere id
            repellat labore aspernatur ex corrupti cum atque minus veritatis
            illo, in illum dignissimos debitis aut dicta, perferendis quae vero
            beatae. Ad beatae nulla ab fuga ullam laboriosam labore officia
            ducimus tempora eos rem soluta, perspiciatis animi deleniti illo! Ad
            consequuntur perferendis dolores deserunt. Omnis officia obcaecati
            molestiae porro ex exercitationem facilis fugiat quam asperiores,
            eos itaque non accusantium, commodi rerum similique rem vitae!
            Consequatur odit culpa ipsam adipisci distinctio? Doloremque,
            repellendus!
          </Typography>
          <Typography
            variant="h3"
            id={MOCK_TABLE_OF_CONTENTS[1].to}
            className={cn(scopedStyles.post_sub_title)}
          >
            {MOCK_TABLE_OF_CONTENTS[1].postSubTitle}
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad pariatur
            quam cumque laborum ut nesciunt libero perferendis iure, sed, itaque
            omnis dolor id molestias. Tenetur nobis soluta repudiandae dolore,
            cupiditate accusantium dignissimos expedita possimus, optio error
            veniam non perferendis unde eveniet quaerat. Error assumenda tenetur
            tempore unde corrupti dolorum inventore neque quisquam fugiat! Sequi
            consequuntur obcaecati facilis ab reiciendis fugit animi natus
            fugiat aut iusto! Cum odio libero eligendi ipsa ipsum unde quibusdam
            iure consequatur dicta omnis nisi quos minus rerum blanditiis,
            obcaecati voluptatibus quaerat natus optio dolore nostrum. Quo,
            doloribus. A rerum aut magnam ex, ut est quos explicabo, ullam at
            atque laborum recusandae corrupti tenetur fugiat eum deleniti
            provident eaque tempora odit! Dolorum, perspiciatis? Accusantium
            odio pariatur mollitia similique, harum fugiat optio suscipit
            aliquid voluptatibus vel. Dolorum consequatur labore quaerat vitae
            distinctio, vero molestias sunt. Voluptates eius alias qui enim
            maiores repellendus suscipit a hic aut facere eveniet quaerat,
            aliquam, nisi deserunt, sit ipsum cum ipsam. Animi facere, modi
            minima quam quas, quibusdam optio illum repellat facilis maxime,
            perspiciatis illo eum soluta eligendi sed expedita? Architecto
            provident possimus quidem alias, nemo nobis doloribus temporibus
            pariatur fuga, numquam corrupti eligendi id similique aperiam veniam
            mollitia sint voluptas magnam necessitatibus error dolorum libero
            neque placeat! Consectetur dolore alias numquam veniam, impedit
            magnam voluptas. Error debitis aliquam labore id eius reiciendis
            optio eos. Repellat, ipsum inventore! Praesentium earum facere id
            repellat labore aspernatur ex corrupti cum atque minus veritatis
            illo, in illum dignissimos debitis aut dicta, perferendis quae vero
            beatae. Ad beatae nulla ab fuga ullam laboriosam labore officia
            ducimus tempora eos rem soluta, perspiciatis animi deleniti illo! Ad
            consequuntur perferendis dolores deserunt. Omnis officia obcaecati
            molestiae porro ex exercitationem facilis fugiat quam asperiores,
            eos itaque non accusantium, commodi rerum similique rem vitae!
            Consequatur odit culpa ipsam adipisci distinctio? Doloremque,
            repellendus!
          </Typography>
          <Typography
            variant="h3"
            id={MOCK_TABLE_OF_CONTENTS[2].to}
            className={cn(scopedStyles.post_sub_title)}
          >
            {MOCK_TABLE_OF_CONTENTS[2].postSubTitle}
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad pariatur
            quam cumque laborum ut nesciunt libero perferendis iure, sed, itaque
            omnis dolor id molestias. Tenetur nobis soluta repudiandae dolore,
            cupiditate accusantium dignissimos expedita possimus, optio error
            veniam non perferendis unde eveniet quaerat. Error assumenda tenetur
            tempore unde corrupti dolorum inventore neque quisquam fugiat! Sequi
            consequuntur obcaecati facilis ab reiciendis fugit animi natus
            fugiat aut iusto! Cum odio libero eligendi ipsa ipsum unde quibusdam
            iure consequatur dicta omnis nisi quos minus rerum blanditiis,
            obcaecati voluptatibus quaerat natus optio dolore nostrum. Quo,
            doloribus. A rerum aut magnam ex, ut est quos explicabo, ullam at
            atque laborum recusandae corrupti tenetur fugiat eum deleniti
            provident eaque tempora odit! Dolorum, perspiciatis? Accusantium
            odio pariatur mollitia similique, harum fugiat optio suscipit
            aliquid voluptatibus vel. Dolorum consequatur labore quaerat vitae
            distinctio, vero molestias sunt. Voluptates eius alias qui enim
            maiores repellendus suscipit a hic aut facere eveniet quaerat,
            aliquam, nisi deserunt, sit ipsum cum ipsam. Animi facere, modi
            minima quam quas, quibusdam optio illum repellat facilis maxime,
            perspiciatis illo eum soluta eligendi sed expedita? Architecto
            provident possimus quidem alias, nemo nobis doloribus temporibus
            pariatur fuga, numquam corrupti eligendi id similique aperiam veniam
            mollitia sint voluptas magnam necessitatibus error dolorum libero
            neque placeat! Consectetur dolore alias numquam veniam, impedit
            magnam voluptas. Error debitis aliquam labore id eius reiciendis
            optio eos. Repellat, ipsum inventore! Praesentium earum facere id
            repellat labore aspernatur ex corrupti cum atque minus veritatis
            illo, in illum dignissimos debitis aut dicta, perferendis quae vero
            beatae. Ad beatae nulla ab fuga ullam laboriosam labore officia
            ducimus tempora eos rem soluta, perspiciatis animi deleniti illo! Ad
            consequuntur perferendis dolores deserunt. Omnis officia obcaecati
            molestiae porro ex exercitationem facilis fugiat quam asperiores,
            eos itaque non accusantium, commodi rerum similique rem vitae!
            Consequatur odit culpa ipsam adipisci distinctio? Doloremque,
            repellendus!
          </Typography>
          <Typography
            variant="h3"
            id={MOCK_TABLE_OF_CONTENTS[3].to}
            className={cn(scopedStyles.post_sub_title)}
          >
            {MOCK_TABLE_OF_CONTENTS[3].postSubTitle}
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad pariatur
            quam cumque laborum ut nesciunt libero perferendis iure, sed, itaque
            omnis dolor id molestias. Tenetur nobis soluta repudiandae dolore,
            cupiditate accusantium dignissimos expedita possimus, optio error
            veniam non perferendis unde eveniet quaerat. Error assumenda tenetur
            tempore unde corrupti dolorum inventore neque quisquam fugiat! Sequi
            consequuntur obcaecati facilis ab reiciendis fugit animi natus
            fugiat aut iusto! Cum odio libero eligendi ipsa ipsum unde quibusdam
            iure consequatur dicta omnis nisi quos minus rerum blanditiis,
            obcaecati voluptatibus quaerat natus optio dolore nostrum. Quo,
            doloribus. A rerum aut magnam ex, ut est quos explicabo, ullam at
            atque laborum recusandae corrupti tenetur fugiat eum deleniti
            provident eaque tempora odit! Dolorum, perspiciatis? Accusantium
            odio pariatur mollitia similique, harum fugiat optio suscipit
            aliquid voluptatibus vel. Dolorum consequatur labore quaerat vitae
            distinctio, vero molestias sunt. Voluptates eius alias qui enim
            maiores repellendus suscipit a hic aut facere eveniet quaerat,
            aliquam, nisi deserunt, sit ipsum cum ipsam. Animi facere, modi
            minima quam quas, quibusdam optio illum repellat facilis maxime,
            perspiciatis illo eum soluta eligendi sed expedita? Architecto
            provident possimus quidem alias, nemo nobis doloribus temporibus
            pariatur fuga, numquam corrupti eligendi id similique aperiam veniam
            mollitia sint voluptas magnam necessitatibus error dolorum libero
            neque placeat! Consectetur dolore alias numquam veniam, impedit
            magnam voluptas. Error debitis aliquam labore id eius reiciendis
            optio eos. Repellat, ipsum inventore! Praesentium earum facere id
            repellat labore aspernatur ex corrupti cum atque minus veritatis
            illo, in illum dignissimos debitis aut dicta, perferendis quae vero
            beatae. Ad beatae nulla ab fuga ullam laboriosam labore officia
            ducimus tempora eos rem soluta, perspiciatis animi deleniti illo! Ad
            consequuntur perferendis dolores deserunt. Omnis officia obcaecati
            molestiae porro ex exercitationem facilis fugiat quam asperiores,
            eos itaque non accusantium, commodi rerum similique rem vitae!
            Consequatur odit culpa ipsam adipisci distinctio? Doloremque,
            repellendus!
          </Typography>
        </div>
      }
    />
  );
}

export default memo(TechBlogSinglePost);
