import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import AccountCircle from "@material-ui/icons/AccountCircle";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
//import { textAlign } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 310
  },
  root: {
    "& > *": {
      margin: theme.spacing(3),
      width: 250,
      textAlign: "center"
    }
  },
  button: {
    "& > *": {
      margin: theme.spacing(2),
      width: 250,
      textAlign: "center",
      marginLeft: 32,
      marginTop: -20
    }
  }
}));

const MIN_HEIGTH = `${window.innerHeight + 13.5}px`;

const Home = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <div
      style={{ margin: "0px", minHeight: MIN_HEIGTH }}
      className="background-login-image"
    >
      <div className="App">
        <header className="App-header">
          <Grid container wrap="nowrap" justify="center">
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  Login
                </Typography>
                <form className={classes.root} noValidate autoComplete="off">
                  <div>
                    <TextField
                      id="standard-number"
                      label="Company Code"
                      variant="outlined"
                      type="number"
                      placeholder="Company Code"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <BusinessCenter />
                          </InputAdornment>
                        )
                      }}
                    />
                  </div>
                  <div>
                    <TextField
                      id="outlined-required"
                      label="Username"
                      variant="outlined"
                      placeholder="Username"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        )
                      }}
                    />
                  </div>
                  <div>
                    <FormControl
                      className={clsx(classes.margin, classes.textField)}
                      variant="outlined"
                    >
                      <InputLabel htmlFor="outlined-adornment-password">
                        Password
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        placeholder="Password"
                        type={values.showPassword ? "text" : "password"}
                        value={values.password}
                        onChange={handleChange("password")}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {values.showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        labelWidth={70}
                      />
                    </FormControl>
                  </div>
                </form>
              </CardContent>
              <CardActions className={classes.button}>
                <Button variant="contained" color="primary">
                  Login
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </header>
      </div>
    </div>
  );
};

export default Home;
