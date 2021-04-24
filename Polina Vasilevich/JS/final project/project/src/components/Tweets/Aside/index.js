import React from "react";
import PropTypes from "prop-types";

import Article from "./Article";
import Categories from "./Categories";
import IconsList from "../../IconsList";
import Button from "../../Button";
import Form from "../../Form";
import Photos from "../../Photos";
import MainContainer from "../../MainContainer";

import { Aside, Search, Arrow } from "./styles";
class AsideComponent extends React.Component {
  state = { posts: this.props.items.posts.items };

  searchByTitle = (title, value) => {
    return title.toLowerCase().includes(value.toLowerCase());
  };

  searchByDate = (date, value) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return (
      String(date.getFullYear()).includes(value) ||
      String(months[date.getMonth()])
        .toLowerCase()
        .includes(value.toLowerCase()) ||
      String(date.getDate()).includes(value)
    );
  };

  handleFilterList = (e) => {
    let { value } = e.target;

    const filteredPosts = this.props.items.posts.items.filter(
      ({ title, date }) =>
        this.searchByTitle(title, value) || this.searchByDate(date, value)
    );

    this.setState({ posts: filteredPosts });
  };

  render() {
    const { style, handleClick } = this.props;
    const { posts, tags, photos, form, categories, archive } = this.props.items;

    return (
      <MainContainer
        settings={{
          stylesBlock: "aside",
          backgroundColorMainContainer: "aside",
          heightMainContainer: "tweets",
          mediaBlock: "aside",
        }}
        styles={style}
        contentContainer={
          <Aside id="aside">
            <Arrow onClick={handleClick}></Arrow>
            <Search
              type="search"
              placeholder="Search..."
              onChange={this.handleFilterList}
            ></Search>
            <Article
              items={posts}
              contentContainer={
                <IconsList
                  items={this.state.posts}
                  settings={{
                    heightImg: "111px",
                    widthImg: "111px",
                    positionIcons: "left",
                    heightMainContainer: "tweets",
                    stylesText: "asidePostsTitle",
                    stylesBlock: "asideIconsList",
                    adaptiveIcons: "aside",
                  }}
                />
              }
            />
            <Article
              items={tags}
              contentContainer={
                <div>
                  {tags.items.map((tag) => {
                    return (
                      <Button
                        key={tag}
                        buttonLabel={tag}
                        settings={{
                          widthButton: "auto",
                          stylesButton: "grey",
                        }}
                      />
                    );
                  })}
                </div>
              }
            />
            <Form
              idForm="form4"
              items={form}
              settings={{
                stylesText: "tweets",
                paddingLeftRight: "none",
                paddingTop: "20px",
                paddingBottom: "70px",
                positionText: "left",
                alignItems: "left",
                sizeInput: "tweets",
                widthButton: "tweets",
              }}
              style={{ margin: "20px 0" }}
            />
            <Article
              items={photos}
              contentContainer={
                <Photos
                  items={photos}
                  settings={{
                    heightImg: "105px",
                    widthImg: "100%",
                    widthItemGridContainer: "100px",
                    gridGap: "10px",
                    gridRowGap: "10px",
                    justifyContent: "start",
                  }}
                />
              }
            />
            <Article
              items={categories}
              contentContainer={<Categories items={categories.items} />}
            />
            <Article
              items={archive}
              contentContainer={<Categories items={archive.items} />}
            />
          </Aside>
        }
      />
    );
  }
}

AsideComponent.propTypes = {
  items: PropTypes.array,
  style: PropTypes.object,
};

AsideComponent.defaulfProps = {
  items: {
    posts: [],
    tags: [],
    photos: [],
    form: [],
    categories: [],
    archive: [],
  },

  style: {},
};

export default AsideComponent;
