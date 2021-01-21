<template>
    <div class="page-Classify">
        <div class="page-02">
                <div class="Classify-top">
                    <div class="Classify-header">
                        <p class="Classify-01" @click="bottomBarClick('firsttab')"></p>
                        <p class="Classify-02">分类</p>
                        <p class="Classify-03"></p>
                    </div>
                </div>
            <div class="Classify-body">
                <div class="page-03">
                    <div class="body-left" >
                        <ul class="item" >
                            <li v-for="(item,index) in list" :key="item.name"  :style="objStyleitem()" >
                                <!-- :href="'#'+item.id" -->
                                <a   class="item-a"  :class='{active:isActive==index}' @click="btnColor(index)"  target="_self">
                                    <span class="item-name">{{item.name}}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="body-right" @scroll="handleScroll($event)">
                        <div class="body-right-list" :style="objStyle()">
                            <div class="pic1" id="小米手机11"></div>
                            <div class="list-title">
                                <p class="lineleft">——</p>
                                <p class="linetitle">小米数字系列</p>
                                <p class="lineright">——</p>
                            </div>
                            <div class="list-menu">
                                <div class="list-product">
                                    <div class="list-photo"></div>
                                    <p class="list-name">小米11</p>
                                </div>
                                <div class="list-product">
                                    <div class="list-photo-001"></div>
                                    <p class="list-name">小米10 至尊版</p>
                                </div>
                                <div class="list-product">
                                    <div class="list-photo-002"></div>
                                    <p class="list-name">小米10 青春</p>
                                </div>
                                <div class="list-product">
                                    <div class="list-photo-003"></div>
                                    <p class="list-name">小米10</p>
                                </div>
                            </div>

                            <div class="list-title">
                                <p class="lineleft">——</p>
                                <p class="linetitle">小米MIX系列</p>
                                <p class="lineright">——</p>
                            </div>
                            <div class="list-menu">
                                <div class="list-product">
                                    <div class="list-photo-mix"></div>
                                    <p class="list-name">小米MIX Alpha</p>
                                </div>
                            </div>
                            <div class="cells_auto_fill"></div>
                            <!-- 小米手机配件 -->
                            <div class="list-title">
                                <p class="lineleft">——</p>
                                <p class="linetitle">小米手机配件</p>
                                <p class="lineright">——</p>
                            </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listP" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                            <!-- 小米11 Redmi红米 Note系列 -->
                            <div class="list-photo-one" id="RedMi手机22"></div>
                            <div class="list-title">
                                <p class="lineleft">——</p>
                                <p class="linetitle">Redmi红米 Note系列</p>
                                <p class="lineright">——</p>
                            </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listR" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                            <!-- Redmi红米 K系列 -->
                            <div class="list-title">
                                <p class="lineleft">——</p>
                                <p class="linetitle">Redmi红米 K系列</p>
                                <p class="lineright">——</p>
                            </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listK" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                            <!-- Redmi红米 X系列 -->
                            <div class="list-title">
                                 <p class="lineleft">——</p>
                                <p class="linetitle">Redmi红米 X系列</p>
                                <p class="lineright">——</p>
                            </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listX" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                            <!-- Redmi红米 数字系列 -->
                            <div class="list-title">
                                <p class="lineleft">——</p>
                                <p class="linetitle">Redmi红米 数字系列</p>
                                <p class="lineright">——</p>
                            </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listS" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                            <div class="cells_auto_fill-pi"></div>
                            <!-- Redmi手机配件 -->
                            <div class="list-title">
                                <p class="lineleft">——</p>
                                <p class="linetitle">Redmi手机配件</p>
                                <p class="lineright">——</p>
                            </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listpi" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                            <div class="list-photo-two" id="黑鲨手机33"></div>





                            <!--！！！！！！！！！！！！！！！ 此部分为重复选项 -->
                             <!-- Redmi红米 数字系列 -->

                        <!-- <div v-for="item in list" :key="item"></div> -->
                            <div class="list-title">
                                <p class="lineleft">——</p>
                                <p class="linetitle">黑鲨手机</p>
                                <p class="lineright">——</p>
                            </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listA" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                                <div class="backgif">
                                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f6914a2f4dfee046ae158eb95cc206f4.jpg?f=webp&w=750&h=120&bg=FAF4E6" alt="" class="pic10">
                                </div>
                            </div>
                            <div class="list-title">
                                <p class="lineleft">——</p>
                                <p class="linetitle">黑鲨手机配件</p>
                                <p class="lineright">——</p>
                            </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listB" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                            <!-- 黑鲨手机 -->
                
                             <!-- Redmi红米 数字系列 -->
                              <!-- <div class="list-photo-two" id="电视44"></div> -->

                              <!-- 电视 -->
                            <div class="list-title" id="电视44">
                                <p class="lineleft">——</p>
                                <p class="linetitle">电视</p>
                                <p class="lineright">——</p>
                            </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listC" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                                 <div class="backgif">
                                    <img src="https://i8.mifile.cn/v1/a1/107133a6-3424-cdea-65cf-dfd061581ff2.webp?w=750&h=120&bg=F6F1E1" alt="" class="pic10">
                                </div>
                            </div>
                            <div class="list-title">
                                 <p class="lineleft">——</p>
                                <p class="linetitle">小米电视大师</p>
                                <p class="lineright">——</p>
                            </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listD" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                                <div class="backgif">
                                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bdd4040c881727d0b5652784fe62e82b.jpg?f=webp&w=750&h=120&bg=FAF4E6" alt="" class="pic10">
                                </div>
                            </div>
                             <!-- Redmi红米 数字系列 -->

                             <!-- 大家电 -->
                            <div class="list-title">
                                <p class="lineleft">——</p>
                                <p class="linetitle">电视配件相关</p>
                                <p class="lineright">——</p>
                            </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listE" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                                 <div class="backgif">
                                    <img src="https://i8.mifile.cn/v1/a1/107133a6-3424-cdea-65cf-dfd061581ff2.webp?w=750&h=120&bg=F6F1E1" alt="" class="pic10">
                                </div>
                            </div>
                             <!-- Redmi红米 数字系列 -->
                            <div class="list-title" id="大家电55">
                                <p class="lineleft">——</p>
                                <p class="linetitle">大家电</p>
                                <p class="lineright">——</p>
                            </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listF" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                                <div class="backgif">
                                    <img src="https://i8.mifile.cn/v1/a1/367bcd70-9f0f-a38d-e005-6c85e9576ba8.webp?w=750&h=120&bg=F7F1E2" alt="" class="pic10">
                                </div>
                            </div>

                             <!-- Redmi红米 数字系列 -->

                            <!-- 电脑办公 -->
                            <div class="list-title" id="电脑办公66">
                                <p class="lineleft">——</p>
                                <p class="linetitle">RedmiBook</p>
                                <p class="lineright">——</p>
                            </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listG" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                             <!-- Redmi红米 数字系列 -->
                            <div class="list-title">
                                <p class="lineleft">——</p>
                                <p class="linetitle">小米笔记本</p>
                                <p class="lineright">——</p>
                            </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listH" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                                <div class="backgif">
                                    <img src="https://i8.mifile.cn/v1/a1/efc0c169-1c1f-3f6c-7590-15948ac35e14.webp?w=750&h=120&bg=F6F0E0" alt="" class="pic10">
                                </div>
                            </div>


                             <!-- Redmi红米 数字系列 -->

                            <!-- 小爱音箱 -->
                            <div class="list-title" >
                                <p class="lineleft">——</p>
                                <p class="linetitle">显示器</p>
                                <p class="lineright">——</p>
                            </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listI" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                             <!-- Redmi红米 数字系列 -->
                            <div class="list-title" id="小爱音箱77">
                                <p class="lineleft">——</p>
                                <p class="linetitle">小爱触屏音箱</p>
                                <p class="lineright">——</p>
                            </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listab" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>

                             <!-- Redmi红米 数字系列 -->
                             <!-- 路由器 -->


                            <div class="list-title" >
                                <p class="lineleft">——</p>
                                <p class="linetitle">小爱智能音箱</p>
                                <p class="lineright">——</p>
                            </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listbc" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                                 <div class="backgif">
                                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a3b963de126490c18c77281d621a9802.png?f=webp&w=750&h=120&bg=F9F4E5" alt="" class="pic10">
                                </div>
                            </div>
                             <!-- Redmi红米 数字系列 -->
                            <div class="list-title" id="路由器88">
                                 <p class="lineleft">——</p>
                                <p class="linetitle">WiFi 6</p>
                                <p class="lineright">——</p>
                            </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listcd" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>

                             <!-- Redmi红米 数字系列 -->
                             <!-- 生活电器 -->


                            <div class="list-title" >
                                 <p class="lineleft">——</p>
                                <p class="linetitle">千兆版</p>
                                <p class="lineright">——</p>
                            </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listed" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                             <!-- Redmi红米 数字系列 -->
                            <div class="list-title">
                                 <p class="lineleft">——</p>
                                <p class="linetitle">百兆版</p>
                                <p class="lineright">——</p>
                            </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listdf" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                             <div class="list-title">
                                     <p class="lineleft">——</p>
                                <p class="linetitle">配件</p>
                                <p class="lineright">——</p>
                             </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listdg" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                                <div class="backgif">
                                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8d24eb338f6b66c6b30710d9380ba1d5.png?f=webp&w=750&h=120&bg=F9F4E5" alt="" class="pic10">
                                </div>
                            </div>


                             <!-- Redmi红米 数字系列 -->
                             <!-- 厨房电器 -->
                            <div class="list-title" id="生活电器99">
                                    <p class="lineleft">——</p>
                                <p class="linetitle">生活电器</p>
                                <p class="lineright">——</p>
                            </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listga" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                                 <div class="backgif">
                                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b67c6cf66568dc047f442aef89afe1f8.png?f=webp&w=750&h=120&bg=F9F4E5" alt="" class="pic10">
                                </div>
                            </div>
                             <!-- Redmi红米 数字系列 -->
                            <div class="list-title"  id="厨房电器12">
                                  <p class="lineleft">——</p>
                                <p class="linetitle">厨房大电</p>
                                <p class="lineright">——</p>
                            </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listgb" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                            <div class="list-title">
                                 <p class="lineleft">——</p>
                                <p class="linetitle">厨房小电</p>
                                <p class="lineright">——</p>
                            </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listgc" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                                <div class="backgif">
                                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/123d0ac43fd1c65d629c96fbb8f9efe6.png?f=webp&w=750&h=120&bg=F9F4E5" alt="" class="pic10">
                                </div>
                            </div>


                             <!-- Redmi红米 数字系列 -->
                             <!-- 智能穿戴 -->


                            <div class="list-title" id="智能穿戴23">
                                 <p class="lineleft">——</p>
                                <p class="linetitle">智能穿戴</p>
                                <p class="lineright">——</p>
                            </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listgd" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                                 <div class="backgif">
                                    <img src="https://i8.mifile.cn/v1/a1/f9e69934-830d-e769-3b2a-7c0679f730e7.webp?w=750&h=120&bg=F6F1E1" alt="" class="pic10">
                                </div>
                            </div>
                             <!-- Redmi红米 数字系列 -->
                            <div class="list-title" id="智能家居34">
                                 <p class="lineleft">——</p>
                                <p class="linetitle">智能家居</p>
                                <p class="lineright">——</p>
                            </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listge" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>


                            <!-- Redmi红米 数字系列 -->
                             <!-- 智能家居 -->


                            <div class="list-title" >
                                <p class="lineleft">——</p>
                                <p class="linetitle">照明灯具</p>
                                <p class="lineright">——</p>
                            </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listgff" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                                 <div class="backgif">
                                    <img src="https://i8.mifile.cn/v1/a1/f9e69934-830d-e769-3b2a-7c0679f730e7.webp?w=750&h=120&bg=F6F1E1" alt="" class="pic10">
                                </div>
                            </div>
                             <!-- Redmi红米 数字系列 -->
                            <div class="list-title" id="车载出行56">
                                     <p class="lineleft">——</p>
                                <p class="linetitle">出行</p>
                                <p class="lineright">——</p>
                            </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listgg" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>



                              <!-- Redmi红米 数字系列 -->
                             <!-- 智能家居 -->


                            <div class="list-title" >
                                    <p class="lineleft">——</p>
                                <p class="linetitle">车载</p>
                                <p class="lineright">——</p>
                            </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listgi" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                                 <div class="backgif">
                                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b411b906f1b0df1bfe002c6870b8e7cf.png?f=webp&w=750&h=120&bg=F9F4E5" alt="" class="pic10">
                                </div>
                            </div>
                             <!-- Redmi红米 数字系列 -->
                            <div class="list-title" id="个户健康78">
                                   <p class="lineleft">——</p>
                                <p class="linetitle">防护清洁</p>
                                <p class="lineright">——</p>
                            </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listgh" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>


                            <!-- Redmi红米 数字系列 -->
                             <!-- 个户健康 -->


                            <div class="list-title" >
                                   <p class="lineleft">——</p>
                                <p class="linetitle">个户</p>
                                <p class="lineright">——</p>
                            </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listgo" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                             <!-- Redmi红米 数字系列 -->
                            <div class="list-title">
                                  <p class="lineleft">——</p>
                                <p class="linetitle">健康</p>
                                <p class="lineright">——</p>
                            </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listgaa" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                                  <div class="backgif">
                                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cf851c067464d9c0cac9e5d8cfb2e82c.png?f=webp&w=750&h=120&bg=F9F4E5" alt="" class="pic10">
                                </div>
                            </div>


                            <!-- Redmi红米 数字系列 -->
                             <!-- 数码配件 -->


                            <div class="list-title" id="数码配件89">
                                 <p class="lineleft">——</p>
                                <p class="linetitle">手机配件</p>
                                <p class="lineright">——</p>
                            </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listgbb" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                             <!-- Redmi红米 数字系列 -->
                            <div class="list-title">
                                  <p class="lineleft">——</p>
                                <p class="linetitle">电脑配件</p>
                                <p class="lineright">——</p>
                            </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listgcc" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>


                            <!-- Redmi红米 数字系列 -->
                             <!-- 日用百货 -->


                            <div class="list-title">
                                   <p class="lineleft">——</p>
                                <p class="linetitle">音箱</p>
                                <p class="lineright">——</p>
                            </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listgdd" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                             <!-- Redmi红米 数字系列 -->
                            <div class="list-title"  id="日用百货13">
                                    <p class="lineleft">——</p>
                                <p class="linetitle">家居日常</p>
                                <p class="lineright">——</p>
                            </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listgee" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                             <div class="list-title">
                                   <p class="lineleft">——</p>
                                <p class="linetitle">鞋服配饰</p>
                                <p class="lineright">——</p>
                             </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listgff" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                              <div class="list-title">
                                   <p class="lineleft">——</p>
                                <p class="linetitle">箱包</p>
                                <p class="lineright">——</p>
                              </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listggg" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                               <div class="list-title">
                                <p class="lineleft">——</p>
                                <p class="linetitle">床品家具</p>
                                <p class="lineright">——</p>
                               </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listghh" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                              <div class="list-title">
                                  <p class="lineleft">——</p>
                                <p class="linetitle">图书</p>
                                <p class="lineright">——</p>
                              </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listgii" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                                  <div class="backgif">
                                    <img src="https://i8.mifile.cn/v1/a1/4ddf67d4-009e-e023-8809-775eecedb7d2.webp?w=750&h=120&bg=F6F0E0" alt="" class="pic10">
                                </div>
                            </div>


                             <!-- Redmi红米 数字系列 -->
                             <!-- 有品精选 -->


                            <div class="list-title" >
                                <p class="lineleft">——</p>
                                <p class="linetitle">儿童用品</p>
                                <p class="lineright">——</p>
                            </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listgoo" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                                <div class="backgif">
                                    <img src="https://i8.mifile.cn/v1/a1/be81647d-ddaf-8c92-6f07-2779f00a39c8.webp?w=750&h=120&bg=F6F1E1" alt="" class="pic10">
                                </div>
                            </div>
                               <div class="list-title">
                                      <p class="lineleft">——</p>
                                <p class="linetitle">电子教育</p>
                                <p class="lineright">——</p>
                               </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listgpp" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                                <div class="backgif">
                                    <img src="https://i8.mifile.cn/v1/a1/f9e69934-830d-e769-3b2a-7c0679f730e7.webp?w=750&h=120&bg=F6F1E1" alt="" class="pic10">
                                </div>
                            </div>
                             <!-- Redmi红米 数字系列 -->
                            <div class="list-title" id="有品精选14">
                                    <p class="lineleft">——</p>
                                <p class="linetitle">重磅爆品</p>
                                <p class="lineright">——</p>
                            </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listgzz" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                              <div class="list-title">
                                    <p class="lineleft">——</p>
                                <p class="linetitle">精品分类</p>
                                <p class="lineright">——</p>
                              </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listgxx" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>


                             <!-- Redmi红米 数字系列 -->
                             <!-- 小米服务 -->


                            <div class="list-title" id="小米服务16">
                                    <p class="lineleft">——</p>
                                <p class="linetitle">热门推荐</p>
                                <p class="lineright">——</p>
                            </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listgvv" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                             <!-- Redmi红米 数字系列 -->
                            <div class="list-title">
                                    <p class="lineleft">——</p>
                                <p class="linetitle">手机服务</p>
                                <p class="lineright">——</p>
                            </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listgnn" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                              <div class="list-title">
                                    <p class="lineleft">——</p>
                                <p class="linetitle">家电服务</p>
                                <p class="lineright">——</p>
                              </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listgmm" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                              <div class="list-title">
                                   <p class="lineleft">——</p>
                                <p class="linetitle">通信服务</p>
                                <p class="lineright">——</p>
                              </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listgll" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                              <div class="list-title">
                                <p class="lineleft">——</p>
                                <p class="linetitle">金融服务</p>
                                <p class="lineright">——</p>
                              </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listgjj" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                             <div class="list-title">
                                <p class="lineleft">——</p>
                                <p class="linetitle">小米云服务</p>
                                <p class="lineright">——</p>
                             </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listgyy" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                          
                             <!-- Redmi红米 数字系列 -->
                           <!-- 零售店 -->
                            <div class="list-title" id="零售店17">
                                <p class="lineleft">——</p>
                                <p class="linetitle">零售店</p>
                                <p class="lineright">——</p>
                            </div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listabcfg" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                            <div class="empty01"></div>
                             <!-- Redmi红米 数字系列 -->
                




















                            <!-- ！！！！！！！中间为重复选项 -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [
                {
                    id: "小米手机11",
                    name: "小米手机",
                },
                {
                    id: "RedMi手机22",
                    name: "RedMi手机",
                },
                {
                    id: "黑鲨手机33",
                    name: "黑鲨手机",
                },
                {
                    id: "电视44",
                    name: "电视",
                },
                {
                    id: "大家电55",
                    name: "大家电",
                },
                {
                    id: "电脑办公66",
                    name: "电脑办公",
                },
                {
                    id: "小爱音箱77",
                    name: "小爱音箱",
                },
                {
                    id: "路由器88",
                    name: "路由器",
                },
                {
                    id: "生活电器99",
                    name: "生活电器",
                },
                {
                    id: "厨房电器12",
                    name: "厨房电器",
                },
                {
                    id: "智能穿戴23",
                    name: "智能穿戴",
                },
                {
                    id: "智能家居34",
                    name: "智能家居",
                },
                {
                    id: "车载出行56",
                    name: "车载出行",
                },
                {
                    id: "个户健康78",
                    name: "个户健康",
                },
                {
                    id: "数码配件89",
                    name: "数码配件",
                },
                {
                    id: "日用百货13",
                    name: "日用百货",
                },
                {
                    id: "有品精选14",
                    name: "有品精选",
                },
                {
                    id: "小米服务16",
                    name: "小米服务",
                },
                {
                    id: "零售店17",
                    name: "零售店",
                },
            ],
            listP: [
                {
                    img: require("../assets/images/03.png"),
                    name: "无线充",
                },
                {
                    img: require("../assets/images/04.png"),
                    name: "充电器",
                },
                {
                    img: require("../assets/images/05.png"),
                    name: "车充",
                },
                {
                    img: require("../assets/images/06.png"),
                    name: "数据线",
                },
                {
                    img: require("../assets/images/07.png"),
                    name: "自拍杆",
                },
                {
                    img: require("../assets/images/08.png"),
                    name: "小米充电宝",
                },
                 {
                    img: require("../assets/images/09.png"),
                    name: "小米手机保护壳",
                },
            ],
            listR: [
                {
                    img: require("../assets/images/10.png"),
                    name: "Note 9",
                },
                {
                    img: require("../assets/images/11.png"),
                    name: "Note 9 Pro 4G",
                },
                {
                    img: require("../assets/images/14.png"),
                    name: "Note 8 Pro",
                },
                {
                    img: require("../assets/images/12.gif"),
                    name: "Note 9 Pro",
                },
                {
                    img: require("../assets/images/13.gif"),
                    name: "RedMi Note 8",
                },
            ],
            listK: [
                {
                    img: require("../assets/images/15.png"),
                    name: "Redmi K30 5G",
                },
                {
                    img: require("../assets/images/16.png"),
                    name: "Redmi K30 4G",
                },
                {
                    img: require("../assets/images/17.png"),
                    name: "K30 Pro 变焦版",
                },
                {
                    img: require("../assets/images/18.png"),
                    name: "K30 至尊版",
                },
                {
                    img: require("../assets/images/19.png"),
                    name: "K30 Pro",
                },
                {
                    img: require("../assets/images/20.png"),
                    name: "K30S 至尊版",
                },
            ],
            listX: [
                {
                    img: require("../assets/images/21.png"),
                    name: "10X 5G",
                },
                {
                    img: require("../assets/images/22.png"),
                    name: "10X Pro 5G",
                },
                {
                    img: require("../assets/images/23.png"),
                    name: "10X 4G",
                },
            ],
            listS: [
                {
                    img: require("../assets/images/24.png"),
                    name: "Redmi 9A",
                },
                {
                    img: require("../assets/images/25.png"),
                    name: "Redmi 9",
                },
                {
                    img: require("../assets/images/26.png"),
                    name: "Redmi 8",
                },
                {
                    img: require("../assets/images/27.png"),
                    name: "Redmi 8A",
                },
                {
                    img: require("../assets/images/28.png"),
                    name: "Redmi 7A",
                },
            ],
            listpi: [
                {
                    img: require("../assets/images/29.png"),
                    name: "Redmi 充电宝",
                },
                {
                    img: require("../assets/images/30.jpg"),
                    name: "Redmi手机保护壳",
                },
                {
                    img: require("../assets/images/31.png"),
                    name: "Redmi手机贴膜",
                },
            ],
            listA:[
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a76df38086f438f5513c470d843da783.png?thumb=1&w=120&h=120",
                    name:"黑鲨手机3S"
                },
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1cae0b41b12f847c75e24513a2c432e9.png?thumb=1&w=120&h=120",
                    name:"黑鲨手机3"
                }
            ],
            listB:[
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8f196a04ec65c53ed5299990ed26be05.png?thumb=1&w=120&h=120",
                    name:"黑鲨游戏耳机"
                },
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e6e6813fbe60506add31586cd7db3312.png?thumb=1&w=120&h=120",
                    name:"散热背夹 Pro"
                },
                 {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/88457eba19868c63b428642603e3bde3.png?thumb=1&w=120&h=120",
                    name:"冰封散热背夹"
                },
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6645c8126e08ee1f07c59cd4b406349d.png?thumb=1&w=120&h=120",
                    name:"黑鲨手游肩键"
                },
                 {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d8bcee7d82c3139d450984f08fe001f7.png?thumb=1&w=120&h=120",
                    name:"黑鲨移动电源"
                },
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f47fc44e9b5a83068018d4467fbec311.png?thumb=1&w=120&h=120",
                    name:"黑鲨其它配件"
                }
            ],
            listC:[
                {
                    img:"https://i8.mifile.cn/b2c-mimall-media/033cfa4ab48b9d776dcb69e730022561!120x120.png",
                    name:"32-40英寸"
                },
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/866dc2dc582f090c42e9e3204b98710b.png?thumb=1&w=120&h=120",
                    name:"43英寸"
                },
                 {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/22501ec50470010114f63fc43e99e677.png?thumb=1&w=120&h=120",
                    name:"49-50英寸"
                },
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5c14e86ffa6dbd49c025d0d2112b3b5c.png?thumb=1&w=120&h=120",
                    name:"55-60英寸"
                },
                 {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dc46b32f0af885108b43fef14d1fd90d.png?thumb=1&w=120&h=120",
                    name:"65-98英寸"
                },
                {
                    img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2eed897dd74e0f8e36187d8beb4d5ca6.png?thumb=1&w=120&h=120",
                    name:"激光投影电视"
                }
            ],
            listD:[
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/85853206f9512d6ed6457f4022bc32ee.png?thumb=1&w=120&h=120",
                    name:"82英寸"
                },
                 {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a45d6d7b837c803715e569167f48353e.png?thumb=1&w=120&h=120",
                    name:"65英寸OLED"
                },
                 {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ee24fec385a8d3266329f13562a1856.png?thumb=1&w=120&h=120",
                    name:"82英寸至尊版 "
                },
            ],
            listE:[
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dcafcf28ba496d72ebfe5ab798aa7fac.png?thumb=1&w=120&h=120",
                    name:"盒子"
                },
                 {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e50d435da26ee5313cc51b99e5b538b0.png?thumb=1&w=120&h=120",
                    name:"音箱"
                },
                 {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/24ea0ab198f10ad9ac3d0e6c4006afc0.png?thumb=1&w=120&h=120",
                    name:"会员卡"
                },
                 {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9b7705970fa1c86bcab33e721edcff7e.png?thumb=1&w=120&h=120",
                    name:"遥控器"
                },
                 ],
            listF:[
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a420b76232100bd466f1a0060ed97.png?thumb=1&w=120&h=120",
                    name:"冰箱"
                },
                {
                    img:"https://i8.mifile.cn/b2c-mimall-media/3f00551566f5b5f08f843403d8688a84!120x120.png",
                    name:"壁挂空调"
                },
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7bdf9ac76bed032d94a638e88aa8aa0d.png?thumb=1&w=120&h=120",
                    name:"立式空调"
                },
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/46342e7fb6975ab24c1365948a8bed99.png?thumb=1&w=120&h=120",
                    name:"滚筒洗衣机"
                },
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/58b6b7cd244f22d30c34eccf3196f38d.png?thumb=1&w=120&h=120",
                    name:"波轮洗衣机"
                },
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a8c5f0dfd88e82c27325be3e64126e98.png?thumb=1&w=120&h=120",
                    name:"干衣机"
                },
               
            ],
            listG:[
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/036a31c8c6b42d14626dcb2ea7ab41e7.png?thumb=1&w=120&h=120",
                    name:"RedmiBook Air 13"
                },
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1cae19edf3233c75d426b83e32704658.png?thumb=1&w=120&h=120",
                    name:"RedmiBook 16"
                },
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aeebcdd143618625fbbb04ab21ec1b49.png?thumb=1&w=120&h=120",
                    name:"RedmiBook 14"
                },
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/71c5e84be42a4581c67bd2fe5d4b8ffb.png?thumb=1&w=120&h=120",
                    name:"RedmiBook 13"
                },
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dd7d4c781fb22a973179a86b9f3cd8b8.png?thumb=1&w=120&h=120",
                    name:"Redmi G 游戏本"
                },
            ],
            listH:[
                {
                    name:'Pro 15.6"',
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/447296118e8288edeef8bcdd5259aac1.png?thumb=1&w=120&h=120"
                },
                 {
                    name:'Air 13.3"',
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef2f0c22c471221796e53996cdbd1af8.png?thumb=1&w=120&h=120"
                },
                 {
                    name:'Air 12.5"',
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8ec4b19dfa3b2de67b528fbab53d407a.png?thumb=1&w=120&h=120"
                },
                 {
                    name:'游戏本"',
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ff54c201797d264884ba03c7bf777b2a.png?thumb=1&w=120&h=120"
                },
                 {
                    name:'15.6"',
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/88b69891922bc3fd6eaa8012be9f4ead.png?thumb=1&w=120&h=120"
                }
            ],
            listI:[
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d4cb0fb895244ce875a5b79b4d676a22.png?thumb=1&w=120&h=120",
                    name:'Redmi 23.8"'
                },
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/28c705c380f8fb99ba49d327300ba01d.png?thumb=1&w=120&h=120",
                    name:'显示器 23.8"'
                },
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2f24db7f15732609bdd74e02c5abe30d.png?thumb=1&w=120&h=120",
                    name:'显示器1A 23.8"'
                },
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/939ad2616db0e0927d5e69c1a7bf4cad.png?thumb=1&w=120&h=120",
                    name:'显示器 24.5"'
                },
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43208dbd2a2905ef5991b130a5fb2397.png?thumb=1&w=120&h=120",
                    name:'27" 165Hz'
                },
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e4e4468a3042a141668132135e8e4e80.png?thumb=1&w=120&h=120",
                    name:'曲面 34"'
                },

            ],
            listab:[
                {
                    name:"Redmi 8英寸",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/456eabb800ebfd5a1d22795dbb563d53.png?thumb=1&w=120&h=120"
                },
                {
                    name:"小米 8英寸",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/284988b6415cac78fd80dfaeef4a115f.png?thumb=1&w=120&h=120"
                },
                {
                    name:"小米 4英寸",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2e5f76bdf1ce59b3a26b02457d48f5f0.png?thumb=1&w=120&h=120"
                },
            ],
            listbc:[
                {
                    name:'小爱音箱 Art 电池版',
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6b1ef83a5e9b70323cc296464de7bd28.png?thumb=1&w=120&h=120"
                },
                {
                    name:'小爱音箱 Pro',
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fd4310cbae8fbdaba3649c68d4a7ae96.png?thumb=1&w=120&h=120"
                },
                {
                    name:'小米AI音箱',
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6e1f021ad521840fb101a9e6a5d0adfc.png?thumb=1&w=120&h=120"
                },
                {
                    name:'小爱音箱Play',
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/da5c697534905a5ca9444984fc386feb.png?thumb=1&w=120&h=120"
                },
                {
                    name:'小爱音箱pro',
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fd4310cbae8fbdaba3649c68d4a7ae96.png?thumb=1&w=120&h=120"
                },
                {
                    name:'小爱HD',
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/324a26ffc76926061938094f9fb88b11.png?thumb=1&w=120&h=120"
                },
                {
                    name:'小爱音箱',
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2991b9ba166f447eb6615cce86d2337.png?thumb=1&w=120&h=120"
                },
            ],
            listcd:[
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5f786dbfd80f1ab070491f2302257b94.png?thumb=1&w=120&h=120",
                    name:"Redmi AX6"
                },
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5e885bb9408a4e692929229c0bd9ba5d.png?thumb=1&w=120&h=120",
                    name:"Redmi AX5"
                },
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/60eb7505a9ddee647a48b35c8588bb82.png?thumb=1&w=120&h=120",
                    name:"AX1800"
                },
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/efe34d11c3b15ef34d6e3c7154d4ad28.png?thumb=1&w=120&h=120",
                    name:"AIoT  AX3600"
                },
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7c7cd5407e8fddbd6a743ff5a78610ca.jpeg?thumb=1&w=120&h=120",
                    name:"AIoT AX6000"
                },
            ],
            listed:[
                {
                    img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/037e2f97d53c9bb2366f22ab188683d2.png?thumb=1&w=120&h=120',
                    name:"路由器 4 Pro"
                },
                {
                    img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dde5c2bcf4bbcf37fb79557736a77592.png?thumb=1&w=120&h=120',
                    name:"路由器AC2350"
                },
                {
                    img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/df4368f5353ea13dceb1ba07ea6f6f43.png?thumb=1&w=120&h=120',
                    name:"Mesh（两只装）"
                },
                {
                    img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e4eca203e55c2a1de43da066c8ea42fb.png?thumb=1&w=120&h=120',
                    name:"Redmi AC2100"
                },
                {
                    img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96368011161e6be0a0f1986f571ec11c.png?thumb=1&w=120&h=120',
                    name:"小米AC2100"
                },
                {
                    img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3ec439f3257f5f8ce0272602d63d9d1b.png?thumb=1&w=120&h=120',
                    name:"4A 千兆版"
                },
            ],
            listdf:[
                {
                    img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a15fac758e72665eb13a722f75ec9777.png?thumb=1&w=120&h=120",
                    name:"4C 300M"
                },
                 {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1d133fa11eafe4039b0392c8398cb194.png?thumb=1&w=120&h=120",
                    name:"4A 百兆版"
                },
            ],
            listdg:[
                {
                    name:"WiFi放大器",
                    img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a3ce2e5766e231d75fa15d7934b493fd.png?thumb=1&w=120&h=120"
                }
            ],
            listga:[
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4b422274d16c31c8aff6e4608fc10375.png?thumb=1&w=120&h=120",
                    name:"扫地机器人"
                },
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f8cd09ed30c982f737992ca4b6b780ef.png?thumb=1&w=120&h=120",
                    name:"空气净化器"
                },
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/881be19bd0e4a03be7d4c4df2076f749.png?thumb=1&w=120&h=120",
                    name:"电暖器"
                },
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d14c0bcebd4bfd1413d84dee972d2c6f.png?thumb=1&w=120&h=120",
                    name:"吸尘器"
                },
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c8c66c21e01f88127e42a0b54d56c6c3.png?thumb=1&w=120&h=120",
                    name:"晾衣机"
                },
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6ebe8491e3253ac97a2ea0d165e8e1b2.png?thumb=1&w=120&h=120",
                    name:"加湿器"
                },
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7943604e3a767054380d8d01a72cf147.png?thumb=1&w=120&h=120",
                    name:"智能浴霸"
                },
                {
                    img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/56db44cd039a22c06e351dc01fc7fdba.png?thumb=1&w=120&h=120",
                    name:"新风机"
                },
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/25da364521359bde2ed4aeffb2fc2dfb.png?thumb=1&w=120&h=120",
                    name:"除螨仪"
                },
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1795a8143403dc684d7fd2a3ed41b507.png?thumb=1&w=120&h=120",
                    name:"挂烫机"
                },
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9caeef13c1c0e0703c0c058038ea0713.png?thumb=1&w=120&h=120",
                    name:"暖风机"
                },
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/226e59c7de1640e9321ed35576dda4a8.png?thumb=1&w=120&h=120",
                    name:"擦地机"
                },
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eb4112f1419174555a2e569ce3127d82.png?thumb=1&w=120&h=120",
                    name:"电风扇"
                },
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9467c43db00b03f048ae54dba20e19f5.png?thumb=1&w=120&h=120",
                    name:"宠物喂食器"
                },
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/daa6f98dda2b994a59d94e2d0f3e1e07.png?thumb=1&w=120&h=120",
                    name:"毛球修剪器"
                },
                {
                    name:"宠物饮水机",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6bc80cb61a9e405bbfc3413a2957975f.png?thumb=1&w=120&h=120"
                }
            ],
            listgb:[
                {
                    name:"净水器",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c05926082f9b6d6d479c694753f1791.png?thumb=1&w=120&h=120"
                },
                {
                    name:"洗碗机",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4e8de320ccee7993f4c4513592aeaf60.png?thumb=1&w=120&h=120"
                },
                {
                    name:"烟机灶具",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/027d129974f4d457e2021cce597feca4.png?thumb=1&w=120&h=120"
                },
            ],
            listgc:[
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3c9cd3858c8bc2ca02e525da5251fb7f.png?thumb=1&w=120&h=120",
                    name:"微蒸烤"
                },
                 {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4830b94ab5b4c5682687d61b54711ed4.png?thumb=1&w=120&h=120",
                    name:"净饮机"
                },
                 {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e1fdeb93f4f9fff8b60f7a19a571eb52.png?thumb=1&w=120&h=120",
                    name:"饮水机"
                },
                 {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1dd1956a3b665c0ba31e6334440344e4.png?thumb=1&w=120&h=120",
                    name:"电饭煲"
                },
                 {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ad25d6e16b5f12bd013a3f81455df998.png?thumb=1&w=120&h=120",
                    name:"电磁炉"
                },
                 {
                    img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9bc543001efd3ef3894211d28fdc6ec1.png?thumb=1&w=120&h=120",
                    name:"电压力锅"
                },
                 {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/62bc59d85534b40d8eaa0f9d85880f02.png?thumb=1&w=120&h=120",
                    name:"水壶"
                },
                 {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0f7265e99df10d08714439e182fc3de2.png?thumb=1&w=120&h=120",
                    name:"养生壶"
                },
                 {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1369612c12a5c0853203de50bf742726.png?thumb=1&w=120&h=120",
                    name:"料理机"
                },
                 {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a9bd001ead18df2561d4453da6b64f45.png?thumb=1&w=120&h=120",
                    name:"咖啡机"
                },

            ],
            listgd:[
                {
                    name:"智能手表",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e5d3ad7c9c04433ac37f539be54363e2.png?thumb=1&w=120&h=120"
                },
                {
                    name:"智能手环",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/83b0bf12e3125540b5ad09d7f00b4ad9.png?thumb=1&w=120&h=120"
                },
                {
                    name:"儿童手表",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2f36a590e74adfb434d7e181ffe8e068.png?thumb=1&w=120&h=120"
                },
                {
                    name:"耳机",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d3f275690e37160c394b07a07cf95f4d.png?thumb=1&w=120&h=120"
                },
                {
                    name:"头戴影院",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/59e758f7b275da31d4729757e9f0764e.png?thumb=1&w=120&h=120"
                },
                {
                    name:"石英表",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f5067c6a067a921d39ecff175dc0e13.png?thumb=1&w=120&h=120"
                },
            ],
            listge:[
                {
                    name:"智能门锁",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/61332d55403e2fbc83368833748ec65f.png?thumb=1&w=120&h=120"
                },
                {
                    name:"智能猫眼",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/41cc8808268cc24668de53e7a654d5ef.png?thumb=1&w=120&h=120"
                },
                {
                    name:"摄像机",
                    img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bf30a91bd364e1eba5c2761f8af716a1.png?thumb=1&w=120&h=120"
                },
                {
                    name:"打印机",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c47e3bd9a666749df70bfb616106758e.png?thumb=1&w=120&h=120"
                },
                {
                    name:"智能门铃",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ba1c325f85045647d16f3e2e002db312.png?thumb=1&w=120&h=120"
                },
                {
                    name:"传感器",
                    img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/99d2669782ca1efecb0a6262f8b33ee8.png?thumb=1&w=120&h=120"
                },
                {
                    name:"智能插座",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/681e4e3b2bf022225ee28b688122e78a.png?thumb=1&w=120&h=120"
                },
                {
                    name:"保管箱",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/49756eb8cda4e95a1a42a6e1b44ac9c5.png?thumb=1&w=120&h=120"
                },
                {
                    name:"空调伴侣",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cd852ec9e49d762a74aa8787e0e88b2a.png?thumb=1&w=120&h=120"
                },
               
                {
                    name:"手持摄像机",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bf026d567d07a2641d10ebd89887b918.png?thumb=1&w=120&h=120"
                },
                {
                    name:"智能窗帘",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97188b9210e9d7002cf7d91017888d57.png?thumb=1&w=120&h=120"
                },

            ],
            lsitgf:[
                {
                    name:"台灯",
                    img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/42bdb05320261e143de7702084528783.png?thumb=1&w=120&h=120"
                },
                {
                    name:"吸顶灯",
                    img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/1e79f48932ac1d4c8b20b559346f4df9.png?thumb=1&w=120&h=120"
                },
                {
                    name:"床头灯",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3d144673242dd22dbf3d63e0c577204a.jpg?thumb=1&w=120&h=120"
                },
                {
                    name:"夜灯",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/26c8175c9b6c5d48ea67264e4df44a69.png?thumb=1&w=120&h=120"
                },

                {
                    name:"灯泡",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/78603640ae5d996928c5064dfbd41c78.png?thumb=1&w=120&h=120"
                },
                {
                    name:"筒灯",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dcd9b2d7836026036ed6e5f1de8cc49d.png?thumb=1&w=120&h=120"
                },
                {
                    name:"开关",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/681c05622b4861e0722ea9e637bc49da.png?thumb=1&w=120&h=120"
                },
            ],
            listgg:[
                {
                    name:"助力车",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/04f4983b3fcd3919736aa52e5a14b746.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"平衡车",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/70e3ed45b79da86011f9eb54872d7017.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"滑板车",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f3106695ccf44ebc7bf4683b0d925dfc.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"对讲机",
                    img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9953b19d3627e5900a807eb98761222b.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"充气宝",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/05251342897b427a4aa5a955b990fd35.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"卡丁车套件",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/893852aaf9a9010db444a63e23f3c151.png?thumb=1&w=120&h=120"
                },
            ],
            listgi:[
                {
                    img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/22452cf16e1a8c9667c9ca1053e64943.png?thumb=1&w=120&h=120",
                    name:"智能后视镜"
                },
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1a656912d2e72ca713c1472f2cc5bd22.png?thumb=1&w=120&h=120",
                    name:"车充"
                },
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/65dcccb851abe4190bb7b281002fec66.png?thumb=1&w=120&h=120",
                    name:"停车牌"
                },
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9198e60e63292b813ee8709ded46088c.png?thumb=1&w=120&h=120",
                    name:"香薰"
                },
            ],
            listgh:[
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dfbe41b342875d08208c3e39aaca8d95.png?thumb=1&w=120&h=120",
                    name:"电子体温计"
                },
                {
                    img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/21116e9ab708e9b5f14135242306ec52.jpg?thumb=1&w=120&h=120",
                    name:"洗手机"
                },
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fed559cd0f526fba113747e830b9ab62.png?thumb=1&w=120&h=120",
                    name:"清洁湿巾"
                },
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5667f12d69413c8be5349752c05c41ac.png?thumb=1&w=120&h=120",
                    name:"纸巾"
                },
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c4f48053b0b2a50e05d9b52f1e6c46d.png?thumb=1&w=120&h=120",
                    name:"毛巾浴巾"
                },
            ],
            listgo:[
                {
                    img:"https://i8.mifile.cn/b2c-mimall-media/fbc14b5b4f7c06b53e1e70af21c5784a!120x120.png",
                    name:"成人电动牙刷"
                },
                {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b74e72080addc90e5a6dac1f9e8741b7.png?thumb=1&w=120&h=120",
                    name:"儿童电动牙刷"
                },
                 {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9b2f263e1fedc58fb3d1813dbcabc520.png?thumb=1&w=120&h=120",
                    name:"剃须刀"
                },
                 {
                    img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/157728643a4e8fe13b90e413ce1c9d78.png?thumb=1&w=120&h=120",
                    name:"吹风机"
                },
                 {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f2662c40c4d4aa4f85173f0750f0286f.png?thumb=1&w=120&h=120",
                    name:"洁面机"
                },
                 {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a2cb7873bb435e9254dbc57039f0712.png?thumb=1&w=120&h=120",
                    name:"香氛机"
                },
                 {
                    img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9aa4dc6db6d48944604e2e55eb8b080f.png?thumb=1&w=120&h=120",
                    name:"手动牙刷"
                },
                 {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a18fc132faec96b17733f4354d12574e.png?thumb=1&w=120&h=120",
                    name:"冲牙器"
                },
                 {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/db24db7b373778d0e9e0af8642a777c8.png?thumb=1&w=120&h=120",
                    name:"牙膏"
                },
                 {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bf1de04a01237820d7e09255588c3525.png?thumb=1&w=120&h=120",
                    name:"洗洁精机"
                },
                 {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1ac009848fd0d89c66bc88f6d5109aec.png?thumb=1&w=120&h=120",
                    name:"化妆镜"
                },
                 {
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b3a80a4cb44538509ff459a16da08408.png?thumb=1&w=120&h=120",
                    name:"洁面仪"
                },
            ],
            listgaa:[
                {
                    name:"体脂秤",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d5dde0ef81b0580f35a598e6a7e0f12.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"体重秤",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/05c40e33d4224898ca1d82003f10dd1e.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"走步机",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1120ad1ac87fda1bc6080f5a08663717.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"按摩器",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/121b58a1819023c8fa9bb82920ceadf1.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"口罩",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6d2310d16ae6d6e56174f79e2210f3ee.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"蒸汽眼罩",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f14ffa68f44991f1daab23955b457866.jpg?thumb=1&w=120&h=120"
                },
                 {
                    name:"指甲刀",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6252f1332861e5c271da84affd0d3372.png?thumb=1&w=120&h=120"
                },

            ],
            listgbb:[
                {
                    name:"移动电源",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8070925c6ba4d476392499454b973ff8.png?thumb=1&w=120&h=120"
                },
                {
                    name:"无线充",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/901c89ad5e92c6408980decd7a79b739.png?thumb=1&w=120&h=120"
                },
                {
                    name:"充电器",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ce7aaeec82e51a44790959295183f669.png?thumb=1&w=120&h=120"
                },
                {
                    name:"车充",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4383a79a1646760515fd312d6d2cbeed.png?thumb=1&w=120&h=120"
                },
                {
                    name:"数据线",
                    img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3eff7dc0127061c13b9cc57d2bf112a1.png?thumb=1&w=120&h=120"
                },
                {
                    name:"保护壳",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1dd2a5199d454f6504f955bf395a69cd.png?thumb=1&w=120&h=120"
                },
                {
                    name:"贴膜",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b1e9f1a48b20cb0dedb640a8ef3ecd59.png?thumb=1&w=120&h=120"
                },
            ],
            listgcc:[
                {
                    name:"网络摄像头",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3ec7fd75171285d61dc09951ebd3e09a.jpg?thumb=1&w=120&h=120"
                },
                 {
                    name:"多功能转接器",
                    img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/88341c03729660891414eabc4289ffa4.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"键鼠套装",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/74f15a7f5fe1f248b1553a1bd674480c.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"鼠标",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6838d4846c42e878626808294bdea7a9.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"显示器挂灯",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2e3d25a9f3991dda8cfb1a1da60ae6b2.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"存储",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f468d68482be77b70a2819e49615f96.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"内胆包",
                    img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7a263616cc4bf261ed8725d819490dc4.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"鼠标垫",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ff5bcccfa89f6ad73fec04d925a2e972.png?thumb=1&w=120&h=120"
                },
            ],
            listgdd:[
                {
                    name:"蓝牙音箱",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/25df4ca88e5c65d76d63d530fe727965.png?thumb=1&w=120&h=120"
                },
            ],
            listgee:[
                {
                    name:"无痕胶带",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1d5391de77e2e2c8b462a4f964e8c17c.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"垃圾袋",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6150eec27e56bed1979d5481b009b7f8.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"水槽滤网",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/de4649db49d8384bb300a362361b6048.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"插线板",
                    img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/27e9c7dc467621b80fbc150782720d00.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"转换器",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c1925a6480c848720209285da334333e.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"电池",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9cdc50aa1318b1a9df4905133b3552b8.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"驱蚊器",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/77b646ee29ccca33bf28676e1617c50a.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"工具",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c35b8b22129e1450ad467855483fb48f.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"保温杯",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/855164f013ebca13f0b4f00c1c026af2.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"冰格",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c7380c3c73e87135e795686f8d2e02ff.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"零食坚果",
                    img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f6bdc0c0b509799bc2bf594975aba201.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"签字笔",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3474143ad9b881aeff69f5888b49400c.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"红包",
                    img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6073eb35ae575ed717a6ce4f03727399.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"MIJOY好物",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/730055892c1afa7b6d8128c0938b5277.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"液晶小黑板",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a27cccc02ebc33e76ecf71b49a3e7d3a.png?thumb=1&w=120&h=120"
                },
            ],
            listgff:[
                {
                    name:"定制T恤",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/13b9535ff88984fcab16f0f1e0899b39.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"运动心电T恤",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/16f33709f83b7e937953fbc8969468c8.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"眼镜",
                    img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a8eba1e2d75beba2daad2678cf0718bb.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"运动鞋",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d0b1119165c481376399aab53330e015.jpg?thumb=1&w=120&h=120"
                },
            ],
            listggg:[
                {
                    name:"旅行箱",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c824767b4773bcd374805af3cf6f3bd.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"小背包",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a38000c5575f741a99405a0e3d2e6ca.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"胸包",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/59b9d2733b7b616d9bdb00e13c44678f.png?thumb=1&w=120&h=120"
                },
            ],
            listghh:[
                {
                    name:"床垫",
                    img:"https://i8.mifile.cn/b2c-mimall-media/1454d4d897d954649c051d6628021455!120x120.png"
                },
                {
                    name:"枕头",
                    img:"https://i8.mifile.cn/b2c-mimall-media/1c27d0d59d56aa38b8518cbf302de0cf!120x120.png"
                }
            ],
            listgii:[
                {
                    name:"一往无前",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a8287668285aaf9c297f1e15b989d8ab.jpg?thumb=1&w=120&h=120"
                },
            ],
            listgoo:[
                {
                    name:"益智积木",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aec9831959568f39e8042e410db02e4e.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"液晶小黑板",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a27cccc02ebc33e76ecf71b49a3e7d3a.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"遥控车",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b170fa4ca97a42801254c9ff220c564b.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"智能魔方",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2906364c1488da49c1bbf606bb449353.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"儿童滑板车",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cd8ea6944ad04703deea940babf96ce5.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"早教启智",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8e6408cf86fbcc9f222c24035fe6a667.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"儿童手表",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2f36a590e74adfb434d7e181ffe8e068.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"RedmiKino",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/153260463288690b09a61006c134671a.png?thumb=1&w=120&h=120"
                },

            ],
            listgpp:[
                {
                    name:"电纸书",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fd9c228b51e24c5b5c5e791b13c464e2.png?thumb=1&w=120&h=120"
                },
                {
                    name:"小爱老师",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/79d749fa21b2ec5867a31acc8ffd71e3.png?thumb=1&w=120&h=120"
                },
            ],
            listgzz:[
                {
                    name:"颈部按摩器",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b7f3ac0cb8b15834692b1d10af134c33.png?thumb=1&w=120&h=120"
                },
                {
                    name:"智能足浴器",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2c3655eac76c7df20247635f4dff4b84.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"黑头仪",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4b4ec4b8ed45e3ef06706ea84d47e9d9.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"按摩椅",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cab38a632f25ffa27b260535bb252c45.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"筋膜枪",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ddc58cf0bd7b78a97fa255baed91090b.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"划船机",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dab85301cbc00cb185eb822c6145d570.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"生发仪",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/05539d0d63768c56c7488340bd7a6d7b.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"采耳棒",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3d393e8469e0dcf9a4946b5543859205.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"眼部按摩器",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cc87d552921c9eb981cecaac769f23e6.png?thumb=1&w=120&h=120"
                },

            ],
            listgxx:[
                {
                    name:"健康养生",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/995f134a8aef5103106f4275102e80d5.png?thumb=1&w=120&h=120"
                },
                {
                    name:"个人护理",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d1db1277bd71adbf3ec60a20496f162a.png?thumb=1&w=120&h=120"
                },
                {
                    name:"餐厨",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f3087830e46562fd8a6f4cd21e3fba88.png?thumb=1&w=120&h=120"
                },
                {
                    name:"居家",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/879be2c7e256209955d0aef2845ad6e0.png?thumb=1&w=120&h=120"
                },
                {
                    name:"日用",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e4f052000124f6cd2cbded2f57459c71.png?thumb=1&w=120&h=120"
                },
                {
                    name:"更多好物",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cbf89eb23afa2d600205f07c3069dff6.png?thumb=1&w=120&h=120"
                },
            ],
            listgvv:[
                {
                    name:"免费安装服务",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4cc736108c307457bd126d07207a70d9.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"以旧换新",
                    img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fdf52f6a86e364b6212f553d6347f5e4.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"企业团购",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/01842212a03a849a357b024e2894a7ab.png?thumb=1&w=120&h=120"
                },
            ],
            listgnn:[
                {
                    name:"手机保障服务",
                    img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fd145936f30c4e3a9a48fa6b728d6aa9.png?thumb=1&w=120&h=120"
                },
                {
                    name:"手机上门维修",
                    img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c7038dcf41dfacafedf56beb35075e10.png?thumb=1&w=120&h=120"
                },
                {
                    name:"后壳换新服务",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a4298217b2476809934d74dddc2e3805.png?thumb=1&w=120&h=120"
                },
                {
                    name:"屏幕换新服务",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c988cc2e09d775053eadb98bf0d8bcd7.png?thumb=1&w=120&h=120"
                },
                {
                    name:"电池换新服务",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0a40f50ce5ce5fb937a7259dad7aa4bc.png?thumb=1&w=120&h=120"
                },
                {
                    name:"手机贴膜服务",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e97c6ea17accdca1765318bbe8a27df0.png?thumb=1&w=120&h=120"
                },
            ],
            listgmm:[
                {
                    name:"电视保障服务",
                    img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fd145936f30c4e3a9a48fa6b728d6aa9.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"电视安装",
                    img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c943cf55a17f8593db059f16b8b8ce2f.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"浴霸安装",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e181957173f9ddc83c1d6384658bc301.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"电池激活服务",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cffc6553d77355acb01b7550c396a849.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"过滤器安装服务",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/991398332f2bc04c6f0d9bb92e97fa50.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"吸顶灯安装",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c946d1efa073d83715fe40670dacb273.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"引荐有礼",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/88bb44d7e0b4f10b6eac8dc0d6d6c208.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"开关安装服务",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e108518bc225a56f3ff16d5840d3f24b.png?thumb=1&w=120&h=120"
                },
            ],
            listgll:[
                {
                    name:"移动1元体验包",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f30a8cf18e1b466fb1986045a4f6beff.png?thumb=1&w=120&h=120"
                },
                {
                    name:"5G折扣套餐",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/09b4c85e1db6fa25df4b88a5fc46a512.png?thumb=1&w=120&h=120"
                },
                {
                    name:"大流量卡",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f2653cb104de99f68d60125eca14a881.png?thumb=1&w=120&h=120"
                },
                {
                    name:"联通腾讯王卡",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a49738b3b92e7702564d15df0a0848eb.png?thumb=1&w=120&h=120"
                },
                {
                    name:"电信米粉星卡",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/13218dd315c9fa254a9eacbeeb410fb5.png?thumb=1&w=120&h=120"
                },
                {
                    name:"移动花卡",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1e6e73153647af5bebd855c9c3690ea6.png?thumb=1&w=120&h=120"
                },
                {
                    name:"吃到饱",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b8a4421dab5ab0537e8345c96a6822bc.png?thumb=1&w=120&h=120"
                },
                {
                    name:"联通5G升级包",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/44dc8e9829af9c4ae1d38f9306b59cf8.png?thumb=1&w=120&h=120"
                },
            ],
            listgjj:[
                {
                    name:"小米中信卡",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/34926d24c0449cfc9134fa8462432800.jpg?thumb=1&w=120&h=120"
                },
                  {
                    name:"小米光大卡",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f67dd4c4ac71018d6f673ca8c9e51816.jpg?thumb=1&w=120&h=120"
                },
                  {
                    name:"小米招行卡",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c1fcd8999a4cae4b1c9319d35557ce17.jpg?thumb=1&w=120&h=120"
                },
                  {
                    name:"小米广发卡",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d4ff4691905cfbb8d0d73c5a61841e7b.png?thumb=1&w=120&h=120"
                },
                  {
                    name:"小米互助",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0d89a33958c8581151e1d0793ebf244e.png?thumb=1&w=120&h=120"
                },
            ],
            listgyy:[
                {
                    name:"云服务空间年卡",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d2482a1811c07d186ac142dcbdecd47d.png?thumb=1&w=120&h=120"
                },
                 {
                    name:"云服务空间月卡",
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d2482a1811c07d186ac142dcbdecd47d.png?thumb=1&w=120&h=120"
                },
            ],
            listabcfg:[
                {
                    name:"小米之家",
                    img:"https://i8.mifile.cn/b2c-mimall-media/44bf50a768761446ef32c83c0f9eeea1!120x120.png"
                },
                 {
                    name:"服务网点",
                    img:"https://i8.mifile.cn/b2c-mimall-media/44bf50a768761446ef32c83c0f9eeea1!120x120.png"
                },
                {
                    name:"线下专区",
                    img:"https://i8.mifile.cn/b2c-mimall-media/e241b4ca0c5ad159abd1c6df274df0c6!120x120.png"
                },
            ],
            
            isActive:0,
            isActiveed:false,
            scroll:0,
            inst:0,
            feilist:0
        };
    }, 
   
    methods: {
         bottomBarClick(name){
            this.$store.commit("bottomBarClick",name)
      },
        btnColor(index){
            this.isActive = index;
            console.log(index);
            this.inst = index;
            this.objStyle();           
        },
       handleScroll(e){
           let a=e.srcElement.scrollTop
            this.feilist = this.isActive;
            this.objStyleitem();
           if(a>0&&a<1016){
               this.isActive=0
           }
           else if(a>=1016&&a<2401){
               this.isActive=1
           }
           else if(a>=2401&&a<3032){
               this.isActive=2
           }
           else if(a>=3032&&a<3922){
               this.isActive=3
           }
           else if(a>=3922&&a<4256){
               this.isActive=4
           }
           else if(a>=4256&&a<5172){
               this.isActive=5
           }
           else if(a>=5172&&a<5796){
               this.isActive=6
           }
           else if(a>=5796&&a<6786){
               this.isActive=7
           }
           else if(a>=6786&&a<7554){
               this.isActive=8
           }
           else if(a>=7554&&a<8288){
               this.isActive=9
           }
           else if(a>=8288&&a<9463){
               this.isActive=10
           }
           else if(a>=9463&&a<10086){
               this.isActive=11
           }
           else if(a>=10086&&a<11329){
               this.isActive=12
           }
             else if(a>=11329&&a<12312){
               this.isActive=13
           }
             else if(a>=12312&&a<14477){
               this.isActive=14
           }
              else if(a>=14477&&a<15169){
               this.isActive=15
           }
             else if(a>=15169&&a<16918){
               this.isActive=16
           }
             else if(a>=16918){
               this.isActive=17
           }
       },
       objStyle(){
            // return {
            //     transform:"translateY("+(-1000*this.inst)+"px)"
            // } 
            if(this.inst == 1){                              
               return {
                   transform:"translateY("+(-1016*this.inst)+"px)"
               }
            }
            if(this.inst == 2){
                return {
                    transform:"translateY("+(-1200.5*this.inst)+"px)"
                }
            }
            if(this.inst == 3){
                return {
                    transform:"translateY("+(-1010.5*this.inst)+"px)"
                }
            }
            if(this.inst == 4){
                return {
                    transform:"translateY("+(-980.5*this.inst)+"px)"
                }
            }
            if(this.inst == 5){
                return {
                    transform:"translateY("+(-851.2*this.inst)+"px)"
                }
            }
            if(this.inst == 6){
                return {
                    transform:"translateY("+(-862*this.inst)+"px)"
                }
            }
            if(this.inst == 7){
                return {
                    transform:"translateY("+(-828*this.inst)+"px)"
                }
            }
            if(this.inst == 8){
                return {
                    transform:"translateY("+(-848*this.inst)+"px)"
                }
            }
            if(this.inst == 9){
                return {
                    transform:"translateY("+(-839*this.inst)+"px)"
                }
            }
            if(this.inst == 10){
                return {
                    transform:"translateY("+(-828.8*this.inst)+"px)"
                }
            }
            if(this.inst == 11){
                return {
                    transform:"translateY("+(-783.6*this.inst)+"px)"
                }
            }
             if(this.inst == 12){
                return {
                    transform:"translateY("+(-788.56*this.inst)+"px)"
                }
            }
             if(this.inst == 13){
                return {
                    transform:"translateY("+(-783.6*this.inst)+"px)"
                }
            }
             if(this.inst == 14){
                return {
                    transform:"translateY("+(-809.2*this.inst)+"px)"
                }
            }
             if(this.inst == 15){
                return {
                    transform:"translateY("+(-820.8*this.inst)+"px)"
                }
            }
             if(this.inst == 16){
                return {
                    transform:"translateY("+(-904.8*this.inst)+"px)"
                }
            }
             if(this.inst == 17){
                return {
                    transform:"translateY("+(-892.2*this.inst)+"px)"
                }
            }
             if(this.inst == 18){
                return {
                    transform:"translateY("+(-939.8*this.inst)+"px)"
                }
            }             
      },
       objStyleitem(){
            if(this.feilist >= 11){
               return {
                   transform:"translateY("+(-1*(this.feilist-11))+"rem)"
               }
            }
      }
    }, 
};
</script>

      
<style scoped>
.page-Classify {
    position: relative;
    width: 100%;
    height: 100%;
}
.page-02 {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    /* justify-content:flex-start */
    position: fixed;
}
.Classify-top {
    z-index: 9999;
    /* top: 0;
    left: 0;
    right: 0; */
    width: 100%;
    height: 50px;
}
.Classify-body {
    width: 100%;
    height: 92%;
    /* justify-content: flex-start; */
    /* overflow-x: hidden;
    overflow-y: auto; */
    flex-grow: 1;
}
.Classify-header {
    display: flex;
    justify-content: space-between;
    height: 50px;
    background-color: #f2f2f2;
    color: #666;
    align-items: center;
    height: 100%;
}
.Classify-01 {
    background-image: url(../assets/images/w返回箭头.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: .5rem .5rem;
    width: .5rem;
    height: .5rem;
    margin-left: .15rem;
}
.Classify-02 {
    text-align: center;
    padding: 15px;
    font-size: .3rem;
    flex-grow: 1;
}
.Classify-03 {
     width: .6rem;
    height: .6rem;
    background-image: url(../assets/images/w搜索.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: .6rem .6rem;
    margin-right: .15rem;
}

.page-03 {
    width: 100%;
    height: 100%;
}
.body-left {
    flex-grow: 1;
    position: fixed;
    top: 50px;
    bottom: 52px;
    left: 0;
    width: 25%;
    border-right: 1px solid #efefef;
    overflow: hidden;
}
.body-right {
    flex-grow: 1;
    height: 100%;
    width: 75%;
    float: right;
    overflow: auto;
    overflow: scroll;
    height: 100vh;
}
.item {
    z-index: 90;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: -0.3rem;
    padding: 5px 10px 5px 0;
    background: #fefefe;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    list-style: none;
}
ul > li {
    font-size: 0.3rem;
    height: 0.9rem;
    text-align: center;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    overflow: hidden;
    white-space: nowrap;
    line-height: 50px;
}

.item-a {
    display: inline-block;
    margin: auto auto;
    color: #3c3c3c;
}
/* 小米列表的细分产品 */
.body-right-list {
    width: 90%;
    height: 100%;
    margin: 0 auto;
}
.pic1 {
    width: 100%;
    height: 100px;
    background-image: url(../assets/images/w众筹.webp);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
}
.list-title {
    background: #fff;
    font-size: 0.28rem;
    text-align: center;
    font-weight: 400;
    margin-top: 0.2rem;
    height: 1.28rem;
    line-height: 1.28rem;
    overflow: hidden;
    display: flex;
    justify-content:space-between;

}
.list-menu {
    background: #fff;
    margin: -0.06rem 0 0;
    display: -webkit-box;
    display: flex;
    width: 100%;
    overflow: hidden;
    flex-wrap: wrap;
}
.list-product {
    width: 33.333333333333336%;
    text-align: center;
    margin-top: 0.2rem;
    margin-bottom: 0.3rem;
    overflow: hidden;
}
.list-photo {
    background-image: url(../assets/images/w手机1.png);
}
.list-photo-001 {
    background-image: url(../assets/images/小米10至尊.png);
}
.list-photo-002 {
    background-image: url(../assets/images/小米10青春.png);
}
.list-photo-003 {
    background-image: url(../assets/images/小米10.png);
}

.list-photo-mix {
    background-image: url(../assets/images/w小米手机2.png);
}
.list-photo,.list-photo-003,.list-photo-001,.list-photo-002,
.list-photo-mix,
.list-photo-for {
    width: 1rem;
    height: 1rem;
    margin: 0 auto;
    background-color: #fff;
    overflow: hidden;
    background-size: 1rem 1rem;
    background-position: 100% 100%;
}
.list-name {
    margin-top: 0.28rem;
    white-space: nowrap;
    font-size: 0.23rem;
    color: rgba(0, 0, 0, 0.54);
}
.cells_auto_fill,
.cells_auto_fill-pi{
    height: 0.8rem;
    background-size: 100% 0.8rem;
    background-repeat: no-repeat;
}
.cells_auto_fill {
    background-image: url(../assets/images/w进入手机频道.webp);
}
.cells_auto_fill-pi {
    background-image: url(../assets/images/33.webp);
}
.pic-product {
    height: 1rem;
    width: 1rem;
}
.list-photo-one,
.list-photo-two {
    height: 2rem;
    background-size: 100% 2rem;
    background-repeat: no-repeat;
}
.list-photo-one {
    background-image: url(../assets/images/小米11.webp);
}
.list-photo-two {
    background-image: url(../assets/images/32.webp);
}
.active,.activeed{
    font-size:0.4rem;
    font-weight: 600px;
    color: #ff6300;
}
.backgif{
    height: 0.8rem;
}
.pic10{
    width: 100%;
    height: 0.8rem;
    display:block
}
.empty01{
    width: 100%;
    height: 9.8rem;
}
.lineleft,.lineright{
    color: #e0e0e0;
    font-weight: 500;
}
.lineleft{
    margin-left: .5rem;
}
.linetitle{
    flex-shrink: 0;
    width:2.8rem
}
.lineright{
    margin-right: .5rem;
}

</style>