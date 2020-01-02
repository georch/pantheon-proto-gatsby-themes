import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout";
import Card from 'gatsby-theme-pantheon-core/src/components/card';

export default () => {
  const data = useStaticQuery(graphql`
    {
      drupal {
        articles: nodeQuery(filter: {conditions: [{operator: EQUAL, field: "type", value: ["article"]}]}) {
          entities {
            uuid: entityUuid
            id: entityId
            entityUrl {
              path
            }
            ... on Drupal_Node {
              title
            }
          }
        }
      }
    }
  `)

  console.log(data)

  const articles = data.drupal.articles.entities;

  return (
    <Layout title="Octahedroid starter">
      <Layout.Container flex >
      {articles && articles.map(article=>(
        <Card className="w-full lg:w-1/3">
          <Card.Intro>Intro</Card.Intro>
          <Card.Image name={`hero.png`}/>
          <div>Image...</div>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>Text</Card.Text>
          <Card.Link to={article.entityUrl.path}>Read more...</Card.Link>
        </Card>
      ))}
      </Layout.Container>
    </Layout>
  )
}

// const demoPosts = [
//   {
//     image: 'hero.png',
//     title: 'Post 1',
//     meta: 'Jan 1, 2020',
//     text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
//     to: '/',
//   },
//   {
//     image: 'hero.png',
//     title: 'Post 2',
//     meta: 'Jan 1, 2020',
//     text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
//     to: '/',
//   },
//   {
//     image: 'hero.png',
//     title: 'Post 3',
//     meta: 'Jan 1, 2020',
//     text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
//     to: '/',
//   },
//   {
//     image: 'hero.png',
//     title: 'Post 4',
//     meta: 'Jan 1, 2020',
//     text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
//     to: '/',
//   },
//   {
//     image: 'hero.png',
//     title: 'Post 5',
//     meta: 'Jan 1, 2020',
//     text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
//     to: '/',
//   },
// ]

// function IndexPage() {
//   return (
//     <Layout title="Octahedroid starter">
//       <Layout.Container flex >
//       {demoPosts && demoPosts.map(post=>(
//         <Card className="w-full lg:w-1/3">
//           <Card.Intro>{post.meta}</Card.Intro>
//           <Card.Image name={post.image}/>
//           <Card.Title>{post.title}</Card.Title>
//           <Card.Text>{post.text}</Card.Text>
//           <Card.Link to={post.to}>Read more...</Card.Link>
//         </Card>
//       ))}
//       </Layout.Container>
//     </Layout>
//   );
// }

// export default IndexPage;
