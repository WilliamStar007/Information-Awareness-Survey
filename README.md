<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>GitHub User Information Awareness Survey</title>
    <link rel="stylesheet" href="../static/css/footer.css"/>
    <link rel="stylesheet" href="../static/css/center.css"/>
    <link rel="stylesheet" href="../static/css/text-box.css"/>
    <style>
        body {
            background: azure;
        }
        header {
            padding-bottom: 20px;
        }
        form {
            padding-top: 20px;
        }
        input {
            vertical-align: middle;
        }
        label {
            vertical-align: middle;
        }
        .img-with-text {
            text-align: justify;
            width: 181px;
        }

        .caption {
            margin: 0;
            text-align: center;
        }

        .center {
            display: block;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
        }
        
        .site-footer
        {
          background-color:azure;
          padding:45px 0 20px;
          font-size:15px;
          line-height:24px;
          color:#737373;
        }

        .site-footer hr
        {
          border-top-color:#bbb;
          opacity:0.5
        }
        
        .box {
            height: 400px;
            width: 800px;
            border: 1px solid #ccc;
            font: 16px/26px Georgia;
            overflow: auto;
        }

        @media screen and (max-width: 1000px) {
            .box {
                height: 300px;
                width: 600px;
                border: 1px solid #ccc;
                font: 16px/26px Georgia;
                overflow: auto;
            }
        }

        @media screen and (max-width: 700px) {
            .box {
                height: 300px;
                width: 500px;
                border: 1px solid #ccc;
                font: 16px/26px Georgia;
                overflow: auto;
            }
        }

        @media screen and (max-width: 500px) {
            .box {
                height: 300px;
                width: 480px;
                border: 1px solid #ccc;
                font: 16px/26px Georgia;
                overflow: auto;
            }
        }

        .margin {
            margin-left: 20px;
            margin-right: 20px;
        }

        .left {
            text-indent: 5%;
            text-align: justify;
        }

        .container {
            text-align-all: start;
        }



    </style>
</head>

<header>
    <a href="https://www.vanderbilt.edu">
        <img src="../static/media/vu-logo.png" alt="vu-logo" width="150" class="center">
    </a>

    <h2 class="center"> GitHub User Information Awareness Survey </h2>
</header>

<body class="center">
    <div class="box center">
        <h4 class="margin"> Survey Introduction </h4>
        <p class="left margin">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Viverra orci sagittis eu volutpat odio facilisis mauris sit.
            Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Viverra orci sagittis eu volutpat odio facilisis mauris sit.
            Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien.
        </p>
        <h4 class="margin"> Reward Statement </h4>
        <p class="left margin">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Viverra orci sagittis eu volutpat odio facilisis mauris sit.
            Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Viverra orci sagittis eu volutpat odio facilisis mauris sit.
            Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien.
        </p>
    </div>
</body>

<form>
    <div class="container">
        <input type="checkbox" id="consent" name="consent" value="agree">
        <label for="consent">
            I have read the Survey Introduction and Reward Statement
        </label> <br><br>
    </div>

    <input type="submit" value="Next">
</form>

<footer class="site-footer">
    <hr>
    <img src="../static/media/vuse-logo.png" alt="vuse-logo" width="250" class="center">

    <p class="caption">
        Copyright &copy; 2022 All Rights Reserved by
        <a href="https://engineering.vanderbilt.edu/">VUSE</a>. <br>
        Any Questions? <a href="mailto:anda.liang@vanderbilt.edu">Contact Us</a>
    </p>
</footer>
</html>
