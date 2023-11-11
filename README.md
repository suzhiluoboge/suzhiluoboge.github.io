<head>
 <link rel="shortcut icon" type="image/x-icon" href="./favicon.ico">
</head>
<h1 align="center">素质萝卜哥的快乐生活</h1>

<h2 align="center"><a  href="https://tom.163.com">重振猫鼠荣光，我辈义不容辞！</a></h2>
## 什么是素质萝卜哥

**这很重要，好吗!?**
纯白之花是猫和老鼠中用来驱散敌人通过饮料获得的增益效果的道具。 然而一些没有父母的人用它用来“猫鼠上坟”，买给自己的敌人。 扰乱游戏风气，没有道德底线，恶意嘲讽他人。 [大神链接](https://ds.163.com/feed/6305bb49b4e5c000010a393b)

<p align="center"><img src="./image/first.png" width="100%"></p>
2023年6月29日（星期四），猫和老鼠更新后，纯白之花更新为纯净萝卜，其作用基本一样。

**这个网站旨在分享所有没有素质的猫鼠玩家，共同欣赏猫和老鼠中一些没有家人的玩家的精彩时刻，治疗您的低血压 [投稿](http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=YdfQNy9mwJmJLMjIZ_noswkbadI_xLWh&authKey=sa9pIeQ7KlqTVg8uy9Jom5du1ofDHXZAf4qgnbi3BT3Dz2DpK1mDXlj75W041AxY&noverify=0&group_code=429321217)[投稿须知](https://suzhiluoboge.github.io/#投稿须知)** .

## 投稿须知

### 建议：
- 确保 **游戏中素质玩家表现截屏** 被提交.
- 确保素质玩家的 **个人首页** 被截屏提交.
- 如有可能，请先在游戏中举报并截屏 **官方反馈邮件** 和素质玩家主页截屏一提交.
- 
此外，如有录屏（不超过30秒）一同提交更能体现玩家的素质。
### 

- **Click** on the card or card pile you want to move .The pile turns to **blue**.
- **Click** on the
  destination card and if the move is legal the cards will
  stack below the target.

## About the project.

### Drag and Drop

- Drag and drop is implemented with native html5 drag and drop api with @drag, @dragend, @dragenter eventlisteners on the Card.vue component.
- Libraries like Vue.draggable were not used as i had to write most of the drag and drop logic according to the solitaire game type and I also had to **MOVE** the stack of cards.
- Ghost image in drag is removed instead the **whole stack** of card moves with cursor change.

### CSS

- Each and every card is 100% css except the SVG of the suit in the center of the card,which is made by illustrator tool.

  <p align="center"><img  src="./readme_assets/4.png" width="30%"></p>

### 3 mode menu

Choose from 3 variants of solitaire form the main menu

<p align="center"><img  src="./readme_assets/menu.png" width="70%"></p>

# Variants

## **Klondike**

<p align="center">
<img  src="./readme_assets/3.png" width="80%">
</p>
<!-- <img src="./readme_assets/3.png" width="50%"> -->

## **Spider 4 Suit**

<p align="center">
<img  src="./readme_assets/5.png" width="80%">
</p>

## **Spider 1 Suit**

<p align="center">
<img  src="./readme_assets/1.png" width="80%">
</p>

## Project setup

```
npm install
npm run serve
```

## Future scope

- Add winning animation.

## Support on Beerpay

Hey dude! Help me out for a couple of :beers:!

[![Beerpay](https://beerpay.io/silent-lad/VueSolitaire/badge.svg?style=beer-square)](https://beerpay.io/silent-lad/VueSolitaire) [![Beerpay](https://beerpay.io/silent-lad/VueSolitaire/make-wish.svg?style=flat-square)](https://beerpay.io/silent-lad/VueSolitaire?focus=wish)

