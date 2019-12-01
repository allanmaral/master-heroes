import React, { useEffect, useState } from 'react';

import HeroApi from '../../services/HeroApi';
import GameSettings from '../../config/gameSettings';
import shuffle from '../../util/shuffle';

export const withHeroesLoader = Component => {
  const WithHeroesLoader = props => {
    const [loading, setLoading] = useState(false);
    const [heroesList, setHeroesList] = useState([]);

    const generateCardsFromHeroes = heroes => {
      // Get a name deferent from the hero with id 'id'
      const getDiferentName = (index, id) => {
        while (heroes[index].id === id) {
          return getDiferentName(Math.floor(Math.random() * heroes.length), id);
        }
        return heroes[index].name;
      };

      return heroes.slice(0, GameSettings.numberOfCards).map((hero, index) => {
        const name1 = getDiferentName(index, hero.id);
        let name2;
        do {
          name2 = getDiferentName(index, hero.id);
        } while (name2 === name1);

        return {
          id: hero.id,
          name: hero.name,
          options: shuffle([hero.name, name1, name2]),
          image: hero.images.sm,
        };
      });
    };

    useEffect(() => {
      const LoadHeroes = async () => {
        setLoading(true);
        try {
          const { data } = await HeroApi.get('/all.json');
          const heroes = generateCardsFromHeroes(shuffle(data));
          setHeroesList(heroes);
          setLoading(false);
        } catch (err) {
          setLoading(false);
          setHeroesList([]);
          console.error(err);
        }
      };
      LoadHeroes();
    }, []);

    return (
      <Component
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        loading={loading}
        heroesList={heroesList}
      />
    );
  };
  return WithHeroesLoader;
};

export default withHeroesLoader;
