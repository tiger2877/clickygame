import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
import "./App.css";

const shuffleCard = characters => characters.sort(() => Math.random() - 0.5);
class App extends Component {
 
  // Setting this.state.characters to the characters json array
  state = {
    characters,
    cards: characters[Math.round(Math.random())],
    clickedImages: [],
    currentScore: 0,
    highScore: 0,
    comment: 'Click an image to start',
  };

  resetGame = () => {
    this.setState(prevState => {
      const newSet = prevState.character;
      return {
        cards: newSet,
        clickedImages: [],
        currentScore: 0,
        highScore: prevState.highScore,
        comment: 'Click an image to start',
      };
    });
  };

  handleClick= id => {

    const sortedImages = shuffleCard(this.state.characters);
    this.setState(prevState => {
      if (!prevState.clickedImages.find(element => element === id)) {
        return {
          cards: sortedImages,
          clickedImages: [...prevState.clickedImages, id],
          currentScore: prevState.currentScore + 1,
          highScore: prevState.highScore < prevState.currentScore + 1 ? prevState.highScore + 1 : prevState.highScore,
          comment: 'Correct!',
        };
      } else {
        return {
          cards: [characters][Math.round(Math.random())],
          clickedImages: [],
          currentScore: 0,
          highScore: prevState.highScore,
          comment: 'Click an image to start',
        };
      }
    });
  };

  // Map over this.state.characters and render a CharacterCard component for each character object
  render() {
   console.log(this.props);

    return (

      <Wrapper>
        {this.state.characters.map(character => (
          <CharacterCard
            handleClick={this.handleClick}
            id={character.id}
            key={character.id}
            image={character.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;