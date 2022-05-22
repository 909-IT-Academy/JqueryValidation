<div class="container">
    <div class="row">
        <form name="contactForm" method="POST">             
            <div class="form-group" >
                <label for="exampleInputEmail1">First Name</label>
                <input type="text" class="form-control"  aria-describedby="nameHelp" name="fname">                
            </div>

            <div class="form-group" >
                <label for="exampleInputEmail1">Last Name</label>
                <input type="text" class="form-control" aria-describedby="nameHelp" name="lname">
            </div>

            <div class="form-group" >
                <span id="lastname"></span>                
            </div>
        
            <div class="form-group" >
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="cemail">
            </div>
            <div class="form-group" >
                <label for="Phone Number">Phone Number</label>
                <input type="number" class="form-control" id="cphoneNumber" aria-describedby="cphoneNumber" name="cphoneNumber">
            </div>
            <div class="form-group" >
                <select name="selectFeild" id="selectFeild" class="form-control">
                    <option value="1">1</option>
                    <option value="0">0</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</div>
