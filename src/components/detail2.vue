<template>
   <div class="app-view-wrapper" ref="sourcemenu">
       <header>
           <div class="fill-height" :style="showicon">
               <a class="header-btn" @click="goback">
                   <img src="https://m.mi.com/static/img/icon-back3.cee4a42398.png" alt="">
               </a>
               <a class="header-btn">
                   <img src="https://m.mi.com/static/img/icon-share-white.10afb8d45d.png" alt="">
               </a>
           </div>
           <div class="fill-height1" :style="show">
               <a class="header-btn" @click="goback">
                   <img src="https://m.mi.com/static/img/icon-back2.2d09ed8aaf.png" alt="">
               </a>
               <div class="placeholder">
                   <a @click="to1"><span :class="{active1:productName==1}" @click="lian(1)">商品</span></a>
                   <a @click="to2"><span :class="{active1:productName==2}" @click="lian(2)">评价</span></a>
                   <a @click="to3"><span :class="{active1:productName==3}" @click="lian(3)">详情</span></a>
                   <a @click="to4"><span :class="{active1:productName==4}" @click="lian(4)">推荐</span></a>
               </div>
               <a class="header-btn">
                   <img src="https://m.mi.com/static/img/icon-share-black.faaff0b7f0.png" alt="">
               </a>
           </div>
       </header>
       <div class="section section-detail">
           <div class="swiper" id="1">
                   <swipperr></swipperr>
           </div>
       </div>
       <div class="section section-detail">
           <div class="product-price">
               <div class="price">
                   <div class="goods-price">
                       <div class="cur-price">
                           <span class="jine">￥</span>
                           <span class="number">1299</span>
                       </div>
                       <div class="origin-price">
                           <del>
                            <span class="jine">￥</span>
                           <span class="number">1299</span>
                           </del>                          
                       </div>
                   </div>
               </div>
               <div>
                   <div class="coupon-active">
                       <div class="overview-promotion">
                           <div class="overview-promotion-left">
                               <div class="cur-active">预计得130米金</div>
                           </div>
                           <div class="overview-promotion-right">
                               更多<img src="../assets/right1.png" alt="">
                           </div>
                       </div>
                   </div>                   
               </div>
           </div>
       </div>
       <div class="section section-detail">
           <div class="goods-name">Redmi K30</div>
       </div>
        <div class="section section-detail">
           <div class="brief">
               <div class="goods-brief">「6GB+128GB到手价仅1299元；+1元得200G云空间月卡；购机抽奖赢70英寸电视」</div>
            </div>
           <div class="point">
               <div class="desc">
                   <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAMAAADyQNAxAAAAxlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADa+ousAAAAQXRSTlMAAQIDBAcREhQXGBkaHR4hIiktNDY/QkpSVFpjaGtydnd4iIuQkpecnaaqra6ytLa9wMXIzM7S09nd3+Lt9Pf7/eNQAgYAAAFFSURBVDjLjZTZWoMwEEYHTFqouABhU0QWKwiCiqACWuv7v5QXVkkgn2TumJxkFv4ZgNGwaoR52w1dm4eGioFnyIqLKvE9m9ien1RFbKEZI+lpExHt9wBpJGpSXWIh2emz1eTiKusdmXYoQe3O30duHSgUtC1NmZOqbJbbP0wOyjXwbV0Gh+uSU5t0HO2M+jJr56cEvXepcMfXj890ULfXAQBQmo2J44vX3deeKSFLEQBYzdiCk/vPj7f3PduQxgLAcTR67nZPl8YLS0EUY1ALMjpurk6l8ylFChWMSmOdM0qrDAgTtEChJITchwUK/Bxab5HyWujsRcruYCCLFBkE3xLLS6xGsX6J9Z75j1yKFCqrCS4VxZjVF49aNdZUq3PqoNWJ7mFz+8DR/XSGjpQNb4bE5lFwtgX3hODOEdxfgrvw/736DUsmLY4YpirTAAAAAElFTkSuQmCC" alt="">
                   <span>【极限响应】120Hz流速屏，超快流畅刷新，开启阅读游戏新体验</span>
               </div>
               <div class="desc">
                   <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAADwUlEQVRYR83YWajuUxgG8N8xi0yJwoUxhAi5MXYkQ8a44EaU8cgUGYvMFDJPJzIWOjJmng65ERIZyhBC6GTIUDiGHr3f59ufvb//+s7Zaf9v9vBf71rPetfzPO+7/rOM9yyLVbAG9sI22BArY2n8jh/wIV7H4/gG3+PX1qVmNQ5cCttjT2yEgHsPH2EBvsVPWBGrYXVsgE0LzAd4Aq9gYdeaXaDyfhOcgq0wD8/j88rAqAWykWR0HczGQXgTV+B9/DUVuFGglsAeuL6AnIrvunY54v2quLwAHocn8edk46cClfQfigNrZ4+0pL0BcLK3b2X+AdxZxz8hdDJQAXQO1sX5eGOqHTWAmGxITmDrWuOTWiO87D/DoBJwEnbBYUXgRVy7MyyCuB0v4qrBjQ+Cyu9R19k4Ea91TvvvgBWwTE0cFf7RGLstrsZFpc5/yD8IKvKNr0RpDzUcWfixJXbFxmUH8ako81m83OBNOZn9i7fxvdhMH1QWuKn+PrqB1NnMMTgNa5dx9pITRX2Nu3Bm4+ZuLovInAt7mdq50O7WIPvExHPurUy8iwfLxePsO2IfrFQkvqDhOGMXz9Qpzc8CcefzqhRc2sCF9UqRye61uAQ/DsQtWaDjSTHP3YvMXVOfUSXs3IBaEzfgMrzaFYmTcSXm42B8NUnMcgX4CNyG/JzSwSt+O5yOOQG1Re32KHzZAOpuHFJOf8KI8XNwHV6o4/ylY+61cEt4GFBBF8MMKTuLJfbD+lVcR2X2cNxaoOLiP3eACh1ChQUBdX/Vtqhvup4sEENMtqLCGHHX8WXtqG92QKWMXFwdwHSBin/dg83Khx5unDiqPiug0hMdWdlqjB05LD1VlBeOPo29G2mRSdPizA2oz0rCLcrrAp1ji6GmVKVnOqDm74rrvY8C501nplIyYhfxvFT9VIanWtHUuH6mpoNTMcx41jVVctIQzm0k9yDuPqemQ30ppgEUI76wSlaLvQwnsq++cX1qeKIdcAdifqlzIflvYx5bhk/wqXEdfXC9zfFcmW98LiTvMsmp8E5w9HFrX2/S9F83Yic8hmPxxSJkaFB5/do3bpeQSdJq5MjCpZeq4H68GIASOqFLyD/G6aeWx6PVx79VXvTpYgL6Tz/VI1lr5xmVHV9yfxtdGYpnpQ6+MwXwEHzSzjPjW3v0+6ovb01OeJbCnCv78DOyR8/g1ttMvhGk7W19Yg+53+WWM/x03mYSMOPufb1dzLgb8iCwGfUtoQdsxn116QGbcd+nBpUyo77kDUv4f/nm+TftVA9F6RcZzAAAAABJRU5ErkJggg==" alt="">
                   <span>【旗舰工艺】旗舰AG工艺机身+双面康宁GG5保护玻璃</span>
               </div>
               <div class="desc">
                   <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAD5klEQVRYR83YaajtUxgG8N+VIfM8k7kMkZAyhSsylKuo++USHwxdY5kJUWZChowlIXQJH1BKfOCDzIRCmaduhihE6Dnes9vn2Pv813bP1V51ap/+a3jWs973eZ+15hitrYA1sB4Oxa7YGqtjOfyOH/EhXsVT+BY/4LfWpeY0dlwWe+EQbIOAew8fYTG+w89YBWthHWyF7QrMB3gaL+KPrjW7QOX7tjgTO2MRnsPnxcBMC2QjYXQTzMVReAPX4338NQzcTKCWwcG4tYCche+7djnD9zVxXQE8Gc/gz0H9h4EK/cfgyNrZky20NwAOe4cX84/ivjr+KUMHgQqgi7E5LsNrw3bUAGJQl5zALrXGx7VG4rLXpoPKgDOwH46tAP6Pa3cOS0Lci+dxY//G+0Hld7LrQpyOVzqn/adDNrIScjS/1l/jULvhJlxe2TkR/P2gkr7RlWTa4w1HthoOqqPYoIBFj97GE5WhXeCyoSMqbqN7kZkeqOzy9vr/xIag3rCCNOIZMe3f3C94Cxfh2S5UxfAdJREnZe3JyfYttAc2pP3GFQeb4U1kwtdLzaPu2dTeFY974rMGYJGLbCCn9EJARZ0vrVJwVccEK+K2SoKHa5Ivpo3JfOfj7BLLAxrj7Lxi/ZKAWr8Wuhovd4CKTFxRJWRh1bdBQ3bCg9i+6mOY7Gq741wsDKgdcSVOwJddIxu/J+YeqWNMAKfudbWNcGdYDqigi2CG8s5i2TVzfU+dDFPJ6LCWjOxqSbaQszigsqMU2WTfbLRMHp1LnH7ChBYlI1tasm9uQKWMJE7iAJa0rVzMn4rlkWx+aYRJ4yQuCKh4ouOLrRHGT3QNC9eUj4peRSYCJgwlHB6ayaIMWCwW566A+rS8TlfmDQK8Rx17zF0UPvUscybbAjahMdQ3DZgwGbhoSZlKzUvWpFyEoU0R37V/iWeK+/0j0N9jajZjKutHPBOjpxVrWzSqesb2Ymq2sy+Tx59HEnIc5+DaRrZ62bc0dCphcTNie3N8RzeAmqJTS0PRgyHFNQzFix/WEPBTFH2U2rc24ihiTXK3G9bC1C2pY+Uuj2tgakrta3UJybD5dSzv1O9vhiwWC/NAxVQ08O4GUFNcQvq3+qnUsghijjwu9RTE/Pe3iOgNWICvsAN+6gD1Lz+V/qM4z9jXBHHMXm7Gj5WNzZGFoXlYt8Cm77sdgLL2QOeZcaN49FyRwtI+2LLEM3PkcpkSk3viPQ3uYEaPnglHvc2sWlfysJLMyQPH14gTTenK20JX67zNZIKxu/dN7mrsbsj9wMbqLWES2Ni9ukwCG7v3qf7MGauXvOkp/b+8ef4NSw8NRWUUUyUAAAAASUVORK5CYII=" alt="">
                   <span>【便捷科技】多功能NFC手机就是公交卡，手机就是遥控器</span>
               </div>
           </div>
       </div>
       <div class="section section-detail">
            <div class="info">购机优选福利</div>           
       </div>
       <div class="section section-detail">
           <div class="classic-param">
               <div class="classic-param-item" v-for="item in list" :key="item.id">
                   <img :src="item.img" alt="">
                   <div class="classic-param-item-name">{{item.name}}</div>
                   <div class="classic-param-item-value">{{item.value}}</div>
               </div>
           </div>
       </div>
       <div class="section section-detail">
           <div class="rank-info">
               <a class="info-left"></a>
               <a class="info-right">
                   <div class="right-text">入选【手机直降热销榜】</div>
                    <i class="right-icon"></i>
               </a>
           </div>
       </div>
       <div class="section section-detail">
           <div class="line"></div>
       </div>
       <div class="section section-detail">
           <div class="card-box">
               <div class="card-box-top">
                   <div>
                       <div class="card-box-top-left">
                           已选
                       </div>
                       <div class="card-box-top-right1">
                           <div class="right-text">Redmi K30  6GB+128GB 花影惊鸿</div>
                           <i class="right-icon"></i>
                       </div>
                   </div>
                   <div>
                        <div class="card-box-top-left">送至</div>
                       <div class="card-box-top-right">
                           <div class="card-box-top-right-top">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAURmmrAAAAf3RSTlMAAQIDBAUKCwwOEBESExQVFhcYGRobHB0eHyAkJSYoKSotMDE2ODk/Qk5PUlpbXF1eX2FjaWprbG1ydnl6fX6AgYOEhYaHiIuUlZqcnZ6foKKsr7K1t7i5ur2+v8DFxsfIycrLzNLU1dbX2Nna2+Du7/Dx8/T19vf4+fr7/P3+i5i9oQAAAkFJREFUGBntwfs322AABuA3ilRpY2PTDnOpXSmbbXazVS90G6pKu0vZlRnGJpqWNMn7ry9fj+MgbXV+9jy4dCGujqFwdkNVN7LhoasunEfqnvyW55H818luCbU92NJ5gr45hlpa4ySLO6nh/paW/uHUTpFk1IOqWmcPaX6euC6hTOp6+sXkwTsPqpk5ZGk+IOGYFEiWeBBDZdI4WXrTjFOa35bIhxIq6d2mMduMM5rnDG71oILG1yWu+uEQWKX+qhFOHT9YeCxBUEKf9tRcSIEgPSnwewecbhe43QkhmLFoszJBCNd+U7sFpyg5J8GmZE2WmRkFNilJRuD0gbwHYdSiOh3oiqm0QhDuk+/htEnehJAjY01AU5zMQegjf8Fpn3RDUEk/bH5SheAm9+H0h/RAUEk/bF2kCsFD/oXTOjkAIUfGm4CmGLkCYYBch9MyOQIhZFGN+W9Mq7TGIIySy3B6QS42wKZkTJaZWQW2hkXyOZwGVe72QAhmLNqsTBBC7y73BuHUvkL9pQuCEsqpex9HfBBckzpzCpwanhX5sw8O/RssTkiooHONzLTjjCtZcq0TFd09pJVuwyltaYsHd1DFozyNWS9O8M4ZzI+jGjlaoD7vxTHvvM5CVEZV7gRppL044k0bZMKNWhIajaQPZb6kQS2B2txxjfqCDzbfgk4t7sY53DOksaQAypJBzrhxvmmNZkpRUia1adRDjmgspVIlahEZdZGjpGmSURn1imikFkH95Kl8fkrGf5DDYRmXLuwfIPyv3DLCuHAAAAAASUVORK5CYII=" alt="">
                            <span class="mr1x">北京市 东城区</span>
                            <span class="on1">有现货</span>
                            <i class="right-icon"></i>
                           </div>
                           <div class="mt2x gray">24点前付款，预计1月18日送达</div>
                       </div>
                   </div>
               </div>
               <div class="card-box-bottom">
                   <div class="serve-list">
                       <div class="serve-list-item">
                           <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAMAAADyQNAxAAAAq1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NbREAAAAOXRSTlMAAQIDBAUGBwgJCgsMDg8REhMUFRcYGRobHSAhIyUqLC0uLzAxNDY3ODk6PD5AQkNERUZHSUpLTE2r4yhyAAABn0lEQVQ4y42U0XaaUBBFB0okoNRCqFERk5QaCha9Ilz2/39ZH1QUJV2cx7vOmpk7s2dErjJtL05V1VQqjT3blD4Z/nqruUhv177xaJokiq5UMrkPFJZAU2dR4FpuEGV1A5RhJ9xoVYHOl0774ixzDdVqdGN601AsnE54Z1GAfmttxkpDPn4odZyDXl2ShhV8Oj3fdj6hCs+/KyF3ervj5FBORESMBIqx9GtcQGKIiK/QC/lKC43yRcz1V/mmr+4p59oUe0uz7DP9LKqPJ5Flw9YWT1P3hfqh4M+ziFOjPYkh6zPt4PBqiEgGsaQQ9aRTcJwZIiIRpKIgeDC97OF4JicAJRW4pzk9tdxNd6Bm59G4UEkDloiIzDfxebLhHo7zy/wsaNpY1l/qj9ZUXkF1oWrrMjbAr28i0z0cwmuNAajrH+1NA+/PLzs4zG8YjSC96Zf9u6FO1T3IGcS3vR+lABz9Djw12uvM0U4bUPPOSpzm2GFilOjDzLjncG3e8WV9d4w+vgayOoz7gTs0cB+H7fbAOzHw5gy8X0Nv4X/v6j/fPVqVkOu9NwAAAABJRU5ErkJggg==" alt="">
                            <span>小米自营</span>
                       </div>
                       <div class="serve-list-item">
                           <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAMAAADyQNAxAAAAq1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NbREAAAAOXRSTlMAAQIDBAUGBwgJCgsMDg8REhMUFRcYGRobHSAhIyUqLC0uLzAxNDY3ODk6PD5AQkNERUZHSUpLTE2r4yhyAAABn0lEQVQ4y42U0XaaUBBFB0okoNRCqFERk5QaCha9Ilz2/39ZH1QUJV2cx7vOmpk7s2dErjJtL05V1VQqjT3blD4Z/nqruUhv177xaJokiq5UMrkPFJZAU2dR4FpuEGV1A5RhJ9xoVYHOl0774ixzDdVqdGN601AsnE54Z1GAfmttxkpDPn4odZyDXl2ShhV8Oj3fdj6hCs+/KyF3ervj5FBORESMBIqx9GtcQGKIiK/QC/lKC43yRcz1V/mmr+4p59oUe0uz7DP9LKqPJ5Flw9YWT1P3hfqh4M+ziFOjPYkh6zPt4PBqiEgGsaQQ9aRTcJwZIiIRpKIgeDC97OF4JicAJRW4pzk9tdxNd6Bm59G4UEkDloiIzDfxebLhHo7zy/wsaNpY1l/qj9ZUXkF1oWrrMjbAr28i0z0cwmuNAajrH+1NA+/PLzs4zG8YjSC96Zf9u6FO1T3IGcS3vR+lABz9Djw12uvM0U4bUPPOSpzm2GFilOjDzLjncG3e8WV9d4w+vgayOoz7gTs0cB+H7fbAOzHw5gy8X0Nv4X/v6j/fPVqVkOu9NwAAAABJRU5ErkJggg==" alt="">
                            <span>小米自营</span>
                       </div>
                       <div class="serve-list-item">
                           <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAMAAADyQNAxAAAAq1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NbREAAAAOXRSTlMAAQIDBAUGBwgJCgsMDg8REhMUFRcYGRobHSAhIyUqLC0uLzAxNDY3ODk6PD5AQkNERUZHSUpLTE2r4yhyAAABn0lEQVQ4y42U0XaaUBBFB0okoNRCqFERk5QaCha9Ilz2/39ZH1QUJV2cx7vOmpk7s2dErjJtL05V1VQqjT3blD4Z/nqruUhv177xaJokiq5UMrkPFJZAU2dR4FpuEGV1A5RhJ9xoVYHOl0774ixzDdVqdGN601AsnE54Z1GAfmttxkpDPn4odZyDXl2ShhV8Oj3fdj6hCs+/KyF3ervj5FBORESMBIqx9GtcQGKIiK/QC/lKC43yRcz1V/mmr+4p59oUe0uz7DP9LKqPJ5Flw9YWT1P3hfqh4M+ziFOjPYkh6zPt4PBqiEgGsaQQ9aRTcJwZIiIRpKIgeDC97OF4JicAJRW4pzk9tdxNd6Bm59G4UEkDloiIzDfxebLhHo7zy/wsaNpY1l/qj9ZUXkF1oWrrMjbAr28i0z0cwmuNAajrH+1NA+/PLzs4zG8YjSC96Zf9u6FO1T3IGcS3vR+lABz9Djw12uvM0U4bUPPOSpzm2GFilOjDzLjncG3e8WV9d4w+vgayOoz7gTs0cB+H7fbAOzHw5gy8X0Nv4X/v6j/fPVqVkOu9NwAAAABJRU5ErkJggg==" alt="">
                            <span>小米自营</span>
                       </div>                       
                   </div>
                   <i class="right-icon"></i>
               </div>
           </div>
       </div>
       <div class="section section-detail">
           <div class="line"></div>
       </div>
       <div class="section section-detail">
           <div class="package">
              <a class="comments-title">
                  <div class="comments-title-left">用户评价</div>
                  <div class="comments-title-right">
                      <span>好评率99.6%</span>
                      <i class="right-icon1"></i>
                  </div>
              </a>
              <div class="comments-tags">
                  <div class="comments-tags-text">外观漂亮</div>
                  <div class="comments-tags-text">外观漂亮</div>
                    <div class="comments-tags-text">外观漂亮</div>
                  <div class="comments-tags-text">外观漂亮</div>
                  <div class="comments-tags-text">屏幕很大</div>
              </div>
                <div class="swiper-wrapper1">
                    <div class="swiper-box card-box">
                        <div class="comment-header">
                            <div class="avatar-img">
                                <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0599f465efe793fee4af47e6de005efd.png" alt="">
                            </div>
                            <div class="user-info">
                                <div class="user-name">960****83</div>
                                <div class="comment-date">2020-12-15</div>
                            </div>
                        </div>
                        <div class="comment-content">
                            <div class="text">
                                支持小米，支持国产。给母亲大人买的手机，母亲大人非常喜欢。外型好看，使用起...
                            </div>
                            <div class="photos">
                                <div class="img" v-for="item in photolist" :key="item.id">
                                    <img :src="item.img" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
       </div>
       <div class="section section-detail">
           <div class="line"></div>
       </div>
       <div class="section section-detail">
           <div class="package">
               <a class="topic-header">
                  <div class="topic-title">米粉点评团</div>
                  <div class="comments-title-right">
                      <i class="right-icon2"></i>
                  </div>
              </a>
              <div class="topic-body">
                  <a href="" v-for="item in articlelist" :key="item.id">
                    <div class="topic-item">
                      <div class="artic-img">
                          <img :src="item.img" alt="">
                      </div>
                    </div>
                  <div class="article-text">{{item.text}}</div>
                  <div class="article-addition">
                      <div class="article-author">
                          <img :src="item.authorimg" alt="">
                          <span>{{item.author}}</span>
                      </div>
                      <div class="article-info">
                          <div class="article-num">{{item.num}}</div>
                      </div>
                  </div>
                </a>
                  
              </div>
           </div>
       </div>
       <div class="section section-detail">
           <div class="swipper">
               <div class="swiper-wrapper1">
                    <el-carousel height="1.82rem">
                        <el-carousel-item v-for="item in 2" :key="item"></el-carousel-item>
                    </el-carousel>
                </div>
           </div>
       </div>
       <div class="section section-detail">
           <tuijian></tuijian>
       </div>
       <div class="section section-detail">
           <div class="line"></div>
       </div>
       <div class="section section-detail">
           <xiangqing></xiangqing>
       </div>
       <div class="section section-detail">
           <div class="guess-like">
               <div class="recommend-box">
                   <div class="recommend-title">猜你喜欢</div>
                   <div class="recommend-list">
                       <div class="goods-item" v-for="item in goodslist" :key="item.id">
                           <a class="exposure">
                               <div class="goods-img-box">
                                   <img :src="item.img" alt="">
                               </div>
                               <div class="goods-info">
                                   <div class="goods-name">{{item.name}}</div>
                                   <div class="goods-price">
                                       ￥{{item.price}}
                                   </div>
                               </div>
                           </a>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       <div class="abc">
            <div class="download-app-bottom-float">
                <a>
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7a858f89fdb2932ae4c3dd04d6f8674a.png" alt="">
                </a>
            </div>
            <div class="fixed-bar">
                 <a>
                    <img src="https://m.mi.com/static/img/top.451d650ecd.png" alt="">
                </a>
            </div>
       </div>       
       <div class="ui-mask" v-show="play">
           <transition>
            <div class="pop pop-product" v-show="play">
                <div class="close">
                    <i class="icon-close" @click="del"></i>
                </div>
                <div class="pro-info">
                    <div class="product-img">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="product-desc">
                        <div class="product-price">
                            <div class="cur-price">
                                ￥{{item.price}}
                            </div>
                            <div class="origin-price">
                                <del>￥2899</del>
                            </div>
                        </div>
                        <div class="name">
                        <span v-if="itemName==1">{{item.name}}</span>
                        <span v-if="itemName==2">Redmi K30 5G 8GB+128GB 时光独白</span>
                        <span v-if="itemName==3">Redmi K30 5G 8GB+256GB 时光独白</span>
                    </div>
                    </div>               
                </div>
                <div class="max5">
                    <div class="mt2x">
                        <div class="option-title">
                            版本
                        </div>
                        <div class="options-group">
                            <div class="option-item " :class="{on:itemName==1}" @click="toitem(1)">6GB+128GB</div>
                            <div class="option-item" :class="{on:itemName==2}" @click="toitem(2)">8GB+128GB</div>
                            <div class="option-item" :class="{on:itemName==3}" @click="toitem(3)">8GB+256GB</div>
                        </div>
                    </div>
                    <div class="mt2x">
                        <div class="option-title">
                            颜色
                        </div>
                        <div class="options-group">
                            <div class="option-item " :class="{on:itemName1==4}" @click="toitem1(4)">深海微光</div>
                            <div class="option-item" :class="{on:itemName1==5}" @click="toitem1(5)">紫玉幻境</div>
                            <div class="option-item" :class="{on:itemName1==6}" @click="toitem1(6)">时光独白</div>
                        </div>
                    </div>
                    <div class="layout">
                    <div class="option-title">购买数量</div>
                    <div class="xm-input-number">
                        <div class="input-sub"><i class="image-icons icon-line" @click="minus"></i></div>
                        <div class="input-num"><span>{{item.num}}</span></div>
                        <div class="input-add"><i class="image-icons icon-cross" @click="addnum"></i></div>
                    </div>
                    </div>
                    <div class="ywb">
                        <div class="option-title">
                            小米服务
                        </div>
                        <div class="ywb-row">
                            <div class="option-title-sub">
                                <img src="https://m.mi.com/static/img/icon-accident.77f043afba.png" alt="">
                                <div class="tit">意外保护</div>
                                <a class="service-url">
                                    <img src="data:image/png;base64,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" alt="">
                                    <span>服务介绍</span>
                                </a>
                            </div>
                            <div class="options-group">
                                <div class="layout">
                                    <div class="option-item">
                                        <span>意外保障服务</span>
                                        <span>249元</span>
                                    </div>
                                    <div class="option-item">
                                        <span>意外保障服务</span>
                                        <span>249元</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="btn-bottom">
                    <div class="action-box" @click="increase(item)">
                        <a>加入购物车</a>
                    </div>
                </div>
            </div>
            </transition>
       </div>      
       <footer>
           <div class="bgw">
               <a class="footer-btn router-link-active" @click="ret">
                   <img src="../assets/02.png" alt="">
                   <span>首页</span>
               </a>
               <a class="footer-btn router-link-active">
                   <img src="https://m.mi.com/static/img/icon-service.1ffa47012a.png" alt="">
                   <span>客服</span>
               </a>
               <a class="footer-btn router-link-active" @click="bottomBarClick('fourthtab')">
                   <img src="../assets/08.png" alt="">
                   <span class="bubble" v-show="count1">{{count}}</span>
                   <span>购物车</span>
               </a>
               <div class="action-box flex" >
                   <a class="btn buy-btn" @click="add">加入购物车</a>
               </div>
           </div>
       </footer>
   </div>
</template>
<script>
import swipper from "../components/swipper2.vue"
import jian from "../components/tuijian.vue"
import xiangqing from "../components/xiangqing.vue"
export default {
    computed:{
        goodsList(){
            return this.$store.state.goodsList
        },
        componentName(){
          return this.$store.state.componentName;
        },
        count(){
            return this.$store.state.count
        }
    },
    components:{
        "swipperr":swipper,
        "tuijian":jian,
        "xiangqing":xiangqing
    },
    data(){
        return{
            count1:true,
            item:{
                img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1585647770.23532865.jpg",
                name:"Redmi K30 5G 6GB+256GB 冰翡翠",
                price:1999,
                num:1,
                img2: "../images/保.jpg",
                name2: " 换新延保1年 99元",
                showBei:0,
                flag:true,
            },
            productName:1,
            play:false,
            itemName:1,
            itemName1:4,
            show:{
                opacity:0
            },
            showicon:{
                opacity:1
            },
            scroll:"",
            screenHeight:"",
            list:[
                {
                    id:1,
                    img:"https://i8.mifile.cn/b2c-mimall-media/7692726e7a1dd34a3b1b4ede8aca020d.png",
                    name:"四摄像头",
                    value:"6400万+800万+200万+200万像素"
                },
                {
                    id:2,
                    img:"https://i8.mifile.cn/b2c-mimall-media/7692726e7a1dd34a3b1b4ede8aca020d.png",
                    name:"四摄像头",
                    value:"6400万+800万+200万+200万像素"
                },
                {
                    id:3,
                    img:"https://i8.mifile.cn/b2c-mimall-media/7692726e7a1dd34a3b1b4ede8aca020d.png",
                    name:"四摄像头",
                    value:"6400万+800万+200万+200万像素"
                },
                {
                    id:4,
                    img:"https://i8.mifile.cn/b2c-mimall-media/7692726e7a1dd34a3b1b4ede8aca020d.png",
                    name:"四摄像头",
                    value:"6400万+800万+200万+200万像素"
                }
            ],
            photolist:[
                {
                    id:1,
                    img:"https://i1.mifile.cn/a2/1607996115_7905022_s1085_1080wh.jpg",
                },
                {
                    id:2,
                    img:"https://i1.mifile.cn/a2/1607996114_7468669_s1110_967wh.jpg",
                }
            ],
            articlelist:[
                {
                    id:1,
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e337f0b9e573fcbde05e04f1aed13379.jpg?w=800&h=800",
                    text:"谈谈Redmi的极致性...",
                    author:"卢伟冰",
                    authorimg:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7ef6dfb615743f2cb81ce3a6b55a5da6.jpg",
                    num:"3.6万"
                },
                {
                    id:2,
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e337f0b9e573fcbde05e04f1aed13379.jpg?w=800&h=800",
                    text:"谈谈Redmi的极致性...",
                    authorimg:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7ef6dfb615743f2cb81ce3a6b55a5da6.jpg",
                    author:"卢伟冰",
                    num:"3.6万"
                },
            ],
            goodslist:[
                {
                    id:1,
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1cae0b41b12f847c75e24513a2c432e9.png?thumb=1&w=360&h=360",
                    name:"黑鲨3，腾讯Solar Core游戏引擎 双模5G",
                    price:"3499"
                },
                {
                    id:2,
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1cae0b41b12f847c75e24513a2c432e9.png?thumb=1&w=360&h=360",
                    name:"黑鲨3，腾讯Solar Core游戏引擎 双模5G",
                    price:"3499"
                },
                {
                    id:3,
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1cae0b41b12f847c75e24513a2c432e9.png?thumb=1&w=360&h=360",
                    name:"黑鲨3，腾讯Solar Core游戏引擎 双模5G",
                    price:"3499"
                },
                {
                    id:4,
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1cae0b41b12f847c75e24513a2c432e9.png?thumb=1&w=360&h=360",
                    name:"黑鲨3，腾讯Solar Core游戏引擎 双模5G",
                    price:"3499"
                },
                {
                    id:5,
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1cae0b41b12f847c75e24513a2c432e9.png?thumb=1&w=360&h=360",
                    name:"黑鲨3，腾讯Solar Core游戏引擎 双模5G",
                    price:"3499"
                },
                {
                    id:6,
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1cae0b41b12f847c75e24513a2c432e9.png?thumb=1&w=360&h=360",
                    name:"黑鲨3，腾讯Solar Core游戏引擎 双模5G",
                    price:"3499"
                },
            ]
        }
    },
    methods:{
        bottomBarClick(name){
            this.$router.go(-1)
           this.$store.commit("bottomBarClick",name)
        },
        increase(item){
            this.$store.commit("increase",item)
            this.countNum();
        },
        countNum() {
            let sum = 0;
            for (let i = 0; i < this.$store.state.goodsList.length; i++) {
                if (this.$store.state.goodsList[i].flag == true) {
                    sum += this.$store.state.goodsList[i].num;
                }
            }
            this.$store.state.count = sum;
        },
        to1(){
            document.documentElement.scrollTop=0
        },
        to2(){
            document.documentElement.scrollTop=950
        },
        to3(){
            document.documentElement.scrollTop=2100
        },
        to4(){
            document.documentElement.scrollTop=13123
        },
        menu() {
            this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
        },
        handleScroll(){
            this.screenHeight = document.documentElement.scrollTop || document.body.scrollTop;
        },
        goback(){
            this.$router.go(-1)
        },
        toitem(name){
            this.itemName=name;
        },
        toitem1(name){
            this.itemName1=name;
        },
        add(){
            this.play=true;
        },
        del(){
            this.play=false;
        },
        minus(){
           if(this.item.num>=2){
               this.item.num--
           }           
        },
        addnum(){
            if(this.item.num<20){
                 this.item.num++
            }           
        },
        lian(name){
            this.productName=name
        },
        ret(){
            this.$router.go(-1)
        }
    },
    mounted() {
        window.addEventListener('scroll', this.menu)
        window.addEventListener('scroll', this.handleScroll)       
    },
    watch:{
        goodsList(newVal){
            if(newVal.length==0){
            this.count1=false
            }
            else{
            this.count1=true
            }
        },
        screenHeight(newVal){
            if(newVal>0&&newVal<950){
                this.productName=1
            }
            else if(newVal>=950&&newVal<2100){
               this.productName=2
            }
            else if(newVal>=2100&&newVal<13123){
               this.productName=3
           }
           else{
               this.productName=4
           }
        },
        scroll(newVal){
            if(newVal>200){
                if(this.show.opacity<1){
                    this.show.opacity +=0.1
                }
                if(this.show.opacity>=1){
                    this.show.opacity = 1
                }
                if(this.showicon.opacity>0){
                    this.showicon.opacity -=0.1
                }
                if(this.showicon.opacity<0){
                    this.showicon.opacity = 0
                }
            }else{
                if(newVal<=200){
                    if(this.show.opacity>0)
                        this.show.opacity-=0.1
                    if(this.show.opacity<0){
                        this.show.opacity=0
                    }
                    if(this.showicon.opacity<1){
                        this.showicon.opacity +=0.1
                    }
                    if(this.showicon.opacity>=1){
                        this.showicon.opacity = 1
                    }
                }
            }
        },
    }
}
</script>
<style scoped>
.footer-btn .bubble{
    position: absolute;
    width: .32rem;
    line-height: .32rem;
    height: .32rem;
    box-sizing: border-box;
    font-size: .13rem;
    overflow: hidden;
    text-align: center;
    border-radius: .32rem;
    background: linear-gradient(45deg,#ff7d00,#ff5934);
    color: #fff;
    top: .09rem;
    left: 50%;
    transform: translate3d(.1rem,-20%,0);
    font-style: normal;
}
.app-view-wrapper{
    padding-bottom:50px;
    user-select: none;
}
header{
    height: .9rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
}
header .fill-height{
    height: 100%;
    display: flex;
    justify-content: space-between;
}
.header-btn{
    position: relative;
    margin: 0 .2rem;
    color: #ddd;
    width: .806rem;
    height: .806rem;
}
.header-btn>img{
    padding-bottom: .4rem;
    width: 100%;
    height: 100%;
}
.swiper{
    margin-top: -50px;
}
.el-carousel__item:nth-child(2n) {
     background:url("https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/42db5a05a5d5627075e214e842d08f9e.jpg") center center no-repeat;
     background-size:100%;
}  
.el-carousel__item:nth-child(2n+1) {
     background:url("https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c44676f48c26fc43b06454ac96199728.jpg") center center no-repeat;
     background-size:100%;
}

.price{
    margin-top: .22rem;
}
.goods-price{
    display: flex;
    justify-content: flex-start;
}
.cur-price{
    position: relative;
    padding-left: .3rem;
    color: #ff6700;
    font-size: .48rem;
    font-weight: 700;
}
.cur-price .jine{
    position: absolute;
    font-size: .28rem;
    left: .1rem;
}
.origin-price{
    margin-left: .16rem;
    color: rgba(0,0,0,.54);
    font-size: .24rem;
    line-height: .8rem;
}
.coupon-active{
    text-align: center;
}
footer{
    background: transparent;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
}
footer .bgw{
    background-color: hsla(0,0%,100%,.96)!important;
    width: 100%;
    height: .96rem;
    border: 1px solid rgba(0,0,0,.1);
    overflow: hidden;
    display: flex;
    justify-content: space-around;
}
.bgw a{
    display: flex;
    flex-direction: column;
    text-align: center;
}
footer .footer-btn:first-child{
    padding-left: .2rem;
}
footer .footer-btn{
    position: relative;
    width: .64rem;
    height: .64rem;
    padding: 0 .1rem;
}
.footer-btn img{
    display: inline-block;
    width: 100%;
    height: 100%;
}
.footer-btn span{
    position: relative;
    top: -.05rem;
    color: rgba(0,0,0,.54);
    font-size: .2rem;
}
.action-box{
    padding-right: .32rem;
    padding-left: .2rem;
    text-align: right;
}
.action-box .buy-btn{
    display: inline-block;
    width: 3.68rem;
    height: .72rem;
    line-height: .72rem;
    background: url("https://m.mi.com/static/img/icon-buy-btn.c3f7faffa2.png");
    background-size: 100% 100%;
    border-radius: .4rem;
}
.btn{
    outline: 0;
    color: #fff;
    text-align: center;
    font-size: .28rem;
}
.overview-promotion{
    background-color: #fff2ef;
    border-radius: .08rem;
    margin: .16rem .32rem;
    font-size: .2rem;
    position: relative;
    overflow: hidden;
    padding: 0.19rem 0rem 0.09rem 0.12rem;
    display: flex;
    justify-content: space-between;
}
.overview-promotion-left{
    max-width: 5.2rem;
    max-height: 43px;
    overflow: hidden;
    position: relative;
}
.overview-promotion-left>.cur-active{
    color: #ff5934;
    font-size: .2rem;
    border: 1px solid #ff5934;
    margin-left: .1rem;
    margin-bottom: .1rem;
    align-items: center;
    border-radius: .04rem;
    overflow: hidden;
    height: 17px;
}
.overview-promotion-right{
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: .9rem;
    color: #ff5934;
    margin-bottom: .08rem;
    font-size: .2rem;
    line-height: .36rem;
}
.overview-promotion-right img{
    width: .25rem;
    height: .25rem;
    vertical-align: middle;
}
.goods-name{
    background: #fff;
    text-align: left;
    margin: 0 .32rem;
    line-height: 1.5em;
    color: #000;
    font-weight: 700;
    font-size: .32rem;
    margin-top: .16rem;
    margin-bottom: .16rem;
}
.brief{
    background: #fff;
    text-align: left;
    margin: 0 .32rem;
}
.brief>div{
    font-size: .24rem;
    margin-top: .12rem;
    margin-bottom: .12rem;
    line-height: 1.5em;
    overflow: hidden;
    text-overflow: ellipsis;
}
.point{
    margin-top: .12rem;
    margin-bottom: .28rem;
    background: #fff;
    text-align: left;
    margin: 0 .32rem;
}
.point>div{
    text-align: left;
    color: #000;
    margin-bottom: .16rem;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: .24rem;
}
.desc>img{
    width: .24rem;
    height: .24rem;
    margin-right: .1rem;
}

.info{
    padding: 0 .3rem 0 .12rem;
    display: block;
    color: #444;
    background-color: #f0f0f0;
    height: .4rem;
    line-height: .4rem;
    border-radius: 10px;
    margin-top: .28rem;
    margin-bottom: .28rem;
    font-size: .24rem;
    background: #fff;
    text-align: left;
    margin: 0 .32rem;
}
.classic-param{
    padding: 0;
    text-align: center;
    color: #000;
    border-top: 1px solid rgba(0,0,0,.05);
    margin-top: .28rem;
    overflow-x: auto;
    overflow-y: hidden;
    display: flex;
    justify-content: space-around;
}
.classic-param-item{
    min-width: 1.68rem;
    padding: .32rem .08rem;
    border: none;
    display: flex;
    flex-direction: column;

}
.classic-param-item img{
    margin: 0 auto;
    width: .3rem;
    height: .3rem;
    margin-bottom: .04rem;
}
.classic-param-item .classic-param-item-name{
    font-size: .24rem;
    padding: .08rem 0;
}
.classic-param-item .classic-param-item-value{
    font-size: .2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

}
.rank-info{
    display: flex;
    padding: .28rem .2rem .28rem .3rem;
    background: url("https://m.mi.com/static/img/rank-list-bg.6cc4bce178.png") no-repeat;
    background-size: 100% 100%;
}
.info-left{
    background: url("https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/049ec9bcc093365914620c46965bf9ab.png");
    margin-right: .24rem;
    width: 1.25rem;
    height: .31rem;
    background-size: auto 100%;
    background-repeat: no-repeat;
}
.info-right{
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
}
 .right-text{
    flex-grow: 1;
    font-size: .24rem;
    line-height: .24rem;
    color: #000;
    text-align: left;
}
 .right-icon{
    margin-left: auto;
    display: block;
    width: .36rem;
    height: .36rem;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAYAAACo29JGAAABrklEQVRoQ+2ZyUpEMRBFTzt8gK4UnHUjCOL/f4RLN46tGxf6Ac5cMBKCkLeoSqeLBBqaziOvTu6tVJKeEbjNArMx4JZV3aHcUK7DGRi27FCUSSEN5SZNU4cPDeU6FGVSSNbKrQDbwCbwCjwDH5MicXjIGm4LOIO/PesjcAu8OcReHdIa7hTYyd76BTwB18BnNRrjB6zhZMcLQPbM2z1wAwi2WbOG03h7wCGwXlDMgbuWFrWGE88qsAucZLmn35NFpWCTRcYDLgl28A+g+mRR5eC3tz894RS7APUpLSpAfd49Ab3hZNGUg/qemiyayoSbRb3hBKN3JIvmQsmWyaIuAraAS4EfAfvAWkGiFVSQ5gq2hJMtBScVc4tKwQePHGwJJ8FU3FUDpWLelIMCVJkwW0VbwyWg418VSwUvgRerBFwUnErDObBRgGgferXscCGVC5tzoVfLkHUu7A4l9N4y7KlAOxEt+WUtXerzXNiTeOg7lNC3X6HvLUPfOIf+r8DqtGIyzqLOcybB1wYZcLUZ6rV/KNerMrW4hnK1Geq1fyjXqzK1uIZytRnqtT+0cj91gmA4iskT1QAAAABJRU5ErkJggg==");
    background-position: 50%;
    background-size: contain;
}
.line{
    height: 0.2rem;
    background: rgb(246, 246, 246);
}

.card-box-top-right{
    display: flex;
    flex-grow: 1;
    flex-direction: column;
}
.card-box-top-right1{
    display: flex;
    flex-grow: 1;
}
.card-box-top>div{
    position: relative;
    text-align: left;
    line-height: .36rem;
    padding: .26rem 0 0 .32rem;
    display: flex;
}
.card-box-top-left{
    font-size: .24rem;
    color: #000;
    margin-right: .4rem;
    min-width: .5rem;
    font-weight: 500;
}
.card-box-top-right-top{
    display: flex;
}
.card-box-top-right-top img{
    width: .32rem;
    height: .32rem;
    margin-right: .06rem;
}
.card-box-top-right-top .mr1x{
    flex-shrink: 0;
    font-size: .24rem;
}

.card-box-top-right-top .on1{
    font-size: .24rem;
    flex-shrink: 0;
    color: #ff5934;
    margin-right: .05rem;
}
.gray{
    color: rgba(0,0,0,.54);
    padding-left: .37rem;
    font-size: .24rem;
}
.card-box-bottom{
    background: #fcfcfc;
    line-height: .3rem;
}
.fill-height1{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: .9rem;
    display: flex;
    justify-content: space-between;
    background: white;
}
.card-box-bottom{
    display: flex;
    justify-content: space-between;
    padding: .16rem .32rem;    
}
.placeholder{
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: .81rem;
    flex-grow:1 ;
    text-align: center;
}
.placeholder a{
    color: black;
    text-decoration: none;
    margin: 0 .16rem;
    padding-bottom: 20px;
}
.placeholder span{ 
    font-size: .253rem;  
    position: relative;
}
.active1{
    color: #ff5934;
    border-bottom: 2px solid #ff5934;
}
.serve-list{
    display: flex;
    flex-grow: 1;
}
.serve-list-item{
    display: flex;
    align-items: center;
    font-size: .24rem;
    line-height: .4rem;
    margin-right: .32rem;
}
.serve-list-item>img{
    height: .24rem;
    width: auto;
    margin-right: .08rem;
}
.package{
    width: 7.2rem;
    text-align: left;
    z-index: auto;
    border-bottom: 1px solid rgba(0,0,0,.05);
}
.comments-title{
    padding: .1rem .36rem;
    display: flex;
    height: .72rem;
    line-height: .72rem;
    justify-content: space-between;
    align-items: center;
    position: relative;
}
.comments-title-left{
    color: #000;
    font-size: .28rem;
    font-weight: 700;
    flex-grow: 1;
}
.comments-title-right{
    color: #7f7f7f;
    font-size: .24rem;
    padding-right: .25rem;
    display: flex;
}
.right-icon1{
    margin-top: .15rem;
    margin-left: auto;
    display: block;
    width: .36rem;
    height: .36rem;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAYAAACo29JGAAABrklEQVRoQ+2ZyUpEMRBFTzt8gK4UnHUjCOL/f4RLN46tGxf6Ac5cMBKCkLeoSqeLBBqaziOvTu6tVJKeEbjNArMx4JZV3aHcUK7DGRi27FCUSSEN5SZNU4cPDeU6FGVSSNbKrQDbwCbwCjwDH5MicXjIGm4LOIO/PesjcAu8OcReHdIa7hTYyd76BTwB18BnNRrjB6zhZMcLQPbM2z1wAwi2WbOG03h7wCGwXlDMgbuWFrWGE88qsAucZLmn35NFpWCTRcYDLgl28A+g+mRR5eC3tz894RS7APUpLSpAfd49Ab3hZNGUg/qemiyayoSbRb3hBKN3JIvmQsmWyaIuAraAS4EfAfvAWkGiFVSQ5gq2hJMtBScVc4tKwQePHGwJJ8FU3FUDpWLelIMCVJkwW0VbwyWg418VSwUvgRerBFwUnErDObBRgGgferXscCGVC5tzoVfLkHUu7A4l9N4y7KlAOxEt+WUtXerzXNiTeOg7lNC3X6HvLUPfOIf+r8DqtGIyzqLOcybB1wYZcLUZ6rV/KNerMrW4hnK1Geq1fyjXqzK1uIZytRnqtT+0cj91gmA4iskT1QAAAABJRU5ErkJggg==");
    background-position: 50%;
    background-size: contain;
}
.comments-tags{
     padding: .1rem .36rem;
    margin-top: .12rem;
    margin-bottom: .16rem;
    min-height: .44rem;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
}
.comments-tags-text{
    background-color: #ffeeea;
    font-size: .2rem;
    line-height: 1;
    padding: .09rem .16rem;
    margin-right: .2rem;
    margin-bottom: .2rem;
    display: block;
    color: #494a4b;
    border-radius: .5rem;
}
.swiper-wrapper1{
    padding: .1rem .36rem;
}
.swiper-box{
    width: 5.45rem;
    height: 3.81rem;
    box-sizing: border-box;
    padding: .32rem;
    border: .016rem solid #e5e5e5;
    border-radius: .16rem;
}
.comment-header{
    display: flex;
}
.avatar-img{
    margin-right: .24rem;
    width: .64rem;
    height: .64rem;
    overflow: hidden;
    border-radius: 100%;
}
.avatar-img>img{
    display: block;
    width: 100%;
}
.user-info{
    font-size: .2rem;
    flex-grow: 1;
}
.user-info .user-name{
    
    color: #000;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 3.2rem;
    font-weight: 400;
}
.user-info .comment-date{

    margin-top: .06rem;
    color: rgba(0,0,0,.3);
}
.comment-content .text{
    font-size: .24rem;
    margin: .16rem 0;
    line-height: 1.5em;
    height: 3em;
    overflow: hidden;
    position: relative;
    color: rgba(0,0,0,.5);
}
.photos{
    margin-bottom: .12rem;
}
.photos .img{
    display: inline-block;
    width: 1.52rem;
    height: 1.52rem;
    margin: 0 .1rem 0 0;
    border-radius: .16rem;
    overflow: hidden;
    position: relative;
}
.img>img{
    width: 100%;
    height: 100%;
}
.topic-header{
    height: .98rem;
    line-height: .98rem;
    font-size: .32rem;
    padding: 0 .16rem;
    display: flex;
    justify-content: space-between;
}
.topic-title{
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.right-icon2{
    margin-top: .25rem;
    margin-left: auto;
    display: block;
    width: .36rem;
    height: .36rem;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAYAAACo29JGAAABrklEQVRoQ+2ZyUpEMRBFTzt8gK4UnHUjCOL/f4RLN46tGxf6Ac5cMBKCkLeoSqeLBBqaziOvTu6tVJKeEbjNArMx4JZV3aHcUK7DGRi27FCUSSEN5SZNU4cPDeU6FGVSSNbKrQDbwCbwCjwDH5MicXjIGm4LOIO/PesjcAu8OcReHdIa7hTYyd76BTwB18BnNRrjB6zhZMcLQPbM2z1wAwi2WbOG03h7wCGwXlDMgbuWFrWGE88qsAucZLmn35NFpWCTRcYDLgl28A+g+mRR5eC3tz894RS7APUpLSpAfd49Ab3hZNGUg/qemiyayoSbRb3hBKN3JIvmQsmWyaIuAraAS4EfAfvAWkGiFVSQ5gq2hJMtBScVc4tKwQePHGwJJ8FU3FUDpWLelIMCVJkwW0VbwyWg418VSwUvgRerBFwUnErDObBRgGgferXscCGVC5tzoVfLkHUu7A4l9N4y7KlAOxEt+WUtXerzXNiTeOg7lNC3X6HvLUPfOIf+r8DqtGIyzqLOcybB1wYZcLUZ6rV/KNerMrW4hnK1Geq1fyjXqzK1uIZytRnqtT+0cj91gmA4iskT1QAAAABJRU5ErkJggg==");
    background-position: 50%;
    background-size: contain;
}
.topic-body{
    padding: 0 .16rem .4rem;
    display: flex;

}
.topic-item{
    margin-right: .16rem;
    flex-shrink: 0;
    width: 2.72rem;
    margin: 0 .16rem 0 0;
}
.artic-img{
    height: 2.72rem;
    margin: 0;
}
.artic-img>img{
    display: block;
    width: 100%;
    height: 100%;
    border-top-left-radius: .16rem;
    border-top-right-radius: .16rem;
}
.article-text{
    padding: 0 .16rem;
    font-size: .24rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin: .2rem 0 0;
    color: black;
}
.article-addition{
    padding: 0 .16rem;
    width: 2.72rem;
    height: .84rem;
    font-size: .2rem;
    color: rgba(0,0,0,.5);
    display: flex;

}
.article-author{
    width: 50%;
    display: flex;
}
.article-author>img{
    display: block;
    flex-shrink: 0;
    width: .36rem;
    height: .36rem;
    border-radius: 50%;
    overflow: hidden;
    margin-right: .1rem;
}
.article-num{
    background: url("https://m.mi.com/static/img/icon-view.6fec9f2afd.png");
    height: .36rem;
    line-height: .36rem;
    padding-left: .4rem;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: 0;
    background-size: .36rem .36rem;
}
.recommend-box{
    background: #fff;
    text-align: left;
}
.recommend-box .recommend-title{
    line-height: .8rem;
    padding: 0 .32rem;
    font-size: .3rem;
}
.recommend-box .recommend-list{
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.goods-item{
    flex: 1 1 49.5%;
    overflow: hidden;
}
.goods-item a{
    display: block;
}
.goods-img-box img{
    display: block;
    width: 100%;
    min-height: 3.56rem;
}
.goods-info{
    padding: .18rem .26rem .22rem;
}
.goods-info .goods-name{
    font-size: .28rem;
    overflow: hidden;
    text-overflow: ellipsis;
}
.goods-info .goods-price{
    font-size: .32rem;
    color: #ff6700;
    margin-top: .1rem;
}

.download-app-bottom-float{
    position: fixed;
    height: auto;
    z-index: 99;
    left: 35%;
    right: 0;
    bottom: 1.4rem;
    width: 2.66rem;
}
.download-app-bottom-float img{
    display: block;
    width: 100%;
    height: auto;
}
.fixed-bar{
    position: fixed;
    z-index: 997;
    bottom: 1.4rem;
    right: .26rem;
}
.fixed-bar a{
    display: block;
    width: .7rem;
    height: .7rem;
    margin: .1rem auto 0;
}
.fixed-bar img{
    display: block;
    width: 100%;
}
.pop{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 7.2rem;
    background-color: #fff;
    color: #000;
    height: 9.92rem;
    border-top-left-radius: .24rem;
    border-top-right-radius: .24rem;
    text-align: left;
}
.pop .close{
    position: absolute;
    top: .02rem;
    right: .16rem;
    width: .6rem;
    height: .6rem;
    z-index: 111;
}
.pop .icon-close{
    display: block;
    width: .4rem;
    height: .4rem;
    margin: .14rem 0 0 .14rem;
    background: url("https://m.mi.com/static/img/popup-close2.773bafd4b8.png") center center no-repeat;
    background-size:100% ;
}
.pop .pro-info{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    padding: .32rem 0 .2rem;
}
.pro-info .product-img{
    position: relative;
    width: 1.67rem;
    height: 1.67rem;
    text-align: center;
    overflow: hidden;
    border-radius: .08rem;
    background: rgba(0,0,0,.04);
}
.product-img img{
    width: 1.41rem;
    height: 1.41rem;
    margin: .13rem auto;
}
.product-desc{
    position: relative;
    width: 4.5rem;
    height: 1.67rem;
    margin: 0 0 0 .32rem;
    text-align: left;
}
.product-desc .product-price{
    display: flex;
    margin-top: .37rem;
    align-items: baseline;
}
.product-price .cur-price{
    color: #ff5934;
    font-size: .36rem;
    font-weight: 900;
    padding-left: .23rem;
}
.product-price .origin-price{
    margin-left: .11rem;
    color: rgba(0,0,0,.3);
    text-decoration: line-through;
    padding-left: .17rem;
}
.product-desc .name{
    font-size: .24rem;
    height: .64rem;
    line-height: .32rem;
    color: #000;
    overflow: hidden;
    text-overflow: ellipsis;
}
.max5{
    max-height: 6.6rem;
    padding-bottom: 0;
    overflow-x: hidden;
    padding: 0 .32rem 0;
}
.max5 .option-title{
    display: flex;
    position: relative;
    margin-top: .4rem;
    margin-bottom: .24rem;
    line-height: .24rem;
    font-size: .24rem;
    color: #000;
    font-weight: 700;
}
.options-group{
    display: flex;
}
.option-item{
    font-size: .24rem;
    line-height: .24rem;
    min-width: .64rem;
    height: .24rem;
    padding: .15rem .24rem;
    text-align: center;
    margin: 0 .24rem .24rem 0;
    overflow: visible;
    border-radius: .28rem;
    border: .02rem solid transparent;
    background: rgba(0,0,0,.04);
}
.on{
    color: #f56600;
    border: .02rem solid #ff5934;
    border-radius: .28rem;
    background: rgba(255,89,52,.08);
}
.ui-mask{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.8);
    z-index: 1100;
}
.layout{
    display:flex;
    flex-wrap: nowrap;
    justify-content: space-between;
}
.layout .option-title{
    margin-bottom: .4rem;
    display: flex;
    position: relative;
    margin-top: .4rem;
    line-height: .24rem;
    font-size: .24rem;
    color: #000;
    font-weight: 700;
}
.xm-input-number{
    display: flex;
    align-items: center;
}
.input-sub{
    display: inline-block;
    width: .68rem;
    height: .68rem;
    position: relative;
    vertical-align: middle;
    text-align: center;
}
.icon-line{
    display: block;
   opacity: .6;
    width: 100%;
    height: 100%;
    margin: 0;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAANCAYAAAD2bQNSAAAAuUlEQVRIS+3Xz2oCMRgE8N9WKW0PWnsqIvgKPYvv/yaCWkvrolL/rnxsru0DbDKXQHKayWTmS6VFH894xwAvaa9K511Ybjiixg82OKEJkr1EfIQhnvCIB3RJhAYX/GKPb2xxCJLhgDEmHST+l4Ov2GGBVYgwxSveOnbz/z3hcMUZS6xDhI/khnBEbvjEV4gwSyEY4ZgbIhO2IcI8hWMEZG6IpqiLE5ITSiaUdmjbocwJZWJsJ8bs/w53m7A2zr9c3PcAAAAASUVORK5CYII=") center center no-repeat;
    background-size:.21rem .04rem ;

}
.input-num{
    display: inline-block;
    vertical-align: middle;
    width: .93rem;
    height: .56rem;
    background: #f9f9f9;
    border-radius: .08rem;
    line-height: .6rem;
    text-align: center;
    font-size: .32rem;
}
.input-add{
    display: inline-block;
    width: .68rem;
    height: .68rem;
    position: relative;
    vertical-align: middle;
    text-align: center;
}
.icon-cross{
    display: block;
    opacity: 1;
    width: 100%;
    height: 100%;
    margin: 0;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABBCAMAAAC5KTl3AAABXFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa7cwIAAAAc3RSTlMAAQIDBQcICwwODxASFxkbHB4fICQoKSsuLzE2Nzg7PT4/RUhJTlBRVVdYWVpkb3N3e31+g4iJk5WXmpucoKKlpqirra6wtbe4u72/wcPEx8jJysvMzdHS09XY2dvd3uHj5OXn6Orr7u/x9Pb3+Pr7/P3+oLZutwAAAcxJREFUWMPt191bwVAcwPHDVmkJIYXykgp5qxXSC1KI3iSEoiy1ChP7/5+nkubiPHXx24WbfW9/2+fmPDtnB6G/I4x0uv52u+dQIViEjc7es51mIerWySAAqQxW+J/iThJCqByZ1lBgIhQBEAyB8hDgudS8AiAsReq/An+5MgsQrEePgnDtmgMI9mNGEPJenSRIgiRIwngEUmVYstqx/OcvglDdcWNzm8WknR5s4YTSEYgcHWOdM21BYPOnJ8OEeSIa9CxMyb9PpmCmXH9ksF7aH4LAsU1s3ni4y8W9eoSMdKXFA+s9J1wziM7y8Prd8CJK3/NiiKQP1VkxAn8RQm8dUULxAJWbooQsjfYLIt7vtQ/X0GpUhMA9bVJItRFnOCDwerO9TCKkc0ZSl9d5rCo7gt9rJfyBq7PYlpH6+i5kJDW/4vJi7eRH61zb9WNzz7pZMyEf/F/JCMXsnA7LnR6tUslvweZatXJSJu1ykiAJkjAmwZZojASPFiBYog+CcLWuBgim4J0gnJmVAEHryfV+z4WYZhIgTC/En/uDo4272ZqA3JqJKW+i+020n7aNctDdX653hZMXxezh5jIFuvt/NbPoCx3QaxT530Ofn9FVQdC3/WoAAAAASUVORK5CYII=") center center no-repeat;
    background-size:.21rem .21rem ;
}
.ywb .option-title{
    margin-bottom: .48rem;
    display: flex;
    position: relative;
    margin-top: .4rem;
    line-height: .24rem;
    font-size: .24rem;
    color: #000;
    font-weight: 700;
}
.ywb .option-title-sub{
    margin-top: .24rem;
    display: flex;
    position: relative;
    margin-bottom: .24rem;
    line-height: .24rem;
    font-size: .24rem;
    color: #000;
    font-weight: 700;
}
.option-title-sub img{
    width: .24rem;
    height: .24rem;
    margin-right: .08rem;
    position: relative;
    top: -.02rem;
}
.tit{
    font-weight: 400;
    margin-right: .15rem;
}
.service-url{
    display: flex;
    position: absolute;
    right: 0;
    top: 0;
    height: .24rem;
    justify-content: space-between;
}
.option-title-sub span{
    color: rgba(0,0,0,.3);
    font-size: .2rem;
    font-weight: 400;
}
.pop .btn-bottom{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
}
.action-box{
    height: 1.04rem;
    padding: .12rem .31rem;
}
.action-box a{
    height: .72rem;
    line-height: .8rem;
    background: url("https://m.mi.com/static/img/icon-buy-tc.90477c83a6.png") center center no-repeat;
    background-size: 100% 100%;
    border-radius: .4rem;
    color: #fff;
    display: block;
    text-align: center;
    width: 100%;
    font-size: .28rem;
}
.v-enter,.v-leave-to{
    transform: translateY(9.92rem);
}
.v-enter-active,.v-leave-active{
    transition: all .3s linear;
}
</style>