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
                    <div class="body-left">
                        <ul class="item">
                            <li v-for="(item,index) in list" :key="item.name" >
                                <a :href="'#'+item.id" class="item-a"  :class='{active:isActive==index}' @click="btnColor(index)">
                                    <span class="item-name">{{item.name}}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="body-right" @scroll="handleScroll($event)">
                        <div class="body-right-list">
                            <div class="pic1" id="小米手机11"></div>
                            <div class="list-title">--小米数字系列--</div>
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

                            <div class="list-title">--小米MIX系列--</div>
                            <div class="list-menu">
                                <div class="list-product">
                                    <div class="list-photo-mix"></div>
                                    <p class="list-name">小米MIX Alpha</p>
                                </div>
                            </div>
                            <div class="cells_auto_fill"></div>
                            <!-- 小米手机配件 -->
                            <div class="list-title">--小米手机配件--</div>
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
                            <div class="list-title">--Redmi红米 Note系列--</div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listR" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                            <!-- Redmi红米 K系列 -->
                            <div class="list-title">--Redmi红米 K系列--</div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listK" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                            <!-- Redmi红米 X系列 -->
                            <div class="list-title">--Redmi红米 X系列--</div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listX" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                            <!-- Redmi红米 数字系列 -->
                            <div class="list-title">--Redmi红米 数字系列--</div>
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
                            <div class="list-title">--Redmi手机配件--</div>
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
                            <div class="list-title">--Redmi红米 数字系列--</div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listS" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                             <!-- Redmi红米 数字系列 -->
                              <!-- <div class="list-photo-two" id="电视44"></div> -->

                              <!-- 电视 -->
                            <div class="list-title" id="电视44">--电视--</div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listS" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                            <div class="list-title">--Redmi红米 数字系列--</div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listS" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                             <!-- Redmi红米 数字系列 -->

                             <!-- 大家电 -->
                            <div class="list-title" id="大家电55">--大家电--</div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listS" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                             <!-- Redmi红米 数字系列 -->
                            <div class="list-title">--Redmi红米 数字系列--</div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listS" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>

                             <!-- Redmi红米 数字系列 -->

                            <!-- 电脑办公 -->
                            <div class="list-title" id="电脑办公66">--电脑办公--</div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listS" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                             <!-- Redmi红米 数字系列 -->
                            <div class="list-title">--Redmi红米 数字系列--</div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listS" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>


                             <!-- Redmi红米 数字系列 -->

                            <!-- 小爱音箱 -->
                            <div class="list-title" id="小爱音箱77">--小爱音箱--</div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listS" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                             <!-- Redmi红米 数字系列 -->
                            <div class="list-title">--Redmi红米 数字系列--</div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listS" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>

                             <!-- Redmi红米 数字系列 -->
                             <!-- 路由器 -->


                            <div class="list-title" id="路由器88">--路由器--</div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listS" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                             <!-- Redmi红米 数字系列 -->
                            <div class="list-title">--Redmi红米 数字系列--</div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listS" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>

                             <!-- Redmi红米 数字系列 -->
                             <!-- 生活电器 -->


                            <div class="list-title" id="生活电器99">--生活电器--</div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listS" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                             <!-- Redmi红米 数字系列 -->
                            <div class="list-title">--Redmi红米 数字系列--</div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listS" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>


                             <!-- Redmi红米 数字系列 -->
                             <!-- 厨房电器 -->
                            <div class="list-title" id="厨房电器12">--厨房电器--</div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listS" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                             <!-- Redmi红米 数字系列 -->
                            <div class="list-title">--Redmi红米 数字系列--</div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listS" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>


                             <!-- Redmi红米 数字系列 -->
                             <!-- 智能穿戴 -->


                            <div class="list-title" id="智能穿戴23">--智能穿戴--</div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listS" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                             <!-- Redmi红米 数字系列 -->
                            <div class="list-title">--Redmi红米 数字系列--</div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listS" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>


                            <!-- Redmi红米 数字系列 -->
                             <!-- 智能家居 -->


                            <div class="list-title" id="智能家居34">--智能家居--</div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listS" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                             <!-- Redmi红米 数字系列 -->
                            <div class="list-title">--Redmi红米 数字系列--</div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listS" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>



                              <!-- Redmi红米 数字系列 -->
                             <!-- 智能家居 -->


                            <div class="list-title" id="车载出行56">--车载出行--</div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listS" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                             <!-- Redmi红米 数字系列 -->
                            <div class="list-title">--Redmi红米 数字系列--</div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listS" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>


                            <!-- Redmi红米 数字系列 -->
                             <!-- 个户健康 -->


                            <div class="list-title" id="个户健康78">--个户健康--</div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listS" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                             <!-- Redmi红米 数字系列 -->
                            <div class="list-title">--Redmi红米 数字系列--</div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listS" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>


                            <!-- Redmi红米 数字系列 -->
                             <!-- 数码配件 -->


                            <div class="list-title" id="数码配件89">--数码配件--</div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listS" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                             <!-- Redmi红米 数字系列 -->
                            <div class="list-title">--Redmi红米 数字系列--</div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listS" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>


                            <!-- Redmi红米 数字系列 -->
                             <!-- 日用百货 -->


                            <div class="list-title" id="日用百货13">--日用百货--</div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listS" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                             <!-- Redmi红米 数字系列 -->
                            <div class="list-title">--Redmi红米 数字系列--</div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listS" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>


                             <!-- Redmi红米 数字系列 -->
                             <!-- 有品精选 -->


                            <div class="list-title" id="有品精选14">--有品精选--</div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listS" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                             <!-- Redmi红米 数字系列 -->
                            <div class="list-title">--Redmi红米 数字系列--</div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listS" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>


                             <!-- Redmi红米 数字系列 -->
                             <!-- 小米服务 -->


                            <div class="list-title" id="小米服务16">--小米服务--</div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listS" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                             <!-- Redmi红米 数字系列 -->
                            <div class="list-title">--Redmi红米 数字系列--</div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listS" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>


                             <!-- Redmi红米 数字系列 -->
                             <!-- 零售店 -->


                            <div class="list-title" id="零售店17">--零售店--</div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listS" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>
                             <!-- Redmi红米 数字系列 -->
                            <div class="list-title">--Redmi红米 数字系列--</div>
                            <div class="list-menu">
                                <div class="list-product" v-for="item in listS" :key="item.name">
                                    <div class="list-photo-for">
                                        <img :src="item.img" alt class="pic-product" />
                                    </div>
                                    <p class="list-name">{{item.name}}</p>
                                </div>
                            </div>





















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
            isActive:0,
            isActiveed:false,
            scroll:0,
        };
    }, 
    methods: {
         bottomBarClick(name){
            this.$store.commit("bottomBarClick",name)
      },
        btnColor(item){
            this.isActive = item; 
        },
        // handleScroll(e) {
        //      console.log(e.srcElement.scrollTop);
        //      console.log("距离顶端的距离");
        //     //  for(let i=0;i<this.list.length;i++){
        //     //      if(e.srcElement.scrollTop>=1000)
        //     //      this.isActiveed= this.list[i]       
        //     // }
             
             
        // },
       handleScroll(e){
           let a=e.srcElement.scrollTop
           console.log(a)
           if(a>0&&a<1016){
               this.isActive=0
           }
           else if(a>=1016&&a<2401){
               this.isActive=1
           }
           else if(a>=2401&&a<2806){
               this.isActive=2
           }
           else if(a>=2806&&a<3389){
               this.isActive=3
           }
           else if(a>=3389&&a<3972){
               this.isActive=4
           }
           else if(a>=3972&&a<4554){
               this.isActive=5
           }
           else if(a>=4554&&a<5137){
               this.isActive=6
           }
           else if(a>=5137&&a<5720){
               this.isActive=7
           }
           else if(a>=5720&&a<6302){
               this.isActive=8
           }
           else if(a>=6302&&a<6885){
               this.isActive=9
           }
           else if(a>=6885&&a<7467){
               this.isActive=10
           }
           else if(a>=7467&&a<8050){
               this.isActive=11
           }
           else if(a>=8050&&a<8633){
               this.isActive=12
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
    height: 8%;
    transition: all linear 2s;
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
    width: 30px;
    height: 30px;
    
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
.cells_auto_fill-pi {
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

</style>