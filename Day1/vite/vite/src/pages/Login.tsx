function LoginPage() {
    return(
        <div> 
            <h3>Login</h3>
            <form>
                <div className="from-group">
                    <label htmlFor="username">UserName</label>
                    <input type="text" name="username" className="form-control" placeholder="UserName"></input>
                </div>
                <div className="from-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Password"></input>
                </div>
                <br />
                <button className="btn btn-success"> Login </button>
            </form>
        </div>
    ) 
}


export default LoginPage