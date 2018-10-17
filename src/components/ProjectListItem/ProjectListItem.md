Wszystkie elementy graficzne przekazywane są w propsach w formie adresów URL, z nazwą np. 'carrot' dla atrybutu alt obrazka.
Opis pod nazwą użytkownika również jest przekazywany w propsach jako tekst.

```js
<ProjectListItem
  userName="Stefan"
  userSurname="Kowalski"
  userImage={'https://cdn3.iconfinder.com/data/icons/avatar-55/64/Gardener-avatar-occupation-profession-woman-human-512.png'}
  fruits={[ 
  {
    image: 'https://cdn3.iconfinder.com/data/icons/spring-23/32/carrot-vegetable-spring-food-512.png',
    alt: 'carrot'
  },
  {
    image: 'https://cdn3.iconfinder.com/data/icons/fruits-8/512/apple-512.png',
    alt: 'apple'
      },
  {
    image: 'https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_cerejas-512.png',
    alt: 'cherry'
  },
  {
    image: 'https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_ameixa-512.png',
    alt: 'plum'
  },
  {
    image: 'https://cdn3.iconfinder.com/data/icons/veggies/512/tomato.png',
    alt: 'tomato'
  }
    ]}
  description="I like gardening and my dream is to grow my own vegetables"
  boardImage={"https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678074-map-512.png"}
/>
```