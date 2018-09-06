<template>
	<div class="main">
        <div class="row">
            <div class="col-md-4">
                <h4>Create New Bank Account</h4>
                <ul class="list-group">
                    <router-link to="#" class="list-group-item text-black">         
                            <strong>123</strong>
                            <div><small>wong han juen-158396089582</small></div>
                    </router-link>
                </ul>
            </div>
            <div class="col-md-8">
                <h4>&emsp;</h4>
                <div class="row form-group">
                    <label for="login" class="col-md-4 control-label form-label mulit">Bank Name</label>
                    <div class="col-md-8">
                        <select name="bank" id="bank" class="form-control form-control">
                            <option value="ABB">Affin Bank</option>
                            <option value="AIB">Affin Islamic Bank Berhad</option>
                            <option value="AGR">Agrobank</option>
                            <option value="ARB">Al-Rajhi Bank (Malaysia) Berhad</option>
                            <option value="ABM">Alliance Bank</option>
                            <option value="ABMI">Alliance Islamic Bank (M) Berhad</option>
                            <option value="AMB">AmBank</option>
                            <option value="AMBI">AmIslamic Bank (M) Berhad</option>
                            <option value="BIM">Bank Islam</option>
                            <option value="BMM">Bank Muamalat (Malaysia) Berhad</option>
                            <option value="BKR">Bank Kerjasama Rakyat</option>
                            <option value="BOA">Bank of America (Malaysia) Berhad</option>
                            <option value="BOC">Bank of China (Malaysia) Berhad</option>
                            <option value="BOT">Bank of Tokyo-Mitsubishi UFJ (Malaysia) Berhad</option>
                            <option value="BSN">Bank Simpanan Nasional Berhad</option>
                            <option value="BNP">BNP Paribas Malaysia Berhad</option>
                            <option value="CIM">CIMB Bank Berhad</option>
                            <option value="CIMI">CIMB Islamic Bank Berhad</option>
                            <option value="CIT">Citibank Berhad</option>
                            <option value="DB">Deutsche Bank (Malaysia) Berhad</option>
                            <option value="HLB">Hong Leong Bank</option>
                            <option value="HLBI">Hong Leong Islamic Bank Berhad</option>
                            <option value="HSA">HSBC Amanah Malaysia Berhad</option>
                            <option value="HSB">HSBC Bank Malaysia Berhad</option>
                            <option value="ICB">Industrial and Commercial Bank of China (M) Berhad</option>
                            <option value="JPMC">JP Morgan Chase Bank Berhad</option>
                            <option value="KFH">Kuwait Finance House (Malaysia) Berhad</option>
                            <option value="MBB">Maybank</option>
                            <option value="MBBI">Maybank Islamic Berhad</option>
                            <option value="MCB">Mizuho Corporate Bank (Malaysia) Berhad</option>
                            <option value="OCB">OCBC Bank (Malaysia) Berhad</option>
                            <option value="OCBI">OCBC Al-Amin Bank Berhad</option>
                            <option value="PBB">Public Bank Berhad</option>
                            <option value="RHB">RHB Bank</option>
                            <option value="RHBI">RHB Islamic Bank Berhad</option>
                            <option value="SCB">Standard Chartered Bank (Malaysia) Berhad</option>
                            <option value="SCS">Standard Chartered Saadiq Berhad</option>
                            <option value="SMB">Sumitomo Mitsui Banking Corporation Malaysia Berhad</option>
                            <option value="RBS">The Royal Bank of Scotland Berhad</option>
                            <option value="UOB">United Overseas Bank Berhad</option>
                        </select>		         
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="row form-group">
                    <label for="login" class="col-md-4 control-label form-label mulit" >Account Name</label>
                    <div class="col-md-8">
                        <input type="text" name="login" value="juenrambo" id="login" class="form-control form-control" size="10">			
                                    
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="row form-group">
                    <label for="login" class="col-md-4 control-label form-label mulit">Account Number</label>
                    <div class="col-md-8">
                        <input type="text" name="login" value="juenrambo" id="login" class="form-control form-control" size="10">			
                                    
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="row form-group">
                    <label for="login" class="col-md-4 control-label form-label"></label>
                    <div class="col-md-8">
                        <span class="btn btn-primary btn-sm">Create New Bank Account</span>		
                                    
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
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
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip(); 
    });
  }
}
</script>

<style scoped lang="less">
.main{
    font-size: 12px;
}
i{
  margin-left:5px;
}
.mulit::before{
  content:'*';
  color:#dd0000;
}
@media (min-width: 768px)
{ 
    .form-label{
        justify-content: flex-end;
        display: flex;
        align-items: center;
        margin-bottom: 0;
        font-weight: 500;
    }
}
@media (max-width: 767px) { 
    .form-label{
        text-align: left;
        display: flex;
        align-items: center;
        font-weight: 500;
    }
 }

</style>
