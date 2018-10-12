- Project board
- Przekazana klasa w pliku CSS ma przypisany kolor co zastąpimy grafiką.
- Klasa UNDEFINED będzie wypełniaczem pustych cell

```js
const fields = {
            "0": {
                "0": "tree",
                "4": "tree"
            },
            "1": {
                "2": "pond"
            },
            "4": {
                "4": "pond"
            }
        }

;<ProjectBoard fields={fields} size={5} />
```

- Dodanie klasy EDITABLE 

```js
const fields = {
            "0": {
                "0": "tree",
                "4": "tree"
            },
            "1": {
                "2": "pond"
            },
            "4": {
                "4": "pond"
            }
        }

;<ProjectBoard fields={fields} size={5} editable />
```