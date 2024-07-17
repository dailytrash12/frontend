<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .kotak1 {
            width: 200px;
            background-color: blue;
            color: black;
            border: 1px solid black;
            padding: 10px;
            margin: 5px;
        }

        .kotak2 {
            width: 200px;
            background-color: red;
            color: black;
            border: 1px solid black;
            padding: 10px;
            margin: 5px;
        }

        .main {
            width: 200px;
            background-color: yellow;
            color: black;
            border: 1px solid black;
            padding: 10px;
            margin: 5px;
        }
    </style>
    @livewireStyles
</head>
<body>
    <center>
    @livewire('kotak1')
    {{$slot}}
    @livewire('kotak2')
    </center>

    @livewireScripts
</body>
</html>