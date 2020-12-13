<template>
  <div style="height: 100%; width: 100%;">
    <!-- 搜索框 -->
    <div class="box">
      <div>
        <!-- <el-button type="primary" @click="addDesk()">添加餐桌</el-button> -->
        <el-button id="finishedAll" class="finishedAll" type="primary" value="已下单" @click="searchOrdersByStates()"
          plain>待完成订单</el-button>
      </div>
      <div >
        <el-input  placeholder="请输入手机号/尾号" v-model="inputsearch"   class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click="searchOrdersByPhone()"></el-button>
        </el-input>
      </div>
    </div>


   <!-- <div style="margin-top: 15px;" class="searchbar">
      <el-input placeholder="请输入手机号/尾号" v-model="inputsearch" class="input-with-select">
        <el-button slot="append" icon="el-icon-search" @click="searchOrdersByPhone()"></el-button>
      </el-input>
      <el-button id="finishedAll" class="finishedAll" type="success" value="已下单" @click="searchOrdersByStates()" plain>待完成订单</el-button>
    </div> -->

    <!-- 查看详情的对话框 -->
    <el-dialog title="查看订单详情" :visible.sync="isShowOrderDetail" >
      <el-table :data="orderDetailData">
        <el-table-column prop="foodImg" label="食物图片" width="120">
          <img class="card-img-top" src="../assets/logo.png" style="width: 50px;height: 50px;border: 1px #B3C0D1 solid;">
        </el-table-column>
        <el-table-column prop="foodId" label="食物编号" width="120"></el-table-column>
        <el-table-column prop="foodName" label="食物名称" width="120"></el-table-column>
        <el-table-column prop="foodNO" label="食物数量" width="120"></el-table-column>
        <el-table-column prop="foodPrice" label="食物总价" width="120"></el-table-column>
        <el-table-column prop="deskId" label="餐桌编号" width="120"></el-table-column>
        <el-table-column prop="orderId" label="订单编号" width="120"></el-table-column>
        <el-table-column prop="userPhone" label="用户手机号码" width="150"></el-table-column>
      </el-table>
    </el-dialog>





        <!-- <el-form-item label="食物图片"> -->
          <!-- <img class="card-img-top" src="../assets/logo.png" style="width: 100px;height: 100px;border: 1px #B3C0D1 solid;"> -->
          <!-- <el-input v-model="orderDetailData.foodImg" :disabled="true" autocomplete="off"></el-input> -->
          <!-- src="{{data[0].proImg}}" -->


    <!-- 订单列表 -->
    <el-table :data="orderlist" border style="width: 100%" class="usertable">
      <el-table-column fixed prop="orderId" label="订单编号" width="120"></el-table-column>
      <el-table-column prop="orderState" label="订单状态" width="150"></el-table-column>
      <el-table-column prop="orderDate" label="下单时间" width="200"></el-table-column>
      <el-table-column prop="orderPrice" label="订单金额" width="120"></el-table-column>
      <el-table-column prop="userId" label="用户Id" width="120"></el-table-column>
      <el-table-column prop="deskId" label="餐桌编号" width="120"></el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <!-- 查看订单详情 -->
          <el-button type="text" size="middle" @click="showOrderDetailDialog(scope.row)">查看详情</el-button>
          <!-- 已完成 -->
          <el-button id="finishorder" class="finishorder" value="已完成" type="text" size="middle" @click="editOrder(scope.row)">已完成</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        orderlist: [],
        inputsearch: '',
        // 查看详情需要的参数
        isShowOrderDetail: false,
        orderDetailData: []
      }
    },
    // 管理员查询所有订单
    mounted() {
      this.getorders(this.inputsearch);
    },
    methods: {
      // 管理员查询所有和模糊查询 订单 公用
      getorders(search = '') {
        var url = '';
        if (search != '') {
          url = "/api/searchOrdersByPhone/?userPhone=" + search;
        } else {
          url = "/api/getOrders"
        }
        this.$Axios.get(url)
          .then(backdata => {
            this.orderlist = backdata.data;
          });
      },
      // 管理员模糊查询某一用户订单(根据手机尾号)
      searchOrdersByPhone() {
        this.getorders(this.inputsearch);
        console.log(this.inputsearch);
        this.inputsearch = '';
      },
      // 管理员模糊查询某一状态的订单（根据订单状态）
      searchOrdersByStates() {
        var btnvalue = document.getElementById("finishedAll").value;
        var url = "/api/searchOrdersByStates/?orderState=" + btnvalue;
        this.$Axios.get(url)
          .then(backdata => {
            this.orderlist = backdata.data;
          });
      },
      // 管理员查看某个订单的订单详情
      showOrderDetailDialog(datas) {
        var orderId = datas.orderId;
        this.isShowOrderDetail = true;
        this.$Axios({
          url: '/api/getOrderDetails?orderId=' + orderId,
          methods: "get",
        }).then(backdata => {
          this.orderDetailData = backdata.data;
          // console.log("000000000000");
          // console.log(backdata.data);
          // console.log("111111111111");
          // console.log(backdata);
          // console.log("22222222");
          // console.log(backdata.data[1]);
          // console.log("3333333333");
          // console.log(this.orderDetailData);
          // console.log("44444444444444");
          // console.log(this.orderDetailData.orderId);

        });
      },
      // 修改订单状态
      editOrder(datas) {
        console.log(datas);
        var orderId = datas.orderId;
        var buttonValue = document.getElementById("finishorder").value;
        // alert(orderId+buttonValue)
        var urls = "/api/editOrder?orderId=" + orderId + "&&buttonValue='" + buttonValue + "'";
        alert(urls)
        this.$Axios({
          url: urls,
          methods: "put",
          // data: {""}
        }).then(backdata => {
          if (backdata.status == 200) {
            this.$message({
              message: "修改成功",
              type: "success"
            });
            this.getorders();
          } else {
            this.$message.error("修改失败！")
          }
          // this.orderDetailData = backdata.data[0];
        });
      },

    },
  }
</script>

<style>
  .box {
    margin: 20px 0px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }


  .el-table thead {
    height: 50px;
    line-height: 50px;
  }

  .searchbar {
    width: 80%;
    height: 60px;
    line-height: 50px;
    margin: 0 auto;
  }

  .addinput {
    height: 50px;
    line-height: 50px;
  }

  .addinput input {
    width: 10%;
  }

  .el-select .el-input {
    width: 130px;
  }

  .searchbar {
    width: 100%;
    position: relative;
  }

  .input-with-select {
    background-color: #fff;
    /* margin: 10px; */
    float: left;
    formLabelWidth:120px;
  }

  .tabusers {
    width: 100%;
    line-height: 100px;
  }

  .finishedAll {
    float: left;
    margin: 10px;
  }

  .el-dialog{
    width: 76%;
  }
  .el-dialog__header{
    height: 50px;
    line-height: 50px;
    padding: 0px;
  }
  .el-dialog__body{
    padding: 0px,20px;
  }
</style>
