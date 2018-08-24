<template>
	<div class="main">
		<div class="container">
			<div class="notice">
				公告公告公告公告公告公告公告公告公告公告
			</div>
      <h2>Buy 4D Online!</h2>
            <div class="row line ">
        <div class="col-md-2">
          <select class="form-control ht-draw-date" name="draw_date" data-toggle="popover" title="" data-content="Please select a draw date." data-trigger="manual" data-container="body" data-original-title="Required" style="font-size:12px;padding-left:0">
            <option value="">Please select a date</option>
            <option value="2018-08-25">Sat, 25/8/2018</option>
            <option value="2018-08-26">Sun, 26/8/2018</option>
            <option value="2018-08-29">Wed, 29/8/2018</option>
          </select>
        </div>
        <div class="col-md-3 d-flex justify-content-around">
        </div>
        <div class="col-md-6 d-flex justify-content-around align-items-center">
          <img src="/static/logo/logo-magnum.jpg" style="width:46px">
          <img src="/static/logo/logo-pmp.jpg" style="width:46px">
          <img src="/static/logo/logo-sabah88.jpg" style="width:46px">
          <img src="/static/logo/logo-sarawak.jpg" style="width:46px">
          <img src="/static/logo/logo-singapore.jpg" style="width:46px">
          <img src="/static/logo/logo-stc4d.jpg" style="width:46px">
          <img src="/static/logo/logo-toto.jpg" style="width:46px">
        </div>
        <div class="col-md-1 fourth" >
          <span>Sub Total</span>
        </div>
      </div>
      <div class="row line " v-for="(item,key) in 8" :key="key">
        <div class="col-md-2 first">
          <div class="input-group">
						<span class="input-group-addon noRam-12">{{key}}</span>
						<input type="number" class="form-control number-input noRam-12" size="6" maxlength="6" placeholder="Number #">
            <button type="button" class="btn btn-primary btn-sm dropdown-toggle noRam-12" data-toggle="dropdown">
                Straight
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item noRam-12" href="#">Straight</a>
              <a class="dropdown-item noRam-12" href="#">BOX</a>
              <a class="dropdown-item noRam-12" href="#">iBOX</a>
            </div>
					</div>
        </div>
        <div class="col-md-3 d-flex justify-content-around second">
          <input type="number" class="form-control number-input noRam-12" size="6" maxlength="6" placeholder="Big">
          <input type="number" class="form-control number-input noRam-12" size="6" maxlength="6" placeholder="Small">
          <input type="number" class="form-control number-input noRam-12" size="6" maxlength="6" placeholder="4A">
        </div>
        <div class="col-md-6 third d-flex justify-content-around align-items-center">
          <div class="bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-off bootstrap-switch-mini " data-animated="false" style="width:46px;height:23px">
            <input type="checkbox" name="my-checkbox"/>
          </div>
          <div class="bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-off bootstrap-switch-mini " data-animated="false" style="width:46px;height:23px">
            <input type="checkbox" name="my-checkbox"/>
          </div>
          <div class="bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-off bootstrap-switch-mini " data-animated="false" style="width:46px;height:23px">
            <input type="checkbox" name="my-checkbox"/>
          </div>
          <div class="bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-off bootstrap-switch-mini " data-animated="false" style="width:46px;height:23px">
            <input type="checkbox" name="my-checkbox"/>
          </div>
          <div class="bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-off bootstrap-switch-mini " data-animated="false" style="width:46px;height:23px">
            <input type="checkbox" name="my-checkbox"/>
          </div>
          <div class="bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-off bootstrap-switch-mini " data-animated="false" style="width:46px;height:23px">
            <input type="checkbox" name="my-checkbox"/>
          </div>
          <div class="bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-off bootstrap-switch-mini " data-animated="false" style="width:46px;height:23px">
            <input type="checkbox" name="my-checkbox"/>
          </div>
        </div>
        <div class="col-md-1 fourth" >
          <input type="number" class="form-control noRam-12 w-100" disabled size="6" maxlength="6" value="0.01">
        </div>
      </div>
      <div>
        <span class="btn btn-primary" style="margin-top:10px">Continue ></span>
      </div>

		</div>
	</div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  mounted(){
    $("[name='my-checkbox']").bootstrapSwitch();
  }

}
</script>

<style scoped lang="less">
.main{
  .container{
	  padding-top:10px;
	  padding-bottom:20px;
	  background-color: #fff;
	  margin-bottom:20px;
	  .notice{
		  background-color: #eee;
		  font-size:12px;
		  padding:5px 0;
		  margin-bottom:15px;
    }
  }
}
.input-group-addon {
  display: flex;
  align-items: center;
    padding: 6px 2px;
    font-size: 12px;
    font-weight: 400;
    line-height: 1;
    color: #555;
    text-align: center;
    background-color: #eee;
    border: 1px solid #ccc;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}
.number-input{
  width:20%;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
    margin: 0;
}
.noRam-12{
  font-size: 12px !important;
}
.line{
  .btn-sm{
    padding:4px;
  }
}
.second{
  input{
    width: 32%;
  }
}
.third{
  input{
    width:20px;
  }
}
.fourth{
  input{
    padding:2px;
    font-size: 12px;
  }
}
.first,.second,.third,.fourth{
  margin-top: 10px;
}
</style>
